/* eslint-disable @next/next/no-img-element */
"use client";
import { useState, memo } from "react";
// import { useRouter } from "next/navigation";
// import { useAssetStore } from "@/app/store";
// import { useAPI } from "@/app/hooks/useAPI";
import { FaMapMarkerAlt, FaShoppingCart, FaInfoCircle } from "react-icons/fa";
// import BuyModal from "./BuyModal";
// import CreditCard from "./CreditCard";
// import { makeCurrencySpace } from "../constants";
import { initAssets } from "../constants";
function Properties() {
  const [assets, setAssets] = useState(initAssets || []);
  // const [showModal, setShowModal] = useState({ open: false, action: "nil" });
  // const { watching, auth } = useAssetStore();
  // const [data, setData] = useState<any>({ units: watching?.minimum_buy });
  // const { buyAsset } = useAPI();
  // const router = useRouter();

  // const buy = () => {
  //   if (!auth) return alert("You must log in first");
  //   if (Number(data.units) !== 0) {
  //     buyAsset(watching.id, Number(data.units));
  //     setShowModal({ open: false, action: "nil" });
  //   }
  // };

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {assets.map((property: any) => (
        <Property key={property.id} property={property} />
      ))}
    </div>
  );
}

export default Properties;

interface IProperty {
  id: string;
  name: string;
  location: string;
  image: string;
  worth: number;
  unit_cost: number;
  minimum_buy: number;
  monthly_rent: number;
  units: number;
  sold: number;
  on_sale: boolean;
}

const Property = ({ property }: { property: IProperty }) => {
  return (
    <div className="bg-gray-900/50 rounded-xl overflow-hidden border border-purple-500/20 transition-all duration-300 hover:shadow-[0_0_20px_rgba(168,85,247,0.3)] hover:-translate-y-1">
      <div className="h-48 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 relative">
        <img
          src={property.image}
          alt={property.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-white text-xl font-medium mb-2">{property.name}</h3>
        <div className="flex items-center gap-2 mb-4">
          <FaMapMarkerAlt className="text-purple-400" />
          <p className="text-gray-400">{property.location}</p>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex justify-between items-center">
            <span className="text-purple-400">
              ${property.worth} Total Worth
            </span>
            <div className="flex flex-col items-end">
              <span className="text-cyan-400">{property.sold} Units Sold</span>
              <span className="text-gray-400 text-sm">
                {property.units - property.sold} Units Available
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 text-sm text-gray-400 my-2">
            <div>Unit Cost: ${property.unit_cost}</div>
            <div>Min. Buy: {property.minimum_buy} units</div>
            <div>Monthly Rent: ${property.monthly_rent}</div>
            <div>{property.on_sale ? "On Sale" : "Not for Sale"}</div>
          </div>

          <div className="w-full bg-gray-700 h-2 rounded-full overflow-hidden">
            <div
              className="bg-gradient-to-r from-purple-500 to-cyan-500 h-full rounded-full"
              style={{ width: `${(property.sold / property.units) * 100}%` }}
            />
          </div>
          <button className="px-4 py-2 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg text-white hover:opacity-90 transition-opacity">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};
