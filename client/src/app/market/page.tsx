"use client";

import { useState } from "react";
import {
  FaMapMarkerAlt,
  FaWallet,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell,
} from "recharts";

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

const Market = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const propertiesPerPage = 5;
  const [mockProperties, setMockProperties] = useState(initAssets);
  const [pastProperties] = useState([
    {
      id: 1,
      name: "Past Property 1",
      managementPeriod: 24,
      exitValue: 3000000,
      totalProfit: 500000,
      roi: 16.7,
    },
  ]);

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
              Portfolio Performance Overview
            </span>
          </h2>

          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-gray-900/50 rounded-xl border border-purple-500/20 p-6">
              <h4 className="text-gray-400 text-sm mb-2">
                Total Assets Under Management
              </h4>
              <div className="text-2xl font-bold text-white">
                $
                {mockProperties
                  .reduce((acc, prop) => acc + prop.worth, 0)
                  .toLocaleString()}
              </div>
              <div className="text-xs text-gray-500 mt-1">
                Across {mockProperties.length} properties
              </div>
            </div>

            <div className="bg-gray-900/50 rounded-xl border border-purple-500/20 p-6">
              <h4 className="text-gray-400 text-sm mb-2">Monthly Revenue</h4>
              <div className="text-2xl font-bold text-green-400">
                $
                {mockProperties
                  .reduce((acc, prop) => acc + prop.monthly_rent, 0)
                  .toLocaleString()}
              </div>
              <div className="text-xs text-gray-500 mt-1">
                Combined rental income
              </div>
            </div>

            <div className="bg-gray-900/50 rounded-xl border border-purple-500/20 p-6">
              <h4 className="text-gray-400 text-sm mb-2">Average APY</h4>
              <div className="text-2xl font-bold text-purple-400">
                {(
                  mockProperties.reduce(
                    (acc, prop) =>
                      acc + Number(calculateAPY(prop.monthly_rent, prop.worth)),
                    0
                  ) / mockProperties.length
                ).toFixed(1)}
                %
              </div>
              <div className="text-xs text-gray-500 mt-1">
                Portfolio-wide return
              </div>
            </div>

            <div className="bg-gray-900/50 rounded-xl border border-purple-500/20 p-6">
              <h4 className="text-gray-400 text-sm mb-2">Total Units Sold</h4>
              <div className="text-2xl font-bold text-cyan-400">
                {mockProperties
                  .reduce((acc, prop) => acc + prop.sold, 0)
                  .toLocaleString()}
              </div>
              <div className="text-xs text-gray-500 mt-1">
                Of{" "}
                {mockProperties
                  .reduce((acc, prop) => acc + prop.units, 0)
                  .toLocaleString()}{" "}
                total
              </div>
            </div>
          </div>

          {/* Charts Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Property Units Chart */}
            <div className="bg-gray-900/50 rounded-xl border border-purple-500/20 p-6">
              <h3 className="text-xl font-semibold text-white mb-6">
                Units Distribution
              </h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={mockProperties}>
                  <XAxis
                    dataKey="name"
                    stroke="#fff"
                    tick={{ fill: "#fff", fontSize: 12 }}
                  />
                  <YAxis stroke="#fff" tick={{ fill: "#fff" }} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#1f2937",
                      border: "none",
                    }}
                    labelStyle={{ color: "#fff" }}
                  />
                  <Bar
                    dataKey="sold"
                    fill="#8b5cf6"
                    name="Units Sold"
                    stackId="a"
                  />
                  <Bar
                    dataKey="units"
                    fill="#06b6d4"
                    name="Available Units"
                    stackId="a"
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* APY Distribution */}
            <div className="bg-gray-900/50 rounded-xl border border-purple-500/20 p-6">
              <h3 className="text-xl font-semibold text-white mb-6">
                APY Distribution
              </h3>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={mockProperties.map((prop) => ({
                      name: prop.name,
                      value: Number(
                        calculateAPY(prop.monthly_rent, prop.worth)
                      ),
                    }))}
                    cx="50%"
                    cy="50%"
                    labelLine={true}
                    label={({ name, value }) => `${value}%`}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {mockProperties.map((_, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={
                          [
                            "#8b5cf6",
                            "#06b6d4",
                            "#ec4899",
                            "#10b981",
                            "#f59e0b",
                          ][index % 5]
                        }
                      />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#1f2937",
                      border: "none",
                    }}
                    labelStyle={{ color: "#fff" }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>

            {/* Property Worth Comparison */}
            <div className="bg-gray-900/50 rounded-xl border border-purple-500/20 p-6">
              <h3 className="text-xl font-semibold text-white mb-6">
                Property Values
              </h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={mockProperties}>
                  <XAxis
                    dataKey="name"
                    stroke="#fff"
                    tick={{ fill: "#fff", fontSize: 12 }}
                  />
                  <YAxis stroke="#fff" tick={{ fill: "#fff" }} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#1f2937",
                      border: "none",
                    }}
                    labelStyle={{ color: "#fff" }}
                    formatter={(value: number) => [
                      `$${value.toLocaleString()}`,
                      "Worth",
                    ]}
                  />
                  <Bar dataKey="worth" fill="#ec4899" name="Property Worth" />
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Monthly Revenue Chart */}
            <div className="bg-gray-900/50 rounded-xl border border-purple-500/20 p-6">
              <h3 className="text-xl font-semibold text-white mb-6">
                Monthly Revenue
              </h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={mockProperties}>
                  <XAxis
                    dataKey="name"
                    stroke="#fff"
                    tick={{ fill: "#fff", fontSize: 12 }}
                  />
                  <YAxis stroke="#fff" tick={{ fill: "#fff" }} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#1f2937",
                      border: "none",
                    }}
                    labelStyle={{ color: "#fff" }}
                    formatter={(value: number) => [
                      `$${value.toLocaleString()}`,
                      "Monthly Rent",
                    ]}
                  />
                  <Bar
                    dataKey="monthly_rent"
                    fill="#10b981"
                    name="Monthly Revenue"
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Property List */}
          <div className="bg-gray-900/50 rounded-xl border border-purple-500/20 p-6">
            <h3 className="text-xl font-semibold text-white mb-6">
              Active Properties
            </h3>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-700">
                <thead>
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                      Property
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                      Location
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                      Worth
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                      APY
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                      Units Sold
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700">
                  {currentProperties.map((property) => (
                    <tr key={property.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                        {property.name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                        {property.location}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                        ${property.worth.toLocaleString()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-green-400">
                        {calculateAPY(property.monthly_rent, property.worth)}%
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                        {property.sold}/{property.units}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {/* Pagination */}
            <div className="mt-4 flex justify-center space-x-2">
              <button
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className="px-3 py-1 rounded-md bg-purple-500/20 text-purple-400 disabled:opacity-50"
              >
                <FaChevronLeft />
              </button>
              <span className="text-gray-400">
                Page {currentPage} of {totalPages}
              </span>
              <button
                onClick={() =>
                  setCurrentPage(Math.min(totalPages, currentPage + 1))
                }
                disabled={currentPage === totalPages}
                className="px-3 py-1 rounded-md bg-purple-500/20 text-purple-400 disabled:opacity-50"
              >
                <FaChevronRight />
              </button>
            </div>

            {/* Past Properties Section */}
            <div className="mt-12">
              <h3 className="text-xl font-semibold text-white mb-6">
                Past Properties
              </h3>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-700">
                  <thead>
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                        Property
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                        Management Period
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                        Exit Value
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                        Total Profit
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                        ROI
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-700">
                    {pastProperties.map((property) => (
                      <tr key={property.id}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                          {property.name}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                          {property.managementPeriod} months
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                          ${property.exitValue.toLocaleString()}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-green-400">
                          ${property.totalProfit.toLocaleString()}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-purple-400">
                          {property.roi}%
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Market;
