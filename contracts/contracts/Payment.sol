// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

interface IFractional {
    function viewHome(
        uint256 homeId
    )
        external
        returns (
            uint256 totalQty,
            uint256 unitCost,
            uint256 sold,
            uint256 status
        );
}

contract Payment is Ownable {
    IFractional public fractional;
    event Pay(
        uint256 txId,
        address buyer,
        uint256 homeId,
        uint256 units,
        uint256 amount
    );

    struct Tx {
        address buyer;
        uint256 id;
        uint256 homeId;
        uint256 units;
        bool fulfilled;
    }

    Tx[] private paidTxs;

    constructor(IFractional _fractional, address company) Ownable(company) {
        fractional = _fractional;
    }

    mapping(address => bool) public acceptedTokens;

    function makePayment(
        IERC20 payToken,
        uint256 homeId,
        uint256 units
    ) external {
        address buyer = msg.sender;
        require(units != 0, "Invalid Units");
        require(acceptedTokens[address(payToken)], "Unsupported Token");
        (
            uint256 totalQty,
            uint256 unitCost,
            uint256 sold,
            uint256 status
        ) = fractional.viewHome(homeId);
        require(status != 0, "Unlisted Asset");
        uint256 available = totalQty - sold;
        require(available >= units, "Too much units requested");
        uint256 buyingCost = (units * unitCost);
        require(
            payToken.transferFrom(buyer, address(this), buyingCost),
            "Payment Error"
        );
        uint256 txId = paidTxs.length;
        Tx memory newTx = Tx(buyer, txId, homeId, units, false);
        paidTxs.push(newTx);
        emit Pay(txId, buyer, homeId, units, buyingCost);
    }

    function fulfillTx(uint256 txId) external onlyOwner {
        paidTxs[txId].fulfilled = true;
    }

    function updateTokenAccepted(
        address token,
        bool status
    ) external onlyOwner {
        acceptedTokens[token] = status;
    }

    function txRecords(uint256 txId) public view returns (Tx memory) {
        return paidTxs[txId];
    }

    function withdraw(
        IERC20 token,
        address to,
        uint256 amount
    ) external onlyOwner {
        require(token.transfer(to, amount), "Withdraw Failed");
    }
}
