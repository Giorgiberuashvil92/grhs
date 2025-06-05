interface ArrowButtonProps {
  direction: 'left' | 'right';
  onClick?: () => void;
  className?: string;
}

export const ArrowButton = ({ direction, onClick, className = '' }: ArrowButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`w-[48px] h-[48px] flex items-center justify-center rounded-[12px] bg-[#846FA0]/10 text-[#846FA0] hover:bg-[#846FA0]/20 transition-colors ${className}`}
    >
      {direction === 'left' ? (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 19L8 12L15 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ) : (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 5L16 12L9 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )}
    </button>
  );
}; 