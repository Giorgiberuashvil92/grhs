import Link from 'next/link';

export const HeroSection = () => {
  return (
    <div className="mb-20 ml-10">
      <h1 className="text-[#3D334A] text-5xl font-light mb-6">РЕАБИЛИТАЦИЯ</h1>
      <p className="text-lg text-[#8B7BAA] max-w-3xl font-light leading-relaxed">
        Современные израильские методики реабилитации для восстановления и поддержания подвижности и трудоспособности
      </p>
      <Link href="/rehabilitation">
        <button className="mt-6 text-[#BCA7E6] hover:text-[#8B7BAA] font-light tracking-wider text-lg transition-colors">
          ИЗУЧИТЬ →
        </button>
      </Link>
    </div>
  );
}; 