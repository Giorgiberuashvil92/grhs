import { VideoExerciseCard } from '@/components/ui/VideoExerciseCard/VideoExerciseCard';
import { BellIcon } from '@/components/ui/icons/BellIcon';
import { DocumentIcon } from '@/components/ui/icons/DocumentIcon';

interface VideoExerciseData {
  id: string;
  title: string;
  description: string;
  backgroundColor?: string;
  backgroundImage?: string;
  textColor?: string;
  icon?: 'bell' | 'document' | null;
  additionalContent?: string;
  gridArea: string;
}

// მეორე section-ისთვის მონაცემები
const secondSectionData: VideoExerciseData[] = [
  {
    id: 'complexes-2',
    title: 'Комплексы\nупражнений',
    description: 'В разделе реабилитация представлены комплексы упражнений по следующим направлениям: ортопедия, неврология, ожирение, реабилитация для пожилых, реабилитация после COVID-19, реабилитация походки, афазия и дизартрия.',
    backgroundImage: 'url("/assets/images/backgrounds/1.png")',
    additionalContent: 'Все комплексы упражнений разработаны израильскими специалистами в соответствии с израильскими протоколами реабилитации.',
    gridArea: '1 / 1 / 1 / 2',
  },
  {
    id: 'children-2',
    title: 'Для детей',
    description: 'Детям с 10 лет и подросткам будут актуальны разделы, связанные с осанкой, сколиозом и грудным отделом позвоночника, а также проблемы плечевого пояса, нижние конечность и коррекция.',
    backgroundImage: 'url("/assets/images/backgrounds/1.png")',
    icon: 'bell',
    gridArea: '1 / 2 / 1 / 3',
  },
  {
    id: 'articles-2',
    title: 'Статьи',
    description: 'В нашей библиотеке представлены статьи, которые являются теоретической вводной частью для каждого направления Реабилитации и освещают возможные проблемы и патологии, анатомию, физиологию и биомеханику.',
    backgroundImage: 'url("/assets/images/backgrounds/1.png")',
    textColor: 'text-[#3D334A]',
    icon: 'document',
    gridArea: '1 / 3 / 1 / 4',
  },
];

const getIcon = (iconType?: 'bell' | 'document' | null) => {
  if (!iconType) return null;
  
  switch (iconType) {
    case 'bell':
      return <BellIcon />;
    case 'document':
      return <DocumentIcon />;
    default:
      return null;
  }
};

export const VideoExerciseSection = () => {
  const handleCardClick = (cardId: string) => {
    console.log(`Clicked on ${cardId}`);
    // აქ შეგიძლია დაამატო navigation ლოგიკა
  };

  return (
    <div 
      style={{
        backgroundImage: 'linear-gradient(180deg, #FFF9F5 0%, #FDF2F8 20%, #F3E8FF 40%, #EDE9FE 60%, #E0E7FF 80%, #F0F9FF 100%)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* მეორე სექცია - 3 ერთნაირი კარტით */}
      <section className="px-4 sm:px-6 md:px-8 py-8 sm:py-12 md:py-16">
        <div className="w-full mx-auto">
          <h2 
            className="text-[#3D334A] mb-8 sm:mb-12 md:mb-16 font-bowler leading-tight "
            style={{
              fontSize: 'clamp(1.5rem, 4vw, 3rem)',
            }}
          >
            ВИДЕОУПРАЖНЕНИЯ
          </h2>
          
          <div 
            className="w-full gap-4 sm:gap-6 md:gap-8"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gridTemplateRows: '1fr',
              gridColumnGap: 'clamp(16px, 2vw, 32px)',
              minHeight: 'clamp(300px, 35vh, 450px)',
            }}
          >
            {secondSectionData.map((item) => (
              <VideoExerciseCard
                key={item.id}
                title={item.title}
                description={item.description}
                backgroundColor={item.backgroundColor}
                backgroundImage={item.backgroundImage}
                textColor={item.textColor}
                icon={getIcon(item.icon)}
                additionalContent={
                  item.additionalContent ? (
                    <p className={`${item.textColor || 'text-white'}/80 text-xs sm:text-sm md:text-base`}>
                      {item.additionalContent}
                    </p>
                  ) : undefined
                }
                onClick={() => handleCardClick(item.id)}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}; 