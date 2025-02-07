import { useIsMobile } from "@/hooks/use-mobile";
import AICarousel from "./AICarousel";

const Hero = () => {
  const isMobile = useIsMobile();
  return (
    <div className="w-full">
      <img 
        src={isMobile ? '/images/hero_mobile.png' : '/images/hero_desktop.png'}
        alt="Hero"
        className="w-full h-auto object-contain object-top"
        style={{ minWidth: '100%' }}
      />
      <AICarousel />
    </div>
  );
};

export default Hero;
