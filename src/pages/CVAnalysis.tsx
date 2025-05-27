
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Upload, 
  FileText, 
  CheckCircle, 
  AlertTriangle, 
  TrendingUp,
  Target,
  Download,
  RefreshCw
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const CVAnalysis = () => {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisComplete, setAnalysisComplete] = useState(false);
  const { toast } = useToast();

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setIsAnalyzing(true);
    
    // Simulate analysis
    setTimeout(() => {
      setIsAnalyzing(false);
      setAnalysisComplete(true);
      toast({
        title: "Analyse terminée",
        description: "Votre CV a été analysé avec succès par notre IA",
      });
    }, 3000);
  };

  const analysisResults = {
    overallScore: 85,
    categories: [
      {
        name: "Structure et lisibilité",
        score: 92,
        status: "excellent",
        improvements: ["Format professionnel respecté", "Hiérarchie claire"]
      },
      {
        name: "Mots-clés et compétences",
        score: 78,
        status: "good",
        improvements: ["Ajouter 'React', 'TypeScript'", "Mentionner l'agilité"]
      },
      {
        name: "Expériences valorisées",
        score: 85,
        status: "good", 
        improvements: ["Quantifier les résultats", "Ajouter des métriques"]
      },
      {
        name: "Orthographe et grammaire",
        score: 95,
        status: "excellent",
        improvements: ["Aucune erreur détectée"]
      }
    ],
    keywordsMissing: ["React", "TypeScript", "Agile", "CI/CD", "Docker"],
    suggestedImprovements: [
      "Ajouter une section 'Projets personnels' pour valoriser votre expertise technique",
      "Quantifier vos réalisations avec des chiffres (ex: 'Amélioration de 30% des performances')",
      "Inclure des certifications techniques récentes",
      "Optimiser la section compétences avec des mots-clés du secteur"
    ]
  };

  const getScoreColor = (score: number) => {
    if (score >= 90) return "text-green-600";
    if (score >= 70) return "text-yellow-600";
    return "text-red-600";
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "excellent":
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case "good":
        return <TrendingUp className="h-5 w-5 text-yellow-500" />;
      default:
        return <AlertTriangle className="h-5 w-5 text-red-500" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 p-6">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Analyse de CV par l'IA</h1>
          <p className="text-gray-600">Uploadez votre CV pour une analyse complète et des suggestions personnalisées</p>
        </div>

        {!analysisComplete ? (
          <Card className="bg-white/80 backdrop-blur-sm">
            <CardHeader className="text-center">
              <CardTitle className="flex items-center justify-center">
                <FileText className="h-6 w-6 mr-2" />
                Uploader votre CV
              </CardTitle>
              <CardDescription>
                Formats acceptés: PDF, DOCX (max 5MB)
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              {!isAnalyzing ? (
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-12 hover:border-blue-500 transition-colors">
                  <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-lg font-medium text-gray-900 mb-2">
                    Glissez votre CV ici ou cliquez pour parcourir
                  </p>
                  <p className="text-gray-500 mb-4">L'analyse prend environ 30 secondes</p>
                  <input
                    type="file"
                    accept=".pdf,.docx"
                    onChange={handleFileUpload}
                    className="hidden"
                    id="cv-upload"
                  />
                  <label htmlFor="cv-upload">
                    <Button size="lg" className="cursor-pointer">
                      Choisir un fichier
                    </Button>
                  </label>
                </div>
              ) : (
                <div className="py-12">
                  <RefreshCw className="h-12 w-12 text-blue-500 mx-auto mb-4 animate-spin" />
                  <p className="text-lg font-medium text-gray-900 mb-2">
                    Analyse en cours...
                  </p>
                  <p className="text-gray-500 mb-4">Notre IA examine votre CV en détail</p>
                  <Progress value={75} className="w-64 mx-auto" />
                </div>
              )}
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-8">
            {/* Overall Score */}
            <Card className="bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Score global d'optimisation</span>
                  <Badge className="bg-blue-100 text-blue-700 text-lg px-4 py-2">
                    {analysisResults.overallScore}/100
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-4">
                  <Progress value={analysisResults.overallScore} className="flex-1 h-4" />
                  <span className={`text-2xl font-bold ${getScoreColor(analysisResults.overallScore)}`}>
                    {analysisResults.overallScore}%
                  </span>
                </div>
                <p className="text-gray-600 mt-3">
                  Votre CV est bien structuré avec quelques améliorations possibles pour maximiser son impact.
                </p>
              </CardContent>
            </Card>

            {/* Detailed Analysis */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <Card className="bg-white/80 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle>Analyse détaillée</CardTitle>
                    <CardDescription>Évaluation par catégorie</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {analysisResults.categories.map((category, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            {getStatusIcon(category.status)}
                            <span className="font-medium">{category.name}</span>
                          </div>
                          <span className={`font-bold ${getScoreColor(category.score)}`}>
                            {category.score}%
                          </span>
                        </div>
                        <Progress value={category.score} className="h-2" />
                        <ul className="text-sm text-gray-600 ml-7">
                          {category.improvements.map((improvement, idx) => (
                            <li key={idx}>• {improvement}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                <Card className="bg-white/80 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Target className="h-5 w-5 mr-2" />
                      Mots-clés manquants
                    </CardTitle>
                    <CardDescription>
                      Mots-clés populaires dans votre secteur
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {analysisResults.keywordsMissing.map((keyword, index) => (
                        <Badge key={index} variant="outline" className="border-orange-300 text-orange-700">
                          {keyword}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div>
                <Card className="bg-white/80 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle>Suggestions d'amélioration</CardTitle>
                    <CardDescription>
                      Recommandations personnalisées par notre IA
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {analysisResults.suggestedImprovements.map((suggestion, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="bg-blue-100 rounded-full p-1 mt-1">
                          <CheckCircle className="h-4 w-4 text-blue-600" />
                        </div>
                        <p className="text-gray-700 leading-relaxed">{suggestion}</p>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                <div className="mt-6 space-y-4">
                  <Button className="w-full" size="lg">
                    <Download className="h-5 w-5 mr-2" />
                    Télécharger le rapport détaillé
                  </Button>
                  <Button variant="outline" className="w-full" size="lg">
                    Comparer avec une offre d'emploi
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CVAnalysis;
