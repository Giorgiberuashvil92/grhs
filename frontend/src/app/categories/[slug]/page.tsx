'use client';

import { useParams } from 'next/navigation';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { CategoriesHero } from '@/components/sections/Categories/CategoriesHero';
import { ExercisesSection } from '@/components/sections/RehabilitationSection/ExercisesSection';
import { SubscriptionSection } from '@/components/sections/SubscriptionSection';
import { ReviewsSection } from '@/components/sections/ReviewsSection';
import { MediaSection } from '@/components/sections/MediaSection';
import Head from 'next/head';
import { ProfessionalSection } from '@/components/sections/ProfessionalSection';

// სექციების მონაცემები - რეალურ აპლიკაციაში ეს API-დან მოდის
const sectionData = {
  'cervical-spine': {
    id: 1,
    title: 'ШЕЙНЫЙ ОТДЕЛ ПОЗВОНОЧНИКА',
    category: 'ОРТОПЕДИЯ',
    description: 'Комплексы упражнений для восстановления и укрепления шейного отдела позвоночника',
    image: 'https://plus.unsplash.com/premium_photo-1661779394380-e372d6a1f198?q=80&w=1200&auto=format&fit=crop',
    complexes: 12,
    exercises: [
      {
        title: 'Мобилизация шейного отдела',
        category: 'ОРТОПЕДИЯ',
        price: '920 ₽/мес',
        image: '/assets/images/services/work.png'
      },
      {
        title: 'Укрепление мышц шеи',
        category: 'ОРТОПЕДИЯ',
        price: '920 ₽/мес',
        image: '/assets/images/services/work.png'
      },
      {
        title: 'Растяжка шейных мышц',
        category: 'ОРТОПЕДИЯ',
        price: '920 ₽/мес',
        image: '/assets/images/services/work.png'
      },
    ]
  },
  'thoracic-spine': {
    id: 2,
    title: 'ГРУДНОЙ ОТДЕЛ ПОЗВОНОЧНИКА',
    category: 'ОРТОПЕДИЯ',
    description: 'Упражнения для мобилизации и укрепления грудного отдела позвоночника',
    image: 'https://plus.unsplash.com/premium_photo-1661779394380-e372d6a1f198?q=80&w=1200&auto=format&fit=crop',
    complexes: 12,
    exercises: [
      {
        title: 'Мобилизация грудного отдела',
        category: 'ОРТОПЕДИЯ',
        price: '920 ₽/мес',
        image: '/assets/images/services/work.png'
      },
      {
        title: 'Коррекция осанки',
        category: 'ОРТОПЕДИЯ',
        price: '920 ₽/мес',
        image: '/assets/images/services/work.png'
      },
    ]
  },
  'limb-problems': {
    id: 3,
    title: 'ПРОБЛЕМЫ КОНЕЧНОСТЕЙ',
    category: 'ОРТОПЕДИЯ',
    description: 'Реабилитационные упражнения для верхних и нижних конечностей',
    image: 'https://plus.unsplash.com/premium_photo-1661749982338-892452fc5bcb?q=80&w=1200&auto=format&fit=crop',
    complexes: 8,
    exercises: [
      {
        title: 'Восстановление подвижности суставов',
        category: 'ОРТОПЕДИЯ',
        price: '920 ₽/мес',
        image: '/assets/images/services/work.png'
      },
      {
        title: 'Укрепление мышц конечностей',
        category: 'ОРТОПЕДИЯ',
        price: '920 ₽/мес',
        image: '/assets/images/services/work.png'
      },
    ]
  },
  'back-problems': {
    id: 4,
    title: 'СПИНА',
    category: 'ОРТОПЕДИЯ',
    description: 'Комплексные упражнения для здоровья спины и позвоночника',
    image: 'https://plus.unsplash.com/premium_photo-1661962967554-b2d04b1ddaa8?q=80&w=1200&auto=format&fit=crop',
    complexes: 10,
    exercises: [
      {
        title: 'Укрепление мышц спины',
        category: 'ОРТОПЕДИЯ',
        price: '920 ₽/мес',
        image: '/assets/images/services/work.png'
      },
      {
        title: 'Растяжка позвоночника',
        category: 'ОРТОПЕДИЯ',
        price: '920 ₽/мес',
        image: '/assets/images/services/work.png'
      },
    ]
  }
};

export default function CategoryDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;
  
  const section = sectionData[slug as keyof typeof sectionData];

  if (!section) {
    return (
      <>
        <Head>
          <title>გვერდი ვერ მოიძებნა | GRS Rehabilitation</title>
          <meta name="description" content="მოთხოვნილი კატეგორია არ არსებობს" />
          <meta name="robots" content="noindex, nofollow" />
        </Head>
        <div className="bg-white min-h-screen p-5 bg-main-gradient">
          <main className="rounded-[20px] min-h-[calc(100vh-40px)] overflow-hidden">
            <Navbar />
            <div className="flex items-center justify-center h-96">
              <div className="text-center">
                <h1 className="text-4xl font-bold text-[#3D334A] mb-4">გვერდი ვერ მოიძებნა</h1>
                <p className="text-[#B6A3D9] text-xl">მოთხოვნილი კატეგორია არ არსებობს</p>
              </div>
            </div>
            <Footer />
          </main>
        </div>
      </>
    );
  }

  return (
    <>
      <Head>
        <title>{section.title} - რეაბილიტაციული ვარჯიშები | GRS</title>
        <meta name="description" content={`${section.description}. ${section.complexes} კომპლექსი ხელმისაწვდომია.`} />
        <meta name="keywords" content={`${section.title}, რეაბილიტაცია, ვარჯიშები, ${section.category}, ჯანმრთელობა, თერაპია`} />
        <meta property="og:title" content={`${section.title} | GRS Rehabilitation`} />
        <meta property="og:description" content={section.description} />
        <meta property="og:image" content={section.image} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://grs-rehabilitation.com/categories/${slug}`} />
        <link rel="canonical" href={`/categories/${slug}`} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalCondition",
            "name": section.title,
            "description": section.description,
            "associatedAnatomy": {
              "@type": "AnatomicalStructure",
              "name": section.title
            },
            "possibleTreatment": {
              "@type": "MedicalTherapy",
              "name": "რეაბილიტაციული ვარჯიშები",
              "description": section.description
            }
          })}
        </script>
      </Head>
      <div className="bg-white min-h-screen p-5 bg-main-gradient">
        <main className="rounded-[20px] min-h-[calc(100vh-40px)] overflow-hidden">
          <Navbar />
          
          {/* CategoriesHero with section data */}
          <CategoriesHero 
            title={section.title}
            sections={1}
            complexes={section.complexes}
            exercises={section.exercises.length}
            backgroundImage="/assets/images/backgrounds/Subtract.png"
          />

          {/* Breadcrumbs */}
          

          {/* Exercises Section */}
          <div className="bg-[#F9F7FE] mt-[40px] rounded-3xl">
            <ExercisesSection 
              exercises={section.exercises}
              title="Популярные упражнения"
              prevClass="exercise-prev"
              nextClass="exercise-next"
              allLink="/categories"
              bottomTitles={[
                "Смотреть все →",
               
              ]}
              bottomTitlesPosition="under-title"
              noLink={true}
            />
          </div>

          <div className="bg-[#F9F7FE] mt-[40px] rounded-3xl">
            <ExercisesSection 
              exercises={section.exercises}
              title="Шейный отдел позвоночника"
              prevClass="exercise-prev"
              nextClass="exercise-next"
              allLink="/categories"
              bottomTitles={[
                "Смотреть все →",
               
              ]}
              bottomTitlesPosition="under-title"
              noLink={true}
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

          <MediaSection 
            showLogoSection={false}
            blogTitle="GRS МЕДИА"
            bgColor="#F9F7FE"
            rounded="rounded-3xl"
          />

          <div className='mb-[200px]'>
            <ProfessionalSection showLogoSection={false} />
          </div>

          <Footer />
        </main>
      </div>
    </>
  );
} 