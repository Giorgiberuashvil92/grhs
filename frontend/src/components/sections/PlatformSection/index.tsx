import { FC } from 'react';
import Image from 'next/image';

export const PlatformSection: FC = () => {
  return (
    <section className="bg-[#F9F7FE] rounded-[20px] mb-5 overflow-hidden flex flex-row items-stretch justify-between px-8 py-10 min-h-[470px]">
      {/* მარცხენა ნაწილი */}
      <div className="flex-1 flex flex-col justify-between h-full">
        <div>
          <h2 className="h1-bowler font-bold bg-gradient-to-r from-[#C6B6F5] via-[#B6C6F5] to-[#F5D6B6] bg-clip-text text-transparent leading-tight mb-10 max-w-3xl">
            Возможность взаимодействия <br />на разных платформах
          </h2>
        </div>
        <div className="flex gap-6 mt-4">
          <a href="#" target="_blank" rel="noopener noreferrer">
            <Image src="/assets/images/icons/android.png" alt="App Store" width={180} height={56} />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <Image src="/assets/images/icons/ios.png" alt="Google Play" width={180} height={56} />
          </a>
        </div>
      </div>
      {/* მარჯვენა ნაწილი */}
      <div className="flex-1 flex items-end justify-end">
        <Image
          src="/assets/images/icons/vr.png"
          alt="GRS App"
          width={420}
          height={720}
          className="object-contain drop-shadow-2xl"
          style={{ maxHeight: 420 }}
        />
      </div>
    </section>
  );
}; 