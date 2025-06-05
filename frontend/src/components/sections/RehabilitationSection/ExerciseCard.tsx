import { FC } from 'react';
import Image from 'next/image';

interface ExerciseCardProps {
  title: string;
  category: string;
  price: string;
  image: string;
}

export const ExerciseCard: FC<ExerciseCardProps> = ({
  title,
  category,
  price,
  image,
}) => {
  return (
    <div className="bg-white rounded-[32px] overflow-hidden flex flex-col hover:shadow-lg transition-shadow duration-300" style={{ width: '335px', height: '493px' }}>
      {/* Image */}
      <div className="h-[220px] relative">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        {/* Category Tag */}
        <div className="inline-block">
          <span className="bg-[#EDE8F5] text-[#8B7BAA] px-4 py-2 rounded-full text-sm font-light">
            {category}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-[#3D334A] text-xl font-light mt-4 mb-6 line-clamp-2 flex-grow">
          {title}
        </h3>

        {/* Price */}
        <div className="bg-[#EDE8F5] text-[#8B7BAA] px-6 py-2.5 rounded-full inline-block self-start">
          {price}
        </div>
      </div>
    </div>
  );
}; 