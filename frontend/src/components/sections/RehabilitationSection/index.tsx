'use client';

import { FC } from 'react';
import { LogoSection } from './LogoSection';
import { HeroSection } from './HeroSection';
import { CategoriesSection } from './CategoriesSection';
import { ExercisesSection } from './ExercisesSection';
import 'swiper/css';
import 'swiper/css/navigation';

export const RehabilitationSection: FC = () => {
  return (
    <section className="py-16 bg-[#F9F7FE]">
      <LogoSection />
      <HeroSection />
      <CategoriesSection />
      <ExercisesSection />
    </section>
  );
}; 