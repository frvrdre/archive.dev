"use client";

import { createContext, useContext, useRef, useState, useEffect } from "react";

type Track = {
  name: string;
  artist: string;
  src: string;
};

const tracks: Track[] = [
  { name: "Always have a choice", artist: "Havoc", src: "/music/Havoc - Always have a choice.mp3" },
  { name: "Slow Down", artist: "Lucki", src: "/music/Lucki - Slow Down.mp3" },
  { name: "Hesitating", artist: "Malcolm Todd", src: "/music/Malcolm Todd - Hesitating.mp3" },
  { name: "Lay Me Down", artist: "Steve Lacy", src: "/music/Steve Lacy - Lay Me Down.mp3" },
];

type MusicContextType = {
  tracks: Track[];
  trackIndex: number;
  isPlaying: boolean;
  volume: number;

  currentTime: number;
  duration: number;

  togglePlay: () => void;
  nextTrack: () => void;
  prevTrack: () => void;
  setVolume: (v: number) => void;
  seek: (time: number) => void;
};

const MusicContext = createContext<MusicContextType | null>(null);

export function MusicProvider({ children }: { children: React.ReactNode }) {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const [trackIndex, setTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.25);

  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const track = tracks[trackIndex];

  // play
  const play = async () => {
    if (!audioRef.current) return;

    const audio = audioRef.current;

    audio.src = track.src;
    audio.volume = volume;

    try {
      await audio.play();
      setIsPlaying(true);
    } catch {
      setIsPlaying(false);
    }
  };

  // pause
  const pause = () => {
    if (!audioRef.current) return;

    audioRef.current.pause();
    setIsPlaying(false);
  };

  // toggle
  const togglePlay = () => {
    if (isPlaying) pause();
    else play();
  };

  // next
  const nextTrack = () => {
    const next = (trackIndex + 1) % tracks.length;
    setTrackIndex(next);

    if (audioRef.current) {
      audioRef.current.src = tracks[next].src;
      audioRef.current.play().then(() => setIsPlaying(true));
    }
  };

  // prev
  const prevTrack = () => {
    const prev = (trackIndex - 1 + tracks.length) % tracks.length;
    setTrackIndex(prev);

    if (audioRef.current) {
      audioRef.current.src = tracks[prev].src;
      audioRef.current.play().then(() => setIsPlaying(true));
    }
  };

  // seek
  const seek = (time: number) => {
    if (!audioRef.current) return;
    audioRef.current.currentTime = time;
  };

  // time sync
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const update = () => {
      setCurrentTime(audio.currentTime);
      setDuration(audio.duration || 0);
    };

    audio.addEventListener("timeupdate", update);
    audio.addEventListener("loadedmetadata", update);

    return () => {
      audio.removeEventListener("timeupdate", update);
      audio.removeEventListener("loadedmetadata", update);
    };
  }, []);

  return (
    <MusicContext.Provider
      value={{
        tracks,
        trackIndex,
        isPlaying,
        volume,
        currentTime,
        duration,
        togglePlay,
        nextTrack,
        prevTrack,
        setVolume,
        seek,
      }}
    >
      <audio ref={audioRef} />
      {children}
    </MusicContext.Provider>
  );
}

export function useMusic() {
  const ctx = useContext(MusicContext);
  if (!ctx) throw new Error("useMusic must be used inside MusicProvider");
  return ctx;
}