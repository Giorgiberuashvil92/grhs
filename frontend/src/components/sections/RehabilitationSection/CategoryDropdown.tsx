import { FC, useState } from 'react';
import Image from 'next/image';
import { ArrowButton } from '@/components/ui/ArrowButton';

interface CategoryDropdownProps {
  title: string;
  image: string;
  items: string[];
}

export const CategoryDropdown: FC<CategoryDropdownProps> = ({ title, image, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full">
      {/* Main Card */}
      <div 
        className="w-full rounded-[32px] overflow-hidden border-2 border-[#C5B351] bg-white cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
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
          <button 
            className={`transform ${isOpen ? 'rotate-180' : ''}`}
            onClick={(e) => {
              e.stopPropagation();
              setIsOpen(!isOpen);
            }}
          >
            <ArrowButton direction="right" className="rotate-90" />
          </button>
        </div>
      </div>

      {/* Dropdown Content */}
      {isOpen && (
        <div className="mt-4 bg-white rounded-[32px] p-8 shadow-sm">
          <div className="flex flex-col gap-4">
            {items.map((item, index) => (
              <button
                key={index}
                className="text-left px-6 py-4 hover:bg-[#F4F1F9] rounded-2xl text-[#8B7BAA] font-light tracking-wider transition-colors flex items-center justify-between group"
              >
                <span>{item}</span>
                <ArrowButton direction="right" className="!w-6 !h-6 group-hover:translate-x-1 transition-transform" />
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}; 