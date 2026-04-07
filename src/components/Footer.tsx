import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-brand-blue/5 bg-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-8 text-sm text-brand-blue/50 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <Link href="/" className="font-bold text-brand-blue">
          Aurea<span className="text-brand-coral">.</span>
        </Link>
        <p>Des outils simples pour avancer plus vite.</p>
      </div>
    </footer>
  );
}
