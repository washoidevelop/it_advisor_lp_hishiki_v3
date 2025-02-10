import { useIsMobile } from "@/hooks/use-mobile";
import AICarousel from "./AICarousel";

const Hero = () => {
  const isMobile = useIsMobile();

  const handleImageClick = () => {
    const img = document.querySelector('.hero-image');
    if (img) {
      const rect = img.getBoundingClientRect();
      const scrollTarget = window.scrollY + rect.bottom;
      window.scrollTo({
        top: scrollTarget,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="w-full">
      <img 
        src={isMobile ? '/images/hero_mobile.png' : '/images/hero_desktop.png'}
        alt="Hero"
        className="w-full h-auto object-contain object-top hero-image cursor-pointer"
        style={{ minWidth: '100%' }}
        onClick={handleImageClick}
      />
      <AICarousel />
    </div>
  );
};

export default Hero;
