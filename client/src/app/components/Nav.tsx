"use client";
import Link from "next/link";
import { useAssetStore } from "../store";
import { useRouter } from "next/navigation";

export default function Nav() {
  const links = [
    { name: "Home", link: "/" },
    { name: "Register", link: "/register" },
    { name: "Login", link: "/login" },
    { name: "Add Asset", link: "/asset" },
    { name: "Logout", link: "/" },
  ];

  const { auth, setAuth } = useAssetStore();

  const router = useRouter();

  const isAuth = () =>
    auth?.username
      ? links.filter((l) => l.name !== "Login" && l.name !== "Register")
      : links.filter(
          (l) => l.name !== "Logout" && !auth?.admin && l.name !== "Add Asset"
        );

        return (
          <nav className="fixed w-full z-50 backdrop-blur-xl bg-black/20 border-b border-purple-500/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <span onClick={() => router.push('/')} className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  UrbanFraction
                </span>
              </div>
              <div className="hidden md:block"></div>
                <div className="flex items-center space-x-8">
                  <a className="text-gray-300 hover:text-purple-400 transition-colors">Markets</a>
                  <a className="text-gray-300 hover:text-purple-400 transition-colors">Properties</a>
                  <a className="text-gray-300 hover:text-purple-400 transition-colors">DAO</a>
                  <a className="text-gray-300 hover:text-purple-400 transition-colors">Docs</a>
                  <button className="px-6 py-2 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg text-white font-medium hover:opacity-90 transition-opacity">
                    Connect Wallet
                  </button>
                </div>
              </div>
            </div>
          </nav>
          );
}



export function Properties() {
  return (
    <div className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-8">Properties</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Property Card Example - Replace with actual data */}
          <div className="bg-gray-800/50 rounded-lg overflow-hidden">
            {/* <img 
              src="/placeholder-property.jpg" 
              alt="Property" 
              className="w-full h-48 object-cover"
            /> */}
            <div className="w-full h-48" />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-white">Property Name</h3>
              <p className="text-gray-400 mt-2">Location</p>
              <div className="mt-4 flex justify-between items-center">
                <span className="text-purple-400">$1,000,000</span>
                <button className="px-4 py-2 bg-gradient-to-r from-purple-500 to-cyan-500 rounded text-white text-sm">
                  View Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}