const ValueFeatures = () => {
  return (
    <div className="bg-white pt-12 pb-6 md:py-[60px]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        <div className="bg-blue-800 rounded-2xl p-6 sm:p-8 md:p-12">
          <h2 className="text-xl sm:text-2xl font-bold text-white text-left mb-4">
            WashoiでAI活用して業務変革をした場合
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-white p-6 sm:p-8 rounded-lg">
              <h3 className="text-lg sm:text-xl font-bold text-[#0E3A51] mb-4">
                すぐに効果が出るから嬉しい
              </h3>
              <img
                src="/images/fast_effect.svg"
                alt="すぐに効果出る"
                className="max-w-[100px] md:max-w-[150px] mx-auto mt-6"
              />
            </div>
            <div className="bg-white p-6 sm:p-8 rounded-lg">
              <h3 className="text-lg sm:text-xl font-bold text-[#0E3A51] mb-4">
                1ヶ月で完結してどんどん進むから楽しい
              </h3>
              <img
                src="/images/monthly_fun.svg"
                alt="どんどん進む"
                className="max-w-[100px] md:max-w-[150px] mx-auto mt-6"
              />
            </div>
            <div className="bg-white p-6 sm:p-8 rounded-lg">
              <h3 className="text-lg sm:text-xl font-bold text-[#0E3A51] mb-4">
                コストパフォーマンスが高く、安心して続けられる
              </h3>
              <img
                src="/images/cost_performance.svg"
                alt="コストパフォーマンス"
                className="max-w-[100px] md:max-w-[150px] mx-auto mt-6"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ValueFeatures;
