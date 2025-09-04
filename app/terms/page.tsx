import type { Metadata } from "next";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";

import { Separator } from "@/components/ui/separator";

import {
  BRAND_NAME,
  SITE_URL,
  CONTACT_EMAIL,
  EFFECTIVE_DATE,
  GOVERNING_LAW,
  DISPUTE_VENUE,
} from "@/lib/constants";

export const metadata: Metadata = {
  title: `服务条款`,
  description: `${BRAND_NAME} 的服务条款，规范您对本网站与相关服务的使用。`,
  alternates: {
    canonical: `${SITE_URL}/terms`,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: `服务条款`,
    description: `${BRAND_NAME} 的服务条款。`,
    url: `${SITE_URL}/terms`,
    siteName: BRAND_NAME,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "TermsOfService",
  name: `${BRAND_NAME} 服务条款`,
  url: `${SITE_URL}/terms`,
  datePublished: EFFECTIVE_DATE,
  publisher: {
    "@type": "Organization",
    name: BRAND_NAME,
    url: SITE_URL,
    email: CONTACT_EMAIL,
  },
};

export default function TermsPage() {
  return (
    <div className="bg-blue-200/10 -mt-20 pt-20">
      <main className="mx-auto max-w-5xl px-4 py-12 lg:py-16">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <div className="mb-8 space-y-3 text-center">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {BRAND_NAME} 服务条款
          </h1>
        </div>

        <Card className="shadow-none">
          <CardHeader className="space-y-1">
            <CardTitle className="flex items-center gap-2 text-xl">
              阅读本条款前请先了解
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 leading-7 text-muted-foreground">
            <p>
              欢迎使用 {BRAND_NAME}
              （以下简称“我们”）提供的网站与相关服务（统称“本服务”）。本《服务条款》（以下简称“本条款”）是您与我们之间关于使用本服务的法律协议。您访问或使用本服务即表示您已阅读、理解并同意受本条款约束。
            </p>

            <section className="space-y-2" id="acceptance">
              <h2 className="flex items-center gap-2 text-lg font-semibold text-foreground">
                一、条款的接受与变更
              </h2>
              <ul className="list-disc space-y-2 pl-6">
                <li>您应在使用本服务前仔细阅读并完全理解本条款。</li>
                <li>
                  我们有权根据业务需要更新本条款；重大变更将通过站内公告或邮件通知。更新后继续使用本服务即视为您接受变更。
                </li>
              </ul>
            </section>

            <Separator />

            <section className="space-y-2" id="eligibility">
              <h2 className="flex items-center gap-2 text-lg font-semibold text-foreground">
                二、资格与账户
              </h2>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  您应具备完全民事行为能力；若为代表组织/公司使用，您保证已获得相应授权。
                </li>
                <li>
                  如本服务涉及注册账户，您需提供真实、准确、完整的信息，并及时更新。
                </li>
                <li>
                  您应妥善保管账户与凭证，对通过该账户进行的一切活动负责。
                </li>
              </ul>
            </section>

            <Separator />

            <section className="space-y-2" id="acceptable-use">
              <h2 className="flex items-center gap-2 text-lg font-semibold text-foreground">
                三、可接受使用政策（AUP）
              </h2>
              <ul className="list-disc space-y-2 pl-6">
                <li>不得用于任何违法、侵权、欺诈、骚扰、恶意或有害目的。</li>
                <li>
                  不得干扰或试图干扰本服务的正常运行（如
                  DDoS、爬虫滥用、绕过安全控制、逆向工程等）。
                </li>
                <li>不得上传或传播恶意代码、垃圾信息或违反公序良俗的内容。</li>
                <li>
                  在适用情况下，应遵守对 API 频率、数据抓取和合理使用的限制。
                </li>
              </ul>
            </section>

            <Separator />

            <section className="space-y-2" id="content-ip">
              <h2 className="flex items-center gap-2 text-lg font-semibold text-foreground">
                四、内容与知识产权
              </h2>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  除非另有说明，本网站上的文本、图像、标识、界面设计与软件等均由我们或相应权利人享有知识产权，受著作权、商标与其他法律保护。
                </li>
                <li>
                  您在本服务中提交或上传的内容，您仍保留其相应权利；但您授予我们一项非独占、全球范围、可转授权、免版税的许可，用于运营、展示与改进本服务。
                </li>
                <li>
                  未经授权，您不得对本服务的任何部分进行复制、修改、分发、销售或出租。
                </li>
              </ul>
            </section>

            <Separator />

            <section className="space-y-2" id="third-parties">
              <h2 className="flex items-center gap-2 text-lg font-semibold text-foreground">
                五、第三方服务与链接
              </h2>
              <p>
                本服务可能包含第三方提供的功能、组件或链接（如部署/托管、统计分析、在线客服等）。您对第三方服务的使用受其各自条款与隐私政策约束，我们不对此等第三方的行为或内容承担责任。
              </p>
            </section>

            <Separator />

            <section className="space-y-2" id="fees">
              <h2 className="flex items-center gap-2 text-lg font-semibold text-foreground">
                六、费用与支付（如适用）
              </h2>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  如本服务涉及付费，费用标准与结算方式以您与我们另行签署的订单/合同或我们公布的价格政策为准。
                </li>
                <li>您应按期支付相关费用；逾期未付可能导致服务中止或终止。</li>
              </ul>
            </section>

            <Separator />

            <section className="space-y-2" id="privacy">
              <h2 className="flex items-center gap-2 text-lg font-semibold text-foreground">
                七、隐私与数据保护
              </h2>
              <p>
                我们如何收集、使用、共享与保护您的个人信息，请参见
                <Link className="mx-1 font-medium underline" href="/privacy">
                  《隐私政策》
                </Link>
                。
              </p>
            </section>

            <Separator />

            <section className="space-y-2" id="disclaimer">
              <h2 className="flex items-center gap-2 text-lg font-semibold text-foreground">
                八、免责声明
              </h2>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  本服务按“现状”和“可用”基础提供，我们不对其绝对无错误、不中断或满足您所有特殊需求作出保证。
                </li>
                <li>
                  在适用法律允许的最大范围内，我们不对因使用或无法使用本服务而造成的间接、偶发、惩罚性或后果性损害承担责任。
                </li>
                <li>
                  （如涉及支付、金融相关领域）我们非银行或金融机构，不提供投资、理财或法律建议，具体以您与我们签署的合同为准。
                </li>
              </ul>
            </section>

            <Separator />

            <section className="space-y-2" id="liability">
              <h2 className="flex items-center gap-2 text-lg font-semibold text-foreground">
                九、责任限制
              </h2>
              <p>
                在适用法律允许的范围内，无论出于任何原因或基于任何责任理论，我们对您因本条款或本服务产生的所有索赔的累计赔偿责任总额以您在引起责任的最近
                12
                个月内向我们支付的费用为上限（若为免费服务，则以法律允许的最低限度为准）。
              </p>
            </section>

            <Separator />

            <section className="space-y-2" id="termination">
              <h2 className="flex items-center gap-2 text-lg font-semibold text-foreground">
                十、终止
              </h2>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  如您违反本条款或适用法律，我们可中止或终止向您提供本服务。
                </li>
                <li>
                  您可随时停止使用本服务；如涉及合同约定，则按合同处理后续事项。
                </li>
                <li>条款终止并不影响终止前已产生的权利义务。</li>
              </ul>
            </section>

            <Separator />

            <section className="space-y-2" id="law-dispute">
              <h2 className="flex items-center gap-2 text-lg font-semibold text-foreground">
                十一、适用法律与争议解决
              </h2>
              <ul className="list-disc space-y-2 pl-6">
                <li>本条款受 {GOVERNING_LAW} 管辖并按其解释。</li>
                <li>
                  因本条款或本服务引起的任何争议，双方应友好协商解决；协商不成的，提交至{" "}
                  {DISPUTE_VENUE} 解决。
                </li>
              </ul>
            </section>

            <Separator />

            <section className="space-y-2" id="changes">
              <h2 className="flex items-center gap-2 text-lg font-semibold text-foreground">
                十二、条款的更新
              </h2>
              <p>
                我们可能根据法律、监管或业务变化不时更新本条款。重大变更将通过网站公告或邮件进行提示。更新后的条款自发布之日起生效，请您定期查阅。
              </p>
            </section>

            <Separator />

            <section className="space-y-2" id="contact">
              <h2 className="flex items-center gap-2 text-lg font-semibold text-foreground">
                十三、联系我们
              </h2>
              <p>
                如您对本条款有任何问题或争议解决意向，请通过以下联系方式与我们联系。我们可能为核验目的而要求您提供必要的身份信息。
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
