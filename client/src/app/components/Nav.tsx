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
    auth
      ? links.filter((l) => l.name !== "login" && l.name !== "register")
      : links;

  return (
    <nav className="space-x-2 capitalize px-5 bg-white fixed top-0 w-full z-10">
      {isAuth().map((l) => {
        return (
          <Link
            key={l.name}
            href={l.link}
            className="text-sm underline"
            onClick={() => l.name === "Logout" && setAuth(undefined)}
          >
            <span className="capitalize">{l.name}</span>
          </Link>
        );
      })}
    </nav>
  );
}
