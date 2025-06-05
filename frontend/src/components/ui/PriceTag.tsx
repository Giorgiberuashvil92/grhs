import { FC } from 'react';

interface PriceTagProps {
  price: string;
  className?: string;
}

export const PriceTag: FC<PriceTagProps> = ({ price, className = '' }) => {
  return (
    <div className={`inline-flex items-center justify-center px-6 py-2 bg-[#D4BAFC] rounded-full text-white font-light ${className}`}>
      {price}
    </div>
  );
}; 