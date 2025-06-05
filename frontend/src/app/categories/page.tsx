    'use client';

    import { Navbar } from '@/components/layout/Navbar';
    import { Footer } from '@/components/layout/Footer';
    import { CategoriesHero } from '@/components/sections/Categories/CategoriesHero';
    import { SectionsSlider } from '@/components/sections/Categories/SectionsSlider';
    import { ExercisesSection } from '@/components/sections/RehabilitationSection/ExercisesSection';
    import { SubscriptionSection } from '@/components/sections/SubscriptionSection';
    import { ReviewsSection } from '@/components/sections/ReviewsSection';
    import { MediaSection } from '@/components/sections/MediaSection';
    import { ProfessionalSection } from '@/components/sections/ProfessionalSection';

    export default function CategoriesPage() {
    return (
        <div className="bg-white min-h-screen p-5 bg-main-gradient">
        <main className="rounded-[20px] min-h-[calc(100vh-40px)] overflow-hidden">
            <Navbar />
            <CategoriesHero />
            <div className="mt-10 rounded-3xl bg-[#F9F7FE]">
                <SectionsSlider />
            </div>
            <div className="bg-[#F9F7FE] mt-[40px] rounded-3xl">
            <ExercisesSection 
                title="КОМПЛЕКСЫ"
                prevClass="exercise-prev"
                nextClass="exercise-next"
                allLink="/categories"
                allText="Все 36 комплексов →"
            />
            </div>
            <SubscriptionSection />
            <ReviewsSection
            title="Отзывы о наш"
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
            <MediaSection showLogoSection={false} blogTitle="GRS МЕДИА" />
            <div className='mb-[200px]'>
            <ProfessionalSection showLogoSection={false} />
            </div>
            <Footer />
        </main>
        </div>
    );
    } 