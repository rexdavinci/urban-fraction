"use client";
import { useState } from "react";
// import { useAPI } from "../hooks/useAPI";
export default function Register() {
  const [data, setData] = useState<{ [x: string]: string }>({});
  // const { authUser } = useAPI();
  const register = async (e: any) => {
    e.preventDefault();
  };

  const onChange = (value: string, name: string) =>
    setData({ ...data, [name]: value });

  return (
    <div className="h-svh flex flex-col items-center justify-center">
      <div className="text-sm md:w-[25%] w-[70%]">
        <p className="text-center text-xl mb-3">Register</p>
        <form onSubmit={register} className="space-y-3">
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
