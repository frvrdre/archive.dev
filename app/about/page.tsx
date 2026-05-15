"use client";

import Navbar from "../components/Navbar";
import MusicPlayer from "../components/MusicPlayer";
import Link from "next/link";
import { Code2, Link2 } from "lucide-react";

export default function About() {
  return (
    <main className="min-h-screen bg-black text-white relative overflow-hidden">

      {/* BACKGROUND */}
      <div className="absolute inset-0 -z-10 overflow-hidden bg-black">

        <div className="absolute top-[-120px] left-[-100px] w-[650px] h-[650px] bg-white/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-160px] right-[-120px] w-[750px] h-[750px] bg-white/15 rounded-full blur-[140px]" />
        <div className="absolute top-1/2 left-1/2 w-[850px] h-[850px] -translate-x-1/2 -translate-y-1/2 bg-white/10 rounded-full blur-[160px]" />

        <div className="absolute inset-0 opacity-[0.2] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:75px_75px]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_30%,rgba(255,255,255,0.12),transparent_45%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_70%,rgba(255,255,255,0.10),transparent_50%)]" />

        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/60 to-black" />

        <div className="absolute inset-0 opacity-[0.12] mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')]" />

      </div>

      {/* UI */}
      <Navbar />
      <MusicPlayer />

      {/* CONTENT */}
      <div className="pt-32 px-6 max-w-3xl mx-auto relative">

        {/* TITLE */}
        <h1 className="text-5xl font-bold mb-3 tracking-tight">
          About Me
        </h1>

        <div className="w-24 h-[2px] bg-white/30 mb-10" />

        {/* CARD */}
        <div className="bg-zinc-950/70 border border-white/15 rounded-2xl p-6 backdrop-blur-md shadow-[0_0_60px_rgba(0,0,0,0.9)]">

          <p className="text-zinc-300 leading-relaxed">
            I’m an aspiring front-end developer focused on building modern,
            responsive, and scalable web applications using JavaScript and its ecosystem.
            <br /><br />

            I enjoy learning by building things and improving through real projects,
            even if I’m still figuring things out as I go.
            <br /><br />

            Outside of tech, I’ve got responsibilities that keep life busy, but they also
            motivate me to keep pushing forward and build a better future for my family.
          </p>

        </div>

        {/* LINKS */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4">

          {/* GITHUB */}
          <a
            href="https://github.com/frvrdre"
            target="_blank"
            className="flex-1 flex items-center justify-center gap-2 bg-white text-black py-3 rounded-xl font-semibold hover:scale-105  hover:shadow-[0_0_25px_rgba(255,255,255,0.2)] transition cursor-pointer"
          >
            <Code2 size={18} />
            GitHub
          </a>

          {/* LINKEDIN */}
          <a
            href="https://www.linkedin.com/in/andres-young-065b58265/"
            target="_blank"
            className="flex-1 flex items-center justify-center gap-2 border border-white/20 py-3 rounded-xl hover:scale-105 hover:bg-white/10 hover:shadow-[0_0_25px_rgba(255,255,255,0.08)] transition cursor-pointer"
          >
            <Link2 size={18} />
            LinkedIn
          </a>

        </div>

      </div>

    </main>
  );
}