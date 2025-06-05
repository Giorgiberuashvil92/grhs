'use client';

import { FC } from 'react';
import { BlogSection } from './BlogSection';
import { LogoSection } from './LogoSection';

export const MediaSection: FC = () => {
  return (
    <section className="bg-white rounded-[20px] mb-5 overflow-hidden">
      <LogoSection />
      <div className="px-16 py-10">
        <h2 className="text-[42px] font-light mb-8 h2-bowler">Блог</h2>
        <BlogSection />
        <a href="#" className="block text-[#846FA0] text-xl mt-8 hover:opacity-80 transition-opacity">ВСЕ 439 СТАТЕЙ →</a>
      </div>
    </section>
  );
}; 