import { Separator } from "@/components/ui/separator";

const Partners = () => {
  const partners = [
    {
      id: 1,
      name: "Company A",
      src: "/lovable-uploads/b955ab57-1bbc-48f5-8346-a457461d4d0a.png"
    },
    {
      id: 2,
      name: "Company B",
      src: "/lovable-uploads/b955ab57-1bbc-48f5-8346-a457461d4d0a.png"
    },
    {
      id: 3,
      name: "Company C",
      src: "/lovable-uploads/b955ab57-1bbc-48f5-8346-a457461d4d0a.png"
    },
    {
      id: 4,
      name: "Company D",
      src: "/lovable-uploads/b955ab57-1bbc-48f5-8346-a457461d4d0a.png"
    }
  ];

  return (
    <div className="bg-white h-[120px] py-[10px] relative">
      <div className="max-w-[1280px] mx-auto px-6 h-full flex items-center">
        <div className="flex flex-wrap items-center justify-center md:gap-x-16 gap-x-2 gap-y-8 w-full">
          {partners.map((partner) => (
            <img
              key={partner.id}
              src={partner.src}
              alt={`${partner.name} logo`}
              className="w-[75px] h-[30px] sm:w-[150px] sm:h-[60px] object-contain"
            />
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0">
        <div className="max-w-[1280px] mx-auto px-6">
          <Separator className="bg-gray-200" />
        </div>
      </div>
    </div>
  );
};

export default Partners;