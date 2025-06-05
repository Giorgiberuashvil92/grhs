'use client';

import { FC } from 'react';
import { BlogSection } from './BlogSection';
import { LogoSection } from './LogoSection';

interface MediaSectionProps {
  showLogoSection?: boolean;
  blogTitle?: string;
  bgColor?: string;
  rounded?: string;
  className?: string;
}

export const MediaSection: FC<MediaSectionProps> = ({
  showLogoSection = true,
  blogTitle = 'Блог',
  bgColor = '#F9F7FE',
  rounded = 'rounded-3xl',
  className = '',
}) => {
  return (
    <section
      className={`mb-5 overflow-hidden ${rounded} ${className}`}
      style={{ background: bgColor }}
    >
      {showLogoSection && <LogoSection />}
      <div className="px-16 py-10">
        <h2 className="text-[42px] font-light mb-8 h2-bowler text-[#3D334A]">{blogTitle}</h2>
        <BlogSection />
        <a href="#" className="block text-[#846FA0] text-xl mt-8 hover:opacity-80 transition-opacity">ВСЕ 439 СТАТЕЙ →</a>
      </div>
    </section>
  );
}; 