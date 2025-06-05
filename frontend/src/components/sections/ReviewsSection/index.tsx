import { Typography } from '@/components/ui/Typography';
import { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
// import Image from 'next/image';

interface Review {
  name: string;
  image: string;
  videoUrl: string;
}

interface ReviewsSectionProps {
  title: string;
  reviews: Review[];
}

export const ReviewsSection: FC<ReviewsSectionProps> = ({ title, reviews }) => {
  return (
    <section className="bg-[#F9F7FE] rounded-[20px] mb-5 overflow-hidden px-8 py-10">
      <div className="flex items-center justify-between mb-6">
        <Typography variant='h1-bowler' className="text-[#3D334A]">{title}</Typography>
        <div className="flex gap-3 ml-auto">
          <button className="w-10 h-10 rounded-xl bg-[#B6A3D9] flex items-center justify-center text-white hover:bg-[#846FA0] transition-all review-prev">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
          <button className="w-10 h-10 rounded-xl bg-[#B6A3D9] flex items-center justify-center text-white hover:bg-[#846FA0] transition-all review-next">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
        </div>
      </div>
      <Swiper
        modules={[Navigation]}
        navigation={{
          prevEl: '.review-prev',
          nextEl: '.review-next',
        }}
        spaceBetween={20}
        slidesPerView="auto"
        className="pb-2"
      >
        {reviews.map((review, idx) => (
          <SwiperSlide key={idx} className="!w-[300px]">
            <div className="relative rounded-[20px] overflow-hidden group shadow-md min-w-[300px] max-w-[300px] h-[430px] flex-shrink-0 bg-white">
              <img
                src={review.image}
                alt={review.name}
                width={300}
                height={430}
                className="w-[300px] h-[430px] object-cover"
              />
              {/* Play Button Overlay */}
              <a
                href={review.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 flex items-center justify-center group-hover:bg-black/20 transition-all"
              >
                <span className="w-16 h-16 bg-white/60 rounded-full flex items-center justify-center">
                  <svg width="40" height="40" viewBox="0 0 48 48" fill="none">
                    <circle cx="24" cy="24" r="24" fill="none" />
                    <path d="M20 16L32 24L20 32V16Z" fill="#3D334A" />
                  </svg>
                </span>
              </a>
              {/* Name Overlay */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[90%] bg-gradient-to-r from-[#A3A3A3]/80 to-[#B6A3D9]/80 rounded-xl py-2 text-center text-white text-lg font-medium backdrop-blur-md">
                {review.name}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};