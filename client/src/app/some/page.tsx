"use client";
import { useAppKit, useAppKitAccount, useAppKitProvider, useAppKitState } from "@reown/appkit/react";
import {
  BrowserProvider,
  Contract,
  formatUnits,
  Eip1193Provider,
} from "ethers";
import { useEffect } from "react";

import React from "react";
import { mountAppKit } from "../hooks/reown";

const page = () => {
  return <ConnectButton />;
};
export default page;

function ConnectButton() {
  const staker = "0x3EF1942D11F301Ae553e09936e311A5869D5F37f";
  const user = "0x5Ea2a7AEdaa00F682f644Cefb9e5b14E6212A140";

  const abi = ["function balances(address) view returns (uint256)"];

  mountAppKit();
  const { open, close } = useAppKit();
  const { address, isConnected } = useAppKitAccount();
  const { walletProvider } = useAppKitProvider("eip155");
  // const { } = useAppKitState();

  async function getBalance() {
    if (!isConnected) throw Error("User disconnected");

    const ethersProvider = new BrowserProvider(
      walletProvider as Eip1193Provider
    );
    const signer = await ethersProvider.getSigner();
    // The Contract object
    const USDTContract = new Contract(staker, abi, signer);
    const USDTBalance = await USDTContract.balances(user);

    alert(formatUnits(USDTBalance, 18));
  }
  return (
    <div className="h-screen flex flex-col justify-center items-center ">
      <h1 className="">{address}</h1>
      <button onClick={() => open()} className="">
        Open Connect Modal
      </button>
      <button onClick={() => open({ view: "Networks" })} className="">
        Open Network Modal
      </button>
      {/* <button className="border" onClick={disconnect}>
        Disconnect
      </button> */}
      <button className="border" onClick={getBalance}>Get Balance</button>
      {/* <button onClick={() => open()}>Open Connect Modal</button>
      <button onClick={() => open({ view: 'Networks' })}>Open Network Modal</button> */}
    </div>
  );
}
