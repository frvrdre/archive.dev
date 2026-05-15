import Navbar from "./components/Navbar";
import MusicPlayer from "./components/MusicPlayer";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white relative overflow-hidden">

      {/* BACKGROUND */}
      <div className="fixed inset-0 -z-10 bg-black">

        {/* GLOW */}
        <div className="absolute top-[-200px] left-[-200px] w-[700px] h-[700px] bg-white/10 rounded-full blur-[160px]" />
        <div className="absolute bottom-[-200px] right-[-200px] w-[800px] h-[800px] bg-white/5 rounded-full blur-[180px]" />

        {/* NOISE */}
        <div className="absolute inset-0 opacity-[0.08] mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')]" />

        {/* VIGNETTE */}
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-black/40 to-black" />

        {/* DEPTH */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/70 to-black" />

      </div>

      {/* NAV */}
      <Navbar />

      {/* AUDIO */}
      <MusicPlayer />

      {/* HERO */}
      <section className="flex flex-col items-center justify-center h-screen text-center px-6 relative">

        {/* TITLE */}
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
          ARCHIVE.DEV
        </h1>

        {/* SUB */}
        <p className="text-zinc-400 mt-4 max-w-xl">
          A dark archive of development tools, inspiration, and resources.
        </p>

        {/* ACTIONS */}
        <div className="mt-8 flex gap-4 flex-col sm:flex-row">

          {/* PRIMARY */}
          <Link href="/resources">
            <button className="px-6 py-3 bg-white text-black rounded-full hover:scale-105 transition font-semibold w-full sm:w-auto cursor-pointer">
              Enter Archive
            </button>
          </Link>

          {/* SECONDARY */}
          <Link href="/about">
            <button className="px-6 py-3 border border-white/20 text-white rounded-full hover:bg-white/10 transition font-semibold w-full sm:w-auto cursor-pointer">
              About Me
            </button>
          </Link>

        </div>

      </section>

    </main>
  );
}