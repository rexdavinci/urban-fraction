"use client";
import { useState } from "react";
import { useRouter } from "next/router";
import {
  FaWallet,
  FaChartLine,
  FaCube,
  FaLock,
  FaDiscord,
  FaTwitter,
  FaMedium,
} from "react-icons/fa";
import Properties from "./components/Properties";


export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const router = useRouter();

  return (
    <div className="min-h-screen bg-[#0A0B0F]">
      {/* Navbar */}

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-cyan-900/20 z-0" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  Own Premium Real Estate
                </span>
                <br />
                <span className="text-white">Through Web3</span>
              </h1>
              <p className="text-gray-400 text-lg mb-8">
                Tokenized real estate investment platform powered by blockchain
                technology. Own fractions of premium properties with complete
                transparency and liquidity.
              </p>
              <div className="flex space-x-4">
                <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-xl text-white font-medium hover:opacity-90 transition-opacity">
                  Start Investing
                </button>
                <button className="px-8 py-4 border border-purple-500/30 rounded-xl text-purple-400 hover:bg-purple-500/10 transition-all">
                  Learn More
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-2xl blur-xl opacity-30" />
              <div className="relative bg-gray-900 rounded-2xl p-6 border border-purple-500/20">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-black/40 p-4 rounded-xl">
                    <p className="text-gray-400 text-sm">Total Value Locked</p>
                    <p className="text-2xl font-bold text-white">$24.8M</p>
                  </div>
                  <div className="bg-black/40 p-4 rounded-xl">
                    <p className="text-gray-400 text-sm">Active Investors</p>
                    <p className="text-2xl font-bold text-white">2.4K</p>
                  </div>
                  <div className="bg-black/40 p-4 rounded-xl">
                    <p className="text-gray-400 text-sm">Properties</p>
                    <p className="text-2xl font-bold text-white">16</p>
                  </div>
                  <div className="bg-black/40 p-4 rounded-xl">
                    <p className="text-gray-400 text-sm">APY</p>
                    <p className="text-2xl font-bold text-white">12.5%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Why Choose UrbanFraction
            </span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-900/50 p-6 rounded-xl border border-purple-500/20">
              <FaWallet className="text-purple-400 text-3xl mb-4" />
              <h3 className="text-white text-xl font-medium mb-2">
                Easy Investment
              </h3>
              <p className="text-gray-400">
                Invest in real estate with just a few clicks using your crypto
                wallet.
              </p>
            </div>
            <div className="bg-gray-900/50 p-6 rounded-xl border border-purple-500/20">
              <FaChartLine className="text-purple-400 text-3xl mb-4" />
              <h3 className="text-white text-xl font-medium mb-2">
                High Returns
              </h3>
              <p className="text-gray-400">
                Earn passive income through property appreciation and rental
                yields.
              </p>
            </div>
            <div className="bg-gray-900/50 p-6 rounded-xl border border-purple-500/20">
              <FaCube className="text-purple-400 text-3xl mb-4" />
              <h3 className="text-white text-xl font-medium mb-2">
                Blockchain Based
              </h3>
              <p className="text-gray-400">
                Leverage blockchain technology for transparent and secure
                transactions.
              </p>
            </div>
            <div className="bg-gray-900/50 p-6 rounded-xl border border-purple-500/20">
              <FaLock className="text-purple-400 text-3xl mb-4" />
              <h3 className="text-white text-xl font-medium mb-2">
                Secure Platform
              </h3>
              <p className="text-gray-400">
                Your investments are protected by advanced security protocols.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Properties Section */}
      <section className="py-20 bg-black/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Featured Properties
            </span>
          </h2>
          <Properties />
        </div>
      </section>
      {/* How It Works Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              How It Works
            </span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-900/50 p-6 rounded-xl border border-purple-500/20">
              <div className="text-4xl font-bold text-purple-400 mb-4">01</div>
              <h3 className="text-white text-xl font-medium mb-2" onClick={() => router.push('/dashboard')}>
                Connect Wallet
              </h3>
              <p className="text-gray-400">
                Connect your crypto wallet to get started with property
                investment.
              </p>
            </div>
            <div className="bg-gray-900/50 p-6 rounded-xl border border-purple-500/20">
              <div className="text-4xl font-bold text-purple-400 mb-4">02</div>
              <h3 className="text-white text-xl font-medium mb-2">
                Choose Property
              </h3>
              <p className="text-gray-400">
                Browse and select from our curated list of premium real estate
                opportunities.
              </p>
            </div>
            <div className="bg-gray-900/50 p-6 rounded-xl border border-purple-500/20">
              <div className="text-4xl font-bold text-purple-400 mb-4">03</div>
              <h3 className="text-white text-xl font-medium mb-2">
                Start Earning
              </h3>
              <p className="text-gray-400">
                Receive your share of rental income and property appreciation
                returns.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-black/40">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Stay Updated
            </span>
          </h2>
          <p className="text-gray-400 mb-8">
            Get notified about new property listings and platform updates.
          </p>
          <div className="flex gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-gray-900/50 border border-purple-500/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-purple-500"
            />
            <button className="px-6 py-2 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg text-white hover:opacity-90 transition-opacity">
              Subscribe
            </button>
          </div>
        </div>
      </section>
      {/* Testimonials Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              What Our Investors Say
            </span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Alex Thompson",
                role: "Early Investor",
                quote:
                  "The platform made real estate investment accessible and transparent. Great returns so far!",
              },
              {
                name: "Sarah Chen",
                role: "Property Developer",
                quote:
                  "Revolutionary approach to property investment. The future of real estate is here.",
              },
              {
                name: "Michael Roberts",
                role: "Crypto Enthusiast",
                quote:
                  "Combining blockchain with real estate is genius. The yields are impressive!",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-900/50 p-6 rounded-xl border border-purple-500/20 flex flex-col h-full"
              >
                <p className="text-gray-400 mb-4 flex-grow">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="flex items-center mt-auto">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500" />
                  <div className="ml-4">
                    <p className="text-white font-medium">{testimonial.name}</p>
                    <p className="text-purple-400">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-black/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Our Partners
            </span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((partner) => (
              <div
                key={partner}
                className="h-24 bg-gray-900/50 rounded-xl border border-purple-500/20 flex items-center justify-center"
              >
                <div className="text-purple-400 text-xl font-bold">
                  Partner {partner}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="border-t border-purple-500/20 bg-black/40 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              UrbanFraction
            </div>
            <div className="flex space-x-6">
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
              <FaMedium className="text-gray-400 hover:text-purple-400 text-xl cursor-pointer" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

