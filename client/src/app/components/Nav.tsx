"use client";
import Link from "next/link";
import { useAssetStore } from "../store";

export default function Nav() {
  const links = [
    { name: "Home", link: "/" },
    { name: "Register", link: "/register" },
    { name: "Login", link: "/login" },
    { name: "Add Asset", link: "/asset" },
    { name: "Logout", link: "/" },
  ];

  const { auth, setAuth } = useAssetStore();

  const isAuth = () =>
    auth?.username
      ? links.filter((l) => l.name !== "Login" && l.name !== "Register")
      : links.filter((l) => l.name !== "Logout")

  return (
    <nav className="space-x-2 capitalize px-5 bg-white fixed top-0 w-full z-10 flex justify-between py-2">
      <div className="w-1/3">
        {isAuth().map((l) => {
          return (
            <Link
              key={l.name}
              href={l.link}
              className="text-sm underline mr-2"
              onClick={() => l.name === "Logout" && setAuth(undefined)}
            >
              <span className="capitalize">{l.name}</span>
            </Link>
          );
        })}
      </div>
      <Link href="/dashboard" className="font-semibold">{auth?.username}</Link>
    </nav>
  );
}
