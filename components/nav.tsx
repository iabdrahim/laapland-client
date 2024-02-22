"use client";

import { useAppSelector } from "@/utils/store";
import Image from "next/image";
import Link from "next/link";

export function Nav() {
  let products = useAppSelector((state) => state.products);
  return (
    <nav className="sticky max-md:px-3 px-[calc((100vw-80rem)/2)] h-16 border border-b-[#ddd] w-full flex justify-between items-center">
      <Link href="/auth">
        <div className="user">
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </button>
        </div>
      </Link>
      <div className="logo">
        <Link href="/">
          <Image src="/logo.png" width={64} height={60} alt="website logo" />
        </Link>
      </div>
      <div className="actions flex gap-6 items-center">
        <Link href="/cart">
          <button className="relative pb-2">
            <span
              className={`bg-purple-500 top-0 text-sm flex justify-center items-center w-5 h-5 text-center rounded-full transition-all absolute left-1/2 ${
                products?.length == 0
                  ? "opacity-0 scale-0"
                  : "opacity-1 scale-1"
              }`}
            >
              {products?.length || "0"}
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m5 11 4-7" />
              <path d="m19 11-4-7" />
              <path d="M2 11h20" />
              <path d="m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8c.9 0 1.8-.7 2-1.6l1.7-7.4" />
              <path d="m9 11 1 9" />
              <path d="M4.5 15.5h15" />
              <path d="m15 11-1 9" />
            </svg>
          </button>
        </Link>
        {/* <Link href="/search">
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
          </button>
        </Link> */}
      </div>
    </nav>
  );
}
