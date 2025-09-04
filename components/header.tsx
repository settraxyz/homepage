"use client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useEffect, useState } from "react";

import Link from "next/link";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={cn(
        "sticky top-0 z-20 backdrop-blur",
        scrolled ? "bg-white/50" : "bg-transparent"
      )}
    >
      <div className="container mx-auto flex items-center justify-between px-4 h-20">
        <Link href="/" className="inline-flex items-center gap-4">
          <Image
            src="/logo.png"
            width={256}
            height={256}
            alt="Settra Logo"
            className="size-10"
          />
          <span className="text-xl font-bold tracking-tight">Settra</span>
        </Link>
        <nav className="hidden items-center gap-10 md:flex font-semibold">
          <Link
            href="/#features"
            className=" text-slate-600 hover:text-slate-900"
          >
            产品
          </Link>
          <Link href="/#cases" className=" text-slate-600 hover:text-slate-900">
            客户案例
          </Link>
          <Link href="/#cta" className=" text-slate-600 hover:text-slate-900">
            联系我们
          </Link>
        </nav>
        <div className="flex items-center gap-3">
          <Link href="/demo">
            <Button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md">
              演示后台
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
