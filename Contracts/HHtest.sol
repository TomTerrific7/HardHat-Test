//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";


contract HHtest {
  uint public x;

  constructor() {
    x = 0;
  }

  function modifyx() external {
    x = x + 5;
  }
}

