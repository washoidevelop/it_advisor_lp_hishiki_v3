const AIMediaSection = () => {
  return (
    <div className="bg-[#0d47a1] py-12 sm:py-16 md:py-[120px]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        <div className="space-y-6">
          <div className="text-white">
            <h3 className="text-2xl sm:text-3xl font-bold mb-6 underline underline-offset-8">こんな方におすすめです</h3>
            <ul className="list-disc pl-6 space-y-2 text-sm sm:text-[15px]">
              <li>生成AIを活用したいが、具体的な活用方法がわからない方</li>
              <li>すぐに実践できる具体的なAI活用事例を知りたい方</li>
              <li>いま取り組んでいるDXに漠然とした疑問・不安がある方</li>
            </ul>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-transform">
              <div className="space-y-4">
                <h3 className="ml-6 mt-6 text-[24px] font-bold text-[#0d47a1] leading-tight">
                  基本的なアウトプットの生成
                </h3>
                  <img
                    src="/images/ai-marketing.png"
                    alt="OCR Process"
                    className="w-full h-auto"
                  />
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-transform">
              <div className="space-y-4">
                <h3 className="ml-6 mt-6 text-[24px] font-bold text-[#0d47a1] leading-tight">
                  高度な出力や分析も実行
                </h3>
                  <img
                    src="/images/ai-sales.png"
                    alt="OCR Process"
                    className="w-full h-auto"
                  />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIMediaSection;
