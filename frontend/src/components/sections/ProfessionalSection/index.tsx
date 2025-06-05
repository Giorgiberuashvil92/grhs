'use client';

import { FC } from 'react';
import { LogoSection } from './LogoSection';
import { HeroSection } from './HeroSection';
import { CoursesSection } from './CoursesSection';

interface ProfessionalSectionProps {
  showLogoSection?: boolean;
  bgColor?: string;
  rounded?: string;
  className?: string;
}

export const ProfessionalSection: FC<ProfessionalSectionProps> = ({
  showLogoSection = true,
  bgColor = '#F9F7FE',
  rounded = 'rounded-3xl',
  className = '',
}) => {
  return (
    <section className={`${rounded} ${className}`} style={{ background: bgColor }}>
      {showLogoSection && <LogoSection />}
      <div className="mx-10 pt-10">
        <HeroSection />
      </div>
      <CoursesSection />
    </section>
  );
}; 