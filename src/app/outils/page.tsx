import { getTools } from "@/lib/api";
import Navbar from "@/components/Navbar";
import HomeToolsClient from "@/components/HomeToolsClient";

export const metadata = {
  title: "Outils - Aurea",
  description: "Tous les outils gratuits Aurea pour gagner du temps au quotidien.",
};

export default async function OutilsPage() {
  const tools = await getTools();

  return (
    <>
      <Navbar />
      <main className="flex-1 w-full bg-background animate-in fade-in duration-700">
        <HomeToolsClient
          title={
            <h1 className="text-4xl md:text-5xl font-black text-brand-blue tracking-tight">
              Tous les outils
            </h1>
          }
          subtitle="Des outils pratiques, gratuits et pensés pour les petites entreprises."
          filterMode="tools-groups"
          initialTools={tools}
          placeholder="Rechercher un outil..."
        />
      </main>
    </>
  );
}
