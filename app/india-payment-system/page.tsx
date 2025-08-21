import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Check,
  ShieldCheck,
  Gauge,
  Cable,
  Globe,
  Workflow,
  LineChart,
  Building2,
  BookText,
  Sparkles,
  FileCheck,
  MessageSquare,
  CloudCog,
  Cpu,
  WalletMinimal,
  Lock,
  Rocket,
} from "lucide-react";

import {
  BRAND_NAME,
  SITE_URL,
  CONTACT_EMAIL,
  EFFECTIVE_DATE,
  CONTACT_URL,
} from "@/lib/constants";

export const metadata: Metadata = {
  title: `印度支付系统出租｜India Payment System Rental | ${BRAND_NAME}`,
  description: `${BRAND_NAME} 提供印度支付系统/白标出租方案：高并发、高成功率、银行渠道覆盖广，合规可控，支持快速上线与二开集成。`,
  alternates: { canonical: `${SITE_URL}/india-payment-system` },
  robots: { index: true, follow: true },
  openGraph: {
    title: `印度支付系统出租 | ${BRAND_NAME}`,
    description: `${BRAND_NAME} 提供印度支付系统与白标出租（SaaS）：UPI/网银/卡收单、风控、对账清结算、商户管理，一站式落地。`,
    url: `${SITE_URL}/india-payment-system`,
    siteName: BRAND_NAME,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: `${BRAND_NAME} 印度支付系统出租`,
  description: `${BRAND_NAME} 提供印度支付系统/白标出租服务，支持 UPI、网银、卡、风控与清结算。`,
  url: `${SITE_URL}/india-payment-system`,
  brand: {
    "@type": "Brand",
    name: BRAND_NAME,
  },
  offers: {
    "@type": "Offer",
    url: `${SITE_URL}/india-payment-system`,
    priceCurrency: "USD",
    price: "0",
    availability: "https://schema.org/InStock",
  },
};

const Feature = ({
  icon: Icon,
  title,
  desc,
}: {
  // eslint-disable-next-line
  icon: any;
  title: string;
  desc: string;
}) => (
  <Card className="h-full">
    <CardHeader className="space-y-2">
      <CardTitle className="flex items-center gap-2 text-base">
        <Icon className="h-5 w-5" />
        {title}
      </CardTitle>
    </CardHeader>
    <CardContent className="text-sm text-muted-foreground">{desc}</CardContent>
  </Card>
);

export default function IndiaPaymentSystemPage() {
  return (
    <main className="mx-auto container px-4 py-12 lg:py-16">
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="text-center space-y-4">
        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight">
          印度支付系统出租（白标 / SaaS）
        </h1>
        <p className="mx-auto max-w-3xl text-muted-foreground">
          面向支付公司与跨境业务方的{" "}
          <span className="font-medium">印度支付系统</span> 解决方案，支持
          <span className="font-medium"> UPI、网银、银行卡</span>，提供{" "}
          <span className="font-medium">风控、对账清结算、商户/渠道管理</span>，
          高并发、高成功率、快速集成与二次开发能力。
        </p>
        <div className="flex items-center justify-center gap-3">
          <Button
            asChild
            size="lg"
            className="rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white"
          >
            <Link href="#contact">
              <Rocket className="mr-2 h-4 w-4" />
              获取演示 / Demo
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="rounded-2xl">
            <Link href="#features">查看能力一览</Link>
          </Button>
        </div>
        <div className="text-xs text-muted-foreground">
          最后更新：{EFFECTIVE_DATE}
        </div>
      </section>

      <Separator className="my-10" />

      {/* Why */}
      <section id="why" className="grid gap-6 lg:grid-cols-3">
        <Feature
          icon={Gauge}
          title="高并发架构"
          desc="面向峰值流量优化（队列化、幂等、可观测性），稳定承载大促与高峰期。"
        />
        <Feature
          icon={LineChart}
          title="高成功率"
          desc="智能路由与重试策略，按银行/通道画像动态切换，减少失败率。"
        />
        <Feature
          icon={ShieldCheck}
          title="合规与风控"
          desc="KYC/KYB、黑名单、设备指纹、风控规则引擎与审计日志，降低业务风险。"
        />
      </section>

      <section className="mt-6 grid gap-6 lg:grid-cols-3">
        <Feature
          icon={CloudCog}
          title="云原生部署"
          desc="Vercel/自有云/混合部署，灰度与多环境管理，易于横向扩展。"
        />
        <Feature
          icon={Cable}
          title="丰富银行与渠道"
          desc="多银行/PG 接入与管理，通道健康探测，故障自动降级。"
        />
        <Feature
          icon={Workflow}
          title="对账清结算"
          desc="账单抓取、自动对账、分账、结算周期管理，导出对账报表。"
        />
      </section>

      <Separator className="my-10" />

      {/* Capabilities */}
      <section id="features" className="space-y-4">
        <h2 className="text-2xl font-semibold">能力清单</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-base flex items-center gap-2">
                <WalletMinimal className="h-5 w-5" />
                收单能力
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-2">
              <p className="flex items-start gap-2">
                <Check className="h-4 w-4 mt-1" />
                UPI：P2M、Intent、Deep Link、静态/动态二维码
              </p>
              <p className="flex items-start gap-2">
                <Check className="h-4 w-4 mt-1" />
                银行网银：NetBanking/IMPS/NEFT（按银行适配）
              </p>
              <p className="flex items-start gap-2">
                <Check className="h-4 w-4 mt-1" />
                卡：3DS、分期（按收单方政策）
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-base flex items-center gap-2">
                <Lock className="h-5 w-5" />
                风控与合规
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-2">
              <p className="flex items-start gap-2">
                <Check className="h-4 w-4 mt-1" />
                KYB/KYC 流程、文档审核、合规模板
              </p>
              <p className="flex items-start gap-2">
                <Check className="h-4 w-4 mt-1" />
                设备指纹/黑名单/限额限频/地理围栏
              </p>
              <p className="flex items-start gap-2">
                <Check className="h-4 w-4 mt-1" />
                审计日志与告警、可观测性指标
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-base flex items-center gap-2">
                <Cpu className="h-5 w-5" />
                集成与二开
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-2">
              <p className="flex items-start gap-2">
                <Check className="h-4 w-4 mt-1" />
                标准化 API（下单、查单、回调、对账）
              </p>
              <p className="flex items-start gap-2">
                <Check className="h-4 w-4 mt-1" />
                Webhooks & SDK（JS/TS，示例仓库）
              </p>
              <p className="flex items-start gap-2">
                <Check className="h-4 w-4 mt-1" />
                权限/多租户、配置中心与灰度发布
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-base flex items-center gap-2">
                <Building2 className="h-5 w-5" />
                商户与运维后台
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-2">
              <p className="flex items-start gap-2">
                <Check className="h-4 w-4 mt-1" />
                商户开通、费率与风控规则配置
              </p>
              <p className="flex items-start gap-2">
                <Check className="h-4 w-4 mt-1" />
                通道健康、风控事件、失败画像面板
              </p>
              <p className="flex items-start gap-2">
                <Check className="h-4 w-4 mt-1" />
                对账报表导出、结算与发票管理
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator className="my-10" />

      {/* Use cases */}
      <section id="usecases" className="space-y-4">
        <h2 className="text-2xl font-semibold">典型场景</h2>
        <div className="grid gap-4 md:grid-cols-3">
          <Feature
            icon={Globe}
            title="跨境卖家收单"
            desc="印度本地支付收款、自动对账，跨境电商/独立站快速上线。"
          />
          <Feature
            icon={BookText}
            title="教育与订阅"
            desc="学费/订阅周期扣款，失败重试与通知。"
          />
          <Feature
            icon={MessageSquare}
            title="平台与 SaaS"
            desc="多商户、多租户管理，渠道按业务画像路由。"
          />
        </div>
      </section>

      <Separator className="my-10" />

      {/* Compliance note */}
      <section id="compliance" className="space-y-3">
        <h2 className="text-2xl font-semibold flex items-center gap-2">
          <FileCheck className="h-5 w-5" />
          合规提示
        </h2>
        <p className="text-sm text-muted-foreground">
          本系统提供技术能力与运营工具。实际业务需遵守印度及相关司法辖区的法律法规与收单/银行政策，
          包含但不限于数据保护、反洗钱/反恐怖融资（AML/CFT）与消费者保护要求。请在上线前完善合规资质与流程。
        </p>
      </section>

      <Separator className="my-10" />

      {/* FAQ */}
      <section id="faq" className="space-y-4">
        <h2 className="text-2xl font-semibold">常见问题（FAQ）</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">
                交付方式是出租还是买断？
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              默认提供白标 SaaS
              出租，亦可按需提供私有化部署与源码交付（需合规审核与额外协议）。
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-base">接入周期多久？</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              标准集成通常 1-3 天可上线（取决于银行/通道开户与合规材料进度）。
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-base">系统支持哪些银行/PG？</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              按需适配主流银行与支付网关，支持多通道并行与策略路由，详情联系顾问获取清单。
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-base">如何保证成功率？</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              通过通道健康探测、失败画像、策略重试与风控联动优化；同时提供可观测性与运营面板。
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator className="my-10" />

      {/* CTA */}
      <section id="contact" className="text-center space-y-3">
        <h2 className="text-2xl font-semibold flex items-center justify-center gap-2">
          <Sparkles className="h-5 w-5" />
          获取方案与演示
        </h2>
        <p className="text-muted-foreground">
          留下你的需求，我们将在 1 个工作日内联系你，提供 Demo 与技术/合规清单。
        </p>
        <div className="flex items-center justify-center gap-3">
          <Button
            asChild
            size="lg"
            className="rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md"
          >
            <Link href={CONTACT_URL} target="_blank">
              立即咨询
            </Link>
          </Button>

          <Button asChild variant="outline" size="lg" className="rounded-2xl">
            <Link href="/privacy">查看隐私政策</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="rounded-2xl">
            <Link href="/terms">服务条款</Link>
          </Button>
        </div>
        <div className="text-xs text-muted-foreground">
          也可直接发送需求文档到：
          <Link
            href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
              "咨询：印度支付系统出租"
            )}`}
          >
            {CONTACT_EMAIL}
          </Link>
        </div>
      </section>

      <Separator className="my-10" />

      {/* Internal links for SEO */}
      <section className="text-sm text-muted-foreground text-center">
        <p>
          相关页面：
          <Link className="underline" href="/">
            首页
          </Link>{" "}
          ·{" "}
          <Link className="underline" href="/india-payment-system">
            India Payment System
          </Link>{" "}
          ·{" "}
          <Link className="underline" href="/privacy">
            隐私政策
          </Link>{" "}
          ·{" "}
          <Link className="underline" href="/terms">
            服务条款
          </Link>
        </p>
      </section>
    </main>
  );
}
