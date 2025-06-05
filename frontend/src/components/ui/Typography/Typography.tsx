import { ReactNode, ElementType } from 'react';
import clsx from 'clsx';

type TypographyVariant = 
  | 'h1-bowler'
  | 'h2-bowler'
  | 'h3-bowler'
  | 'button-standard'
  | 'button-big'
  | 'text-big'
  | 'text-standard'
  | 'text-small'
  | 'text-bold';

interface TypographyProps {
  variant: TypographyVariant;
  children: ReactNode;
  className?: string;
  as?: ElementType;
}

export const Typography = ({
  variant,
  children,
  className,
  as: Component = 'div',
}: TypographyProps) => {
  return (
    <Component className={clsx(variant, className)}>
      {children}
    </Component>
  );
}; 