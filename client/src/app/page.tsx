/* eslint-disable @next/next/no-img-element */
"use client";
// import { useAPI } from "./hooks/useAPI";
import Properties from "./components/Properties";
import { makeCurrencySpace } from "./constants";

export default function Home() {
  // const { assets } = useAPI();

  const assets = [] as any;

  return (
    <main className="mt-10 h-[650px]">
      <div className="bg-gradient-to-tl from-teal-500/20 to-50% to-white/20 w-svw">
        <div className="md:flex max-w-[1440px] px-4 h-full mx-auto items-center">
          <div className="flex-1 h-[500px] items-center flex justify-center flex-col">
            <p className="text-[48px] md:text-[56px] font-semibold md:leading-[3.5rem] leading-[2.8rem] md:tracking-wider text-center">
              Bringing Real Estate To The World
            </p>
            <div className="">
              <div className="mt-20 md:mt-10 mx-auto flex justify-between md:w-[350px] w-[380px]">
                <div className="flex w-[100px] flex-col justify-center items-center">
                  <p className="font-semibold text-2xl">Assets</p>
                  <p className="font-semibold text-lg">
                    {assets.length}
                  </p>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <p className="font-semibold text-2xl">TVL</p>
                  <p className="font-semibold text-lg text-right">
                    {makeCurrencySpace(
                      assets
                        .reduce(
                          (acc: any, curr: any) => acc + Number(curr.worth),
                          0
                        )
                        .toLocaleString("en-US", {
                          style: "currency",
                          currency: "CAD",
                        })
                    )}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 relative h-[550px] hidden md:block">
            <div className="flex justify-center h-full w-full items-center">
              <div className="max-h-[450px] max-w-[450px] w-[500px] h-[500px] rounded-full bg-white bg-cover bg-[url('https://images.pexels.com/photos/1481105/pexels-photo-1481105.jpeg')]"></div>
            </div>
          </div>
        </div>
      </div>
      {/* <Properties /> */}
    </main>
  );
}
