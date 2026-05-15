"use client";

import { useState } from "react";
import Link from "next/link";
import Menu from "./menu";
import { Menu as MenuIcon } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-xl border-b border-white/10">
        <div className="flex justify-between items-center px-6 py-4">

         <Link href="/" className="text-white font-bold tracking-wide hover:opacity-80 transition">
            ARCHIVE // DEV
         </Link>

          <button
            onClick={() => setOpen(true)}
            className="p-2 hover:bg-white/10 rounded-lg"
          >
            <MenuIcon />
          </button>

        </div>
      </header>

      <Menu open={open} onClose={() => setOpen(false)} />
    </>
  );
}