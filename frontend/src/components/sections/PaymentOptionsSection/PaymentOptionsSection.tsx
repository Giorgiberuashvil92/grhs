
import { TestSection } from '../TestSection';


export const PaymentOptionsSection = () => {
  return (
    <div>
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
          Подписка
        </h2>
         <TestSection title="Приобретите подписку для получения доступа к контенту платформы" buttonText="ПРОЙТИ ТЕСТИРОВАНИЕ" noButton />
         <div className="flex justify-between gap-4">
           <TestSection title="Приобретите подписку для получения доступа к контенту платформы" buttonText="ПРОЙТИ ТЕСТИРОВАНИЕ" noButton />
           <TestSection title="Приобретите подписку для получения доступа к контенту платформы" buttonText="ПРОЙТИ ТЕСТИРОВАНИЕ" noButton />
        </div>
        <div className="flex justify-between gap-4">
            <TestSection title="Приобретите подписку для получения доступа к контенту платформы" buttonText="ПРОЙТИ ТЕСТИРОВАНИЕ" noButton />
            <TestSection title="Приобретите подписку для получения доступа к контенту платформы" buttonText="ПРОЙТИ ТЕСТИРОВАНИЕ" noButton />
        </div>
        <TestSection title="Приобретите подписку для получения доступа к контенту платформы" buttonText="ПРОЙТИ ТЕСТИРОВАНИЕ" />
    </div>
    
  );
}; 