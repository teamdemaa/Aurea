import { getTools } from "@/lib/api";
import Navbar from "@/components/Navbar";
import HomeToolsClient from "@/components/HomeToolsClient";

export default async function HomePage() {
  const tools = await getTools();

  return (
    <>
      <Navbar />
      <main className="flex-1 w-full bg-background animate-in fade-in duration-700">
        <HomeToolsClient
          title={
            <h1 className="text-4xl md:text-6xl font-black text-brand-blue tracking-tight">
              Les outils <span className="text-brand-coral">Aurea</span>
            </h1>
          }
          subtitle="Une bibliothèque d'outils simples pour créer, signer, partager et automatiser plus vite."
          filterMode="tools-groups"
          initialTools={tools}
          placeholder="Que voulez-vous créer aujourd'hui ?"
        />
      </main>
    </>
  );
}
