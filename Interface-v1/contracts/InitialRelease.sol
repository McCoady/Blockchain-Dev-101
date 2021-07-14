// SPDX-License-Identifier: MIT
pragma solidity 0.8.4;

import "@openzeppelin/contracts/access/Ownable.sol";
import "./BildIt.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract InitialRelease is Ownable {
    mapping(address => bool) public releaseParticipants;
    address[] internal participants;
    uint8 public noParticipants = 0;
    uint8 public releaseAmount;
    address public tokenAddress;
    uint64 public expiryDate = 1627770000;

    constructor(uint8 _releaseAmount, address _tokenAddress) {
        releaseAmount = _releaseAmount;
        tokenAddress = _tokenAddress;
    }

    function joinDrop() public {
        require(!releaseParticipants[msg.sender], "Address already opted in.");
        require(block.timestamp <= expiryDate, "Coin release has ended.");
        releaseParticipants[msg.sender] = true;
        noParticipants += 1;
        IERC20(tokenAddress).transfer(msg.sender, releaseAmount);
    }
}
