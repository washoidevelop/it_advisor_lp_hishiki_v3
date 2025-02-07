import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const papers = [
  {
    category: "サービス資料",
    items: [
      {
        title: "AIソーシング説明資料",
        image: "/images/ai-sourcing_service.png",
        pdf: "/ai-sourcing_service.pdf"
      }
    ]
  },
  {
    category: "AI活用資料",
    items: [
      {
        title: "集客・営業のAI活用法10選",
        image: "/images/present_sales.png",
        pdf: "/present_sales.pdf"
      },
      {
        title: "DX×AI活用法20選",
        image: "/images/present_dx_ai.png",
        pdf: "/present_dx_ai.pdf"
      },
      {
        title: "ChatGPT×Excel活用30選",
        image: "/images/present_gpt.png",
        pdf: "/present_gpt.pdf"
      }
    ]
  }
];

const Papers = () => {
  const handleDownload = (pdf: string) => {
    window.open(pdf, '_blank');
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="container mx-auto px-4 py-12 md:py-16">
        <h1 className="text-3xl md:text-4xl font-bold text-center mt-8 mb-12">
          ダウンロード資料一覧
        </h1>
        
        <div className="space-y-12">
          {papers.map((section, index) => (
            <div key={index}>
              <h2 className="text-center text-2xl font-bold mb-6">{section.category}</h2>
              <div className={`grid gap-6 ${
                section.items.length === 1 
                  ? 'grid-cols-1 max-w-[400px] mx-auto' 
                  : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
              }`}>
                {section.items.map((item, itemIndex) => (
                  <Card key={itemIndex} className="overflow-hidden">
                    <CardHeader>
                      <CardTitle className="text-xl">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-auto h-full object-cover rounded-md p-10"
                      />
                    </CardContent>
                    <CardFooter>
                      <Button
                        onClick={() => handleDownload(item.pdf)}
                        className="text-xl w-full bg-blue-800 hover:bg-blue-700"
                      >
                        ダウンロード
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Papers;
