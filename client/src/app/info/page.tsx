"use client";
import { useAssetStore } from "../store";
export default function Info() {
  const { watching } = useAssetStore();
  return <div className="mt-5 border border-black h-svh">
    <div>info</div>
  </div>;
}
