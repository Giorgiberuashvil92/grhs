'use client';

import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { VideoExerciseSection } from '@/components/sections/VideoExerciseSection/VideoExerciseSection';
import { AdvantagesSection } from '@/components/sections/AdvantagesSection/AdvantagesSection';
import { PaymentOptionsSection } from '@/components/sections/PaymentOptionsSection/PaymentOptionsSection';
import Image from 'next/image';
import { CategoriesSection } from '@/components/sections/RehabilitationSection/CategoriesSection';
import { ConsultationBanner } from '@/components/ui/ConsultationBanner';

export default function RehabilitationPage() {
  return (
    <div 
      className="min-h-screen p-2 md:p-5"
      style={{
        background: 'linear-gradient(135deg, #FFF9F5 0%, #FDF2F8 25%, #F3E8FF 50%, #EDE9FE 75%, #E0E7FF 100%)',
      }}
    >
      <main className="rounded-[20px] min-h-[calc(100vh-40px)] overflow-hidden">
        <Navbar />
        
        {/* Hero Section for Rehabilitation - სრულად რესპონსივი */}
        <section className="relative w-full mx-auto mt-4 sm:mt-6 mb-8 sm:mb-12 
                           rounded-[20px] sm:rounded-[32px] md:rounded-[40px] lg:rounded-[60px] 
                           overflow-hidden min-h-[60vh] sm:min-h-[70vh] lg:min-h-[80vh] 
                           flex flex-col justify-between p-4 sm:p-6 md:p-8 lg:p-10"
                 style={{
                   backgroundImage: 'url("/assets/images/backgrounds/hero.jpg")',
                   backgroundSize: 'cover',
                   backgroundPosition: 'center',
                   backgroundRepeat: 'no-repeat',
                 }}>
          
          {/* Grain overlay */}
          <Image src="/assets/images/grain.png" alt="grain" fill 
                 className="object-cover opacity-60 pointer-events-none" />

          {/* ზედა ნაწილი - სათაური და ისრები */}
          <div className="relative z-10 flex justify-between items-start mt-5">
            {/* მთავარი სათაური */}
            <div className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-2xl xl:max-w-4xl">
              <h1 className="text-white font-bowler leading-tight font-normal"
                  style={{
                    fontSize: 'clamp(1.5rem, 5vw, 4rem)',
                    letterSpacing: '-0.03em',
                    lineHeight: 'clamp(1.2, 1.05, 1.0)'
                  }}>
                СОВРЕМЕННЫЕ <br />
                ИЗРАИЛЬСКИЕ МЕТОДИКИ <br />
                РЕАБИЛИТАЦИИ
              </h1>
            </div>
          </div>

          {/* შუა ნაწილი - ცარიელი სივრცე flex-1-ით */}
          <div className="flex-1 flex items-center justify-between">
            {/* ქვედა ტექსტი - შუაში განლაგებული */}
            <div className="max-w-xs sm:max-w-sm md:max-w-lg lg:max-w-2xl">
              <p className="text-white font-pt-root font-medium leading-relaxed"
                 style={{
                   fontSize: 'clamp(1rem, 2.5vw, 2rem)',
                 }}>
                Для восстановления и поддержания <br className="hidden sm:block" />
                подвижности и трудоспособности
              </p>
            </div>
            
            {/* ისრები - რესპონსივი პოზიციონირება */}
            <div className="flex gap-2 sm:gap-3 md:gap-4 mt-4 sm:mt-0">
              <button className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 
                               bg-[#3D334A]/30 backdrop-blur-md 
                               rounded-[10px] sm:rounded-[14px] md:rounded-[16px] lg:rounded-[20px] 
                               flex items-center justify-center hover:bg-[#3D334A]/50 transition-all"
                      style={{backdropFilter: 'blur(10px)'}}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" 
                     className="sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8">
                  <path d="M15 18L9 12L15 6" stroke="#fff" strokeWidth="2" 
                        strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 
                               bg-[#3D334A]/30 backdrop-blur-md 
                               rounded-[10px] sm:rounded-[14px] md:rounded-[16px] lg:rounded-[20px] 
                               flex items-center justify-center hover:bg-[#3D334A]/50 transition-all"
                      style={{backdropFilter: 'blur(10px)'}}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                     className="sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8">
                  <path d="M9 6L15 12L9 18" stroke="#fff" strokeWidth="2" 
                        strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>

          {/* ქვედა ნაწილი - ღილაკი */}
          <div className="absolute bottom-0 right-0 flex justify-center items-center 
                         bg-white
                         h-32 w-32 sm:h-40 sm:w-40 md:h-52 md:w-52 lg:h-64 lg:w-64 xl:h-80 xl:w-80
                         rounded-l-[12px] sm:rounded-l-[16px] md:rounded-l-[20px] lg:rounded-l-[24px]">
            <div className="flex justify-center items-center 
                           bg-white
                           h-32 w-32 sm:h-40 sm:w-40 md:h-52 md:w-52 lg:h-64 lg:w-64 xl:h-80 xl:w-80
                           rounded-l-[12px] sm:rounded-l-[16px] md:rounded-l-[20px] lg:rounded-l-[24px]">
              <button className="bg-[#3D334A] text-white font-medium hover:bg-[#2A2235] 
                               transition-all shadow-xl text-center flex
                               text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl
                               p-2 sm:p-3 md:p-4 lg:p-5"
                      style={{
                        borderRadius: 'clamp(8px, 2vw, 20px)',
                        height: 'calc(100% - 40px)',
                        width: 'calc(100% - 40px)',
                      }}>
                <span className="leading-tight text-center">
                  все<br />Упражнения
                </span>
              </button>
            </div>
          </div>
        </section>

        {/* ВИдеоупражнения Section - კომპონენტად გადაყვანილი */}
        <VideoExerciseSection />
        <AdvantagesSection />
        <PaymentOptionsSection />
        

        <section className="py-16 bg-[#F9F7FE] flex flex-col gap-10"> 
            <CategoriesSection /> 
        </section>

        <div className='mt-5'>
        <ConsultationBanner 
            title="НЕТ ПЛАНА РЕАБИЛИТАЦИИ?"
            subtitle="Запишитесь на консультацию ко врачу реабилитологу"
            buttonText="Записаться на прием"
            onButtonClick={() => { /* შენი ქმედება */ }}
            image="/assets/images/services/doctor.png"
           
         />
        </div>

        <Footer />
      </main>
    </div>
  );
} 