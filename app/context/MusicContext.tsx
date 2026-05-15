"use client";

import {
  createContext,
  useContext,
  useRef,
  useState,
  useEffect,
} from "react";

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
  const [volumeState, setVolumeState] = useState(0.25);

  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const track = tracks[trackIndex];

  // 🎧 INIT AUDIO
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.src = track.src;
    audio.volume = volumeState;
  }, []);

  // 🔄 SYNC TRACK CHANGE
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.src = track.src;
    audio.load();
    audio.volume = volumeState;

    setCurrentTime(0);
  }, [trackIndex]);

  // 🔊 VOLUME
  const setVolume = (v: number) => {
    setVolumeState(v);
    if (audioRef.current) {
      audioRef.current.volume = v;
    }
  };

  // ▶️ PLAY
  const play = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.src = track.src;
    audio.volume = volumeState;

    try {
      await audio.play();
      setIsPlaying(true);
    } catch (err) {
      console.log("Play blocked:", err);
      setIsPlaying(false);
    }
  };

  // ⏸ PAUSE
  const pause = () => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.pause();
    setIsPlaying(false);
  };

  // 🔁 TOGGLE
  const togglePlay = () => {
    if (isPlaying) pause();
    else play();
  };

  // ⏭ NEXT
  const nextTrack = async () => {
    const next = (trackIndex + 1) % tracks.length;
    setTrackIndex(next);

    const audio = audioRef.current;
    if (!audio) return;

    audio.src = tracks[next].src;
    audio.load();

    try {
      await audio.play();
      setIsPlaying(true);
    } catch (err) {
      console.log(err);
    }
  };

  // ⏮ PREV
  const prevTrack = async () => {
    const prev = (trackIndex - 1 + tracks.length) % tracks.length;
    setTrackIndex(prev);

    const audio = audioRef.current;
    if (!audio) return;

    audio.src = tracks[prev].src;
    audio.load();

    try {
      await audio.play();
      setIsPlaying(true);
    } catch (err) {
      console.log(err);
    }
  };

  // ⏩ SEEK
  const seek = (time: number) => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.currentTime = time;
  };

  // ⏱ TIME SYNC
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
        volume: volumeState,
        currentTime,
        duration,
        togglePlay,
        nextTrack,
        prevTrack,
        setVolume,
        seek,
      }}
    >
      <audio ref={audioRef} preload="metadata" />
      {children}
    </MusicContext.Provider>
  );
}

export function useMusic() {
  const ctx = useContext(MusicContext);
  if (!ctx) throw new Error("useMusic must be used inside MusicProvider");
  return ctx;
}
