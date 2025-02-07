import { useEffect, useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

const images = [
  "/images/carousel/claude.png",
  "/images/carousel/copilot.png",
  "/images/carousel/gemini.png",
  "/images/carousel/gpt.png",
  "/images/carousel/notion.png",
];

const AICarousel = () => {
  const isMobile = useIsMobile();
  const [position, setPosition] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prev) => (prev - 1) % (images.length * 100));
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`w-full overflow-hidden bg-white ${isMobile ? 'pt-8' : 'py-16'}`}>
      {!isMobile && (
        <h2 className="text-center text-[#0E3A51] text-4xl font-bold mb-12">最新AIがあなたの代わりに業務を実行します</h2>
      )}
      <div className="relative flex gap-8" style={{ transform: `translateX(${position}px)` }}>
        {/* 最初のセット */}
        {images.map((image, index) => (
          <img
            key={`first-${index}`}
            src={image}
            alt={`AI Tool ${index + 1}`}
            className={`${isMobile ? 'h-12' : 'h-24'} w-auto object-contain`}
          />
        ))}
        {/* 2番目のセット(シームレスなループのため) */}
        {images.map((image, index) => (
          <img
            key={`second-${index}`}
            src={image}
            alt={`AI Tool ${index + 1}`}
            className={`${isMobile ? 'h-12' : 'h-24'} w-auto object-contain`}
          />
        ))}
      </div>
    </div>
  );
};

export default AICarousel;
