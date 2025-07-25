'use client';

import { motion } from 'framer-motion';
import { FaAnglesDown } from "react-icons/fa6";
import DiagonalLinesCanvas from './DiagonalLinesCanvas';

export default function HeroSection() {
  const handleScroll = () => {
    const section = document.getElementById('skills');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative z-10 flex flex-col justify-center items-center h-screen text-center px-4">
      <DiagonalLinesCanvas />

      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl sm:text-6xl font-extrabold mb-4 tracking-tight"
      >
        Tamar Alania
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-lg sm:text-xl max-w-2xl text-gray-300 mb-6"
      >
        Full‑Stack Developer focused on frontend — crafting scalable, user-centric web experiences using React, TypeScript, Node.js, and modern UI libraries.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="text-gray-400 cursor-pointer animate-bounce"
        onClick={handleScroll}
        aria-label="Scroll to next section"
      >
        <FaAnglesDown className="text-2xl hover:text-white transition" />
      </motion.div>
    </section>
  );
}
