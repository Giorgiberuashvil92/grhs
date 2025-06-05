import { ReactNode } from 'react';
import clsx from 'clsx';

interface TagProps {
  children: ReactNode;
  className?: string;
}

export const Tag = ({ children, className }: TagProps) => {
  return (
    <span
      className={clsx(
        'inline-block px-3 py-1 bg-purple text-dark-purple text-sm font-bowler rounded-full',
        className
      )}
    >
      {children}
    </span>
  );
}; 