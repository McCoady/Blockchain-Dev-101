// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;
import "@openzeppelin/contracts/access/Ownable.sol";
import "./Discoin.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract CoinRelease is Ownable {
    mapping(address => bool) public releaseParticipants;
    address[] internal participants;
    uint256 public noParticipants = 0;
    uint256 public releaseAmount;
    address public tokenAddress;

    constructor(uint256 _releaseAmount, address _tokenAddress) {
        releaseAmount = _releaseAmount;
        tokenAddress = _tokenAddress;
    }

    function joinDrop() public {
        require(!releaseParticipants[msg.sender], "Address already opted in.");
        require(block.timestamp <= 1625043900, "Coin release has ended.");
        releaseParticipants[msg.sender] = true;
        noParticipants += 1;
        IERC20(tokenAddress).transfer(msg.sender, releaseAmount);
    }
}
