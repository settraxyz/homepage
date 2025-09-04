import { ArrowRight } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "产品演示",
  description: "选择要体验的后台类型：三方、四方、商户。",
};

const cards = [
  {
    title: "演示三方系统后台",
    desc: "账号: demo \n 密码: demo123456",
    href: `https://demo-xadmin.settra.xyz`,
    cta: "进入后台",
  },
  {
    title: "演示四方系统后台",
    desc: "账号：demo \n 密码: 12345678",
    href: `https://demo-admin.settra.xyz`,
    cta: "进入后台",
  },
  {
    title: "演示商户后台",
    desc: "账号：demo \n 密码: 12345678",
    href: `https://demo-merchant.settra.xyz`,
    cta: "进入后台",
  },
];

export default function DemoPage() {
  return (
    <main className="container mx-auto px-4 py-14 md:py-20">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
          产品演示入口
        </h1>
        <p className="mt-3 text-slate-600">
          请选择要体验的后台类类型，收银台可在后台商户测试下单体验。
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-6 md:mt-14 md:grid-cols-3">
        {cards.map((card) => (
          <div
            key={card.title}
            className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white/70 p-6 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
          >
            <div
              className="pointer-events-none absolute inset-0 opacity-60"
              style={{
                background:
                  "radial-gradient(1200px 200px at 50% -10%, rgba(99,102,241,0.07), transparent 60%), radial-gradient(300px 300px at 90% 110%, rgba(168,85,247,0.08), transparent 60%)",
              }}
            />
            <div className="relative">
              <h2 className="text-lg font-semibold text-slate-900">
                {card.title}
              </h2>
              <p className="mt-2 text-sm leading-6 text-slate-600 whitespace-pre-line">
                {card.desc}
              </p>
              <Link
                href={card.href}
                target="_blank"
                className="group mt-5 inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:from-indigo-500 hover:to-purple-500"
              >
                {card.cta}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
