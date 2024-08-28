"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useAPI } from "../hooks/useAPI";
import { useAssetStore } from "../store";

export default function Login() {
  const [data, setData] = useState<{ [x: string]: string }>({});
  const { loginUser } = useAPI();
  const { auth } = useAssetStore();
  const router = useRouter()

  const login = (e: any) => {
    e.preventDefault();
    loginUser(data);
    router.push('/dashboard')
  };

  const onChange = (value: string, name: string) =>
    setData({ ...data, [name]: value });

  return (
    <div className="h-svh flex flex-col items-center justify-center">
      <div className="text-sm md:w-[25%] w-[70%]">
        <p className="text-center text-xl mb-3">Login</p>
        <form onSubmit={login} className="space-y-3">
          <div className="flex justify-between items-center">
            <label>Username:</label>
            <input
              id="username"
              onChange={(e) => onChange(e.target.value, e.target.id)}
              className="border border-blue-800 px-2 rounded py-[3px]"
            />
          </div>
          <div className="flex justify-between items-center">
            <label>Password:</label>
            <input
              id="password"
              onChange={(e) => onChange(e.target.value, e.target.id)}
              className="border border-blue-800 px-2 rounded py-[3px]"
            />
          </div>
          <div className="flex justify-center mt-4">
            <button
              type="submit"
              className="bg-green-900 text-white w-[120px] rounded py-1 mx-auto"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
