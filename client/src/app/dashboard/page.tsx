"use client";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import { useState } from "react";
import { useAssetStore } from "../store";
import { useAPI } from "../hooks/useAPI";
import {
  FaWallet,
  FaChartLine,
  FaCube,
  FaMapMarkerAlt,
  FaCoins,
  FaUsers,
  FaArrowUp,
  FaArrowRight,
  FaChartPie,
} from "react-icons/fa";
import { myInvestments } from "../constants";

const Modal = dynamic(() => import("@/app/components/Modal"));

export default function Dashboard() {
  const { auth, setWatching } = useAssetStore();
  const [showModal, setShowModal] = useState({ open: false, action: "nil" });
  const [data, setData] = useState<any>({});
  // const router = useRouter();
  const { updateProfile, assets } = useAPI();

  const updateAccount = () => {
    updateProfile(data.username, data.crypto);
    setData({});
    setShowModal({ open: false, action: "nil" });
  };

  // Helper to retrieve an asset from the assets list by its ID.
  const getAsset = (assetId: number) => {
    return assets.find((asset: any) => asset.id === assetId);
  };

  return (
    <div className="min-h-screen bg-[#0A0B0F] pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="mb-10">
          <h1 className="text-3xl font-bold">
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Dashboard
            </span>
          </h1>
        </header>

        {/* Portfolio Summary & My Investments */}
        <section className="grid lg:grid-cols-3 gap-6 mb-10">
          {/* Portfolio Summary */}
          <div className="bg-gray-900/50 p-6 rounded-xl border border-purple-500/20">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-white text-xl font-medium">
                Portfolio Summary
              </h2>
              <FaChartPie className="text-purple-400 text-xl" />
            </div>
            <div className="space-y-4">
              <div className="bg-black/40 p-4 rounded-xl hover:bg-black/50 transition-colors">
                <div className="flex items-center justify-between">
                  <p className="text-gray-400 text-sm flex items-center gap-2">
                    <FaWallet className="text-purple-400" />
                    Total Investment
                  </p>
                  <span className="text-xs bg-purple-500/20 text-purple-400 px-2 py-1 rounded-full">
                    Active
                  </span>
                </div>
                <p className="text-2xl font-bold text-white mt-2">$125,000</p>
              </div>
              <div className="bg-black/40 p-4 rounded-xl hover:bg-black/50 transition-colors">
                <div className="flex items-center justify-between">
                  <p className="text-gray-400 text-sm flex items-center gap-2">
                    <FaChartLine className="text-cyan-400" />
                    Current Value
                  </p>
                  <span className="text-xs bg-cyan-500/20 text-cyan-400 px-2 py-1 rounded-full">
                    Growing
                  </span>
                </div>
                <p className="text-2xl font-bold text-white mt-2">$142,500</p>
              </div>
              <div className="bg-black/40 p-4 rounded-xl hover:bg-black/50 transition-colors">
                <div className="flex items-center justify-between">
                  <p className="text-gray-400 text-sm flex items-center gap-2">
                    <FaArrowUp className="text-green-400" />
                    Total Return
                  </p>
                  <div className="flex items-center gap-1 text-green-400">
                    <FaArrowUp className="text-sm" />
                    <span className="text-xs">Past Month</span>
                  </div>
                </div>
                <p className="text-2xl font-bold text-green-400 mt-2">+14%</p>
              </div>
              <div className="bg-black/40 p-4 rounded-xl hover:bg-black/50 transition-colors">
                <div className="flex items-center justify-between">
                  <p className="text-gray-400 text-sm flex items-center gap-2">
                    <FaCoins className="text-yellow-400" />
                    Available for Withdrawal
                  </p>
                  <span className="text-xs bg-yellow-500/20 text-yellow-400 px-2 py-1 rounded-full">
                    Ready
                  </span>
                </div>
                <p className="text-2xl font-bold text-white mt-2">$2,500</p>
                <button className="mt-3 w-full px-4 py-2 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg text-white hover:opacity-90 transition-all flex items-center justify-center gap-2">
                  <FaArrowRight className="text-sm" />
                  Withdraw Funds
                </button>
              </div>
            </div>
          </div>

          {/* My Investments */}
          <div className="lg:col-span-2 bg-gray-900/50 p-6 rounded-xl border border-purple-500/20">
            <h2 className="text-white text-xl font-medium mb-4">
              My Investments
            </h2>
            <div
              className="space-y-4 h-[450px] overflow-y-scroll py-4"
              id="propertiesContainer"
              onScroll={(e) => {
                const container = e.currentTarget;
                const isScrollable =
                  container.scrollHeight > container.clientHeight;
                const hasReachedBottom =
                  container.scrollHeight - container.scrollTop ===
                  container.clientHeight;
                const scrollIndicator =
                  document.getElementById("scrollIndicator");

                if (scrollIndicator) {
                  scrollIndicator.style.display =
                    isScrollable && !hasReachedBottom ? "flex" : "none";
                }
              }}
            >
              {myInvestments && myInvestments.length > 0 ? (
                myInvestments.map((property) => (
                  <div
                    key={property.id}
                    className="bg-black/40 p-4 rounded-xl flex justify-between items-center"
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <FaCube className="text-purple-400" />
                        <p className="text-white font-medium">
                          {property.name}
                        </p>
                      </div>
                      <div className="mt-2 grid grid-cols-2 gap-4">
                        <div className="flex items-center gap-2">
                          <FaMapMarkerAlt className="text-gray-400" />
                          <p className="text-gray-400 text-sm">
                            {property.location}
                          </p>
                        </div>
                        <div className="flex items-center gap-2">
                          <FaCoins className="text-purple-400" />
                          <p className="text-gray-400 text-sm">
                            NFT Units: {property.units}
                          </p>
                        </div>
                        <div className="flex items-center gap-2">
                          <FaChartLine className="text-green-400" />
                          <p className="text-purple-400 text-sm">
                            Yield: {property.rentalYield}
                          </p>
                        </div>
                        <div className="flex items-center gap-2">
                          <FaUsers className="text-blue-400" />
                          <p className="text-gray-400 text-sm">
                            Occupancy: {property.occupancyRate}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="text-right ml-4">
                      <p className="text-white font-medium">
                        ${property.value.toLocaleString()}
                      </p>
                      <p className="text-green-400 text-sm flex items-center justify-end gap-1">
                        <FaArrowUp />
                        {property.growth}%
                      </p>
                      <p className="text-purple-400 text-sm">
                        ${property.monthlyRevenue}/month
                      </p>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-gray-400">You have no investments yet</p>
              )}
            </div>
            <div
              id="scrollIndicator"
              className="mt-2 flex justify-center"
              style={{ display: "none" }}
            >
              <div className="text-gray-400 flex items-center gap-2">
                <span>Scroll for more</span>
                <FaArrowUp className="rotate-180" />
              </div>
            </div>
          </div>
        </section>

        {/* Available Properties Section */}
        <section className="bg-gray-900/50 p-6 rounded-xl border border-purple-500/20">
          <h2 className="text-white text-xl font-medium mb-4">
            Available Properties
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {assets?.map((asset: any) => (
              <div key={asset.id} className="bg-black/40 p-4 rounded-xl">
                <h3 className="text-white font-medium">{asset.name}</h3>
                <p className="text-gray-400 text-sm mb-2">{asset.location}</p>
                <p className="text-white font-bold">
                  ${asset.worth?.toLocaleString()}
                </p>
                <p className="text-green-400 text-sm mb-3">
                  Expected Return: {asset.expectedReturn}%
                </p>
                <button
                  onClick={() => {
                    setWatching(asset);
                    setShowModal({ open: true, action: "buy" });
                  }}
                  className="w-full py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
                >
                  Invest Now
                </button>
              </div>
            ))}
          </div>
        </section>
        
      </div>

      {/* Modal for Investment Actions */}
      {showModal.open && showModal.action === "buy" && (
        <Modal>
          <div className="bg-white rounded-xl shadow-xl w-[90%] max-w-md mx-auto my-20 p-6 relative">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
              Invest in Property
            </h2>
            <p className="text-gray-600 text-center mb-6">
              Confirm your investment or learn more details about the property.
            </p>
            {/* Optional form elements can be added here */}
            <div className="flex justify-between">
              <button
                onClick={() => setShowModal({ action: "nil", open: false })}
                className="w-[45%] py-2 bg-gray-300 text-gray-800 font-semibold rounded hover:bg-gray-400 transition"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  // Handle the investment confirmation here
                  setShowModal({ action: "nil", open: false });
                }}
                className="w-[45%] py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition"
              >
                Confirm
              </button>
            </div>
          </div>
          {/* Overlay */}
          <div
            onClick={() => setShowModal({ action: "nil", open: false })}
            className="fixed inset-0 bg-black opacity-50"
          />
        </Modal>
      )}
    </div>
  );
}
