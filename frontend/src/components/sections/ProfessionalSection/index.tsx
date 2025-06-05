'use client';

import { FC } from 'react';
import { LogoSection } from './LogoSection';
import { HeroSection } from './HeroSection';
import { CoursesSection } from './CoursesSection';

export const ProfessionalSection: FC = () => {
  return (
    <section className="bg-[#F9F7FE]">
        <LogoSection />
      <div className="mx-10">
        <HeroSection />
      </div>
      <CoursesSection />
    </section>
  );
}; 