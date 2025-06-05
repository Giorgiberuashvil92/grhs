import { Typography } from "@/components/ui/Typography/Typography";
import { SliderArrow } from "@/components/ui/SliderArrows";
import { stats } from "@/constants/stats";

export const Hero = () => {
  return (
    <section className="relative h-[85vh] px-5">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{ backgroundImage: 'url("/assets/images/backgrounds/hero.jpg")' }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto pt-32">
        {/* Main Title */}
        <div className="max-w-4xl mb-20">
          <Typography variant="h1-bowler" className="text-white mb-8">
            ЭКОСИСТЕМА ПРОДУКТОВ НАПРАВЛЕННАЯ НА ФОРМИРОВАНИЕ ВАШЕГО ЗДОРОВЬЯ
          </Typography>
          
          {/* Stats */}
          <div className="flex flex-wrap gap-4">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="flex items-center gap-2 bg-[#3D334A4D] backdrop-blur-md px-6 py-2 rounded-[24px]"
              >
                {stat.icon}
                <Typography variant="text-standard" className="text-white">
                  {stat.label}
                </Typography>
              </div>
            ))}
          </div>
        </div>

        {/* Rehabilitation Section */}
        <div className="flex gap-8 items-stretch mt-8 relative">
          {/* მარცხენა დიდი ბლოკი */}
          <div className="flex-1 max-w-[770px] bg-[#8B7BAA]/80 rounded-[32px] p-10 flex flex-col justify-start">
            <Typography variant="h2-bowler" className="text-white mb-8">
              РЕАБИЛИТАЦИЯ
            </Typography>
            <Typography variant="text-standard" className="text-white mt-20">
              Современные израильские методики реабилитации по направлениям ортопедия, неврология, посттравматическая реабилитация походки и др.
            </Typography>
          </div>
          {/* მარჯვენა ორი ბლოკი საერთო ძალიან მომრგვალებულ თეთრ კონტეინერში */}
          <div
            className="bg-white rounded-[60px] p-4 flex gap-4 w-[520px] h-[222px] items-stretch shadow-lg overflow-hidden"
            style={{
              position: 'absolute',
              right: '-19px',
              borderTopRightRadius: 0,
              borderBottomRightRadius: 0,
              borderBottomLeftRadius: 0,
              top: '80px'
            }}
          >
            <div className="bg-[#3D334A] rounded-[32px] flex-1  p-2 min-w-0">
              <Typography variant="button-standard" className="text-white text-center break-words">
                ИЗУЧИТЬ<br/>ПОДРОБНЕЕ
              </Typography>
            </div>
            <div className="bg-gradient-to-br from-[#BCA7E6] to-[#A18CD1] rounded-[32px] flex-1 flex p-2 min-w-0">
              <Typography variant="button-standard" className="text-white text-center break-words">
                В КАТАЛОГ
              </Typography>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="absolute bottom-8 right-8 flex gap-4 z-10">
        <SliderArrow direction="prev" />
        <SliderArrow direction="next" />
      </div>
    </section>
  );
}; 