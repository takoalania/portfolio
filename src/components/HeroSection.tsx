'use client';

import { FaAnglesDown } from "react-icons/fa6";
import { usePrefersReducedMotion } from '../helpers/hooks';

export default function HeroSection() {
  const prefersReducedMotion = usePrefersReducedMotion();

  const handleScroll = () => {
    const section = document.getElementById('skills');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative z-10 flex flex-col justify-center items-center h-screen text-center px-4 bg-[url('/topography.svg')] bg-center bg-cover bg-no-repeat bg-gray-900">
      {/* Optional: add a semi-transparent overlay */}
      <div className="absolute inset-0 bg-black/30 z-0" />

      {/* Content above overlay */}
      <div className="relative z-10">
        <h1 className="text-5xl sm:text-6xl font-extrabold mb-4 tracking-tight text-white">
          Tamar Alania
        </h1>

        <p className="text-lg sm:text-xl max-w-2xl text-gray-300 mb-6">
          Full‑Stack Developer focused on frontend — crafting scalable, user-centric web experiences using React, TypeScript, Node.js, and modern UI libraries.
        </p>

        <div
          onClick={handleScroll}
          className={`text-gray-400 cursor-pointer ${prefersReducedMotion ? '' : 'animate-bounce'} will-change-transform`}
          aria-label="Scroll to next section"
        >
          <FaAnglesDown className="text-2xl hover:text-white transition" />
        </div>
      </div>
    </section>
  );
}
