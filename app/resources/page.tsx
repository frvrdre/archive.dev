"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import MusicPlayer from "../components/MusicPlayer";

type Resource = {
  name: string;
  category: string;
  description: string;
  url: string;
  domain: string;
  tags: string[];
  use: string;
  bestWith: string[];
};

const resources: Resource[] = [
  // ================= YOUR ORIGINALS (PRESERVED) =================
  {
    name: "CodePen",
    category: "UI / Inspiration",
    description: "Frontend playground for HTML, CSS, JS experiments.",
    url: "https://codepen.io",
    domain: "codepen.io",
    tags: ["CSS", "JS", "UI"],
    use: "Quick UI prototyping and experiments.",
    bestWith: ["React", "Tailwind CSS"],
  },
  {
    name: "Frontend Mentor",
    category: "Practice",
    description: "Real-world frontend challenges.",
    url: "https://frontendmentor.io",
    domain: "frontendmentor.io",
    tags: ["Practice"],
    use: "Build real projects to improve skills.",
    bestWith: ["React", "Next.js"],
  },
  {
    name: "Awwwards",
    category: "UI Inspiration",
    description: "Award-winning web design showcase.",
    url: "https://awwwards.com",
    domain: "awwwards.com",
    tags: ["Design"],
    use: "High-end UI inspiration.",
    bestWith: ["Dribbble"],
  },
  {
    name: "Uiverse",
    category: "UI Components",
    description: "Open-source UI components.",
    url: "https://uiverse.io",
    domain: "uiverse.io",
    tags: ["UI"],
    use: "Prebuilt animated components.",
    bestWith: ["Tailwind CSS"],
  },
  {
    name: "GSAP",
    category: "Animation",
    description: "High-performance animation engine.",
    url: "https://gsap.com",
    domain: "gsap.com",
    tags: ["Animation"],
    use: "Advanced motion and timelines.",
    bestWith: ["JavaScript", "Three.js"],
  },
  {
    name: "Three.js",
    category: "3D",
    description: "3D graphics for the web.",
    url: "https://threejs.org",
    domain: "threejs.org",
    tags: ["WebGL"],
    use: "3D scenes and interactive visuals.",
    bestWith: ["GSAP", "React"],
  },
  {
    name: "Tailwind CSS",
    category: "Styling",
    description: "Utility-first CSS framework.",
    url: "https://tailwindcss.com",
    domain: "tailwindcss.com",
    tags: ["CSS"],
    use: "Fast UI development.",
    bestWith: ["React", "Next.js"],
  },
  {
    name: "shadcn/ui",
    category: "UI",
    description: "Modern React UI components.",
    url: "https://ui.shadcn.com",
    domain: "ui.shadcn.com",
    tags: ["React"],
    use: "Accessible UI components.",
    bestWith: ["Tailwind CSS"],
  },
  {
    name: "DaisyUI",
    category: "UI",
    description: "Tailwind component library.",
    url: "https://daisyui.com",
    domain: "daisyui.com",
    tags: ["CSS"],
    use: "Prebuilt UI themes.",
    bestWith: ["Tailwind CSS"],
  },
  {
    name: "Vercel",
    category: "Hosting",
    description: "Frontend deployment platform.",
    url: "https://vercel.com",
    domain: "vercel.com",
    tags: ["Deploy"],
    use: "Deploy Next.js apps instantly.",
    bestWith: ["Next.js"],
  },
  {
    name: "Netlify",
    category: "Hosting",
    description: "Static site hosting.",
    url: "https://netlify.com",
    domain: "netlify.com",
    tags: ["Deploy"],
    use: "Frontend deployments.",
    bestWith: ["React"],
  },
  {
    name: "Supabase",
    category: "Backend",
    description: "Open-source Firebase alternative.",
    url: "https://supabase.com",
    domain: "supabase.com",
    tags: ["DB"],
    use: "Auth + database backend.",
    bestWith: ["Next.js"],
  },
  {
    name: "freeCodeCamp",
    category: "Learning",
    description: "Free coding education.",
    url: "https://freecodecamp.org",
    domain: "freecodecamp.org",
    tags: ["Learn"],
    use: "Structured learning path.",
    bestWith: ["The Odin Project"],
  },
  {
    name: "The Odin Project",
    category: "Learning",
    description: "Full-stack curriculum.",
    url: "https://theodinproject.com",
    domain: "theodinproject.com",
    tags: ["Learn"],
    use: "Project-based learning.",
    bestWith: ["freeCodeCamp"],
  },
  {
    name: "MDN Docs",
    category: "Docs",
    description: "Web development documentation.",
    url: "https://developer.mozilla.org",
    domain: "developer.mozilla.org",
    tags: ["Docs"],
    use: "Official reference.",
    bestWith: ["JavaScript"],
  },

  // ================= NEW EXPANSION =================

  {
    name: "React",
    category: "Frontend",
    description: "UI library for building components.",
    url: "https://react.dev",
    domain: "react.dev",
    tags: ["JS"],
    use: "Dynamic interfaces.",
    bestWith: ["Next.js", "Tailwind CSS"],
  },
  {
    name: "Next.js",
    category: "Framework",
    description: "Full-stack React framework.",
    url: "https://nextjs.org",
    domain: "nextjs.org",
    tags: ["React"],
    use: "SEO + full apps.",
    bestWith: ["React", "Vercel"],
  },
  {
    name: "TypeScript",
    category: "Language",
    description: "Typed JavaScript.",
    url: "https://typescriptlang.org",
    domain: "typescriptlang.org",
    tags: ["JS"],
    use: "Safer codebases.",
    bestWith: ["React"],
  },
  {
    name: "Node.js",
    category: "Backend",
    description: "JavaScript runtime.",
    url: "https://nodejs.org",
    domain: "nodejs.org",
    tags: ["Backend"],
    use: "Servers + APIs.",
    bestWith: ["Express"],
  },
  {
    name: "Express",
    category: "Backend",
    description: "Node.js framework.",
    url: "https://expressjs.com",
    domain: "expressjs.com",
    tags: ["API"],
    use: "REST APIs.",
    bestWith: ["Node.js"],
  },
  {
    name: "MongoDB",
    category: "Database",
    description: "NoSQL database.",
    url: "https://mongodb.com",
    domain: "mongodb.com",
    tags: ["DB"],
    use: "Flexible storage.",
    bestWith: ["Node.js"],
  },
  {
    name: "Firebase",
    category: "Backend",
    description: "Google backend platform.",
    url: "https://firebase.google.com",
    domain: "firebase.google.com",
    tags: ["DB"],
    use: "Auth + hosting.",
    bestWith: ["React"],
  },
  {
    name: "Framer Motion",
    category: "Animation",
    description: "React animation library.",
    url: "https://framer.com/motion",
    domain: "framer.com",
    tags: ["UI"],
    use: "Smooth UI animations.",
    bestWith: ["React"],
  },
  {
    name: "Postman",
    category: "API Tools",
    description: "API testing tool.",
    url: "https://postman.com",
    domain: "postman.com",
    tags: ["API"],
    use: "Testing APIs.",
    bestWith: ["Express"],
  },
  {
    name: "GitHub",
    category: "Dev Tools",
    description: "Code hosting platform.",
    url: "https://github.com",
    domain: "github.com",
    tags: ["Git"],
    use: "Version control.",
    bestWith: ["VS Code"],
  },
  {
    name: "VS Code",
    category: "Editor",
    description: "Code editor.",
    url: "https://code.visualstudio.com",
    domain: "visualstudio.com",
    tags: ["IDE"],
    use: "Main dev environment.",
    bestWith: ["GitHub"],
  },
  {
  name: "Astro",
  category: "Framework",
  description: "Modern static site builder with island architecture.",
  url: "https://astro.build",
  domain: "astro.build",
  tags: ["Static", "JS"],
  use: "Fast content-heavy websites.",
  bestWith: ["Tailwind CSS", "React"],
},
{
  name: "Zustand",
  category: "State Management",
  description: "Minimal React state library.",
  url: "https://zustand-demo.pmnd.rs",
  domain: "pmnd.rs",
  tags: ["State"],
  use: "Lightweight global state.",
  bestWith: ["React"],
},
{
  name: "Redux Toolkit",
  category: "State Management",
  description: "Predictable state container for JS apps.",
  url: "https://redux-toolkit.js.org",
  domain: "redux-toolkit.js.org",
  tags: ["State"],
  use: "Complex app state handling.",
  bestWith: ["React"],
},
{
  name: "Axios",
  category: "Networking",
  description: "HTTP client for APIs.",
  url: "https://axios-http.com",
  domain: "axios-http.com",
  tags: ["API"],
  use: "Fetching backend data.",
  bestWith: ["React", "Node.js"],
},
{
  name: "tRPC",
  category: "Backend",
  description: "End-to-end typesafe APIs.",
  url: "https://trpc.io",
  domain: "trpc.io",
  tags: ["API", "TS"],
  use: "Type-safe fullstack communication.",
  bestWith: ["Next.js", "TypeScript"],
},
{
  name: "Prisma",
  category: "Database",
  description: "Modern ORM for Node.js.",
  url: "https://prisma.io",
  domain: "prisma.io",
  tags: ["DB"],
  use: "Database abstraction layer.",
  bestWith: ["PostgreSQL", "Next.js"],
},
{
  name: "PostgreSQL",
  category: "Database",
  description: "Powerful relational database.",
  url: "https://postgresql.org",
  domain: "postgresql.org",
  tags: ["DB"],
  use: "Structured data storage.",
  bestWith: ["Prisma", "Node.js"],
},
{
  name: "Docker",
  category: "DevOps",
  description: "Containerization platform.",
  url: "https://docker.com",
  domain: "docker.com",
  tags: ["DevOps"],
  use: "Isolated app environments.",
  bestWith: ["Node.js", "Backend APIs"],
},
{
  name: "GraphQL",
  category: "API",
  description: "Flexible query language for APIs.",
  url: "https://graphql.org",
  domain: "graphql.org",
  tags: ["API"],
  use: "Efficient data fetching.",
  bestWith: ["React", "Apollo"],
},
{
  name: "Sass",
  category: "Styling",
  description: "CSS preprocessor.",
  url: "https://sass-lang.com",
  domain: "sass-lang.com",
  tags: ["CSS"],
  use: "Advanced styling system.",
  bestWith: ["CSS", "React"],
},
  {
  name: "Coolors",
  category: "Styling",
  description: "Color theme selector.",
  url: "hhttps://coolors.co/",
  domain: "coolors.co",
  tags: ["CSS"],
  use: "Advanced themes.",
  bestWith: ["CSS", "React"],
},
];

const getIcon = (domain: string) =>
  `https://www.google.com/s2/favicons?domain=${domain}&sz=64`;

export default function ResourcesPage() {
  const [selected, setSelected] = useState<Resource | null>(null);

  const find = (name: string) =>
    resources.find((r) => r.name === name);

  return (
    <main className="min-h-screen bg-black text-white">

      <Navbar />
      <MusicPlayer />

      <div className="pt-28 text-center">
        <h1 className="text-5xl font-bold">Dev Archive</h1>
        <p className="text-zinc-500 mt-2">50+ tools for modern dev</p>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 p-6 mt-10">

        {resources.map((item) => (
          <button
            key={item.name}
            onClick={() => setSelected(item)}
            className="bg-zinc-900 border border-white/10 rounded-xl p-4 hover:scale-105 transition text-left cursor-pointer"
          >
            <img src={getIcon(item.domain)} className="w-8 h-8 mb-3 rounded" />
            <h2 className="font-bold">{item.name}</h2>
            <p className="text-xs text-zinc-500">{item.category}</p>
          </button>
        ))}

      </div>

      {/* MODAL */}
      {selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">

          <div
            onClick={() => setSelected(null)}
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
          />

          <div className="relative bg-zinc-950 border border-white/10 rounded-2xl p-6 w-[92%] md:w-[600px]">

            <div className="flex items-center gap-3 mb-3">
              <img src={getIcon(selected.domain)} className="w-10 h-10 rounded" />
              <div>
                <h2 className="text-xl font-bold">{selected.name}</h2>
                <p className="text-xs text-zinc-500">{selected.category}</p>
              </div>
            </div>

            <p className="text-zinc-400 mb-4">{selected.description}</p>

            <p className="text-sm mb-4 text-zinc-300">{selected.use}</p>

            {/* TAGS */}
            <div className="flex flex-wrap gap-2 mb-4">
              {selected.tags.map((t) => (
                <span key={t} className="text-xs px-2 py-1 bg-white/10 rounded-full">
                  {t}
                </span>
              ))}
            </div>

            {/* BEST WITH */}
            <div className="flex flex-wrap gap-2 mb-5">
              {selected.bestWith.map((name) => {
                const match = find(name);
                return (
                  <button
                    key={name}
                    onClick={() => match && setSelected(match)}
                    className="text-xs px-2 py-1 bg-white/5 hover:bg-white/20 rounded-full cursor-pointer"
                  >
                    {name}
                  </button>
                );
              })}
            </div>

            <a
              href={selected.url}
              target="_blank"
              className="block text-center bg-white text-black py-2 rounded-lg font-semibold hover:scale-105 transition"
            >
              Visit
            </a>

          </div>
        </div>
      )}

    </main>
  );
}
