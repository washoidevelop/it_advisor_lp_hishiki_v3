import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export default function Privacy() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-16 max-w-3xl">
        <h1 className="text-2xl font-bold text-left mb-12">プライバシーポリシー</h1>
        
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-4">1. 個人情報の収集・利用目的</h2>
          <p className="mb-4 text-gray-700">当社は、以下の目的で個人情報を収集・利用いたします：</p>
          <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
            <li>サービスの提供、維持、改善のため</li>
            <li>お客様からのお問い合わせ対応のため</li>
            <li>新サービスや更新情報のご案内のため</li>
            <li>利用状況の分析、統計データの作成のため</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-4">2. 個人情報の管理</h2>
          <p className="mb-4 text-gray-700">当社は、お客様の個人情報を以下のように管理いたします：</p>
          <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
            <li>個人情報への不正アクセス、紛失、破壊、改ざん、漏洩の防止に努めます</li>
            <li>従業員に対し、個人情報保護に関する教育・啓発を行います</li>
            <li>個人情報保護に関する規程を整備し、これを遵守します</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-4">3. 個人情報の第三者提供</h2>
          <p className="mb-4 text-gray-700">当社は、以下の場合を除き、お客様の同意なく個人情報を第三者に提供いたしません：</p>
          <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
            <li>法令に基づく場合</li>
            <li>人の生命、身体または財産の保護のために必要がある場合</li>
            <li>公衆衛生の向上または児童の健全な育成の推進のために特に必要がある場合</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-4">4. 個人情報の開示・訂正・削除</h2>
          <p className="mb-4 text-gray-700">お客様は、当社が保有する個人情報について、開示、訂正、削除等を請求することができます。</p>
          <p className="text-gray-700">お申し出の際は、お問い合わせフォームよりご連絡ください。</p>
        </section>
      </div>
      <hr className="my-12 border-gray-300" />
      <Footer />
    </>
  )
}
