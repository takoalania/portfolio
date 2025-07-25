'use client';

import { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadBasic } from '@tsparticles/basic';

import HeroSection from '@/components/HeroSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import ExperienceSection from '@/components/ExperienceSection';
import ContactSection from '@/components/ContactSection';

export default function HomePage() {
  const particlesInit = useCallback(async (engine: any) => {
    const mod = await import('@tsparticles/engine');
    await loadBasic(mod.tsParticles);
  }, []);

  return (
    <main className="relative min-h-screen text-white overflow-hidden bg-gray-900">
      <Particles
        id="tsparticles"
        init={particlesInit}
        className="absolute inset-0 z-0"
        options={{
          fullScreen: { enable: false },
          background: { color: { value: '#111827' } },
          particles: {
            number: { value: 60 },
            color: { value: '#ffffff' },
            links: { enable: true, distance: 150, color: '#ffffff', opacity: 0.2, width: 1 },
            move: { enable: true, speed: 0.8 },
            size: { value: { min: 1, max: 3 } },
            opacity: { value: 0.3 },
          },
        }}
      />
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <ContactSection />
    </main>
  );
}
