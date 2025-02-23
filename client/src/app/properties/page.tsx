"use client";

import { useState } from "react";
import {
  FaMapMarkerAlt,
  FaWallet,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

import { initAssets } from "../constants";

type IAsset = {
  name: string;
  id: number;
  location: string;
  worth: number;
  units: number;
  unit_cost: number;
  minimum_buy: number;
  sold: number;
  image: string;
  monthly_rent: number;
  exitDate: Date;
};

// const mockProperties: IAsset[] = [
//   {
//     id: 1,
//     name: "Luxury Apartment Complex",
//     location: "Manhattan, NY",
//     worth: 2500000,
//     units: 1000,
//     unit_cost: 2500,
//     minimum_buy: 5,
//     sold: 400,
//     image: "/property1.jpg",
//     monthly_rent: 15000,
//     exitDate: new Date("2025-12-31"),
//   },
//   {
//     id: 2,
//     name: "Commercial Building",
//     location: "Los Angeles, CA",
//     worth: 4200000,
//     units: 2000,
//     unit_cost: 2100,
//     minimum_buy: 10,
//     sold: 800,
//     image: "/property2.jpg",
//     monthly_rent: 25000,
//     exitDate: new Date("2026-06-30"),
//   },
// ];

const Properties = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const propertiesPerPage = 3;
  const [mockProperties, setMockProperties] = useState(initAssets);

  const indexOfLastProperty = currentPage * propertiesPerPage;
  const indexOfFirstProperty = indexOfLastProperty - propertiesPerPage;
  const currentProperties = mockProperties.slice(
    indexOfFirstProperty,
    indexOfLastProperty
  );

  const totalPages = Math.ceil(mockProperties.length / propertiesPerPage);

  const calculateAPY = (monthlyRent: number, worth: number) => {
    return (((monthlyRent * 12) / worth) * 100).toFixed(1);
  };

  return (
    <div className="min-h-screen bg-[#0A0B0F]">
      <div className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Markets Overview
            </span>
          </h2>
          {/* Analytics Section */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-900/50 rounded-xl border border-purple-500/20 p-6">
              <h4 className="text-gray-400 text-sm mb-2">
                Average Annual Return
              </h4>
              <div className="text-2xl font-bold text-green-400">12.8%</div>
              <div className="text-xs text-gray-500 mt-1">
                +2.3% from last year
              </div>
            </div>

            <div className="bg-gray-900/50 rounded-xl border border-purple-500/20 p-6">
              <h4 className="text-gray-400 text-sm mb-2">
                Total Investment Volume
              </h4>
              <div className="text-2xl font-bold text-white">$142.5M</div>
              <div className="text-xs text-gray-500 mt-1">
                Across all properties
              </div>
            </div>

            <div className="bg-gray-900/50 rounded-xl border border-purple-500/20 p-6">
              <h4 className="text-gray-400 text-sm mb-2">
                Average Occupancy Rate
              </h4>
              <div className="text-2xl font-bold text-purple-400">94.2%</div>
              <div className="text-xs text-gray-500 mt-1">Last 12 months</div>
            </div>

            <div className="bg-gray-900/50 rounded-xl border border-purple-500/20 p-6">
              <h4 className="text-gray-400 text-sm mb-2">
                Average Hold Period
              </h4>
              <div className="text-2xl font-bold text-cyan-400">4.2 Years</div>
              <div className="text-xs text-gray-500 mt-1">
                Historical average
              </div>
            </div>
          </div>

          {/* Property Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {currentProperties.map((property) => (
              <div
                key={property.id}
                className="bg-gray-900/50 rounded-xl border border-purple-500/20 overflow-hidden hover:border-purple-500/50 transition-all"
              >
                <div className="relative h-32">
                  <img
                    src={property.image}
                    alt={property.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 right-3 bg-purple-500 text-white px-2 py-0.5 rounded-full text-xs">
                    {`${property.sold}/${property.units} Units Sold`}
                  </div>
                </div>

                <div className="p-4">
                  <h3 className="text-lg font-semibold text-white mb-1">
                    {property.name}
                  </h3>
                  <div className="flex items-center text-gray-400 mb-3 text-sm">
                    <FaMapMarkerAlt className="mr-1" />
                    <span>{property.location}</span>
                  </div>

                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="bg-black/30 p-2 rounded-lg">
                      <div className="text-xs text-gray-400">
                        Property Worth
                      </div>
                      <div className="text-white font-medium text-sm">
                        ${property.worth.toLocaleString()}
                      </div>
                    </div>
                    <div className="bg-black/30 p-2 rounded-lg">
                      <div className="text-xs text-gray-400">Monthly Rent</div>
                      <div className="text-white font-medium text-sm">
                        ${property.monthly_rent.toLocaleString()}
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="bg-black/30 p-2 rounded-lg">
                      <div className="text-xs text-gray-400">Unit Cost</div>
                      <div className="text-white font-medium text-sm">
                        ${property.unit_cost.toLocaleString()}
                      </div>
                    </div>
                    <div className="bg-black/30 p-2 rounded-lg">
                      <div className="text-xs text-gray-400">APY</div>
                      <div className="text-green-400 font-medium text-sm">
                        {calculateAPY(property.monthly_rent, property.worth)}%
                      </div>
                    </div>
                  </div>

                  <div className="text-xs text-gray-400 mb-3">
                    Minimum Investment: {property.minimum_buy} units
                  </div>

                  <button className="w-full bg-purple-500 hover:bg-purple-600 text-white py-2 rounded-lg flex items-center justify-center gap-2 transition-colors text-sm">
                    <FaWallet className="text-xs" />
                    Invest Now
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-between px-6 py-4 bg-gray-900/50 rounded-xl border border-purple-500/20">
            <div className="text-gray-400">
              Showing {indexOfFirstProperty + 1}-
              {Math.min(indexOfLastProperty, mockProperties.length)} of{" "}
              {mockProperties.length} properties
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setCurrentPage(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-4 py-2 text-purple-400 hover:bg-purple-500/10 rounded-lg disabled:opacity-50 flex items-center gap-2"
              >
                <FaChevronLeft /> Previous
              </button>
              <button
                onClick={() => setCurrentPage(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-4 py-2 bg-purple-500 text-white rounded-lg hover:opacity-90 disabled:opacity-50 flex items-center gap-2"
              >
                Next <FaChevronRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Properties;
