import { FC } from 'react';
import { PriceTag } from '@/components/ui/PriceTag';

interface CourseCardProps {
  title: string;
  description: string;
  price: string;
  image?: string;
}

export const CourseCard: FC<CourseCardProps> = ({ title, description, price, image }) => {
  return (
    <div className="w-[690px] bg-white rounded-[32px] overflow-hidden">
      {/* Image */}
      {image && (
        <div className="h-[300px]">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      
      {/* Content */}
      <div className="p-8">
        <h3 className="text-[#3D334A] text-2xl font-light mb-4">{title}</h3>
        <p className="text-[#8B7BAA] font-light mb-4">{description}</p>
        <div className="flex justify-end">
          <PriceTag price={price} />
        </div>
      </div>
    </div>
  );
}; 