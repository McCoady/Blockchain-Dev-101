// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Discoin is ERC20, Ownable {
    constructor() ERC20("Discoin", "DSC") {}

    function decimals() public pure override returns (uint8) {
        return 0;
    }

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }
}
