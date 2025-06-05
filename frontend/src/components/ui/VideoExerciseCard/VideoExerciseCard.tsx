import { ReactNode } from 'react';

interface VideoExerciseCardProps {
  title: string;
  description: string;
  backgroundColor?: string;
  backgroundImage?: string;
  textColor?: string;
  icon?: ReactNode;
  additionalContent?: ReactNode;
  onClick?: () => void;
  gridArea?: string;
}

export const VideoExerciseCard = ({
  title,
  description,
  backgroundColor,
  backgroundImage,
  textColor = 'text-white',
  icon,
  additionalContent,
  onClick,
  gridArea
}: VideoExerciseCardProps) => {
  // title-ში \n-ს <br>-ებად გადაყვანა
  const formatTitle = (title: string) => {
    return title.split('\n').map((line, index) => (
      <span key={index}>
        {line}
        {index < title.split('\n').length - 1 && <br />}
      </span>
    ));
  };

  return (
    <div 
      className="relative overflow-hidden group cursor-pointer transition-all duration-300 hover:scale-[1.02]"
      style={{
        borderRadius: 'clamp(20px, 3vw, 40px)',
        background: backgroundColor,
        backgroundImage: backgroundImage,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: 'clamp(200px, 25vh, 400px)',
        gridArea: gridArea,
      }}
      onClick={onClick}
    >
      <div className="relative z-10 p-4 sm:p-6 md:p-8 h-full flex flex-col justify-between">
        <div className="flex-1">
          <h3 
            className={`${textColor} font-bowler mb-3 sm:mb-4 md:mb-6`}
            style={{
              fontSize: 'clamp(1rem, 2.5vw, 1.8rem)',
              lineHeight: '1.2',
            }}
          >
            {formatTitle(title)}
          </h3>
          <p 
            className={`${textColor}/90 leading-relaxed ${icon ? 'mb-4' : ''}`}
            style={{
              fontSize: 'clamp(0.8rem, 1.2vw, 1rem)',
            }}
          >
            {description}
          </p>
        </div>
        
        {/* Icon რომ არსებობდეს */}
        {icon && (
          <div className="flex justify-center items-center flex-shrink-0">
            <div className="scale-75 sm:scale-90 md:scale-100">
              {icon}
            </div>
          </div>
        )}
        
        {/* დამატებითი კონტენტი */}
        {additionalContent && (
          <div className="mt-4 sm:mt-6 flex-shrink-0">
            {additionalContent}
          </div>
        )}
      </div>
    </div>
  );
}; 