"use client";
import { useState } from "react";
import { MdEmail } from "react-icons/md";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { FiUserPlus } from "react-icons/fi";
import { RiLockPasswordLine } from "react-icons/ri";
import { FaUser } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { useAPI } from "../hooks/useAPI";
import { useAssetStore } from "../store";
export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const { setAuth, auth } = useAssetStore();
  // const [data, setData] = useState<{ [x: string]: string }>({});
  // const { authUser } = useAPI();
  // const register = async (e: any) => {
  //   e.preventDefault();
  // };

  // const {} = useS

  const router = useRouter();

  // const onChange = (value: string, name: string) =>
  //   setData({ ...data, [name]: value });
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Handle signup logic here
    const res = await fetch("/api/auth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...formData, action: "register" }),
    });
    const data = await res.json();
    setAuth(data.data);
    if(data.success) {
      router.push('/dashboard')
    };
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0A0B0F]">
      <div className="bg-gray-900/50 p-8 rounded-xl border border-purple-500/20 w-full max-w-md">
        <h2 className="text-3xl font-bold text-center mb-6">
          <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Sign Up
          </span>
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              className="w-full bg-gray-900/50 border border-purple-500/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 pl-10"
              required
              minLength={1}
            />
            <FaUser className="absolute left-3 top-3.5 text-gray-400" />
          </div>
          <div className="relative">
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-gray-900/50 border border-purple-500/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 pl-10"
              required
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            />
            <MdEmail className="absolute left-3 top-3.5 text-gray-400" />
          </div>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full bg-gray-900/50 border border-purple-500/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 pl-10"
              required
              minLength={1}
            />
            <RiLockPasswordLine className="absolute left-3 top-3.5 text-gray-400" />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-3.5 text-gray-400 hover:text-gray-300"
            >
              {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </button>
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg text-white font-semibold hover:opacity-90 transition-all duration-300 flex items-center justify-center gap-2"
          >
            <FiUserPlus className="text-xl" />
            Sign Up
          </button>
          <p className="text-center text-gray-400 text-sm">
            Already have an account?{" "}
            <a href="/login" className="text-purple-400 hover:text-purple-300">
              Login
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}
