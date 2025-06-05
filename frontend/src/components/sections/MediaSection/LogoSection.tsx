export const LogoSection = () => {
  return (
    <div className="h-[120px] bg-[url('/assets/images/backgrounds/blog.png')] bg-cover bg-center flex items-center px-16" style={{borderTopLeftRadius: '20px', borderTopRightRadius: '20px'}}>
      <div className="flex items-center gap-4">
        <img src="/assets/images/icons/media.png" alt="Media" width={220} height={69} />
      </div>
    </div>
  );
}; 