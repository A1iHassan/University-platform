import React from "react";
import { Link } from "react-router";

const BACKGROUND_IMAGES: string[] = [
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1600&q=80",
];

const FADE_INTERVAL_MS = 5000;

const HeroSection = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % BACKGROUND_IMAGES.length);
    }, FADE_INTERVAL_MS);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="h-[80svh] w-full relative overflow-hidden">
      {/* Crossfading background layers */}
      {BACKGROUND_IMAGES.map((src, index) => (
        <img
          key={src}
          src={src}
          alt=""
          aria-hidden="true"
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-[1500ms] ease-in-out ${
            index === activeIndex ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Darkening overlay for text legibility */}
      <div className="absolute inset-0 bg-slate-950/60" />

      {/* Content grid */}
      <div className="relative z-10 grid h-full w-full grid-cols-2 grid-rows-2 gap-6 px-10 py-10 md:px-16 md:py-14">
        <p className="col-start-1 row-span-2 flex items-center text-3xl font-semibold leading-snug text-white md:text-5xl">
          Build something the world hasn&apos;t seen yet.
        </p>

        <div className="col-start-2 row-start-2 flex items-end justify-end gap-4">
          <Link
            to={{pathname: ""}}
            className="rounded-md bg-indigo-500 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-indigo-400"
          >
            Get Started
          </Link>
          <Link
            to={{pathname: ""}}
            className="rounded-md border border-white/30 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-white/10"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
