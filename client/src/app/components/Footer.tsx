import React from "react";
import { FaDiscord, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#0A0B0F] w-full">
      <div className="border-t border-purple-500/20 bg-black/40 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              UF
            </div>
            <div className="flex space-x-4">
              <a className="text-gray-400 hover:text-purple-400 transition-colors">
                Privacy
              </a>
              <a className="text-gray-400 hover:text-purple-400 transition-colors">
                Terms
              </a>
              <a className="text-gray-400 hover:text-purple-400 transition-colors">
                FAQ
              </a>
            </div>
            <div className="flex space-x-4">
              <FaDiscord className="text-gray-400 hover:text-purple-400 text-xl cursor-pointer" />
              <FaTwitter className="text-gray-400 hover:text-purple-400 text-xl cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
