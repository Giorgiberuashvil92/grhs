import Image from 'next/image';

export const LogoSection = () => {
  return (
    <div className="mb-8 h-[120px] relative bg-gradient-to-r from-[#F3E7D8] via-[#F4D2E9] to-[#C8D9F1] flex items-center px-16" style={{borderTopLeftRadius: '20px', borderTopRightRadius: '20px'}}>
      <div className="flex items-start gap-4">
        <div className="pt-8">
          <Image
            src="/assets/images/icons/Union.png"
            alt="GRS"
            width={100}
            height={68}
            className="object-contain"
          />
        </div>
        <div className="pt-2">
          <Image
            src="/assets/images/icons/Rehabilitation.png"
            alt="Rehabilitation"
            width={150}
            height={12}
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
}; 