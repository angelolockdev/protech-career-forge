
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, ArrowRight } from "lucide-react";

export const CTASection = () => {
  const benefits = [
    "Analyse CV complète en 30 secondes",
    "Suggestions d'amélioration personnalisées",
    "Matching intelligent avec les offres",
    "Support client 7j/7"
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <Card className="bg-gradient-to-br from-blue-600 to-indigo-700 border-0 text-white overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-transparent"></div>
          <CardContent className="relative p-12 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Prêt à transformer votre carrière ?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Rejoignez des milliers de professionnels qui ont déjà optimisé leur recherche d'emploi avec notre IA
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 max-w-2xl mx-auto">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center text-left">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                  <span className="text-blue-100">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-4"
              >
                Commencer gratuitement
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white text-white hover:bg-white/10 text-lg px-8 py-4"
              >
                Planifier une démo
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
