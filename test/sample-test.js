const { assert } = require("chai");

describe("HHtest", function () {
  it("Should return true twice", async function () {
    const HHtest = await ethers.getContractFactory("HHtest");
    const test = await HHtest.deploy();
    await test.deployed();

    assert.equal(await test.x(), 0);

    await test.modifyx();

    assert.equal(await test.x(), 5);
  });
});