import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { BlogPost } from './BlogPost';
import { ArrowButton } from '@/components/ui/ArrowButton';
import 'swiper/css';
import 'swiper/css/navigation';

const posts = [
  {
    title: 'Ранние признаки рассеянного склероза',
    description: 'В результате повреждения миелина нервные сигналы не могут быстро и эффективно передаваться между ЦНС и остальным телом. Это может привести к различным симптомам, таким как нечеткость зрения, боль, необычные ощущения, мышечная слабость и многим другим аномальным симптомам.',
    image: 'https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?q=80&w=2940&auto=format&fit=crop',
    category: 'ОРТОПЕДИЯ'
  },
  {
    title: 'Как физиотерапия остеопороза снижает риск переломов',
    description: 'Физиотерапия при остеопорозе включает специальные упражнения, которые помогают укрепить кости и мышцы, улучшить баланс и координацию, что значительно снижает риск падений и переломов.',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2940&auto=format&fit=crop',
    category: 'ОРТОПЕДИЯ'
  },
  {
    title: 'Современные методы лечения артрита',
    description: 'Новые подходы в физиотерапии артрита сочетают традиционные методы с инновационными технологиями, что позволяет значительно улучшить подвижность суставов и уменьшить болевой синдром.',
    image: 'https://images.unsplash.com/photo-1666214280557-f1b5022eb634?q=80&w=2940&auto=format&fit=crop',
    category: 'ОРТОПЕДИЯ'
  },
  {
    title: 'Реабилитация после эндопротезирования',
    description: 'Правильно подобранная программа реабилитации после замены сустава помогает быстрее восстановить подвижность и вернуться к привычному образу жизни.',
    image: 'https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?q=80&w=2940&auto=format&fit=crop',
    category: 'ОРТОПЕДИЯ'
  },
  {
    title: 'Лечение и профилактика сколиоза',
    description: 'Современные методики коррекции осанки и лечения сколиоза позволяют достичь значительных результатов без хирургического вмешательства.',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2940&auto=format&fit=crop',
    category: 'ОРТОПЕДИЯ'
  },
  {
    title: 'Восстановление после травм позвоночника',
    description: 'Комплексный подход к реабилитации после травм позвоночника включает физиотерапию, массаж и специальные упражнения.',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2940&auto=format&fit=crop',
    category: 'ОРТОПЕДИЯ'
  }
];

export const BlogSection = () => {
  return (
    <div className="relative">
      <div className="absolute right-0 -top-16 flex gap-3 z-10">
        <ArrowButton direction="left" className="blog-prev" />
        <ArrowButton direction="right" className="blog-next" />
      </div>

      <Swiper
        modules={[Navigation]}
        navigation={{
          prevEl: '.blog-prev',
          nextEl: '.blog-next',
        }}
        slidesPerView={1}
        spaceBetween={24}
        className="w-full"
      >
        {Array.from({ length: Math.ceil(posts.length / 5) }).map((_, slideIndex) => (
          <SwiperSlide key={slideIndex}>
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Large first post */}
              <div className="w-full lg:flex-1 max-w-[690px]">
                <BlogPost {...posts[slideIndex * 5]} isLarge />
              </div>

              {/* Smaller posts grid */}
              <div className="w-full lg:flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6 auto-rows-fr">
                {posts.slice(slideIndex * 5 + 1, slideIndex * 5 + 5).map((post, index) => (
                  <div className="w-full h-full" key={index}>
                    <BlogPost {...post} />
                  </div>
                ))}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}; 