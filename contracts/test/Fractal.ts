import {
  loadFixture,
} from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { expect } from "chai";
import hre from "hardhat";

const home1 = "http://<our api>/1.json"

describe("Fract Homes", function () {
  // We define a fixture to reuse the same setup in every test.
  // We use loadFixture to run this setup once, snapshot that state,
  // and reset Hardhat Network to that snapshot in every test.
  async function fixture() {

    // Contracts are deployed using the first signer/account by default
    const [owner, alice, bob] = await hre.ethers.getSigners();

    const Fract = await hre.ethers.getContractFactory("FractHome");
    const fract = await Fract.deploy(owner.address)

    const Payment = await hre.ethers.getContractFactory("Payment");
    const payment = await Payment.deploy(await fract.getAddress(), owner.address)

    const MockToken = await hre.ethers.getContractFactory("MockToken");
    const mockToken = await MockToken.deploy()

    const _home = await fract.home();
    const _homeUnits = await fract.homeUnits();

    const home = await hre.ethers.getContractAt("Home", _home);
    const homeUnits = await hre.ethers.getContractAt("HomeUnits", _homeUnits);


    return {
      fract,
      owner,
      alice,
      bob,
      home,
      homeUnits,
      payment,
      mockToken
    };
  }


  describe("Deployment", function () {
    it("Should set the right home and homeUnits", async function () {

      const { homeUnits } = await loadFixture(fixture)

      expect(await homeUnits.name()).eq('Fract Home Units');
      expect(await homeUnits.symbol()).eq('FractHomeUnits');
    });

    it("should allow creating a new Home", async function () {
      const { fract, owner, home, homeUnits } = await loadFixture(fixture);

      const unitsForSale = 304
      await fract.grantRole(await fract.ADMIN(), owner.address)
      await fract.generateHome(unitsForSale, hre.ethers.parseEther("0.01"), home1)
      const fractAddress = await fract.getAddress()

      expect(await home.balanceOf(fractAddress)).eq(1)
      expect(await home.tokenURI(1)).eq(home1)
      expect(await homeUnits.balanceOf(fractAddress, 1)).eq(unitsForSale)
    });

    describe("Payment", async function () {
      async function initDeploy() {
        const { fract, payment, mockToken, owner, alice, bob } = await loadFixture(fixture);

        const payAddress = await payment.getAddress()
        const tokenAddress = await mockToken.getAddress()

        const unitsForSale = 789;
        await fract.grantRole(await fract.ADMIN(), owner.address)
        await fract.generateHome(unitsForSale, hre.ethers.parseEther("500"), home1)

        await mockToken.mint(owner.address, hre.ethers.parseEther("400000"))
        await mockToken.mint(alice.address, hre.ethers.parseEther("3200"))
        await mockToken.mint(bob.address, hre.ethers.parseEther("1400"))

        return {
          payAddress,
          tokenAddress,
          mockToken,
          fract,
          payment,
          owner,
          alice,
          bob
        }
      }

      it("should be able to buy units", async function () {
        const { payAddress, payment, tokenAddress, fract, mockToken, owner } = await loadFixture(initDeploy);
        expect(await payment.acceptedTokens(tokenAddress)).eq(false)
        await payment.updateTokenAccepted(tokenAddress, true);
        expect(await payment.acceptedTokens(tokenAddress)).eq(true)
        await mockToken.approve(await payment.getAddress(), hre.ethers.MaxUint256)
        await payment.makePayment(tokenAddress, 1, 80);


        // send from server
        // await fract.buyUnits()
        const record = await payment.txRecords(0)
        expect(record.buyer).eq(owner.address)
        expect(record.homeId).eq(1)
        expect(record.units).eq(80)
        expect(record.fulfilled).eq(false)

        await fract.buyUnits(record.buyer, record.homeId, record.units)
        console.log( (await payment.txRecords(0)).fulfilled)
      })
    })
  })

})