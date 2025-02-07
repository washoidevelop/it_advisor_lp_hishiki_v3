import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Message: FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <div className="container mx-auto px-4 py-16 md:py-24 font-serif">
        <div className="max-w-3xl mx-auto">
          {/* 導入部分 */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-10">
              <p className="mb-4">私たちが提供するのは、</p>
              <p className="block">「安心感のある変革」です</p>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              <p className="mb-2">私たちは単なる業務効率化を提供するのではありません。</p>
              <p className="block">一見無機質に見えるAI技術は、実は人の心を大きく動かす力を持っています。</p>
            </p>
          </div>

          {/* メインメッセージ */}
          <div className="p-4 md:p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              お客様が私たちから得られるもの
            </h2>
            <ul className="space-y-6">
              <li className="flex items-start">
                <span className="text-gray-600 mr-3">●</span>
                <p className="text-lg text-gray-800">毎日子どもと晩ごはんを食べるという当たり前を取り戻すこと</p>
              </li>
              <li className="flex items-start">
                <span className="text-gray-600 mr-3">●</span>
                <p className="text-lg text-gray-800">家族イベントを心から楽しめること</p>
              </li>
              <li className="flex items-start">
                <span className="text-gray-600 mr-3">●</span>
                <p className="text-lg text-gray-800">自分の役割を見つけ、チームに信頼され、周りの人の役に立っている実感を手に入れること</p>
              </li>
              <li className="flex items-start">
                <span className="text-gray-600 mr-3">●</span>
                <p className="text-lg text-gray-800">心からワクワクするチャレンジに、安心して没頭できること</p>
              </li>
              <li className="flex items-start">
                <span className="text-gray-600 mr-3">●</span>
                <p className="text-lg text-gray-800">社員と顧客の満足度が、測るまでもなく目に見えて高いこと</p>
              </li>
              <li className="flex items-start">
                <span className="text-gray-600 mr-3">●</span>
                <p className="text-lg text-gray-800">自信が溢れ、人材も顧客も協力者も自然と集まってくること</p>
              </li>
              <li className="flex items-start">
                <span className="text-gray-600 mr-3">●</span>
                <p className="text-lg text-gray-800">部活のような、チームでしか味わえない一体感、高揚感を手に入れること</p>
              </li>
            </ul>
          </div>

          {/* 結びの文章 */}
          <div className="text-center mb-12">
            <p className="text-xl text-gray-600 mb-8">
              <p className="mb-2">これらの価値を実現するために、私たちは最先端の生成AI技術を活用します。</p>
              <p className="block">お客様に関わるすべての人の生活をより豊かなものへと変革します。</p>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Message;
