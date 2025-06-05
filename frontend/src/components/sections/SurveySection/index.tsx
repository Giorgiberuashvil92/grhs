import { FC } from 'react';
import { Typography } from '@/components/ui/Typography';

interface SurveySectionProps {
  title: string;
  description: string;
  buttonText: string;
  onButtonClick?: () => void;
}

export const SurveySection: FC<SurveySectionProps> = ({
  title,
  description,
  buttonText,
  onButtonClick,
}) => (
  <section className="bg-[#F9F7FE] rounded-[20px] mb-5 overflow-hidden px-8 py-10 flex flex-col gap-4 min-h-[220px]">
    <Typography variant="h1-bowler" className="text-[#3D334A] mb-2">
      {title}
    </Typography>
    <Typography variant="text-standard" className="text-[#3D334A] mb-8">
      {description}
    </Typography>
    <div className="mt-4">
      <button
        className="bg-white text-[#3D334A] w-[300px] h-[56px] rounded-[12px] font-medium flex items-center justify-center gap-4 shadow hover:bg-[#F4F1F9] transition-all text-xl"
        onClick={onButtonClick}
      >
        {buttonText}
        <span className="text-2xl ml-2">→</span>
      </button>
    </div>
  </section>
); 