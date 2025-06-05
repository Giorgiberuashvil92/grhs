import { FC } from 'react';
import { Typography } from '@/components/ui/Typography';
import Image from 'next/image';

interface TestSectionProps {
  title: string;
  buttonText: string;
  onButtonClick?: () => void;
  noButton?: boolean;
  style?: string;
}

export const TestSection: FC<TestSectionProps> = ({ title, buttonText, onButtonClick, noButton }) => {
  return (
    <section
      className="relative rounded-[20px] mb-5 overflow-hidden"
      style={{ minHeight: 404 }}
    >
      <div className="absolute inset-0 w-full h-full z-0">
        <Image
          src="/assets/images/backgrounds/1.png"
          alt="background texture"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
      </div>
      <div className="relative z-10 flex flex-col h-full justify-between px-12 py-10">
        <Typography
          variant="h1-bowler"
          className="text-white uppercase leading-[1.1] tracking-wide max-w-[1400px] text-left"
          as="h1"
        >
          {title}
        </Typography>
        <div className="mt-10">
          {!noButton && <button
            className="bg-white text-[#3D334A] w-[562px] h-[62px] rounded-[16px] font-medium flex items-center justify-center gap-4 shadow-lg hover:bg-[#F4F1F9] transition-all"
            style={{ fontWeight: 700 }}
            onClick={onButtonClick}
          >
            <Typography variant="button-big" className="text-[#3D334A]">
              {buttonText}
            </Typography>
            <span className="text-2xl ml-2">→</span>
          </button>}
        </div>
      </div>
    </section>
  );
}; 