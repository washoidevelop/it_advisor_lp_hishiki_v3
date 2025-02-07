import { useUtmNavigation } from "@/hooks/use-utm-navigation";

const ServiceIntro = () => {
  const navigateWithUtm = useUtmNavigation();
  
  return (
    <div className="bg-white py-12 sm:py-0">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 text-center">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-12">
          <div className="text-center flex flex-col items-center justify-center">
            <p className="text-xl sm:text-3xl text-[#0E3A51] font-bold mb-6">　最高のAIツールをお教えします！</p>
            <button 
              onClick={() => navigateWithUtm("/download")}
              className="bg-[#f67d00] text-white px-10 py-4 rounded-full text-2xl font-bold hover:bg-[#FF6600] hover:scale-120 transition-all duration-3000 animate-scale-bounce shadow-lg hover:shadow-xl"
            >
              今すぐ無料相談
            </button>
          </div>
          <div 
            onClick={() => navigateWithUtm("/download")}
            className="cursor-pointer"
          >
            <img
              src="/images/present_banner.png"
              alt="Present banner"
              className="max-w-[600px] w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const AboutService = () => {
  return (
    <>
      <ServiceIntro />
    </>
  );
};

export default AboutService;
