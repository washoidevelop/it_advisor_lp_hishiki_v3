const ValueFeaturesPositive = () => {
  return (
    <div className="bg-white pt-0 pb-6 md:py-[60px]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        <div className="bg-blue-800 rounded-2xl p-6 sm:p-8 md:p-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white text-left mb-8">
            「AIソーシング」の場合
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-white p-6 sm:p-8 rounded-lg flex flex-col h-full">
              <h3 className="text-center text-2xl sm:text-2xl font-bold text-[#0E3A51]">
                外注費がかからない
              </h3>
              <h4 className="text-center py-3 text-black">
                外注業務をAIで内製化します
              </h4>
              <div className="flex-grow flex items-center justify-center">
                <img
                  src="/images/isome-up.png"
                  alt="すぐに効果出る"
                  className="max-w-[100px] md:max-w-[150px]"
                />
              </div>
            </div>
            <div className="bg-white p-6 sm:p-8 rounded-lg flex flex-col h-full">
              <h3 className="text-center text-2xl sm:text-2xl font-bold text-[#0E3A51]">
                AIによる自動化で早い
              </h3>
              <h4 className="text-center py-3 text-black">
                AIが24時間いつでも作業します
              </h4>
              <div className="flex-grow flex items-center justify-center">
                <img
                  src="/images/isome-automation.png"
                  alt="どんどん進む"
                  className="max-w-[100px] md:max-w-[150px]"
                />
              </div>
            </div>
            <div className="bg-white p-6 sm:p-8 rounded-lg flex flex-col h-full">
              <h3 className="text-center text-2xl sm:text-2xl font-bold text-[#0E3A51]">
                専門人材×最先端AI
              </h3>
              <h4 className="text-center py-3 text-black">
                AI人材がAIと業務をつなげます
              </h4>
              <div className="flex-grow flex items-center justify-center">
                <img
                  src="/images/isome-road.png"
                  alt="コストパフォーマンス"
                  className="max-w-[100px] md:max-w-[150px]"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6 py-0">
            <img
              src="/images/price_compare.png"
              alt="価格比較"
              className="w-full max-w-[800px] mx-auto"
            />
          </div>
      </div>
    </div>
  );
};

export default ValueFeaturesPositive;
