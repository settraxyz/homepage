import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Settra - 下一代跨境支付基础设施 | B2B支付解决方案",
    template: "%s | Settra",
  },
  description:
    "Settra 为支付公司提供高并发、高成功率的跨境支付系统。模块化、可扩展、即插即用的B2B SaaS解决方案，支持多银行接入、智能路由、实时监控。",
  keywords: [
    "印度支付",
    "巴西支付",
    "UPI 支付",
    "支付系统",
    "印度支付系统",
    "跨境支付",
    "跨境支付系统",
    "India Payment",
    "支付基础设施",
    "B2B支付",
    "支付网关",
    "多银行接入",
    "支付API",
    "跨境汇款",
    "高并发支付",
    "支付成功率优化",
  ],
  authors: [{ name: "Settra Payments" }],
  creator: "Settra Payments",
  publisher: "Settra Payments",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://settra.xyz"), // 替换为你的实际域名
  alternates: {
    canonical: "/",
    languages: {
      "zh-CN": "/zh-cn",
      "en-US": "/en-us",
    },
  },
  openGraph: {
    title: "Settra - 下一代跨境支付基础设施",
    description:
      "为支付公司提供高并发、高成功率的跨境支付系统。模块化、可扩展、即插即用。",
    url: "https://settra.com",
    siteName: "Settra Payments",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Settra 跨境支付基础设施",
      },
    ],
    locale: "zh_CN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Settra - 下一代跨境支付基础设施",
    description:
      "为支付公司提供高并发、高成功率的跨境支付系统。模块化、可扩展、即插即用。",
    images: ["/twitter-image.jpg"],
    creator: "@settra_xyz",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
  classification: "Business",
  referrer: "origin-when-cross-origin",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
