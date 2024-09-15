/* eslint-disable @next/next/no-img-element */
"use client";
import { useState, memo } from "react";
import { useRouter } from "next/navigation";
import { useAssetStore } from "@/app/store";
import { useAPI } from "@/app/hooks/useAPI";
import BuyModal from "./BuyModal";
import CreditCard from "./CreditCard";
import { makeCurrencySpace } from "../constants";

function Properties() {
  const [showModal, setShowModal] = useState({ open: false, action: "nil" });
  const { setWatching, watching, auth, assets } = useAssetStore();
  const [data, setData] = useState<any>({ units: watching?.minimum_buy });
  const { buyAsset } = useAPI();
  const router = useRouter();

  const buy = () => {
    if (!auth) return alert("You must log in first");
    if (Number(data.units) !== 0) {
      buyAsset(watching.id, Number(data.units));
      setShowModal({ open: false, action: "nil" });
    }
  };

  return (
    <div className="h-[550px] pt-5">
      {showModal.open ? (
        showModal.action === "buy" ? (
          <BuyModal
            setData={setData}
            data={data}
            setShowModal={setShowModal}
            // watching={watching}
          />
        ) : showModal.action === "card" ? (
          <CreditCard buy={buy} setShowModal={setShowModal} setData={setData} />
        ) : null
      ) : null}

      <div className="w-[80%] md:w-[75%] flex justify-between flex-wrap mx-auto">
        {assets.map((d: any) => {
          const minBuyCost = (d.unit_cost * d.minimum_buy).toLocaleString(
            "en-US",
            { style: "currency", currency: "CAD" }
          );
          return (
            <div
              key={d.id}
              className="p-2 bg-white rounded-lg h-[450px] relative w-[320px] m-5"
            >
              <img src={d.image} alt="image" className="rounded-xl" />
              <div className="mt-5 text-[14px]">
                <p className="my-2 font-bold text-xl">{d.name}</p>
                <p className="">{d.location}</p>
                <div className="my-1">
                  <p>
                    <span className="font-semibold">Worth</span>:{" "}
                    {makeCurrencySpace(
                      d.worth.toLocaleString("en-US", {
                        style: "currency",
                        currency: "CAD",
                      })
                    )}
                  </p>
                </div>
                <div className="space-y-1">
                  <p>
                    <span className="font-semibold">Fract Cost</span>:{" "}
                    {makeCurrencySpace(
                      d.unit_cost.toLocaleString("en-US", {
                        style: "currency",
                        currency: "CAD",
                      })
                    )}{" "}
                    / fract
                  </p>
                  <p>
                    <span className="font-semibold">Minimum Buy</span>:{" "}
                    {d.minimum_buy} units - {makeCurrencySpace(minBuyCost)}
                  </p>
                  <p>
                    <span className="font-semibold">Total Fracts</span>:{" "}
                    {d.units} units
                  </p>
                  <p>
                    <span className="font-semibold">Total / Sold Fracts</span>:{" "}
                    {d.units} / {d.sold}
                  </p>
                </div>
              </div>
              <div className="bottom-0 absolute mb-3 flex justify-between w-[95%] mx-auto">
                <button
                  disabled={!auth}
                  onClick={() => {
                    setWatching(d);
                    setShowModal({ open: true, action: "buy" });
                  }}
                  className={`${
                    !auth
                      ? "hover:bg-gray-600 hover:text-white"
                      : "hover:bg-gradient-to-bl hover:from-teal-500/20 via-50% hover:to-blue-500 hover:text-white"
                  } w-[120px] border px-4 rounded`}
                >
                  Buy
                </button>
                <button
                  onClick={() => {
                    setWatching(d);
                    router.push("/info");
                  }}
                  className="w-[120px] border px-4 rounded hover:bg-gradient-to-tr hover:from-teal-500/20 via-50% hover:to-blue-500 hover:text-white"
                >
                  More Info
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Properties;
