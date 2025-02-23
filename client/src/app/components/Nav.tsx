"use client";
import { useState } from "react";
import { useAssetStore } from "../store";
import { useRouter } from "next/navigation";
import { RiCloseLine, RiMenu3Line } from "react-icons/ri";
import Link from "next/link";

export default function Nav() {
  const links = [
    { name: "Home", link: "/" },
    { name: "Register", link: "/register" },
    { name: "Login", link: "/login" },
    { name: "Add Asset", link: "/asset" },
    { name: "Logout", link: "/" },
  ];

  const { auth, setAuth } = useAssetStore();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const router = useRouter();

  // const isAuth = () =>
  //   auth?.username
  //     ? links.filter((l) => l.name !== "Login" && l.name !== "Register")
  //     : links.filter(
  //         (l) => l.name !== "Logout" && !auth?.admin && l.name !== "Add Asset"
  //       );

  return (
    <nav className="fixed w-full z-50 backdrop-blur-xl bg-black/20 border-b border-purple-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <span
              onClick={() => router.push("/")}
              className="cursor-pointer text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent"
            >
              UrbanFraction
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="market/"
              className="text-gray-300 hover:text-purple-400 transition-colors"
            >
              Markets
            </Link>
            <Link
              href="/"
              className="text-gray-300 hover:text-purple-400 transition-colors"
            >
              Properties
            </Link>
            {/* <Link
              href="/"
              className="text-gray-300 hover:text-purple-400 transition-colors"
            >
              DAO
            </Link> */}
            <Link
              href="/"
              className="text-gray-300 hover:text-purple-400 transition-colors"
            >
              Docs
            </Link>
            {/* <Link
              href="/register"
              className="text-gray-300 hover:text-purple-400 transition-colors"
            >
              Register
            </Link> */}
            <button
              onClick={() => {
                setAuth(undefined);
                router.push("/register");
              }}
              className="px-6 w-[8rem] py-2 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg text-white font-medium hover:opacity-90 transition-opacity"
            >
              {auth ? "Register" : "Sign In"}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-300 hover:text-purple-400"
            >
              {isMobileMenuOpen ? (
                <RiCloseLine size={24} />
              ) : (
                <RiMenu3Line size={24} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a className="block text-gray-300 hover:text-purple-400 transition-colors py-2">
                Markets
              </a>
              <a className="block text-gray-300 hover:text-purple-400 transition-colors py-2">
                Properties
              </a>
              <a className="block text-gray-300 hover:text-purple-400 transition-colors py-2">
                DAO
              </a>
              <a className="block text-gray-300 hover:text-purple-400 transition-colors py-2">
                Docs
              </a>
              <button
                onClick={() => {
                  setAuth(undefined);
                  router.push("/register");
                }}
                className="w-full px-6 py-2 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg text-white font-medium hover:opacity-90 transition-opacity"
              >
                {auth ? "Register" : "Sign In"}
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
