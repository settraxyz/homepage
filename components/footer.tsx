import Image from "next/image";
import Link from "next/link";
import { CONTACT_URL } from "@/lib/constants";

export default function Footer() {
  return (
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
            <Link className="hover:text-slate-700" href="/india-payment-system">
              印度支付系统出租
            </Link>
            <Link className="hover:text-slate-700" href="/privacy">
              隐私策略
            </Link>
            <Link className="hover:text-slate-700" href="/terms">
              服务条款
            </Link>
            <Link
              className="hover:text-slate-700"
              href={`${CONTACT_URL}`}
              target="_blank"
            >
              联系支持
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
