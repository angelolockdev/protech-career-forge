
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, X } from "lucide-react";

export const PricingSection = () => {
  const plans = [
    {
      name: "Gratuit",
      price: "0€",
      period: "/mois",
      description: "Parfait pour commencer",
      badge: null,
      features: [
        "1 analyse de CV par mois",
        "Suggestions d'amélioration de base",
        "Comparaison avec 3 offres",
        "Support communautaire"
      ],
      limitations: [
        "Pas de lettres de motivation IA",
        "Pas de simulation d'entretien",
        "Pas d'estimation salariale"
      ],
      buttonText: "Commencer gratuitement",
      buttonVariant: "outline" as const,
      popular: false
    },
    {
      name: "Premium",
      price: "29€",
      period: "/mois",
      description: "Pour les professionnels actifs",
      badge: "Populaire",
      features: [
        "Analyses de CV illimitées",
        "Générateur de lettres IA",
        "Comparaison avec offres illimitées",
        "5 simulations d'entretien par mois",
        "Estimation salariale précise",
        "Support prioritaire"
      ],
      limitations: [],
      buttonText: "Choisir Premium",
      buttonVariant: "default" as const,
      popular: true
    },
    {
      name: "Pro",
      price: "59€",
      period: "/mois",
      description: "Pour les recruteurs et consultants",
      badge: "Entreprise",
      features: [
        "Tout Premium inclus",
        "Simulations d'entretien illimitées",
        "Analyse de CV en lot",
        "API d'intégration",
        "Tableaux de bord avancés",
        "Support dédié 24/7",
        "Formation personnalisée"
      ],
      limitations: [],
      buttonText: "Contacter l'équipe",
      buttonVariant: "outline" as const,
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-20 px-4 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-blue-900 bg-clip-text text-transparent">
            Choisissez votre plan
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Des tarifs transparents adaptés à vos besoins. Commencez gratuitement et évoluez selon votre usage.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative ${plan.popular ? 'ring-2 ring-blue-500 scale-105' : ''} bg-white/80 backdrop-blur-sm border-white/20`}
            >
              {plan.badge && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white">
                  {plan.badge}
                </Badge>
              )}
              
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                <CardDescription className="text-gray-600">{plan.description}</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-blue-600">{plan.price}</span>
                  <span className="text-gray-500">{plan.period}</span>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                  {plan.limitations.map((limitation, idx) => (
                    <div key={idx} className="flex items-center opacity-60">
                      <X className="h-5 w-5 text-gray-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-500">{limitation}</span>
                    </div>
                  ))}
                </div>
                
                <div className="pt-4">
                  <Button 
                    className={`w-full ${plan.popular ? 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700' : ''}`}
                    variant={plan.buttonVariant}
                    size="lg"
                  >
                    {plan.buttonText}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Besoin d'une solution sur mesure pour votre entreprise ?
          </p>
          <Button variant="outline" size="lg">
            Contactez notre équipe commerciale
          </Button>
        </div>
      </div>
    </section>
  );
};
