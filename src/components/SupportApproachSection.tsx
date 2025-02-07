const SupportApproachSection = () => {
  return (
    <div className="bg-[#EDF2F7] py-12 sm:py-16 md:py-[120px]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        <h2 className="text-[24px] font-bold text-navy text-left mb-8 sm:mb-12">
          AIソーシングの支援イメージ
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {/* 戦略と実践の融合カード */}
          <div className="bg-white rounded-[16px] border border-navy p-6 sm:p-8 flex flex-col h-full">
            <h3 className="text-xl sm:text-2xl font-bold text-navy mb-4">
              毎月の業務変革テーマの計画を作成する
            </h3>
            <div className="border mt-auto">
              <img
                src="/images/plan.png"
                alt="AI導入アプローチの図"
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* シームレスな連携カード */}
          <div className="bg-white rounded-[16px] border border-navy p-6 sm:p-8 flex flex-col h-full">
            <h3 className="text-xl sm:text-2xl font-bold text-navy mb-4">
              テーマごとにAI活用の研修、ツール導入、システム開発をする
            </h3>
            <div className="border mt-auto">
              <img
                src="/images/solutions.png"
                alt="統合支援体制の図"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportApproachSection;
