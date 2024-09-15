"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useAPI } from "../hooks/useAPI";
import { useAssetStore } from "../store";

export default function Login() {
  const [data, setData] = useState<{ [x: string]: string }>({});
  const { loginUser } = useAPI();
  const { auth } = useAssetStore();
  const router = useRouter();

  const login = async (e: any) => {
  //   e.preventDefault();
  //   await userLogin(data as { username: string; password: string })
  //   // loginUser(data);
  //   router.push("/dashboard");
  };

  const onChange = (value: string, name: string) =>
    setData({ ...data, [name]: value });

  return (
    <div className="h-svh flex flex-col items-center justify-center">
      {/* <div className="text-sm md:w-[25%] w-[70%]">
        <p className="text-center text-xl font-semibold mb-3">Login</p>
        <form onSubmit={login} className="space-y-3">
          <div className="">
            <label className="block text-lg">Username</label>
            <input
              id="username"
              onChange={(e) => onChange(e.target.value, e.target.id)}
              className="border border-blue-800 rounded p-2 w-full"
            />
          </div>
          <div className="">
            <label className="block text-lg">Password</label>
            <input
              id="password"
              type="password"
              onChange={(e) => onChange(e.target.value, e.target.id)}
              className="border border-blue-800 rounded p-2 w-full"
            />
          </div>
          <div className="flex justify-center mt-4">
            <button
              type="submit"
              className="bg-green-900 text-white w-[120px] rounded py-2 mx-auto"
            >
              Submit
            </button>
          </div>
        </form>
      </div> */}
    </div>
  );
}
