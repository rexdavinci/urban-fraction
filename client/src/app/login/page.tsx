"use client";
import { useState } from "react";
import { MdEmail } from "react-icons/md";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import { useRouter } from "next/navigation";
// import { useState } from "react";
// import { useAPI } from "../hooks/useAPI";
import { useAssetStore } from "../store";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const { setAuth, auth } = useAssetStore();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // const [data, setData] = useState<{ [x: string]: string }>({});
  // const { loginUser } = useAPI();
  // const { auth } = useAssetStore();
  const router = useRouter();

  // const login = async (e: any) => {
  // //   e.preventDefault();
  // //   await userLogin(data as { username: string; password: string })
  // //   // loginUser(data);
  // //   router.push("/dashboard");
  // };

  // const onChange = (value: string, name: string) =>
  //   setData({ ...data, [name]: value });

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
            Login
          </span>
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-gray-900/50 border border-purple-500/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 pl-10"
              required
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
            className="w-full py-3 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg text-white font-semibold hover:opacity-90 transition-all duration-300"
          >
            Login
          </button>
          <p className="text-center text-gray-400 text-sm">
            {`Don't have an account?`}{" "}
            <a
              href="/register"
              className="text-purple-400 hover:text-purple-300"
            >
              Sign Up
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}
