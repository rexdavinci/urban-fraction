/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAssetStore } from "./store";
import { useAPI } from "./hooks/useAPI";
import dynamic from "next/dynamic";

const Modal = dynamic(() => import("./components/Modal"));
export default function Home() {
  const [showModal, setModal] = useState({ open: false, action: "nil" });
  const [data, setData] = useState<any>({ units: 1 });
  const { assets, setWatching, watching } = useAssetStore();
  const router = useRouter();

  useAPI();

  return (
    <main className="">
      {showModal.open && showModal.action === "buy" ? (
        <Modal>
          <div className="w-full h-full flex flex-col items-center justify-center">
            <div className="bg-white/90 w-[400px] h-[450px] rounded-lg relative">
              <div className="w-[80%] mx-auto">
                <p className="py-2 text-[20px] text-center">
                  <span className="font-semibold">{watching.name}</span>
                  <small className="block">{watching.location}</small>
                </p>
                <img src={watching.image} alt="" className="rounded" />

                <div>
                  <form>
                    <div className="flex items-center justify-center my-3">
                      <label className="mr-2">Units</label>
                      <input
                        id="units"
                        onChange={(e) =>
                          setData({ [e.target.id]: e.target.value })
                        }
                        min={watching.minimum_buy}
                        defaultValue={watching.unit_cost}
                        className="border items-center px-2 text-sm py-1 rounded"
                        type="number"
                        placeholder="how much units?"
                      />
                      <small className="ml-2">
                        $
                        {(
                          Number(watching.unit_cost) * Number(data.units)
                        ).toFixed(4)}
                      </small>
                    </div>
                  </form>
                </div>
                {/* <p className="text-center mt-4">Payment Options</p> */}
                <div className="grid gap-2 grid-cols-2 grid-flow-col">
                  <button
                    onClick={() => setModal({ action: "card", open: true })}
                    className="bg-red-700 text-white rounded py-1 h-[65px]"
                  >
                    Pay With Card
                  </button>
                  <button className="bg-blue-700 text-white rounded py-1">
                    Pay With Crypto
                  </button>
                </div>
              </div>
              <div className="absolute bottom-0 w-full px-4 flex justify-between mb-2">
                <button
                  onClick={() => setModal({ action: "nil", open: false })}
                  className="font-semibold bg-blue-500 text-white w-[120px] hover:bg-blue-500/90 rounded py-1"
                >
                  Cancel
                </button>
                <button className="font-semibold bg-blue-500 text-white w-[120px] hover:bg-blue-500/90 rounded py-1">
                  Buy
                </button>
              </div>
            </div>
          </div>
        </Modal>
      ) : showModal.action === "card" ? (
        <Modal>
          <div className="w-full h-full flex flex-col items-center justify-center">
            <div className="bg-white/90 w-[400px] h-[450px] rounded-lg relative">
              <div className="p-5">
                <img
                  src="https://randommer.io/images/cc/visa.png"
                  alt="visa-logo"
                  className="mx-auto"
                />
                <div className="flex justify-around">
                  <div className="text-center w-[45%] border border-black mt-5">
                    <p className="">Name on card</p>
                    <p className="border bg-white text-sm font-semibold">Avry Pavlik</p>
                  </div>
                  <div className="text-center w-[45%] border border-black mt-5">
                    <p className="">PIN</p>
                    <p className="border bg-white text-sm font-semibold">7020</p>
                  </div>
                </div>
                <div className="flex justify-around">
                  <div className="text-center w-[45%] border border-black mt-5">
                    <p className="">Expiration</p>
                    <p className="border bg-white text-sm font-semibold">6/27</p>
                  </div>
                  <div className="text-center w-[45%] border border-black mt-5">
                    <p className="">CCV</p>
                    <p className="border bg-white text-sm font-semibold">810</p>
                  </div>
                </div>
                <div className="flex justify-around">
                <div className="text-center w-[45%] border border-black mt-5">
                    <p className="">Car Number</p>
                    <p className="border bg-white text-sm font-semibold">4756232599884126</p>
                  </div>
                </div>
                <div></div>
              </div>
              <div className="absolute bottom-0 w-full px-4 flex justify-between mb-2">
                <button
                  onClick={() => setModal({ action: "nil", open: false })}
                  className="font-semibold bg-blue-500 text-white w-[120px] hover:bg-blue-500/90 rounded py-1"
                >
                  Cancel
                </button>
                <button onClick={() => setModal({ open: false, action: 'nil' })} className="font-semibold bg-blue-500 text-white w-[120px] hover:bg-blue-500/90 rounded py-1">
                  Confirm
                </button>
              </div>
            </div>
          </div>
        </Modal>
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
                  <p className="font-semibold text-lg">{assets.length}</p>
                </div>
                <div className="flex w-[100px] flex-col justify-center items-center">
                  <p className="font-semibold text-2xl">TVL</p>
                  <p className="font-semibold text-lg">
                    $
                    {assets
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
        <div className="w-[80%] mx-auto grid md:grid-cols-3 gap-10">
          {assets.map((d: any) => {
            const minBuyCost = (d.unit_cost * d.minimum_buy).toFixed(4);
            return (
              <div
                key={d.id}
                className="p-2 bg-white rounded-lg h-[450px] relative w-[320px]"
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
                      setModal({ open: true, action: "buy" });
                      // router.push("/info");
                    }}
                    className="w-[120px] border px-4 rounded hover:bg-gradient-to-bl hover:from-teal-500/20 via-50% hover:to-blue-500 hover:text-white"
                  >
                    Buy
                  </button>
                  <button className="w-[120px] border px-4 rounded hover:bg-gradient-to-tr hover:from-teal-500/20 via-50% hover:to-blue-500 hover:text-white">
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
