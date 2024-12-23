//SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

contract inbox {
    
    string public message;

     function Inbox(string memory initalmessage) public {
        message=initalmessage;
     }

    function setmessage(string memory newmessage) public{
        message= newmessage;
    }
      
    function getMessage() view public returns (string memory){
        return message;
        }
      
}