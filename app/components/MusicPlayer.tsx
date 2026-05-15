"use client";

import { useMusic } from "../context/MusicContext";

function formatTime(t: number) {
  if (!t || isNaN(t)) return "0:00";
  const m = Math.floor(t / 60);
  const s = Math.floor(t % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
}

export default function MusicPlayer() {
  const {
    tracks,
    trackIndex,
    isPlaying,
    togglePlay,
    nextTrack,
    prevTrack,
    currentTime,
    duration,
    seek,
  } = useMusic();

  const track = tracks[trackIndex];

  return (
    <div className="fixed bottom-6 right-6 w-72 text-white z-50">
      <div className="bg-black/60 border border-white/10 backdrop-blur-xl rounded-2xl p-4 shadow-[0_0_60px_rgba(0,0,0,0.9)]">

        {/* INFO */}
        <div className="mb-3">
          <h3 className="text-sm font-semibold">{track.name}</h3>
          <p className="text-[11px] text-white/40">{track.artist}</p>
        </div>

        {/* PROGRESS */}
        <input
          type="range"
          min="0"
          max={duration || 0}
          value={currentTime}
          onChange={(e) => seek(Number(e.target.value))}
          className="w-full accent-white cursor-pointer"
        />

        {/* TIME */}
        <div className="flex justify-between text-[10px] text-white/40 mt-1">
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(duration)}</span>
        </div>

        {/* CONTROLS */}
        <div className="flex items-center justify-between mt-3">
          <button onClick={prevTrack} className="cursor-pointer">
            ⏮
          </button>

          <button
            onClick={togglePlay}
            className="px-4 py-1 bg-white text-black rounded cursor-pointer"
          >
            {isPlaying ? "Pause" : "Play"}
          </button>

          <button onClick={nextTrack} className="cursor-pointer">
            ⏭
          </button>
        </div>
      </div>
    </div>
  );
}