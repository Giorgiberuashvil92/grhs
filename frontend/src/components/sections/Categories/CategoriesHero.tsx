'use client';

import { BookIcon, PulseIcon, VideoIcon } from './CategoryIcons';

interface CategoriesHeroProps {
  title?: string;
  sections?: number;
  complexes?: number;
  exercises?: number;
  backgroundImage?: string;
}

export function CategoriesHero({ 
  title = "Ортопедия",
  sections = 6,
  complexes = 36,
  exercises = 125,
  backgroundImage = "/assets/images/backgrounds/Subtract.png"
}: CategoriesHeroProps) {
  return (
    <section
      className="relative w-full min-h-[818px] flex items-end bg-cover bg-center"
      style={{ 
        overflow: "hidden",
        backgroundImage: `url('${backgroundImage}')`
      }}
    >
      <div className="flex flex-col items-start gap-6 p-8 pb-12 w-full max-w-4xl">
        {/* ზედა სამი პატარა ბლოკი */}
        <div className="flex gap-4 mb-2" id="category-stats-row">
          <div className="flex items-center bg-[rgba(61,51,74,0.2)] rounded-2xl backdrop-blur-[10px] px-6 py-4 min-w-[180px]">
            <div className="flex items-center justify-center w-12 h-11 bg-white/20 rounded-xl mr-3">
              <BookIcon />
            </div>
            <span className="font-bold text-white text-[20px]">{sections} разделов</span>
          </div>
          <div className="flex items-center bg-[rgba(61,51,74,0.2)] rounded-2xl backdrop-blur-[10px] px-6 py-4 min-w-[180px]">
            <div className="flex items-center justify-center w-12 h-11 bg-white/20 rounded-xl mr-3">
              <PulseIcon />
            </div>
            <span className="font-bold text-white text-[20px]">{complexes} комплексов</span>
          </div>
          <div className="flex items-center bg-[rgba(61,51,74,0.2)] rounded-2xl backdrop-blur-[10px] px-6 py-4 min-w-[180px]">
            <div className="flex items-center justify-center w-12 h-11 bg-white/20 rounded-xl mr-3">
              <VideoIcon />
            </div>
            <span className="font-bold text-white text-[20px]">{exercises} упражнений</span>
          </div>
        </div>
        {/* დიდი ბლოკი კატეგორიის სახელით */}
        <div className="bg-[rgba(61,51,74,0.3)] rounded-2xl backdrop-blur-[10px] px-10 py-8" style={{width: 'fit-content', minWidth: '100%'}}>
          <h1
            className="font-bowler text-4xl md:text-5xl text-white"
            style={{
              letterSpacing: "-0.03em",
              lineHeight: "120%"
            }}
          >
            {title}
          </h1>
        </div>
      </div>
    </section>
  );
} 