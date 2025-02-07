const ValueFeaturesNegative = () => {
  return (
    <div className="bg-white pt-0 pb-6 md:py-[60px]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        <div className="bg-gray-500 rounded-2xl p-6 sm:p-8 md:p-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white text-left mb-8">
            外注でよくあるお悩み
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-white p-6 sm:p-8 rounded-lg flex flex-col h-full">
              <h3 className="text-center text-2xl sm:text-2xl font-bold text-[#0E3A51]">
                高い
              </h3>
              <h4 className="text-center py-3 text-black">
                相場がわからない、人件費の高騰
              </h4>
              <div className="flex-grow flex items-center justify-center">
                <img
                  src="/images/isome-price.png"
                  alt="顧客から見放される"
                  className="max-w-[100px] md:max-w-[150px]"
                />
              </div>
            </div>
            <div className="bg-white p-6 sm:p-8 rounded-lg flex flex-col h-full">
              <h3 className="text-center text-2xl sm:text-2xl font-bold text-[#0E3A51]">
                遅い
              </h3>
              <h4 className="text-center py-3 text-black">
                やり取りや認識合わせに時間がかかる
              </h4>
              <div className="flex-grow flex items-center justify-center">
                <img
                  src="/images/isome-think.png"
                  alt="優秀な人材が辞めていく"
                  className="max-w-[100px] md:max-w-[150px]"
                />
              </div>
            </div>
            <div className="bg-white p-6 sm:p-8 rounded-lg flex flex-col h-full">
              <h3 className="text-center text-2xl sm:text-2xl font-bold text-[#0E3A51]">
                質が悪い
              </h3>
              <h4 className="text-center py-3 text-black">
                かけたコストの割に出来が良くない
              </h4>
              <div className="flex-grow flex items-center justify-center">
                <img
                  src="/images/isome-question-pc.png"
                  alt="時代遅れ認知されてしまう"
                  className="max-w-[100px] md:max-w-[150px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ValueFeaturesNegative;
