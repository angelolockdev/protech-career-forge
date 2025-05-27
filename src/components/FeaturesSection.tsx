
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, Target, MessageSquare, DollarSign, Brain, Zap } from "lucide-react";

export const FeaturesSection = () => {
  const features = [
    {
      icon: FileText,
      title: "Analyse de CV Intelligente",
      description: "Notre IA analyse votre CV en profondeur, identifie les mots-clés manquants et suggère des améliorations personnalisées.",
      badge: "IA Avancée",
      color: "text-blue-600"
    },
    {
      icon: Target,
      title: "Matching CV ⚔️ Offre",
      description: "Comparez automatiquement votre CV avec des offres d'emploi et obtenez un score de correspondance détaillé.",
      badge: "Algorithme Propriétaire",
      color: "text-green-600"
    },
    {
      icon: MessageSquare,
      title: "Générateur de Lettres IA",
      description: "Créez des lettres de motivation personnalisées et percutantes adaptées à chaque offre d'emploi.",
      badge: "GPT-4 Powered",
      color: "text-purple-600"
    },
    {
      icon: Brain,
      title: "Simulateur d'Entretien",
      description: "Préparez-vous avec notre simulateur d'entretien virtuel qui s'adapte à votre profil et au poste visé.",
      badge: "Feedback Temps Réel",
      color: "text-orange-600"
    },
    {
      icon: DollarSign,
      title: "Estimation Salariale IA",
      description: "Obtenez des estimations salariales précises basées sur votre profil, votre localisation et le marché actuel.",
      badge: "Données Marché",
      color: "text-emerald-600"
    },
    {
      icon: Zap,
      title: "Optimisation Continue",
      description: "Nos modèles d'IA apprennent constamment pour vous fournir les conseils les plus actuels.",
      badge: "Machine Learning",
      color: "text-indigo-600"
    }
  ];

  return (
    <section id="features" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-blue-900 bg-clip-text text-transparent">
            Fonctionnalités IA Avancées
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez comment notre intelligence artificielle révolutionne votre recherche d'emploi
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white/80 backdrop-blur-sm border-white/20"
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-br from-white to-gray-50 border ${feature.color}`}>
                    <feature.icon className={`h-6 w-6 ${feature.color}`} />
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-semibold group-hover:text-blue-600 transition-colors">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
