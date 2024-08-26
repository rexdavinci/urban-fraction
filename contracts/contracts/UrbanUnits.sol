// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/access/AccessControl.sol";
import "@openzeppelin/contracts/token/ERC721/utils/ERC721Holder.sol";
import "@openzeppelin/contracts/token/ERC1155/utils/ERC1155Holder.sol";
import "./Home.sol";
import "./HomeUnits.sol";

contract UrbanUnits is AccessControl, ERC721Holder, ERC1155Holder {
    event Fractionized(uint256 home, uint256 units, uint256 costPerUnit);

    event MultiFractionized(
        uint256[] homes,
        uint256[] units,
        uint256[] costPerUnits
    );

    event Tycoon(uint256 home, uint256 units);
    event MultiTycoon(uint256[] homes, uint256[] units);
    event Redeem(uint256 home, uint256 units);

    enum Status {
        UNLISTED,
        LISTED
    }
    Home public immutable home;
    HomeUnits public immutable homeUnits;

    struct HomeUnit {
        uint256 totalQty;
        uint256 unitCost;
        uint256 sold;
        Status status;
    }

    mapping(uint256 => HomeUnit) private _homes;
    mapping(address => mapping(uint256 => uint256)) private ownedUnits;

    bytes32 public constant ADMIN = keccak256("ADMIN");

    address public company; // a multisig

    constructor(
        address _company // a mutlisig
    ) {
        company = _company;
        _grantRole(DEFAULT_ADMIN_ROLE, _company);
        _setRoleAdmin(ADMIN, DEFAULT_ADMIN_ROLE);
        home = new Home();
        homeUnits = new HomeUnits();
    }

    function generateHome(
        uint256 totalRooms,
        uint256 costPerUnit,
        string memory uri
    ) external onlyRole(ADMIN) {
        uint256 homeId = home.makeHome(address(this), uri);
        homeUnits.makeUnit(address(this), homeId, totalRooms, "");
        _homes[homeId] = HomeUnit(totalRooms, costPerUnit, 0, Status.LISTED);
        emit Fractionized(homeId, totalRooms, costPerUnit);
    }

    function generateHomes(
        uint256[] memory totalRooms,
        uint256[] memory costPerUnit,
        string[] memory uri
    ) external onlyRole(ADMIN) {
        uint256[] memory homeIds;
        for (uint256 h = 0; h < totalRooms.length; h++) {
            uint256 homeId = home.makeHome(address(this), uri[h]);
            homeUnits.makeUnit(address(this), homeId, totalRooms[h], "");
            _homes[homeId] = HomeUnit(
                totalRooms[h],
                costPerUnit[h],
                0,
                Status.LISTED
            );
            homeIds[h] = homeId;
        }
        emit MultiFractionized(homeIds, totalRooms, costPerUnit);
    }

    function buyMultiUnits(
        address buyer,
        uint256[] memory homeIds,
        uint256[] memory units
    ) external {
        require(homeIds.length == units.length, "Unequal Arrays");
        homeUnits.makeUnits(buyer, homeIds, units, "");

        for (uint256 h = 0; h < homeIds.length; h++) {
            ownedUnits[buyer][homeIds[h]] += units[h];
            _homes[homeIds[h]].sold += units[h];
        }

        emit MultiTycoon(homeIds, units);
    }

    function buyUnits(
        address buyer,
        uint256 homeId,
        uint256 units
    ) external onlyRole(ADMIN) {
        homeUnits.safeTransferFrom(address(this), buyer, homeId, units, "");
        unchecked {
            ownedUnits[buyer][homeId] += units;
            _homes[homeId].sold += units;
        }
        emit Tycoon(homeId, units);
    }

    /** User calles from frontend and request is fulfilled by server to transfer funds */
    function redeem(uint256 homeId, uint256 units) external onlyRole(ADMIN) {
        address caller = msg.sender;
        require(ownedUnits[caller][homeId] >= units, "Insufficient Units");
        homeUnits.burn(caller, homeId, units);
        unchecked {
            ownedUnits[caller][homeId] -= units;
            _homes[homeId].sold -= units;
        }
        emit Redeem(homeId, units);
    }

    function delist(uint256 homeId) external onlyRole(ADMIN) {
        _homes[homeId].status = Status.UNLISTED;
    }

    function viewHome(uint256 homeId) public view returns (HomeUnit memory) {
        return _homes[homeId];
    }

    function supportsInterface(
        bytes4 interfaceId
    ) public view override(AccessControl, ERC1155Holder) returns (bool) {
        return super.supportsInterface(interfaceId);
    }
}
