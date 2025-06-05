import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { ExerciseCard } from './ExerciseCard';
import { ArrowButton } from '@/components/ui/ArrowButton';
import Link from 'next/link';

const exercises = [
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

export const ExercisesSection = () => {
  return (
    <div className="ml-10 mr-10">
      <div className="flex items-center justify-between mb-12">
        <div className="flex items-center">
          <h2 className="text-[#3D334A] text-5xl font-light">УПРАЖНЕНИЯ</h2>
        </div>
        <div className="flex gap-3">
          <ArrowButton direction="left" className="exercise-prev" />
          <ArrowButton direction="right" className="exercise-next" />
        </div>
      </div>

      <Swiper
        modules={[Navigation]}
        navigation={{
          prevEl: '.exercise-prev',
          nextEl: '.exercise-next',
        }}
        slidesPerView={5}
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
        <Link href="/rehabilitation">
          <button className="text-[#BCA7E6] hover:text-[#8B7BAA] font-light tracking-wider transition-colors">
            Все 5304 Упражнения →
          </button>
        </Link>
      </div>
    </div>
  );
}; 