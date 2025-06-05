import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { ExerciseCard } from './ExerciseCard';
import Link from 'next/link';
import { useRef } from 'react';

export interface Exercise {
  title: string;
  category: string;
  price: string;
  image: string;
}

interface ExercisesSectionProps {
  exercises?: Exercise[];
  title?: string;
  prevClass?: string;
  nextClass?: string;
  allLink?: string;
  allText?: string;
  bottomTitles?: string[];
  bottomTitlesPosition?: 'under-title' | 'under-alltext';
  noLink?: boolean;
}

const defaultExercises: Exercise[] = [
  {
    title: 'Улучшение динамики и подвижности грудного отдела',
    category: 'ОРТОПЕДИЯ',
    price: '920 ₽/мес',
    image: '/assets/images/services/work.png'
  },
  {
    title: 'Восстановление после травм шейного отдела',
    category: 'ОРТОПЕДИЯ',
    price: '920 ₽/мес',
    image: '/assets/images/services/work.png'
  },
  {
    title: 'Реабилитация после операций на позвоночнике',
    category: 'ОРТОПЕДИЯ',
    price: '920 ₽/мес',
    image: '/assets/images/services/work.png'
  },
  {
    title: 'Лечение межпозвоночной грыжи',
    category: 'ОРТОПЕДИЯ',
    price: '920 ₽/мес',
    image: '/assets/images/services/work.png'
  },
  {
    title: 'Коррекция осанки и сколиоза',
    category: 'ОРТОПЕДИЯ',
    price: '920 ₽/мес',
    image: '/assets/images/services/work.png'
  },
  {
    title: 'Реабилитация после эндопротезирования',
    category: 'ОРТОПЕДИЯ',
    price: '920 ₽/мес',
    image: '/assets/images/services/work.png'
  },
  {
    title: 'Восстановление после спортивных травм',
    category: 'ОРТОПЕДИЯ',
    price: '920 ₽/мес',
    image: '/assets/images/services/work.png'
  }
];

export const ExercisesSection = ({
  exercises = defaultExercises,
  title = 'УПРАЖНЕНИЯ',
  prevClass = 'exercise-prev',
  nextClass = 'exercise-next',
  allLink = '/rehabilitation',
  allText = 'Все 5304 Упражнения →',
  bottomTitles = [],
  bottomTitlesPosition = 'under-alltext',
  noLink = false,
}: ExercisesSectionProps) => {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  const renderBottomTitles = () => {
    if (bottomTitles.length === 0) return null;
    
    return (
      <div className="mt-4 space-y-2">
        {bottomTitles.map((bottomTitle, index) => (
          <div key={index} className="text-[#B6A3D9] text-xl font-bold">
            {bottomTitle}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="ml-10 mr-10">
      <div className="flex items-center justify-between mb-12 pt-10">
        <div className="flex flex-col items-start">
          <h2 className="text-[#3D334A] text-5xl font-light">{title}</h2>
          {bottomTitlesPosition === 'under-title' && renderBottomTitles()}
        </div>
        <div className="flex gap-4">
          <button ref={prevRef} className="w-12 h-12 rounded-xl bg-[#B6A3D9] flex items-center justify-center text-white text-2xl">
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
          <button ref={nextRef} className="w-12 h-12 rounded-xl bg-[#B6A3D9] flex items-center justify-center text-white text-2xl">
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
        </div>
      </div>

      <Swiper
        modules={[Navigation]}
        navigation={{
          prevEl: `.${prevClass}`,
          nextEl: `.${nextClass}`,
        }}
        slidesPerView={4}
        spaceBetween={32}
        className="relative"
      >
        {exercises.map((exercise, index) => (
          <SwiperSlide key={index}>
            <ExerciseCard
              title={exercise.title}
              category={exercise.category}
              price={exercise.price}
              image={exercise.image}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="mt-8">
       {
        noLink ? null :
          <Link href={allLink}>
            <button className="text-[#BCA7E6] hover:text-[#8B7BAA] font-light tracking-wider transition-colors">
              {allText}
            </button>
          </Link>
      }
          
        
        {bottomTitlesPosition === 'under-alltext' && renderBottomTitles()}
      </div>
    </div>
  );
}; 