// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC1155/extensions/ERC1155Burnable.sol";
import "@openzeppelin/contracts/token/ERC1155/extensions/ERC1155Supply.sol";

contract HomeUnits is ERC1155, Ownable, ERC1155Burnable, ERC1155Supply {
    string private constant _NAME = "Fract Home Units";
    string private constant _SYM = "FH";
    mapping(uint => string) private _uris;

    constructor() ERC1155("") Ownable(msg.sender) {}

    function setURI(uint256 tokenId, string memory newUri) public onlyOwner {
        _uris[tokenId] = newUri;
    }

    function uri(
        uint256 tokenId
    ) public view virtual override returns (string memory) {
        return _uris[tokenId];
    }

    function makeUnits(
        address to,
        uint256[] memory homeIds,
        uint256[] memory units,
        bytes memory data
    ) public onlyOwner {
        _mintBatch(to, homeIds, units, data);
    }

    function makeUnit(
        address to,
        uint256 homeId,
        uint256 amount,
        bytes memory data
    ) public onlyOwner {
        _mint(to, homeId, amount, data);
    }

    function _update(
        address from,
        address to,
        uint256[] memory ids,
        uint256[] memory values
    ) internal override(ERC1155, ERC1155Supply) {
        super._update(from, to, ids, values);
    }

    function name() public pure returns (string memory) {
        return _NAME;
    }

    function symbol() public pure returns (string memory) {
        return _SYM;
    }
}
