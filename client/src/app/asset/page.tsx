"use client";
import { useState } from "react";
import { useAPI } from "../hooks/useAPI";
import { useRouter } from "next/navigation";
import { useAssetStore } from "../store";
import { assets } from "../constants";

export default function Asset() {
  const [data, setData] = useState<{ [x: string]: string }>({});
  const router = useRouter();
  const { addAsset } = useAPI();
  const {setAssets} = useAssetStore()
  const createAsset = (e: any) => {
    e.preventDefault();
    const asset = addAsset(data);
    assets.add(asset)
    router.push('/')
  };


  const inputs = [
    "name",
    "location",
    "worth",
    "units",
    "unit_cost",
    "minimum_buy",
    "monthly_rent",
  ];

  const onChange = (value: string, name: string) =>
    setData({ ...data, [name]: value });
  return (
    <div className="h-svh flex flex-col items-center justify-center">
      <div className="text-sm md:w-1/3 w-[70%]">
        <p className="text-center text-xl mb-3">New Asset</p>
        <form onSubmit={createAsset} className="space-y-3">
          {inputs.map((i) => (
            <div key={i} className="flex justify-between items-center">
              <label className="capitalize">{i.replace("_", " ")}:</label>
              <input
                id={i}
                onChange={(e) => onChange(e.target.value, e.target.id)}
                className="border border-blue-800 px-2 rounded py-[3px]"
              />
            </div>
          ))}
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="bg-green-900 text-white w-[120px] rounded py-1 mx-auto"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

// {
//   id: 2,
//   address: '30313 Marcelo Inlet',
//   cost: 620000,
//   units: 580,
//   unitCost: 1.4,
//   minimumBuy: 4,
//   sold: 0,
// },
