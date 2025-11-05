'use client';

import { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadBasic } from '@tsparticles/basic';

import HeroSection from '@/components/HeroSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import ExperienceSection from '@/components/ExperienceSection';
import ContactSection from '@/components/ContactSection';
import { usePrefersReducedMotion } from 'framer-motion';

export default function HomePage() {
  const prefersReducedMotion = usePrefersReducedMotion();
  
  const particlesInit = useCallback(async (engine: any) => {
    const mod = await import('@tsparticles/engine');
    await loadBasic(mod.tsParticles);
  }, []);

  return (
    <main className="relative min-h-screen text-white overflow-hidden bg-gray-900">
      {!prefersReducedMotion ? (
        <Particles
          id="tsparticles"
          init={particlesInit}
          className="absolute inset-0 z-0"
          options={{
            fullScreen: { enable: false },
            background: { color: { value: '#111827' } },
            particles: {
              number: { value: 20, density: { enable: true, area: 800 } },
              size: { value: 1 },
              move: { enable: true, speed: 0.5 },
            },
          }}
        />
      ) : (
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-gray-800 to-gray-900" />
      )}
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <ContactSection />
    </main>
  );
}
