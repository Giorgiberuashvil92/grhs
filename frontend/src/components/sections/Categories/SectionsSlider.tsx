import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import Link from 'next/link';
import 'swiper/css';
import 'swiper/css/navigation';

const sections = [
  {
    id: 1,
    slug: 'cervical-spine',
    category: 'ОРТОПЕДИЯ',
    title: 'ШЕЙНЫЙ ОТДЕЛ ПОЗВОНОЧНИКА',
    image: 'https://plus.unsplash.com/premium_photo-1661779394380-e372d6a1f198?q=80&w=1200&auto=format&fit=crop',
    complexes: 12,
  },
  {
    id: 2,
    slug: 'thoracic-spine',
    category: 'ОРТОПЕДИЯ',
    title: 'ГРУДНОЙ ОТДЕЛ ПОЗВОНОЧНИКА',
    image: 'https://plus.unsplash.com/premium_photo-1661779394380-e372d6a1f198?q=80&w=1200&auto=format&fit=crop',
    complexes: 12,
  },
  {
    id: 3,
    slug: 'limb-problems',
    category: 'ОРТОПЕДИЯ',
    title: 'ПРОБЛЕМЫ КОНЕЧНОСТЕЙ',
    image: 'https://plus.unsplash.com/premium_photo-1661749982338-892452fc5bcb?q=80&w=1200&auto=format&fit=crop',
    complexes: 8,
  },
  {
    id: 4,
    slug: 'back-problems',
    category: 'ОРТОПЕДИЯ',
    title: 'СПИНА',
    image: 'https://plus.unsplash.com/premium_photo-1661962967554-b2d04b1ddaa8?q=80&w=1200&auto=format&fit=crop',
    complexes: 10,
  },
];

export function SectionsSlider() {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  return (
    <section className="w-full bg-[#F7F6FC] rounded-3xl p-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="font-bowler text-4xl text-[#3D334A] mb-2">РАЗДЕЛЫ</h2>
          <a href="#" className="text-[#B6A3D9] text-xl font-bold hover:underline">СМОТРЕТЬ ВСЕ →</a>
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
      {/* Swiper */}
      <Swiper
        modules={[Navigation]}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onInit={(swiper) => {
          if (swiper.params.navigation && typeof swiper.params.navigation !== 'boolean') {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        spaceBetween={32}
        slidesPerView={2.5}
        className="w-full"
        breakpoints={{
          640: { slidesPerView: 1.2 },
          1024: { slidesPerView: 2.5 },
        }}
      >
        {sections.map((section) => (
          <SwiperSlide key={section.id}>
            <Link href={`/categories/${section.slug}`} className="block h-full">
              <div className="bg-white rounded-2xl shadow p-4 flex flex-col h-full min-h-[320px] hover:shadow-lg transition-shadow cursor-pointer">
                <div className="relative w-full h-48 rounded-xl overflow-hidden mb-4">
                  <img
                    src={section.image}
                    alt={section.title}
                    className="object-cover w-full h-full"
                  />
                  <span className="absolute top-4 left-4 bg-[#E5DDF2] text-[#3D334A] font-bold rounded-lg px-6 py-2 text-lg" style={{fontFamily: 'Bowler'}}>ОРТОПЕДИЯ</span>
                </div>
                <div className="flex-1 flex flex-col justify-between">
                  <h3 className="font-bowler text-2xl text-[#3D334A] mb-2 leading-tight">
                    {section.title}
                  </h3>
                  <span className="text-[#B6A3D9] text-lg font-bold mt-auto text-right block">
                    {section.complexes} комплексов
                  </span>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
} 