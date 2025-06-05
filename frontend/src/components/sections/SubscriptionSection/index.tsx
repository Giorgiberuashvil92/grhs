'use client';

export const SubscriptionSection = () => {
  return (
    <section className="py-16">
      <div className="h-[400px] rounded-[32px] bg-gradient-to-r from-[#F3E7D8] via-[#F4D2E9] to-[#C8D9F1] flex flex-col justify-center px-10">
        <h2 className="text-white text-6xl font-light max-w-[700px] leading-[1.2] mb-12">
          Приобретите подписку для получения доступа к контенту платформы
        </h2>
        <button className="flex items-center justify-between w-[400px] bg-white text-[#3D334A] rounded-[5px] py-2.5 px-10 hover:bg-opacity-90 transition-all">
          <span className="text-xl font-light tracking-wide">Приобрести подписку</span>
          <span className="text-2xl">→</span>
        </button>
      </div>
    </section>
  );
}; 