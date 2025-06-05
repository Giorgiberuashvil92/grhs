        'use client';

        import { FC } from 'react';
        import Image from 'next/image';

        export const MarketplaceSection: FC = () => {
        return (
            <section className="bg-[#F9F7FE] rounded-[20px] mb-5 overflow-hidden h-[319px]">
            <div className="relative">
                <Image src="/assets/images/icons/market.png" alt="GRS Logo" className="absolute top-10 left-4 w-[332px] h-[50px] pl-10" width={332} height={50} />
                <Image src="/assets/images/backgrounds/marketPlace.png" alt="GRS Marketplace" className="w-full h-[150px]" width={1000} height={1000}  />
            </div>
            <div className="px-6 py-10">
                <p className="text-[#3D334A] text-lg leading-relaxed mb-6 max-w-[800px]">
                Мы развиваем направление <span className="font-semibold">МАРКЕТПЛЭЙС</span>. Нашими партнерами в этом направлении могут стать реабилитационные центры, клиники, санатории, спортклубы, массаж...
                </p>
                <div className="text-right text-[#846FA0] text-xl">
                В РАЗРАБОТКЕ
                </div>
            </div>
            </section>
        );
        }; 