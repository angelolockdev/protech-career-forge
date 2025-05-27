
import { Card, CardContent } from "@/components/ui/card";

export const StatsSection = () => {
  const stats = [
    {
      number: "50K+",
      label: "CV analysés",
      description: "par notre IA chaque mois"
    },
    {
      number: "92%",
      label: "Taux de satisfaction",
      description: "de nos utilisateurs"
    },
    {
      number: "4.8/5",
      label: "Note moyenne",
      description: "sur toutes les plateformes"
    },
    {
      number: "15min",
      label: "Temps moyen",
      description: "pour optimiser un CV"
    }
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-r from-blue-600/5 to-indigo-600/5">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center bg-white/60 backdrop-blur-sm border-white/20">
              <CardContent className="pt-6">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </div>
                <div className="font-semibold text-gray-900 mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-gray-600">
                  {stat.description}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
