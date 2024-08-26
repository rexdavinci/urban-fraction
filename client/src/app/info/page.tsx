"use client";
import { useAssetStore } from "../store";
import { useRouter } from "next/navigation";
export default function Info() {
  const { watching } = useAssetStore();
  const router = useRouter()
  if(!watching) {
    return router.replace('/')
    
  } 
  return (
    <div className="mt-6 h-svh">
      <div className="mt-20">
        <img
          src={watching.image}
          alt="asset-photo"
          className="w-[85%] md:w-[55%] mx-auto rounded"
        />
        <p className="text-center font-semibold text-2xl mt-3">
          {watching.name}
        </p>

        <div className="flex justify-around flex-wrap w-[75%] mx-auto">
          <div className="text-center md:w-[20%] w-[40%] border border-black mt-5">
            <p className="">Total Worth</p>
            <p className="border bg-white text-lg font-semibold">
              {watching.worth}
            </p>
          </div>
          <div className="text-center md:w-[20%] border  w-[40%] border-black mt-5">
            <p className="">Fracts Generated</p>
            <p className="border bg-white text-lg font-semibold">
              {watching.units}
            </p>
          </div>
          <div className="text-center md:w-[20%] border  w-[40%] border-black mt-5">
            <p className="">Fracts Sold</p>
            <p className="border bg-white text-lg font-semibold">
              {watching.sold}
            </p>
          </div>
          <div className="text-center md:w-[20%] border  w-[40%] border-black mt-5">
            <p className="">Status</p>
            <p className="border bg-white text-lg font-semibold">
              {watching.sold !== watching.units ? 'OPEN' : 'CLOSED'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
