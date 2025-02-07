"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useUtmNavigation } from "@/hooks/use-utm-navigation";
import { Checkbox } from "@/components/ui/checkbox";
import { ScrollGuide } from "@/components/ScrollGuide";
import { toast } from "sonner";
import downloadBanner from "/images/download_banner.png";
import presentPdf from "/present.pdf";

const formSchema = z.object({
  name: z.string().min(1, "お名前を入力してください"),
  company: z.string().min(1, "会社名を入力してください"),
  email: z.string().email("正しいメールアドレスを入力してください"),
  phone: z.string(),
  privacy: z.boolean().refine((val) => val === true, "プライバシーポリシーに同意する必要があります"),
});

const DownloadForm = () => {
  const navigate = useNavigate();
  const navigateWithUtm = useUtmNavigation();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      company: "",
      email: "",
      phone: "",
      privacy: false,
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    try {
      console.log(values);
      
      // URLパラメータからutm_sourceを取得
      const urlParams = new URLSearchParams(window.location.search);
      const utmSource = urlParams.get('utm_source');

      // utm_sourceがgoogleの場合のみコンバージョントラッキングを実行
      if (utmSource === 'google') {
        gtag_report_conversion();
      }

      // GASに送信するデータを準備
      const submitData = {
        companyName: values.company,
        contactName: values.name,
        email: values.email,
        phone: values.phone ? `'${values.phone}` : "", // 電話番号の前にアポストロフィーを追加
        message: "",
        service: utmSource === 'google' 
          ? "chatgpt_excel_download_google"
          : utmSource === 'x'
          ? "chatgpt_excel_download_x"
          : "chatgpt_excel_download"
      };

      // Google App Scriptにデータを送信
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbwdYmcPtI7NsTfGH1amn3MQ5yfVbIBn-j39WllkM5WzVT6zepH7X1FB6KBJw8dpVjsSLQ/exec",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(submitData),
          mode: "no-cors",
        }
      );

      if (response) {
        // フォームの入力値をリセット
        form.reset();
        
        // 資料ダウンロードページに遷移
        navigate('/papers');
      }
    } catch (error) {
      console.error("フォーム送信エラー:", error);
      const errorMessage = error instanceof Error ? error.message : "不明なエラーが発生しました";
      console.error("エラーの詳細:", errorMessage);
      toast.error(`送信に失敗しました。時間をおいて再度お試しください。(${errorMessage})`);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="py-[30px] md:py-[60px]">
      <div className="container mx-auto px-4 max-w-[1280px]">
        <div className="max-w-[800px] mx-auto">
          <div className="bg-white rounded-lg p-3 md:p-12">
            <div className="text-center mt-6">
              <h2 className="text-[28px] md:text-[32px] font-bold mb-4 text-primary">
              </h2>
              <div className="mt-4 mb-4">
                <img
                  src={downloadBanner}
                  alt="AI活用法のダウンロード"
                  className="w-full max-w-[1000px] mx-auto"
                />
              </div>
            </div>
          </div>

          <div className="bg-white flex justify-center my-0">
            <ScrollGuide />
          </div>

          <div className="bg-white rounded-lg p-3 md:p-12">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      <span className="inline-flex gap-1 items-center">
                        お名前
                        <span className="bg-primary text-[10px] text-white px-1 py-1 rounded">必須</span>
                      </span>
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="例：山田太郎" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="company"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      <span className="inline-flex gap-1 items-center">
                        会社名
                        <span className="bg-primary text-[10px] text-white px-1 py-1 rounded">必須</span>
                      </span>
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="例：株式会社○○○○" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      <span className="inline-flex gap-1 items-center">
                        会社用メールアドレス
                        <span className="bg-primary text-[10px] text-white px-1 py-1 rounded">必須</span>
                      </span>
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="例：sample@washoi.co.jp" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      <span className="inline-flex gap-1 items-center">
                        電話番号
                      </span>
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="例：09012345678" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="privacy"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel>
                        個人情報の取り扱いに同意する
                      </FormLabel>
                      <FormMessage />
                    </div>
                  </FormItem>
                )}
              />

                <div className="text-center">
                <Button 
                  type="submit" 
                  size="lg" 
                  disabled={isSubmitting}
                  className="text-[14px] md:text-lg w-full md:w-auto min-w-[240px] h-[48px] md:h-[60px] rounded-[50px] bg-primary text-white hover:bg-primary/90 disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "送信中..." : "資料をダウンロード"}
                </Button>
                </div>

                <div className="text-center mt-8">
                  <p>
                  <br />
                    または公式LINEからもご登録可能です。<br />
                    トークで「<span className='text-primary font-bold'>AIソーシング</span>」とご入力ください。
                  </p>
                  <div className="mt-4 flex justify-center">
                    <a href="https://lin.ee/fH8cez4"><img src="https://scdn.line-apps.com/n/line_add_friends/btn/ja.png" alt="友だち追加" style={{ height: '40px', border: 0, width: 'auto' }} /></a>
                  </div>
                  <br />
                </div>
              </form>
            </Form>

            <p className="text-xs text-gray-500 mt-8">
              ※本フォームは、弊社サービスをご検討中の法人様を対象としております。誠に恐れ入りますが、個人のお客様や、個人の方からのお問い合わせにはご対応いたしかねますので、何卒ご了承ください。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadForm;
