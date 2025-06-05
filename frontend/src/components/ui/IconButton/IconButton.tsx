import { ReactNode } from 'react';

interface IconButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
}

export const IconButton = ({ children, onClick, className = '' }: IconButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`w-[70px] h-[70px] bg-[#3D334A4D] rounded-[24px] flex items-center justify-center text-white hover:text-purple transition-colors ${className}`}
    >
      {children}
    </button>
  );
}; 