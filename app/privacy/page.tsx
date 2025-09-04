import type { Metadata } from "next";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";

import {
  BRAND_NAME,
  SITE_URL,
  CONTACT_EMAIL,
  EFFECTIVE_DATE,
} from "@/lib/constants";

import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: `隐私政策`,
  description: `${BRAND_NAME} 的隐私政策，说明我们如何收集、使用、共享与保护您的个人数据。`,
  alternates: {
    canonical: `${SITE_URL}/privacy`,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: `隐私政策`,
    description: `${BRAND_NAME} 的隐私政策。`,
    url: `${SITE_URL}/privacy`,
    siteName: BRAND_NAME,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "PrivacyPolicy",
  name: `${BRAND_NAME} 隐私政策`,
  url: `${SITE_URL}/privacy`,
  datePublished: EFFECTIVE_DATE,
  publisher: {
    "@type": "Organization",
    name: BRAND_NAME,
    url: SITE_URL,
    email: CONTACT_EMAIL,
  },
};

export default function PrivacyPage() {
  return (
    <div className="bg-blue-200/10 -mt-20 pt-20">
      <main className="mx-auto max-w-5xl px-4 py-12 lg:py-16">
        {/* JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <div className="mb-8 space-y-3 text-center">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {BRAND_NAME} 隐私政策
          </h1>
        </div>

        <Card className="shadow-none">
          <CardHeader className="space-y-1">
            <CardTitle className="flex items-center gap-2 text-xl">
              我们如何看待您的隐私
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 leading-7 text-muted-foreground">
            <p>
              {BRAND_NAME}
              （以下简称“我们”）重视您的隐私与数据安全。本政策说明我们在您使用本网站（以下简称“本网站”）及相关服务时，如何收集、使用、共享与保护您的个人信息，以及您可行使的权利。
            </p>

            <section id="what-we-collect" className="space-y-2">
              <h2 className="flex items-center gap-2 text-lg font-semibold text-foreground">
                我们收集的信息
              </h2>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  <span className="font-medium">您主动提供的信息：</span>
                  包括联系方式（如邮箱）、表单/反馈内容、账号资料（若有注册）。
                </li>
                <li>
                  <span className="font-medium">自动收集的信息：</span>
                  设备信息、浏览器与操作系统、访问日志（IP、访问时间、请求
                  URL、Referrer）、页面交互事件等，用于安全防护与性能分析。
                </li>
                <li>
                  <span className="font-medium">Cookies 与本地存储：</span>
                  我们可能使用 Cookies、LocalStorage
                  以维持会话、记住偏好、进行统计分析。详见下文“Cookies 与追踪”。
                </li>
                <li>
                  <span className="font-medium">第三方服务数据：</span>
                  如接入客服聊天、分析或部署/托管平台时，这些服务可能在其隐私政策允许范围内收集数据（见“第三方服务”）。
                </li>
              </ul>
            </section>

            <Separator />

            <section id="how-we-use" className="space-y-2">
              <h2 className="flex items-center gap-2 text-lg font-semibold text-foreground">
                我们如何使用信息
              </h2>
              <ul className="list-disc space-y-2 pl-6">
                <li>提供与维护网站功能、识别与修复故障、提升性能与可用性。</li>
                <li>回应您的咨询与请求，提供客户支持与通知更新。</li>
                <li>进行数据统计与分析，以改进内容与用户体验。</li>
                <li>遵守法律法规、配合监管要求、保障网站与用户安全。</li>
              </ul>
            </section>

            <Separator />

            <section id="cookies" className="space-y-2">
              <h2 className="flex items-center gap-2 text-lg font-semibold text-foreground">
                Cookies 与追踪
              </h2>
              <p>
                我们可能使用必要性 Cookies 保障基本功能，也可能使用分析类
                Cookies 了解访问与使用情况。您可在浏览器中管理或禁用
                Cookies，路径通常为“设置 → 隐私与安全 →
                Cookies/网站数据”。禁用后部分功能可能受限。
              </p>
            </section>

            <Separator />

            <section id="third-parties" className="space-y-2">
              <h2 className="flex items-center gap-2 text-lg font-semibold text-foreground">
                第三方服务
              </h2>
              <p>
                我们的网站基于现代前端与云服务构建，可能使用以下第三方（举例）：
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  <span className="font-medium">Vercel</span>
                  ：用于托管本网站并提供边缘网络与日志。其可能在提供服务过程中处理访客
                  IP、请求日志等。
                </li>
                <li>
                  <span className="font-medium">Google Analytics</span>
                  ：用于网站流量统计与分析。您可通过浏览器插件或设置选择退出。
                </li>
                <li>
                  <span className="font-medium">Tawk.to</span>
                  ：若启用在线客服，相关聊天记录可能由其处理与存储。
                </li>
              </ul>
              <p className="text-sm text-muted-foreground">
                这些第三方各自有独立的隐私政策，数据处理以其政策为准。我们将尽力选择信誉良好的供应商并最小化不必要的数据共享。
              </p>
            </section>

            <Separator />

            <section id="share" className="space-y-2">
              <h2 className="flex items-center gap-2 text-lg font-semibold text-foreground">
                信息共享情形
              </h2>
              <ul className="list-disc space-y-2 pl-6">
                <li>经您明确同意的共享。</li>
                <li>
                  与履行功能所必需的服务提供商共享（如
                  CDN、分析、客服、云托管）。
                </li>
                <li>
                  遵守法律法规、执法或监管要求，或为保护我们及用户的合法权益所必须时。
                </li>
              </ul>
            </section>

            <Separator />

            <section id="transfer" className="space-y-2">
              <h2 className="flex items-center gap-2 text-lg font-semibold text-foreground">
                跨境数据传输
              </h2>
              <p>
                您的数据可能会被传输并存储于您所在国家/地区之外（例如使用境外云服务）。我们将采取合理措施保障跨境传输过程中的数据安全，并遵守适用法律法规。
              </p>
            </section>

            <Separator />

            <section id="retention" className="space-y-2">
              <h2 className="flex items-center gap-2 text-lg font-semibold text-foreground">
                数据保留
              </h2>
              <p>
                我们仅在达成本政策所述目的所必需的期限内保留您的数据，除非法律要求或允许更长的保留期。到期后我们将删除或匿名化处理。
              </p>
            </section>

            <Separator />

            <section id="security" className="space-y-2">
              <h2 className="flex items-center gap-2 text-lg font-semibold text-foreground">
                安全措施
              </h2>
              <p>
                我们通过访问控制、加密传输（HTTPS/TLS）、最小化收集与仅限知情原则等手段保护数据安全。但互联网环境下不存在绝对安全，建议您妥善保管个人信息与账号凭证。
              </p>
            </section>

            <Separator />

            <section id="your-rights" className="space-y-2">
              <h2 className="flex items-center gap-2 text-lg font-semibold text-foreground">
                您的权利
              </h2>
              <ul className="list-disc space-y-2 pl-6">
                <li>访问、更正您的个人信息。</li>
                <li>在符合法律的范围内，请求删除（“被遗忘权”）。</li>
                <li>撤回同意或反对出于特定目的的处理（如直接营销）。</li>
                <li>请求数据可携带（在技术可行情况下）。</li>
                <li>投诉：若您认为您的权利受侵害，可向监管机构投诉。</li>
              </ul>
            </section>

            <Separator />

            <section id="children" className="space-y-2">
              <h2 className="flex items-center gap-2 text-lg font-semibold text-foreground">
                儿童隐私
              </h2>
              <p>
                我们的服务并非面向未成年人。如发现未经监护人同意而收集了未成年人信息，我们将尽快删除相关数据。
              </p>
            </section>

            <Separator />

            <section id="delete" className="space-y-2">
              <h2 className="flex items-center gap-2 text-lg font-semibold text-foreground">
                如何联系我们与删除数据
              </h2>
              <p>
                如需访问/更正/删除您的数据或行使其他权利，请通过以下联系方式与我们联系。为保障安全，我们可能会先验证您的身份。
              </p>
            </section>

            <Separator />

            <section id="changes" className="space-y-2">
              <h2 className="flex items-center gap-2 text-lg font-semibold text-foreground">
                本政策的变更
              </h2>
              <p>
                我们可能不时更新本隐私政策。重大变更将通过网站公告或邮件进行提示。更新后的政策自发布之日起生效，请您定期查阅。
              </p>
            </section>
          </CardContent>
          <CardFooter className="flex flex-col items-start gap-2 text-sm text-muted-foreground">
            <div>
              联系方式：
              <Link
                className="ml-1 font-medium underline"
                href={`mailto:${CONTACT_EMAIL}`}
              >
                {CONTACT_EMAIL}
              </Link>
            </div>

            <div>最后更新：{EFFECTIVE_DATE}</div>
          </CardFooter>
        </Card>
      </main>
    </div>
  );
}
