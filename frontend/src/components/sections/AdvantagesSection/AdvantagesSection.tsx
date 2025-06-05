// import { VideoExerciseCard } from '@/components/ui/VideoExerciseCard/VideoExerciseCard';

interface AdvantageData {
  id: string;
  title: string;
  description: string;
  backgroundColor?: string;
  backgroundImage?: string;
  textColor?: string;
  gridArea: string;
}

const advantagesData: AdvantageData[] = [
  {
    id: 'consultations',
    title: 'КОНСУЛЬТАЦИИ',
    description: 'Если у вас возникают вопросы их можно задать Куратору-консультанту в Чате на сайте и оперативно получить ответ. Если вы не нашли комплекс упражнений для решения вашей проблемы в нашем видео каталоге, наши Кураторы подготовят лично для вас КАСТОМИЗИРОВАННЫЙ комплекс упражнений, либо предложат консультацию с РЕАБИЛИТОЛОГОМ, специализирующемся в необходимом для вас направлении.',
    backgroundColor: '#F7F4FB',
    textColor: 'text-[#3D334A]',
    gridArea: '1 / 1 / 2 / 3',
  },
  {
    id: 'informativeness',
    title: 'ИНФОРМАТИВНОСТЬ',
    description: 'В описании Комплексов упражнений представлена информация по необходимому для тренировки реквизиту, расставлены акценты и даны рекомендации по исполнению упражнений и ходу тренировки.',
    backgroundColor: '#F7F4FB',
    textColor: 'text-[#3D334A]',
    gridArea: '1 / 3 / 2 / 5',
  },
  {
    id: 'inspire',
    title: 'ВДОХНОВЛЯЕМ',
    description: 'После демонстрации техники выполнения упражнения идут повторы в количестве в соответствии с протоколом, а музыкальное сопровождение задает ритм тренировки.',
    backgroundColor: '#F7F4FB',
    textColor: 'text-[#3D334A]',
    gridArea: '2 / 1 / 3 / 3',
  },
  {
    id: 'complexes',
    title: '75 КОМПЛЕКСОВ\nУПРАЖНЕНИЙ',
    description: 'Упражнения собраны в плей-листы в соответствии с израильскими протоколами реабилитации.',
    backgroundColor: '#F7F4FB',
    textColor: 'text-[#3D334A]',
    gridArea: '3 / 1 / 4 / 2',
  },
  {
    id: 'accessibility',
    title: 'ДОСТУПНОСТЬ',
    description: 'Доступная цена на подписку, персональный подход.',
    backgroundColor: '#F7F4FB',
    textColor: 'text-[#3D334A]',
    gridArea: '3 / 2 / 4 / 3',
  },
  {
    id: 'train-anywhere',
    title: 'ТРЕНИРУЙСЯ ТАМ,\nГДЕ УДОБНО',
    description: 'Вам нужно лишь включить плеер на компьютере, планшете или телефоне и можно провести полноценную тренировку с Персональным Тренером в любом месте и в любое удобное вам время.',
    backgroundColor: '#F7F4FB',
    textColor: 'text-[#3D334A]',
    gridArea: '2 / 3 / 4 / 4',
  },
  {
    id: 'thousand-videos',
    title: '1000+ ВИДЕО\nУПРАЖНЕНИЙ',
    description: 'Все наши материалы отсняты с пошаговой демонстрацией техники выполнения упражнения и дополнены инфографикой, акцентирующей внимание для понимания движения и моментов.',
    backgroundColor: '#F7F4FB',
    textColor: 'text-[#3D334A]',
    gridArea: '2 / 4 / 4 / 5',
  },
];

export const AdvantagesSection = () => {
  return (
    <div className="w-full py-12 px-2 sm:px-6 md:px-12  bg-transparent">
      <div className="w-full mx-auto mb-10">
        <h2
          className="font-bowler text-[#3D334A]"
          style={{
            fontSize: 'clamp(2.5rem, 7vw, 5rem)',
            fontWeight: 400,
            
            lineHeight: 1.1,
            marginBottom: '2.5rem',
            paddingBottom: '0.2em',
            width: 'fit-content',
          }}
        >
          Преимущества
        </h2>
      </div>
      <div className="w-full mx-auto grid gap-6"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gridTemplateRows: 'repeat(3, auto)',
          gridGap: 'clamp(16px, 2vw, 32px)',
        }}
      >
        <div className="col-span-2 rounded-2xl shadow-md p-6 sm:p-8 md:p-10 bg-[#F7F4FB] flex flex-col"
          style={{gridColumn: '1/3'}}>
          <h3 className="font-bowler mb-3 text-2xl sm:text-3xl md:text-4xl text-[#3D334A]">
            {advantagesData[0].title}
          </h3>
          <p className="text-base sm:text-lg md:text-xl text-[#A7A3B4] leading-relaxed">
            {advantagesData[0].description}
          </p>
        </div>
        <div className="col-span-1 rounded-2xl shadow-md p-6 sm:p-8 md:p-10 bg-[#F7F4FB] flex flex-col"
          style={{gridColumn: '3/4'}}>
          <h3 className="font-bowler mb-3 text-2xl sm:text-3xl md:text-4xl text-[#3D334A]">
            {advantagesData[1].title}
          </h3>
          <p className="text-base sm:text-lg md:text-xl text-[#A7A3B4] leading-relaxed">
            {advantagesData[1].description}
          </p>
        </div>
        <div className="rounded-2xl shadow-md p-6 sm:p-8 md:p-10 bg-[#F7F4FB] flex flex-col">
          <h3 className="font-bowler mb-3 text-2xl sm:text-3xl md:text-4xl text-[#3D334A]">
            {advantagesData[2].title}
          </h3>
          <p className="text-base sm:text-lg md:text-xl text-[#A7A3B4] leading-relaxed">
            {advantagesData[2].description}
          </p>
        </div>
        <div className="rounded-2xl shadow-md p-6 sm:p-8 md:p-10 bg-[#F7F4FB] flex flex-col">
          <h3 className="font-bowler mb-3 text-2xl sm:text-3xl md:text-4xl text-[#3D334A]">
            {advantagesData[3].title.split('\n').map((line, idx) => (
              <span key={idx}>{line}{idx < advantagesData[3].title.split('\n').length - 1 && <br />}</span>
            ))}
          </h3>
          <p className="text-base sm:text-lg md:text-xl text-[#A7A3B4] leading-relaxed">
            {advantagesData[3].description}
          </p>
        </div>
        <div className="rounded-2xl shadow-md p-6 sm:p-8 md:p-10 bg-[#F7F4FB] flex flex-col">
          <h3 className="font-bowler mb-3 text-2xl sm:text-3xl md:text-4xl text-[#3D334A]">
            {advantagesData[4].title}
          </h3>
          <p className="text-base sm:text-lg md:text-xl text-[#A7A3B4] leading-relaxed">
            {advantagesData[4].description}
          </p>
        </div>
        <div className="rounded-2xl shadow-md p-6 sm:p-8 md:p-10 bg-[#F7F4FB] flex flex-col">
          <h3 className="font-bowler mb-3 text-2xl sm:text-3xl md:text-4xl text-[#3D334A]">
            {advantagesData[5].title.split('\n').map((line, idx) => (
              <span key={idx}>{line}{idx < advantagesData[5].title.split('\n').length - 1 && <br />}</span>
            ))}
          </h3>
          <p className="text-base sm:text-lg md:text-xl text-[#A7A3B4] leading-relaxed">
            {advantagesData[5].description}
          </p>
        </div>
        <div className="rounded-2xl shadow-md p-6 sm:p-8 md:p-10 bg-[#F7F4FB] flex flex-col">
          <h3 className="font-bowler mb-3 text-2xl sm:text-3xl md:text-4xl text-[#3D334A]">
            {advantagesData[6].title.split('\n').map((line, idx) => (
              <span key={idx}>{line}{idx < advantagesData[6].title.split('\n').length - 1 && <br />}</span>
            ))}
          </h3>
          <p className="text-base sm:text-lg md:text-xl text-[#A7A3B4] leading-relaxed">
            {advantagesData[6].description}
          </p>
        </div>
      </div>
    </div>
  );
}; 