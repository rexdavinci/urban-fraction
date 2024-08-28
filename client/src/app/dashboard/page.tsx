/* eslint-disable @next/next/no-img-element */
"use client";

import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import { useState } from "react";
import { useAssetStore } from "../store";
import { useAPI } from "../hooks/useAPI";
import { assets } from "../constants";

const Modal = dynamic(() => import("@/app/components/Modal"));

export default function Dashboard() {
  const { auth, setWatching } = useAssetStore();
  const [showModal, setShowModal] = useState({ open: true, action: "nil" });
  const [data, setData] = useState<any>({});
  const router = useRouter();
  const { updateProfile } = useAPI();

  if (!auth) return router.replace("/");

  const updateAccount = () => {
    updateProfile(data.username, data.crypto);
    setData({});
    setShowModal({ open: false, action: "nil" });
  };

  const getAsset = (asset: number) => {
    return assets.find(asset);
  };

  console.log(auth.bought)

  return (
    <div className="md:p-20 py-20 px-5">
      {showModal.open &&
        (showModal.action === "update" ? (
          <Modal>
            <div className="bg-white/90 w-[400px] h-[250px] rounded-lg relative">
              <div className="w-[80%] mx-auto">
                <p className="py-2 text-[20px] text-center">
                  {/* <span className="font-semibold">{watching.name}</span>
                  <small className="block">{watching.location} {watching.units === watching.sold && <span className="animate-pulse text-red-500 font-semibold">(SOLD OUT)</span>}</small> */}
                </p>
                {/* <img src={watching.image} alt="" className="rounded" /> */}
                <div>
                  <div className="flex flex-col my-5">
                    <label className="mr-2">Crypto Address</label>
                    <input
                      id="crypto"
                      onChange={(e) =>
                        setData({ ...data, [e.target.id]: e.target.value })
                      }
                      className="border items-center px-2 text-sm py-2 rounded-lg"
                      placeholder="Update Wallet Address"
                    />
                  </div>
                  <div className="flex flex-col my-5">
                    <label className="mr-2">Username</label>
                    <input
                      id="username"
                      onChange={(e) =>
                        setData({ ...data, [e.target.id]: e.target.value })
                      }
                      className="border items-center px-2 text-sm py-2 rounded-lg"
                      placeholder="Change Username"
                    />
                  </div>
                </div>
              </div>
              <div className="absolute bottom-0 w-full px-4 flex justify-between mb-5">
                <button
                  onClick={() => {
                    setShowModal({ action: "nil", open: false });
                  }}
                  className="font-semibold bg-blue-500 text-white w-[120px] hover:bg-blue-500/90 rounded py-1"
                >
                  Cancel
                </button>
                <button
                  onClick={updateAccount}
                  className="font-semibold bg-blue-500 text-white w-[120px] hover:bg-blue-500/90 rounded py-1"
                >
                  Confirm
                </button>
              </div>
            </div>
          </Modal>
        ) : null)}
      <div className="flex flex-col md:flex-row items-center">
        <div className="flex items-center">
          <div className="md:w-[80px] md:h-[80px] h-[50px] w-[50px] bg-teal-500 rounded-full"></div>
          <div className="ml-4">
            <p>
              <span className="font-semibold">Username: </span>
              {auth.username}{" "}
            </p>
            <p>
              <span className="font-semibold">Crypto Address: </span>
              {!auth.crypto ? "<not set>" : auth.crypto}
            </p>
            <button
              onClick={() => {
                setShowModal({ open: true, action: "update" });
              }}
              className="underline text-xs"
            >
              Update
            </button>
          </div>
        </div>
        <div className="md:ml-20 mt-5 md:mt-0">
          <p>
            Current Balance:{" "}
            <span className="font-semibold">CA$ {auth.balance} </span>
            <button
              onClick={() => {
                setShowModal({ open: true, action: "update" });
              }}
              className="underline text-xs ml-2"
            >
              Top up
            </button>
            <button
              onClick={() => {
                setShowModal({ open: true, action: "update" });
              }}
              className="underline text-xs ml-2"
            >
              Withdraw
            </button>
          </p>
        </div>
      </div>
      <div className="mx-auto w-[90%] md:w-full">
        {auth.bought.length > 0 &&
          auth.bought.map((b) => {
            const asset = getAsset(b.asset);
            return (
              <div key={b.time}>
                <div className="p-2 bg-white rounded-lg h-[450px] relative w-[320px] m-5">
                <p className="py-2 text-[20px] text-center">
                  <span className="font-semibold">{asset!.name}</span>
                  <small className="block">
                    {asset!.location}{" "}
                  </small>
                </p>
                  <img
                    src={asset!.image}
                    alt="image"
                    className="rounded-xl w-[150px] h-[150px] mx-auto"
                  />
                  <div className="px-3 mt-3">
                    <div className="my-1">
                      <p>
                        <span className="font-semibold">Worth</span>: $
                        {asset!.worth.toLocaleString("en-US")}
                      </p>
                    </div>
                    <div className="space-y-1">
                      <p>
                        <span className="font-semibold">Fract Cost</span>: $
                        {asset!.unit_cost.toFixed(2)} / fract
                      </p>
                      <p>
                        <span className="font-semibold">Minimum Buy</span>:{" "}
                        {asset!.minimum_buy} units
                      </p>
                      <p>
                        <span className="font-semibold">Total Fracts</span>:{" "}
                        {asset!.units} units
                      </p>
                      <p>
                        <span className="font-semibold">
                          Currently Owned
                        </span>
                        : {b.units} ({b.units/asset!.units})
                      </p>
                    </div>
                  </div>
                  <div className="bottom-0 absolute mb-3 flex justify-between w-[95%] mx-auto">
                  <button
                    onClick={() => {
                      setWatching(asset);
                      setShowModal({ open: true, action: "buy" });
                    }}
                    className="text-sm w-[80px] border px-2 rounded hover:bg-gradient-to-bl hover:from-teal-500/20 via-50% hover:to-blue-500 hover:text-white"
                  >
                    Buy More
                  </button>
                  <button
                    onClick={() => {
                      setWatching(asset);
                      setShowModal({ open: true, action: "redeem" });
                    }}
                    className="text-sm w-[80px] border px-2 rounded hover:bg-gradient-to-bl hover:from-teal-500/20 via-50% hover:to-blue-500 hover:text-white"
                  >
                    Redeem
                  </button>
                  <button
                    onClick={() => {
                      setWatching(asset);
                      router.push("/info");
                    }}
                    className="text-sm w-[80px] border px-2 rounded hover:bg-gradient-to-tr hover:from-teal-500/20 via-50% hover:to-blue-500 hover:text-white"
                  >
                    More Info
                  </button>
                </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
