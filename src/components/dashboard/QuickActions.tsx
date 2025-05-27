
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  FileText, 
  Target, 
  MessageSquare, 
  Brain, 
  DollarSign,
  Plus
} from "lucide-react";

const QuickActions = () => {
  const quickActions = [
    {
      icon: FileText,
      title: "Analyser un CV",
      description: "Uploadez votre CV pour une analyse IA complète",
      action: "Commencer l'analyse",
      color: "bg-blue-500",
      link: "/cv-analysis"
    },
    {
      icon: Target,
      title: "Comparer avec une offre",
      description: "Analysez la compatibilité CV/offre d'emploi",
      action: "Nouvelle comparaison",
      color: "bg-green-500",
      link: "/job-matching"
    },
    {
      icon: MessageSquare,
      title: "Générer une lettre",
      description: "Créez une lettre de motivation personnalisée",
      action: "Créer une lettre",
      color: "bg-purple-500",
      link: "/cover-letter"
    },
    {
      icon: Brain,
      title: "Simuler un entretien",
      description: "Préparez-vous avec notre simulateur IA",
      action: "Commencer la simulation",
      color: "bg-orange-500",
      link: "/interview-simulator"
    }
  ];

  return (
    <div className="lg:col-span-2">
      <Card className="bg-white/80 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Plus className="h-5 w-5 mr-2" />
            Actions rapides
          </CardTitle>
          <CardDescription>
            Choisissez une action pour commencer votre optimisation
          </CardDescription>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {quickActions.map((action, index) => (
            <Link key={index} to={action.link}>
              <Card className="group hover:shadow-lg transition-all duration-300 cursor-pointer h-full">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-lg ${action.color} text-white`}>
                      <action.icon className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 mb-2">{action.title}</h3>
                      <p className="text-sm text-gray-600 mb-3">{action.description}</p>
                      <Button size="sm" className="w-full">
                        {action.action}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </CardContent>
      </Card>

      {/* Additional Quick Action for Salary Estimator */}
      <Card className="bg-white/80 backdrop-blur-sm mt-6">
        <CardHeader>
          <CardTitle className="flex items-center">
            <DollarSign className="h-5 w-5 mr-2" />
            Estimation salariale
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 mb-2">Découvrez votre valeur sur le marché</p>
              <p className="text-sm text-gray-500">Basé sur votre profil et la localisation</p>
            </div>
            <Link to="/salary-estimator">
              <Button>
                <DollarSign className="h-4 w-4 mr-2" />
                Estimer
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default QuickActions;
