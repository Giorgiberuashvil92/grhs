'use client';

import { Navbar } from '@/components/layout/Navbar';
import { Hero } from '@/components/sections/Hero/Hero';
import { RehabilitationSection } from '@/components/sections/RehabilitationSection';
import { SubscriptionSection } from '@/components/sections/SubscriptionSection';
import { ProfessionalSection } from '@/components/sections/ProfessionalSection';
import { MediaSection } from '@/components/sections/MediaSection';
import { MarketplaceSection } from '@/components/sections/MarketplaceSection';
import { TestSection } from '@/components/sections/TestSection';
import { PlatformSection } from '@/components/sections/PlatformSection';
import { ReviewsSection } from '@/components/sections/ReviewsSection';
import { SurveySection } from '@/components/sections/SurveySection';
import { Footer } from '@/components/layout/Footer';
// import { Services } from '@/components/sections/Services';

export default function Home() {
  return (
    <div className=" bg-white min-h-screen p-5 bg-main-gradient">
      <main className=" rounded-[20px] min-h-[calc(100vh-40px)] overflow-hidden">
        <Navbar />
        <Hero />
        {/* <Services /> / */}
        <RehabilitationSection />
        <SubscriptionSection />
        <ProfessionalSection />
        <MediaSection />
        <MarketplaceSection />
        <TestSection title="Приобретите подписку для получения доступа к контенту платформы" buttonText="ПРОЙТИ ТЕСТИРОВАНИЕ" />  
        <PlatformSection />
        <ReviewsSection
          title="Отзывы о GRS"
          reviews={[
            {
              name: 'Александра',
              image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&q=80',
              videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
            },
            {
              name: 'Алексей',
              image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=400&q=80',
              videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
            },
            {
              name: 'Владислава',
              image: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=400&q=80',
              videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
            },
            {
              name: 'Игнат',
              image: 'https://images.unsplash.com/photo-1463453091185-61582044d556?w=400&q=80',
              videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
            },
            {
              name: 'Мария',
              image: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&q=80',
              videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
            },
            {
              name: 'Дмитрий',
              image: 'https://images.unsplash.com/photo-1519340333755-c2f6c58f5c4b?w=400&q=80',
              videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
            },
            {
              name: 'Екатерина',
              image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=400&q=80',
              videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
            },
            {
              name: 'Сергей',
              image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=400&q=80',
              videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
            }
          ]}
        />
        <SurveySection
          title="ПОДЕЛИТЕСЬ ВАШИМИ ВПЕЧАТЛЕНИЯМИ"
          description="Пройдите небольшой опрос и оставьте пожелания о работе с нашей платформой"
          buttonText="пройти опрос"
          onButtonClick={() => {/* შენი ლოგიკა */}}
        />
        <Footer />
      </main>
    </div>
  );
}
