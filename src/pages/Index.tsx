import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutService from "@/components/AboutService";
import ValueFeaturesNegative from "@/components/ValueFeaturesNegative";
import ValueFeaturesPositive from "@/components/ValueFeaturesPositive";
import AIMediaSection from "@/components/AIMediaSection";
import SupportApproachSection from "@/components/SupportApproachSection";
import SupportMembersSection from "@/components/SupportMembersSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import DownloadBanner from "@/components/DownloadBanner";
import { ScrollGuide } from "@/components/ScrollGuide";

const Index = () => {
  useEffect(() => {
    const loadFont = async () => {
      const font = new FontFace(
        'Noto Sans JP',
        'url(https://fonts.gstatic.com/s/notosansjp/v52/-F6jfjtqLzI2JPCgQBnw7HFyzSD-AsregP8VFBEj75s.woff2)'
      );

      try {
        await font.load();
        document.fonts.add(font);
        console.log('Noto Sans JP font loaded successfully');
      } catch (error) {
        console.error('Error loading Noto Sans JP font:', error);
      }
    };

    loadFont();
  }, []);

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <AboutService />
      <ValueFeaturesNegative />
      <div className="flex justify-center">
        <ScrollGuide />
      </div>
      <ValueFeaturesPositive />
      <AIMediaSection />
      <div className="mt-16">
        <DownloadBanner />
      </div>
      <SupportApproachSection />
      <SupportMembersSection />
      <div className="mt-4 mb-16">
        <DownloadBanner />
      </div>
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
