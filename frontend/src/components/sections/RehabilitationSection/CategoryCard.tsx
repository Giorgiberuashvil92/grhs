import { FC } from 'react';
import Image from 'next/image';
import { ArrowButton } from '@/components/ui/ArrowButton';

interface CategoryCardProps {
  title: string;
  image: string;
  isExpanded?: boolean;
}

export const CategoryCard: FC<CategoryCardProps> = ({ title, image }) => {
  return (
    <div 
      className="relative w-[455px] rounded-[32px] overflow-hidden border-2 border-[#C5B351] bg-white"
    >
      {/* Image Section */}
      <div className="h-[150px] relative">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>

      {/* Title Section */}
      <div className="h-[80px] bg-white px-8 flex items-center justify-between">
        <h3 className="text-[#3D334A] text-2xl font-light tracking-wider">{title}</h3>
        <ArrowButton direction="right" />
      </div>
    </div>
  );
}; 