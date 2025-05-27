
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  FileText, 
  Target, 
  MessageSquare, 
  Brain, 
  DollarSign, 
  Upload,
  Plus,
  TrendingUp,
  Clock,
  CheckCircle
} from "lucide-react";

const Dashboard = () => {
  const recentAnalyses = [
    {
      id: 1,
      type: "CV Analysis",
      title: "CV_Développeur_Frontend.pdf",
      score: 85,
      date: "Il y a 2 heures",
      status: "completed"
    },
    {
      id: 2,
      type: "Job Matching",
      title: "Développeur React - TechCorp",
      score: 92,
      date: "Hier",
      status: "completed"
    },
    {
      id: 3,
      type: "Cover Letter",
      title: "Lettre pour poste Senior Dev",
      score: 88,
      date: "Il y a 3 jours",
      status: "completed"
    }
  ];

  const quickActions = [
    {
      icon: FileText,
      title: "Analyser un CV",
      description: "Uploadez votre CV pour une analyse IA complète",
      action: "Commencer l'analyse",
      color: "bg-blue-500"
    },
    {
      icon: Target,
      title: "Comparer avec une offre",
      description: "Analysez la compatibilité CV/offre d'emploi",
      action: "Nouvelle comparaison",
      color: "bg-green-500"
    },
    {
      icon: MessageSquare,
      title: "Générer une lettre",
      description: "Créez une lettre de motivation personnalisée",
      action: "Créer une lettre",
      color: "bg-purple-500"
    },
    {
      icon: Brain,
      title: "Simuler un entretien",
      description: "Préparez-vous avec notre simulateur IA",
      action: "Commencer la simulation",
      color: "bg-orange-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 p-6">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Tableau de bord</h1>
            <p className="text-gray-600 mt-2">Optimisez votre carrière avec l'IA</p>
          </div>
          <Badge className="bg-green-100 text-green-700">
            Plan Premium actif
          </Badge>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-white/80 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Analyses ce mois</p>
                  <p className="text-2xl font-bold text-blue-600">24</p>
                </div>
                <FileText className="h-8 w-8 text-blue-500" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Score moyen</p>
                  <p className="text-2xl font-bold text-green-600">87%</p>
                </div>
                <TrendingUp className="h-8 w-8 text-green-500" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Entretiens simulés</p>
                  <p className="text-2xl font-bold text-purple-600">8</p>
                </div>
                <Brain className="h-8 w-8 text-purple-500" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Temps économisé</p>
                  <p className="text-2xl font-bold text-orange-600">12h</p>
                </div>
                <Clock className="h-8 w-8 text-orange-500" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Quick Actions */}
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
                  <Card key={index} className="group hover:shadow-lg transition-all duration-300 cursor-pointer">
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
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Recent Activity */}
          <div>
            <Card className="bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Activité récente</CardTitle>
                <CardDescription>Vos dernières analyses et optimisations</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {recentAnalyses.map((analysis) => (
                  <div key={analysis.id} className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="flex-shrink-0">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate">
                        {analysis.title}
                      </p>
                      <p className="text-xs text-gray-500">{analysis.type}</p>
                      <p className="text-xs text-gray-400">{analysis.date}</p>
                    </div>
                    <div className="flex-shrink-0">
                      <Badge variant="secondary" className="text-xs">
                        {analysis.score}%
                      </Badge>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Progress Section */}
        <div className="mt-8">
          <Card className="bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle>Progression de votre profil</CardTitle>
              <CardDescription>Améliorez votre score pour maximiser vos chances</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">Optimisation CV</span>
                    <span className="text-sm text-gray-500">85%</span>
                  </div>
                  <Progress value={85} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">Préparation entretiens</span>
                    <span className="text-sm text-gray-500">72%</span>
                  </div>
                  <Progress value={72} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">Matching offres</span>
                    <span className="text-sm text-gray-500">91%</span>
                  </div>
                  <Progress value={91} className="h-2" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
