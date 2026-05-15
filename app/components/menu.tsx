"use client";

import Link from "next/link";

export default function Menu({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  return (
    <div className={`fixed inset-0 z-50 transition ${open ? "opacity-100" : "opacity-0 pointer-events-none"}`}>

      {/* BACKDROP */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/90 backdrop-blur-2xl"
      />

      {/* PANEL */}
      <div
        className={`absolute right-0 top-0 h-full w-[320px] bg-zinc-950 border-l border-white/10 p-8 transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <h1 className="text-xl font-bold mb-8">Navigation</h1>

        <div className="flex flex-col gap-6 text-zinc-400">

          <Link href="/" onClick={onClose}>Home</Link>
          <Link href="/resources" onClick={onClose}>Resources</Link>
          <Link href="/about" onClick={onClose}>About</Link>

        </div>
      </div>
    </div>
  );
}