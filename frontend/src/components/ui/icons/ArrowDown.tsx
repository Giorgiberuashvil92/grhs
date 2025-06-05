interface ArrowDownProps {
  className?: string;
}

export const ArrowDown = ({ className = '' }: ArrowDownProps) => {
  return (
    <svg 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d="M16.5303 10.2197C16.8232 10.5126 16.8232 10.9874 16.5303 11.2803L12.5303 15.2803C12.2374 15.5732 11.7626 15.5732 11.4697 15.2803L7.46967 11.2803C7.17678 10.9874 7.17678 10.5126 7.46967 10.2197C7.76256 9.92678 8.23744 9.92678 8.53033 10.2197L12 13.6893L15.4697 10.2197C15.7626 9.92678 16.2374 9.92678 16.5303 10.2197Z" 
        fill="currentColor"
      />
    </svg>
  );
}; 