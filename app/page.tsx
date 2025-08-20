"use client";

import { Button } from "@/components/ui/button";

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Threads from "@/components/threads";

export default function SettraLandingPage() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const leftContainerVariants = {
    enter: {
      transition: { staggerChildren: 0.05 },
    },
    exit: {
      transition: { staggerChildren: 0.03, staggerDirection: -1 },
    },
  };

  const leftChildVariants = {
    enter: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 500, velocity: -100 },
        duration: 0.1,
      },
    },
    exit: {
      y: 5,
      opacity: 0,
      transition: {
        y: { stiffness: 500 },
      },
    },
  };

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute -left-40 -top-40 h-96 w-96 rounded-full bg-gradient-to-br from-indigo-200 to-purple-200/60 blur-3xl" />
        <div className="absolute -right-40 top-1/3 h-[28rem] w-[28rem] rounded-full bg-gradient-to-tr from-cyan-200/20 to-emerald-200/10 blur-3xl" />
      </div>

      <header
        className={cn(
          "sticky top-0 z-20 backdrop-blur",
          scrolled ? "bg-white/50" : "bg-transparent"
        )}
      >
        <div className="container mx-auto flex items-center justify-between px-4 h-20">
          <div className="flex items-center gap-4">
            <Image
              src="/logo.png"
              width={256}
              height={256}
              alt="Settra Logo"
              className="size-10"
            />
            <span className="text-xl font-bold tracking-tight">Settra</span>
          </div>
          <nav className="hidden items-center gap-10 md:flex font-semibold">
            <a
              href="#features"
              className=" text-slate-600 hover:text-slate-900"
            >
              产品
            </a>
            <a href="#cases" className=" text-slate-600 hover:text-slate-900">
              客户案例
            </a>
            <a href="#cta" className=" text-slate-600 hover:text-slate-900">
              联系我们
            </a>
          </nav>
          <div className="flex items-center gap-3">
            <Button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md">
              获取演示
            </Button>
          </div>
        </div>
      </header>

      <div className="bg-blue-100/30 -mt-20 pt-20">
        <section className="relative container mx-auto px-4 py-24 overflow-hidden items-center flex-col md:flex-row  gap-10 flex justify-between">
          <motion.div
            variants={leftContainerVariants}
            initial="exit"
            animate="enter"
            className="relative text-center md:text-left"
          >
            <motion.h1
              variants={leftChildVariants}
              className="text-balance text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl"
            >
              Settra — 下一代跨境支付解决方案
            </motion.h1>
            <motion.p
              variants={leftChildVariants}
              className="mx-auto text-lg mt-5 max-w-2xl text-pretty text-slate-600"
            >
              为支付公司提供{" "}
              <span className="text-indigo-600 font-semibold">高并发</span>、
              <span className="text-indigo-600 font-semibold">高成功率</span>{" "}
              的跨境支付系统。 模块化、可扩展、即插即用。
            </motion.p>
            <motion.div
              variants={leftChildVariants}
              className="mt-8 flex flex-wrap items-center justify-center md:justify-start gap-4"
            >
              <Button
                size="lg"
                className="group bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md"
              >
                立即咨询{" "}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-slate-300 bg-white text-slate-700 hover:bg-slate-50"
              >
                获取演示
              </Button>
            </motion.div>
            <motion.p
              variants={leftChildVariants}
              className="mt-4 text-xs text-slate-500"
            >
              实时监控 • 多银行接入 • 智能路由
            </motion.p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="w-2/3"
          >
            <Image
              src="/hero1.png"
              width={1742}
              height={1288}
              alt="Hero"
              className="w-full"
            />
          </motion.div>
        </section>
      </div>
      <section className="container mx-auto px-4 pb-6">
        <div className="flex py-10 justify-center">
          <p className="text-2xl font-semibold tracking-tight">
            支持超多银行账户
          </p>
        </div>
        <div className="mx-auto grid max-w-4xl grid-cols-2 mt-6 items-center gap-10 md:gap-18 md:grid-cols-4">
          <div className="filter grayscale opacity-60 flex justify-center">
            <Image
              src="/icons/bom.jpg"
              width={268}
              height={63}
              className="h-10 w-auto rounded-md"
              alt="Bank of Maharashtra"
            />
          </div>
          <div className="filter grayscale opacity-60 flex justify-center">
            <Image
              src="/icons/jkbank.png"
              width={170}
              height={57}
              className="h-10 w-auto"
              alt="J&K Bank"
            />
          </div>
          <div className="filter grayscale opacity-60 flex justify-center">
            <Image
              src="/icons/idbi.png"
              width={198}
              height={39}
              className="h-10 w-auto rounded-md"
              alt="IDBI Bank"
            />
          </div>
          <div className="filter grayscale opacity-60 flex justify-center">
            <Image
              src="/icons/equitas.svg"
              width={98}
              height={34}
              className="h-10 w-auto"
              alt="Equitas Bank"
            />
          </div>
          <div className="filter grayscale opacity-60 flex justify-center">
            <Image
              src="/icons/axis.png"
              width={696}
              height={240}
              className="h-12 w-auto"
              alt="Axis Bank"
            />
          </div>
          <div className="filter grayscale opacity-60 flex justify-center">
            <Image
              src="/icons/boi.jpg"
              width={252}
              height={129}
              className="h-12 w-auto"
              alt="Bank of India"
            />
          </div>

          <div className="filter grayscale opacity-60 flex justify-center">
            <Image
              src="/icons/ktkbank.svg"
              width={298}
              height={38}
              className="h-8 w-auto"
              alt="Kamataka Bank"
            />
          </div>
          <div className="filter grayscale opacity-60 flex justify-center">
            <Image
              src="/icons/fedrel.png"
              width={2874}
              height={888}
              className="h-10 w-auto rounded-md"
              alt="Fedrel Bank"
            />
          </div>
        </div>
      </section>

      <section id="features" className="container mx-auto px-4 py-12">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight">
            为什么选择 Settra？
          </h2>
          <p className="mt-3 text-slate-600">
            十多年支付系统经验。稳定、可靠、高成功率。
          </p>
        </div>

        <div className="flex flex-col gap-12 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              className="w-full"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.5 }}
            >
              <Image
                src="/section1.png"
                alt="Hgih Concurrency"
                width={1536}
                height={1024}
                className="w-full rounded-xl"
              />
            </motion.div>
            <motion.div
              className="flex flex-col items-start gap-6"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.5 }}
            >
              <h3 className="text-2xl font-bold">高并发引擎</h3>
              <p>
                我们的高并发引擎采用 多线程 +
                事件驱动架构，能够在极端负载下保持系统稳定与高效。
                借助智能任务调度与异步 I/O 技术，单节点即可轻松支撑 百万级
                TPS，同时具备横向扩展能力，确保在业务高峰期依旧快速响应。
              </p>
              <Button className="group bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md">
                马上了解{" "}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Button>
            </motion.div>
          </div>

          <div className="md:grid grid-cols-1 md:grid-cols-2 gap-10 items-center flex flex-col-reverse">
            <motion.div
              className="flex flex-col items-start gap-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.5 }}
            >
              <h3 className="text-2xl font-bold">高成功率</h3>
              <p>
                Settra 通过
                智能路由与动态重试机制，确保每一笔交易都能找到最佳通道。
                我们还对收银台进行优化，采用了节点缓存与边缘加速，确保用户无论身处何地、使用何种设备，都能快速加载收银页面并完成支付。即使在高峰时段或极端情况下，系统也能保持极高的成功率。
              </p>
              <Button className="group bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md">
                马上了解{" "}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Button>
            </motion.div>
            <motion.div
              className="w-full"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.5 }}
            >
              <Image
                src="/section2.png"
                alt="Hgih Concurrency"
                width={1536}
                height={1024}
                className="w-full rounded-xl"
              />
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              className="w-full"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.5 }}
            >
              <Image
                src="/section3.png"
                alt="Hgih Concurrency"
                width={1536}
                height={1024}
                className="w-full rounded-xl"
              />
            </motion.div>
            <motion.div
              className="flex flex-col items-start gap-6"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.5 }}
            >
              <h3 className="text-2xl font-bold">实时监控</h3>
              <p>
                系统支持全方位实时监控，涵盖交易数据、任务执行日志与设备状态。不仅能即时掌握交易金额、成功率及趋势变化，
                还能清晰追踪账户操作流程与验证码识别等执行细节，并实时查看设备在线情况与运行环境，确保业务高效可控、问题可快速定位与处理。
              </p>
              <Button className="group bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md">
                马上了解{" "}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Button>
            </motion.div>
          </div>

          <div className="md:grid grid-cols-1 md:grid-cols-2 gap-10 items-center flex flex-col-reverse">
            <motion.div
              className="flex flex-col items-start gap-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.5 }}
            >
              <h3 className="text-2xl font-bold">超高安全防护</h3>
              <p>
                Settra
                从架构层到应用层全方位构建安全体系：多重加密传输、严格的权限控制、实时风控监测与异常告警，确保交易数据和资金流转安全可靠。
                无论面对账户风控、跨境合规，还是恶意攻击，我们都提供银行级的安全防护标准，让每一笔支付都值得信赖。
              </p>
              <Button className="group bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md">
                马上了解{" "}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Button>
            </motion.div>
            <motion.div
              className="w-full"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.5 }}
            >
              <Image
                src="/section4.png"
                alt="Hgih Concurrency"
                width={1536}
                height={1024}
                className="w-full rounded-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>
      <div
        id="cta"
        className="p-10 bg-gradient-to-br relative from-indigo-50 to-indigo-50/50"
      >
        <div className="mx-auto container rounded-xl p-8 text-center relative z-10">
          <h3 className="text-2xl font-semibold">马上开启跨境支付新体验</h3>
          <p className="mx-auto mt-2 max-w-2xl text-slate-700">
            使用
            Settra，获得稳定、可靠、高并发的支付基础设施。支持快速部署与定制化集成。
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <Button
              size="lg"
              className="group bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md"
            >
              立即咨询{" "}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-slate-300 bg-white text-slate-700 hover:bg-slate-50"
            >
              获取方案与报价
            </Button>
          </div>
        </div>
        <div className="absolute inset-0 z-0">
          <Threads distance={0.5} color={[0, 60, 155]} />
        </div>
      </div>

      <footer className="py-10 text-sm text-slate-500 mt-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
            <div className="flex items-center gap-2">
              <Image
                src="/logo.png"
                width={256}
                height={256}
                alt="Settra Logo"
                className="size-6"
              />
              <span className="font-medium text-slate-700">Settra</span>
              <span className="ml-2">
                © 2025 Settra Payments. All rights reserved.
              </span>
            </div>
            <div className="flex items-center gap-5">
              <a className="hover:text-slate-700" href="#">
                服务条款
              </a>
              <a className="hover:text-slate-700" href="#">
                联系支持
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
