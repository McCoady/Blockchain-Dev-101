// SPDX-License-Identifier: MIT
pragma solidity 0.8.4;

import "@openzeppelin/contracts/access/Ownable.sol";
import "./Bildit.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract InitialRelease is Ownable {
    /*
     *Smart contract for people to opt in to an airdrop for 200BILD.
     *Contract checks address has not already claimed their airdrop.
     *Contract allows users to attach a username to their address for use in a future leaderboard.
     */

    //Checks if an address has joined the drop already
    mapping(address => bool) public releaseParticipants;

    //Maps each address to their set username
    mapping(address => string) public usernames;

    //Array of addresses who've participated
    address[] internal participants;

    //Number of total participants
    uint8 public noParticipants = 0;

    //Number of tokens the drop will give
    uint8 public releaseAmount;

    //Address of the ERC20 token
    address public tokenAddress;

    constructor(uint8 _releaseAmount, address _tokenAddress) {
        //Set the release amount of the contract.
        releaseAmount = _releaseAmount;
        //Set the ERC20 token address the drop is linked to.
        tokenAddress = _tokenAddress;
    }

    function joinDrop(string memory _username) public {
        //check this address hasn't already joined the drop
        require(!releaseParticipants[msg.sender], "Address already opted in.");

        //set the address to true (can't join drop again)
        releaseParticipants[msg.sender] = true;

        //link given username to address
        usernames[msg.sender] = _username;

        //add 1 to the total participants
        noParticipants += 1;

        //send the ERC20 tokens to the address
        IERC20(tokenAddress).transfer(msg.sender, releaseAmount);
    }
}
