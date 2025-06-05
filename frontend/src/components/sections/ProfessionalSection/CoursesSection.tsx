import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { CourseCard } from './CourseCard';
import { ArrowButton } from '@/components/ui/ArrowButton';
import 'swiper/css';
import 'swiper/css/navigation';

const courses = [
  {
    id: 1,
    title: 'Курсы и мастер-классы для опытных терапевтов. Практикум по лечению ортопедических проблем',
    description: 'С советами по безопасности, которым нужно следовать до и после перелома Кристен Гасник',
    price: '4023 $',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 2,
    title: 'Курсы и мастер-классы для опытных терапевтов. Практикум по лечению ортопедических проблем',
    description: 'С советами по безопасности, которым нужно следовать до и после перелома Кристен Гасник',
    price: '4023 $',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 3,
    title: 'Курсы и мастер-классы для опытных терапевтов. Практикум по лечению ортопедических проблем',
    description: 'С советами по безопасности, которым нужно следовать до и после перелома Кристен Гасник',
    price: '4023 $',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80'
  }
];

export const CoursesSection = () => {
  return (
    <div className="mx-10 py-12">
      <div className="flex items-center justify-between mb-8">
        <h3 className="text-3xl text-[#3D334A] font-light">Курсы</h3>
        <div className="flex items-center gap-4">
          <ArrowButton direction="left" className="prev-button" />
          <ArrowButton direction="right" className="next-button" />
        </div>
      </div>

      <div className="overflow-hidden">
        <Swiper
          modules={[Navigation]}
          navigation={{
            prevEl: '.prev-button',
            nextEl: '.next-button',
          }}
          spaceBetween={24}
          slidesPerView="auto"
          className="professional-swiper -mr-[345px]"
        >
          {courses.map((course) => (
            <SwiperSlide key={course.id} className="!w-auto">
              <CourseCard {...course} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="flex justify-end mt-6">
        <button className="text-[#8066B9]/70 hover:text-[#8066B9] transition-colors text-sm font-light">
          ВСЕ 439 КУРСОВ →
        </button>
      </div>
    </div>
  );
}; 