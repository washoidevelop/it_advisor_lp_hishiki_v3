import { Button } from "@/components/ui/button";
import { useUtmNavigation } from "@/hooks/use-utm-navigation";

const DownloadBanner = () => {
  const navigateWithUtm = useUtmNavigation();

  return (
    <div className="flex flex-col sm:flex-row justify-center items-center px-4">
      <div className="text-center">
        <p className="text-xl sm:text-3xl text-[#0E3A51] font-bold mb-3">　最高のAIツールをお教えします！</p>
        <Button
          size="lg"
          className="bg-[#f67d00] text-white px-10 py-8 rounded-full text-2xl font-bold hover:bg-[#FF6600] hover:scale-120 transition-all duration-3000 animate-scale-bounce shadow-lg hover:shadow-xl"
          onClick={() => navigateWithUtm("/download")}
        >
          今すぐ無料相談
        </Button>
      </div>
      <img 
        src="/images/present_banner.png" 
        alt="プレゼントバナー" 
        className="w-[500px] h-[300px] object-contain -ml-2 relative z-10"
      />
    </div>
  );
};

export default DownloadBanner;
