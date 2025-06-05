import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { CategoryDropdown } from './CategoryDropdown';
import { ArrowButton } from '@/components/ui/ArrowButton';
import Link from 'next/link';

const categories = [
  { title: 'ОРТОПЕДИЯ', image: '/assets/images/services/category.png' },
  { title: 'НЕВРОЛОГИЯ', image: '/assets/images/services/category.png' },
  { title: 'АФАЗИЯ И ДИЗАРТРИЯ', image: '/assets/images/services/category.png' },
  { title: 'КАРДИОЛОГИЯ', image: '/assets/images/services/category.png' },
  { title: 'ПУЛЬМОНОЛОГИЯ', image: '/assets/images/services/category.png' },
  { title: 'ПЕДИАТРИЯ', image: '/assets/images/services/category.png' },
  { title: 'ГЕРИАТРИЯ', image: '/assets/images/services/category.png' },
];

const orthopedicsItems = [
  'ШЕЙНЫЙ ОТДЕЛ ПОЗВОНОЧНИКА',
  'ГРУДНОЙ ОТДЕЛ ПОЗВОНОЧНИКА',
  'ПРОБЛЕМЫ ВЕРХНИХ КОНЕЧНОСТЕЙ',
  'ПРОБЛЕМЫ НИЖНИХ КОНЕЧНОСТЕЙ'
];

export const CategoriesSection = () => {
  return (
    <div className="mb-20 ml-10 mr-10">
      <div className="flex items-center justify-between mb-12">
        <div className="flex items-center">
          <h2 className="text-[#3D334A] text-4xl font-light">КАТЕГОРИИ</h2>
        </div>
        <div className="flex gap-3">
          <ArrowButton direction="left" className="category-prev" />
          <ArrowButton direction="right" className="category-next" />
        </div>
      </div>

      <Swiper
        modules={[Navigation]}
        navigation={{
          prevEl: '.category-prev',
          nextEl: '.category-next',
        }}
        slidesPerView={3}
        spaceBetween={24}
        className="relative"
      >
        {categories.map((category, index) => (
          <SwiperSlide key={index}>
            <CategoryDropdown
              title={category.title}
              image={category.image}
              items={orthopedicsItems}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="mt-8">
        <Link href="/rehabilitation">
          <button className="text-[#BCA7E6] hover:text-[#8B7BAA] font-light tracking-wider transition-colors">
            Все {categories.length} Категорий →
          </button>
        </Link>
      </div>
    </div>
  );
}; 