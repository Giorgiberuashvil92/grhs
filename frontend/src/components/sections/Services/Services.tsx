import { Card } from '@/components/ui/Card';
import { Typography } from '@/components/ui/Typography';

const services = [
  {
    title: 'Реабилитация после травм',
    description: 'Восстановление после спортивных травм, переломов и операций',
    image: '/images/services/rehab.jpg',
    tag: 'Реабилитация',
    price: 'от 5000₽'
  },
  {
    title: 'Массаж',
    description: 'Различные виды массажа для здоровья и релаксации',
    image: '/images/services/massage.jpg',
    tag: 'Массаж',
    price: 'от 3000₽'
  },
  {
    title: 'Физиотерапия',
    description: 'Современные методы физиотерапевтического лечения',
    image: '/images/services/physio.jpg',
    tag: 'Физиотерапия',
    price: 'от 4000₽'
  }
];

export const Services = () => {
  return (
    <section className="py-20 bg-section-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Typography variant="h2-bowler" as="h2" className="text-dark-purple mb-12 text-center">
          НАШИ УСЛУГИ
        </Typography>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}; 