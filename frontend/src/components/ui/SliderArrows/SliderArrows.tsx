import { ButtonHTMLAttributes } from 'react';
import clsx from 'clsx';

interface ArrowButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  direction: 'prev' | 'next';
}

export const SliderArrow = ({ direction, className, ...props }: ArrowButtonProps) => {
  return (
    <button
      className={clsx(
        'w-12 h-12 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center',
        'text-dark-purple hover:bg-purple hover:text-white transition-colors',
        'focus:outline-none focus:ring-2 focus:ring-purple',
        'disabled:bg-middle-grey disabled:text-white',
        className
      )}
      {...props}
    >
      {direction === 'prev' ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M15 18l-6-6 6-6" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M9 18l6-6-6-6" />
        </svg>
      )}
    </button>
  );
}; 