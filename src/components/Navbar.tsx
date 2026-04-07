"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { database } from "@/lib/database";

export default function Navbar({ minimal = false }: { minimal?: boolean }) {
  const tools = database.tools;

  return (
    <header className="sticky top-0 z-50 border-b border-brand-blue/5 bg-[#FFF9F8]/90 backdrop-blur-xl">
      <nav
        className={`mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 ${
          minimal ? "h-20" : "h-24"
        }`}
      >
        <Link href="/" className="text-3xl font-black tracking-tight text-brand-blue">
          Aurea<span className="text-brand-coral">.</span>
        </Link>

        <div className="group relative">
          <Link
            href="/outils"
            className="inline-flex items-center gap-2 rounded-full border border-brand-blue/10 bg-white/50 px-5 py-2.5 text-sm font-medium text-brand-blue transition hover:border-brand-coral/30 hover:bg-white"
          >
            Outils
            <ChevronDown className="h-4 w-4 text-brand-blue/50 transition group-hover:rotate-180" />
          </Link>

          <div className="pointer-events-none absolute right-0 top-full w-80 pt-4 opacity-0 transition duration-200 group-hover:pointer-events-auto group-hover:opacity-100">
            <div className="rounded-[2rem] border border-brand-blue/10 bg-white p-3 shadow-[0_20px_60px_rgba(25,27,48,0.12)]">
              <Link
                href="/outils"
                className="block rounded-2xl px-4 py-3 text-sm font-semibold text-brand-blue transition hover:bg-brand-coral/10"
              >
                Tous
              </Link>
              <div className="my-2 h-px bg-brand-blue/5" />
              <div className="max-h-[60vh] overflow-y-auto pr-1 soft-scroll">
                {tools.map((tool) => (
                  <Link
                    key={tool.slug}
                    href={`/outils/${tool.slug}`}
                    className="block rounded-2xl px-4 py-3 text-sm font-light text-brand-blue/70 transition hover:bg-brand-coral/10 hover:text-brand-blue"
                  >
                    {tool.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
