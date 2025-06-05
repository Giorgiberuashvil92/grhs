export const BellIcon = () => {
  return (
    <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 flex items-center justify-center">
      <div className="w-full h-full relative">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full transform rotate-12"></div>
        <div className="absolute top-1 left-1 right-1 bottom-1 bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-full"></div>
        <div className="absolute top-2 left-2 right-2 bottom-4 bg-gradient-to-br from-yellow-200 to-yellow-400 rounded-full"></div>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-6 h-3 bg-blue-400 rounded-full"></div>
      </div>
    </div>
  );
}; 