const SupportMembersSection = () => {
  return (
    <div className="bg-white py-12 sm:py-16 md:py-[120px]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Left side: Title and Description */}
          <div className="w-full lg:w-1/3">
            <div className="space-y-4 sm:space-y-6">
              <h2 className="text-xl sm:text-2xl md:text-[24px] font-bold text-navy">支援メンバーのご紹介</h2>
            </div>
          </div>

          {/* Right side: Member Cards */}
          <div className="w-full lg:w-2/3 space-y-4">
            <div className="bg-white rounded-lg border border-navy p-4 sm:p-6">
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                <img
                  src="/images/higashi.png"
                  alt="CTO（最高技術責任者）"
                  className="w-32 h-32 object-cover rounded-lg"
                />
                <div className="flex-1">
                  <div className="mb-2">
                    <p className="text-sm text-navy">CTO（最高技術責任者）</p>
                    <p className="text-base sm:text-lg font-bold text-navy">東　孝紀</p>
                  </div>
                  <p className="text-sm text-navy">
                    京都大学工学部卒。京都大学大学院工学研究科卒。<br />
                    ソニーにて次世代半導体の研究開発、研究タスクの自動化を行う。<br />
                    ECブランドの立ち上げ、販売業務の自動化、データ分析システムの開発を行う。<br />
                    企業の基幹システムの開発も踏まえ、現在は生成AI活用の専門家として、企業の業務変革を推進。
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg border border-navy p-4 sm:p-6">
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                <img
                  src="/images/hishiki.png"
                  alt="COO（最高執行責任者）"
                  className="w-32 h-32 object-cover rounded-lg"
                />
                <div className="flex-1">
                  <div className="mb-2">
                    <p className="text-sm text-navy">COO（最高執行責任者）</p>
                    <p className="text-base sm:text-lg font-bold text-navy">日紫喜　賢太</p>
                  </div>
                  <p className="text-sm text-navy">
                    東京大学工学部卒。東京大学大学院工学系研究科卒。<br />
                    JFEスチールにて圧延工場の能率向上に従事し、年間数千万円のコスト削減を実現。<br />
                    Meguru AIを創業、不動産業者向けAIシステムを開発。<br />
                    企業の基幹システムの開発、短期で成果を出す業務効率化、生成AI活用に精通。
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg border border-navy p-4 sm:p-6">
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                <img
                  src="/images/nii.png"
                  alt="CIO（最高情報責任者）"
                  className="w-32 h-32 object-cover rounded-lg"
                />
                <div className="flex-1">
                  <div className="mb-2">
                    <p className="text-sm text-navy">CIO（最高情報責任者）</p>
                    <p className="text-base sm:text-lg font-bold text-navy">新居　邦亮</p>
                  </div>
                  <p className="text-sm text-navy">
                    京都大学工学部卒。京都大学大学院工学研究科卒。<br />
                    三菱電機にて鉄道用変電所建設のマネジメント、電気設計を行う。<br />
                    顧客の現状とニーズの把握、適切な課題設定、最適なソリューションを選定する専門家。<br />
                    多くの顧客の業務効率化を実現してきた経験をもとに、生成AIを活用した業務変革を推進。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportMembersSection;
