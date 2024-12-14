// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Ticketing {
    struct Ticket {
        string ticketId;
        address owner;
        uint price;
        bool isResellable;
    }

    mapping(string => Ticket) public tickets;

    function createTicket(string memory _ticketId, uint _price, bool _isResellable) public {
        tickets[_ticketId] = Ticket(_ticketId, msg.sender, _price, _isResellable);
    }

    function transferTicket(string memory _ticketId, address _newOwner) public {
        require(tickets[_ticketId].owner == msg.sender, "You are not the owner");
        tickets[_ticketId].owner = _newOwner;
    }
}
