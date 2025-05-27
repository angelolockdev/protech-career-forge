
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Textarea } from "@/components/ui/textarea";
import { Target, ArrowLeft, Brain, FileText, Link as LinkIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";

const JobMatching = () => {
  const [jobDescription, setJobDescription] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisComplete, setAnalysisComplete] = useState(false);

  const handleAnalyze = () => {
    if (jobDescription.trim()) {
      setIsAnalyzing(true);
      console.log("Starting job matching analysis");
      
      setTimeout(() => {
        setIsAnalyzing(false);
        setAnalysisComplete(true);
        console.log("Job matching analysis complete!");
      }, 3000);
    }
  };

  const matchingResults = {
    overallMatch: 92,
    strengths: [
      "Expérience en React/JavaScript parfaitement alignée",
      "Compétences en gestion d'équipe mentionnées",
      "Formation technique correspondante"
    ],
    gaps: [
      "Expérience avec Docker/Kubernetes souhaitée",
      "Certifications cloud AWS manquantes",
      "Expérience en méthodologie Agile à approfondir"
    ],
    recommendations: [
      "Mettre en avant vos projets React dans le résumé",
      "Ajouter une section sur vos réalisations en équipe",
      "Mentionner votre capacité d'apprentissage rapide"
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Header />
      <div className="container mx-auto max-w-4xl p-6">
        <div className="flex items-center mb-8">
          <Link to="/dashboard">
            <Button variant="outline" size="sm" className="mr-4">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Retour au tableau de bord
            </Button>
          </Link>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Matching CV-Offre</h1>
            <p className="text-gray-600 mt-2">Analysez la compatibilité avec une offre d'emploi</p>
          </div>
        </div>

        {!analysisComplete ? (
          <div className="space-y-8">
            <Card className="bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Target className="h-5 w-5 mr-2" />
                  Description de l'offre d'emploi
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <Textarea
                  placeholder="Collez ici la description complète de l'offre d'emploi que vous visez..."
                  value={jobDescription}
                  onChange={(e) => setJobDescription(e.target.value)}
                  className="min-h-[200px]"
                />
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    onClick={handleAnalyze}
                    disabled={!jobDescription.trim() || isAnalyzing}
                    className="flex-1"
                    size="lg"
                  >
                    {isAnalyzing ? (
                      <>
                        <Brain className="h-5 w-5 mr-2 animate-spin" />
                        Analyse en cours...
                      </>
                    ) : (
                      <>
                        <Target className="h-5 w-5 mr-2" />
                        Analyser la compatibilité
                      </>
                    )}
                  </Button>
                  <Button variant="outline" size="lg">
                    <LinkIcon className="h-5 w-5 mr-2" />
                    Importer depuis URL
                  </Button>
                </div>
              </CardContent>
            </Card>

            {isAnalyzing && (
              <Card className="bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle>Analyse en cours</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Progress value={45} className="h-2" />
                  <p className="text-sm text-gray-600 text-center">
                    Comparaison de votre profil avec les exigences du poste...
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        ) : (
          <div className="space-y-8">
            {/* Match Score */}
            <Card className="bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-center">Score de Compatibilité</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-6xl font-bold text-green-600 mb-4">
                  {matchingResults.overallMatch}%
                </div>
                <Badge className="bg-green-100 text-green-700 text-lg px-4 py-2">
                  Excellente correspondance
                </Badge>
                <p className="text-gray-600 mt-4">
                  Votre profil correspond très bien à cette offre d'emploi
                </p>
              </CardContent>
            </Card>

            {/* Detailed Analysis */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-green-600">Points forts</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {matchingResults.strengths.map((strength, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{strength}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-orange-600">Lacunes identifiées</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {matchingResults.gaps.map((gap, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{gap}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Recommendations */}
            <Card className="bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-blue-600">Recommandations pour optimiser votre candidature</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {matchingResults.recommendations.map((recommendation, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{recommendation}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600">
                Générer une lettre de motivation
              </Button>
              <Button variant="outline" size="lg">
                Télécharger le rapport
              </Button>
              <Button variant="outline" size="lg">
                Analyser une autre offre
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default JobMatching;
