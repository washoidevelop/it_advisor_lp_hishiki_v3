import { Button } from "@/components/ui/button";
import { useUtmNavigation } from "@/hooks/use-utm-navigation";
import { useScrollDirection } from "@/hooks/use-scroll-direction";

const Navbar = () => {
  const navigateWithUtm = useUtmNavigation();
  const isVisible = useScrollDirection();
  
  return (
    <nav className={`w-full py-2 bg-white fixed left-0 z-50 shadow-sm transition-all duration-300 ${
      isVisible ? 'top-0' : '-top-full'
    }`}>
      <div className="max-w-screen-xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center">
          <button onClick={() => navigateWithUtm("/")} className="text-[#0d47a1] font-bold text-xl" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>
            AIソーシング
          </button>
        </div>
        
        <div className="flex items-center space-x-6">
          <span className="hidden sm:inline text-[#0d47a1] font-bold text-xl">
            TEL：050-4560-4720
          </span>
          <Button
            className="bg-[#f67d00] hover:bg-[#f67d00]/90 text-white font-medium px-6 h-[40px] rounded-full"
            onClick={() => navigateWithUtm("/download")}
          >
            無料相談
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
