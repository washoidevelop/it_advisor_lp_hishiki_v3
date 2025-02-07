import { ExternalLink } from "lucide-react";
import { useUtmNavigation } from "@/hooks/use-utm-navigation";

const Footer = () => {
  const navigateWithUtm = useUtmNavigation();

  return (
    <footer className="bg-white py-12 sm:py-16 px-4 sm:px-8">
      <div className="max-w-[1280px] mx-auto">
        {/* Logo and Address */}
        <div className="mb-8 sm:mb-12">
          <div className="mb-6 sm:mb-8">
            <h2 className="text-3xl sm:text-[40px] font-bold text-navy mb-2">AIソーシング</h2>
            <p className="text-navy">WashoiのAI業務変革で、毎月会社を進化させる</p>
          </div>
          <div className="text-sm sm:text-[15px] space-y-1">
            <p>株式会社Washoi</p>
            <p>〒150-0001</p>
            <p>東京都渋谷区神宮前2-33-8</p>
            <br />
            <p>TEL：050-4560-4720</p>
            <p>MAIL：info@washoi.co.jp</p>
          </div>
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 mb-8 sm:mb-12">
          <a href="https://www.washoi.co.jp" target="_blank" rel="noopener noreferrer" className="block rounded-lg border border-gray-200 p-4 sm:p-8 hover:bg-gray-50">
            <div className="flex items-center gap-2 mb-4">
              <h3 className="text-base sm:text-lg font-bold">会社概要</h3>
              <ExternalLink className="h-4 w-4" />
            </div>
            <p className="text-sm sm:text-[15px]">
              生成AI活用支援、DX支援、システム開発を行っています。
            </p>
          </a>
        </div>

        {/* Footer Links */}
        <div className="flex flex-wrap gap-x-4 sm:gap-x-8 gap-y-2 sm:gap-y-4 justify-center mb-6 sm:mb-8 text-sm sm:text-[15px]">
          <div className="flex items-center gap-1">
            <button onClick={() => navigateWithUtm("/privacy")} className="hover:underline">プライバシーポリシー</button>
            <ExternalLink className="h-4 w-4" />
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-xs sm:text-sm">
          <p>© Washoi Inc. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
