// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract EventTicket is ERC721, Ownable {
    uint256 public ticketCounter;
    uint256 public resalePriceCap; // Maximum resale price percentage

    struct Ticket {
        uint256 price;
        bool resellable;
    }

    mapping(uint256 => Ticket) public tickets;  // Ticket details

    constructor(string memory name, string memory symbol) ERC721(name, symbol) {
        ticketCounter = 0;
        resalePriceCap = 110; // Cap resale price to 110% of original
    }

    // Mint new tickets (by event organizer only)
    function mintTicket(address to, uint256 price) external onlyOwner {
        ticketCounter++;
        _mint(to, ticketCounter);
        tickets[ticketCounter] = Ticket(price, true);
    }

    // Function to return the ticket (centralized return)
    function returnTicket(uint256 ticketId) external {
        require(ownerOf(ticketId) == msg.sender, "Not the owner");
        require(tickets[ticketId].resellable == true, "Ticket not resellable");

        _transfer(msg.sender, owner(), ticketId);  // Transfer to organizer
        payable(msg.sender).transfer(tickets[ticketId].price);  // Refund original price
    }

    // Function to resell ticket (controlled by organizer)
    function resellTicket(uint256 ticketId, uint256 resalePrice) external onlyOwner {
        require(resalePrice <= tickets[ticketId].price * resalePriceCap / 100, "Exceeds resale price cap");
        
        _transfer(owner(), msg.sender, ticketId);  // Transfer ticket to new buyer
        payable(owner()).transfer(resalePrice);    // Organizers get the payment
    }
}
