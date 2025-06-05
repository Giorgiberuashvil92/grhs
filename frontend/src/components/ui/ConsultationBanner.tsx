import React from 'react';
import Image from 'next/image';

interface ConsultationBannerProps {
  title: string;
  subtitle?: string;
  buttonText: string;
  onButtonClick?: () => void;
  image: string;
}

export const ConsultationBanner: React.FC<ConsultationBannerProps> = ({
  title,
  subtitle,
  buttonText,
  onButtonClick,
  image,
}) => {
  return (
    <section className="w-full bg-[#F8F6FE] rounded-[20px] flex flex-col md:flex-row items-center justify-between px-6 md:px-12 py-8 md:py-12 mb-6 overflow-hidden">
      {/* მარცხენა ნაწილი: ტექსტი და ღილაკი */}
      <div className="flex-1 flex flex-col justify-center items-start gap-6 min-w-[220px]">
        <h2 className="font-bowler text-[#3D334A] text-2xl md:text-4xl mb-2 leading-tight">
          {title}
        </h2>
        {subtitle && (
          <p className="text-[#3D334A] text-base md:text-lg font-light mb-4">
            {subtitle}
          </p>
        )}
        <button
          className="bg-white text-[#3D334A] rounded-[12px] px-8 py-4 text-xl font-normal flex items-center gap-3 shadow hover:bg-[#F4F1F9] transition-all"
          style={{ fontWeight: 400 }}
          onClick={onButtonClick}
        >
          {buttonText}
          <span className="text-2xl ml-2">→</span>
        </button>
      </div>
      {/* მარჯვენა ნაწილი: ფოტო */}
      <div className="flex-shrink-0 mt-8 md:mt-0 md:ml-8 relative h-[180px] w-[160px] md:h-[260px] md:w-[220px] lg:h-[320px] lg:w-[270px]">
        <Image
          src={image}
          alt="doctor"
          fill
          style={{ objectFit: 'contain' }}
          className="object-contain"
          priority
        />
      </div>
    </section>
  );
}; 