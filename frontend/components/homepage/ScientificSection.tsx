import { Brain, Moon, Leaf, Activity } from "lucide-react";

import { ScientificCard } from "@/components/homepage/ScientificCard";
import { scientificCards } from "@/components/homepage/data";

export function ScientificSection({
  icons,
}: {
  icons: [React.ReactNode, React.ReactNode, React.ReactNode, React.ReactNode];
}) {
  const fallbackIcons = [
    <Brain key="1" />,
    <Activity key="2" />,
    <Moon key="3" />,
    <Leaf key="4" />,
  ];
  const allIcons = icons?.length === 4 ? icons : fallbackIcons;

  return (
    <section className="flex justify-center py-24">
      <div className="w-full max-w-[1200px] text-center px-5">
        <h2 className="text-[40px] font-semibold mb-4 text-foreground">
          Basado en investigación científica
        </h2>

        <p className="text-muted-foreground mb-10">
          Trabajamos con un enfoque integral validado para construir bienestar sostenible.
        </p>

        <div className="grid grid-cols-4 gap-6">
          {scientificCards.map((c, idx) => (
            <ScientificCard
              key={c.title}
              icon={allIcons[idx]}
              title={c.title}
              body={""}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
