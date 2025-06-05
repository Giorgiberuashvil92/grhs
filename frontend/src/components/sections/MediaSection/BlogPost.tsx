interface BlogPostProps {
  title: string;
  description: string;
  image: string;
  category: string;
  isLarge?: boolean;
}

export const BlogPost = ({ title, description, image, category, isLarge = false }: BlogPostProps) => {
  return (
    <div 
      className={`
        group bg-white rounded-[20px] overflow-hidden shadow-sm hover:shadow-lg 
        transition-all duration-300 ease-in-out w-full h-full flex flex-col
        hover:translate-y-[-4px]
      `}
    >
      {/* Image Container - only for large cards */}
      {isLarge && (
        <div className="relative w-full aspect-[16/9] max-h-[360px] overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute top-4 right-4 flex flex-col gap-2">
            <button className="w-10 h-10 rounded-xl bg-white/80 backdrop-blur-sm flex items-center justify-center text-[#3D334A] hover:bg-white hover:shadow-md transition-all">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="transition-transform hover:scale-110">
                <path d="M5 5C5 3.89543 5.89543 3 7 3H17C18.1046 3 19 3.89543 19 5V21L12 17.5L5 21V5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button className="w-10 h-10 rounded-xl bg-white/80 backdrop-blur-sm flex items-center justify-center text-[#3D334A] hover:bg-white hover:shadow-md transition-all">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="transition-transform hover:scale-110">
                <path d="M4 12V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M16 6L12 2L8 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 2V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      )}

      {/* Content */}
      <div className="flex-1 flex flex-col p-4 sm:p-6">
        <div className="mb-3">
          <span className="inline-block px-4 py-1 bg-[#F4F1F9] text-[#8B7BAA] rounded-full text-sm font-medium hover:bg-[#E9E4F3] transition-colors">
            {category}
          </span>
        </div>
        <h3 className={`
          text-[#3D334A] group-hover:text-[#6F5C8E] transition-colors
          ${isLarge ? 'text-xl sm:text-2xl lg:text-[28px] leading-tight mb-4' : 'text-lg sm:text-xl leading-snug'}
        `}>
          {title}
        </h3>
        {isLarge && (
          <p className="text-[#8B7BAA] text-sm sm:text-base leading-relaxed line-clamp-3">
            {description}
          </p>
        )}
        {!isLarge && (
          <div className="mt-auto flex justify-end gap-2">
            <button className="w-10 h-10 rounded-xl bg-[#F4F1F9] flex items-center justify-center text-[#3D334A] hover:bg-[#E9E4F3] hover:shadow-md transition-all">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="transition-transform hover:scale-110">
                <path d="M5 5C5 3.89543 5.89543 3 7 3H17C18.1046 3 19 3.89543 19 5V21L12 17.5L5 21V5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button className="w-10 h-10 rounded-xl bg-[#F4F1F9] flex items-center justify-center text-[#3D334A] hover:bg-[#E9E4F3] hover:shadow-md transition-all">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="transition-transform hover:scale-110">
                <path d="M4 12V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M16 6L12 2L8 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 2V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}; 