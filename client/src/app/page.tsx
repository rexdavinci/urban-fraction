/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAssetStore } from "./store";
import { useAPI } from "./hooks/useAPI";
import dynamic from "next/dynamic";
import { assets } from "./constants";

const BuyModal = dynamic(() => import("./components/BuyModal"));
const CreditCard = dynamic(() => import("./components/CreditCard"));

export default function Home() {
  const [showModal, setShowModal] = useState({ open: false, action: "nil" });
  const [data, setData] = useState<any>({ units: 1 });
  const { setWatching, watching, auth } = useAssetStore();
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
    <main className="">
      {showModal.open && showModal.action === "buy" ? (
        <BuyModal setData={setData} data={data} setShowModal={setShowModal} />
      ) : showModal.action === "card" ? (
        <CreditCard buy={buy} setShowModal={setShowModal} setData={setData} />
      ) : null}
      <div className="md:h-svh bg-gradient-to-tl from-teal-500/20 to-50% to-white/20 w-svw">
        <div className="md:flex max-w-[1440px] px-4 h-full mx-auto items-center">
          <div className="flex-1 h-[500px] items-center flex justify-center flex-col">
            <p className="text-[48px] md:text-[56px] font-semibold md:leading-[3.5rem] leading-[2.8rem] md:tracking-wider text-center">
              Get You Own Fract Units From Across The Country
            </p>
            <div className="">
              <div className="mt-20 md:mt-10 mx-auto flex justify-between md:w-[350px] w-[380px]">
                <div className="flex w-[100px] flex-col justify-center items-center">
                  <p className="font-semibold text-2xl">Assets</p>
                  <p className="font-semibold text-lg">
                    {assets.assets.length}
                  </p>
                </div>
                <div className="flex w-[100px] flex-col justify-center items-center">
                  <p className="font-semibold text-2xl">TVL</p>
                  <p className="font-semibold text-lg">
                    $
                    {assets.assets
                      .reduce(
                        (acc: any, curr: any) => acc + Number(curr.worth),
                        0
                      )
                      .toLocaleString("en-US")}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 relative h-[500px] hidden md:block">
            <div className="max-h-[500px] max-w-[500px] w-[500px] h-[500px] rounded-full bg-white absolute top-0 bg-cover bg-[url('https://images.pexels.com/photos/1481105/pexels-photo-1481105.jpeg')]"></div>
          </div>
        </div>
      </div>
      <div className="h-[500px] pt-8">
        <div className="w-[80%] md:w-[75%] flex justify-between flex-wrap mx-auto">
          {assets.assets.map((d: any) => {
            const minBuyCost = (d.unit_cost * d.minimum_buy).toFixed(4);
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
                      <span className="font-semibold">Worth</span>: $
                      {d.worth.toLocaleString("en-US")}
                    </p>
                  </div>
                  <div className="space-y-1">
                    <p>
                      <span className="font-semibold">Fract Cost</span>: $
                      {d.unit_cost.toFixed(2).toLocaleString("en-US")} / fract
                    </p>
                    <p>
                      <span className="font-semibold">Minimum Buy</span>:{" "}
                      {d.minimum_buy} units - ${minBuyCost}
                    </p>
                    <p>
                      <span className="font-semibold">Total Fracts</span>:{" "}
                      {d.units} units
                    </p>
                    <p>
                      <span className="font-semibold">Total / Sold Fracts</span>
                      : {d.units} / {d.sold}
                    </p>
                  </div>
                </div>
                <div className="bottom-0 absolute mb-3 flex justify-between w-[95%] mx-auto">
                  <button
                    onClick={() => {
                      setWatching(d);
                      setShowModal({ open: true, action: "buy" });
                    }}
                    className="w-[120px] border px-4 rounded hover:bg-gradient-to-bl hover:from-teal-500/20 via-50% hover:to-blue-500 hover:text-white"
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
    </main>
  );
}
