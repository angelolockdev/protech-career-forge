
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Upload, FileText, Brain, Target, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";

const CVAnalysis = () => {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisComplete, setAnalysisComplete] = useState(false);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setUploadedFile(file);
      console.log("File uploaded:", file.name);
    }
  };

  const handleAnalyze = () => {
    if (uploadedFile) {
      setIsAnalyzing(true);
      console.log("Starting CV analysis for:", uploadedFile.name);
      
      // Simulate analysis process
      setTimeout(() => {
        setIsAnalyzing(false);
        setAnalysisComplete(true);
        console.log("Analysis complete!");
      }, 3000);
    }
  };

  const analysisResults = {
    overallScore: 87,
    strengths: [
      "Strong technical skills section",
      "Clear work experience progression",
      "Good use of action verbs",
      "Relevant education background"
    ],
    improvements: [
      "Add more quantified achievements",
      "Include relevant keywords for your target role",
      "Improve summary section impact",
      "Add portfolio links or projects"
    ],
    keywordMatch: 73,
    readabilityScore: 91,
    atsCompatibility: 85
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
            <h1 className="text-3xl font-bold text-gray-900">Analyse de CV</h1>
            <p className="text-gray-600 mt-2">Optimisez votre CV avec notre IA avancée</p>
          </div>
        </div>

        {!analysisComplete ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Upload Section */}
            <Card className="bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Upload className="h-5 w-5 mr-2" />
                  Upload votre CV
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileUpload}
                    className="hidden"
                    id="cv-upload"
                  />
                  <label
                    htmlFor="cv-upload"
                    className="cursor-pointer flex flex-col items-center"
                  >
                    <FileText className="h-12 w-12 text-gray-400 mb-4" />
                    <p className="text-lg font-medium text-gray-700 mb-2">
                      Cliquez pour uploader votre CV
                    </p>
                    <p className="text-sm text-gray-500">
                      Formats supportés: PDF, DOC, DOCX (max 10MB)
                    </p>
                  </label>
                </div>

                {uploadedFile && (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <div className="flex items-center">
                      <FileText className="h-5 w-5 text-green-600 mr-3" />
                      <div>
                        <p className="font-medium text-green-800">{uploadedFile.name}</p>
                        <p className="text-sm text-green-600">
                          {(uploadedFile.size / 1024 / 1024).toFixed(2)} MB
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                <Button 
                  onClick={handleAnalyze}
                  disabled={!uploadedFile || isAnalyzing}
                  className="w-full"
                  size="lg"
                >
                  {isAnalyzing ? (
                    <>
                      <Brain className="h-5 w-5 mr-2 animate-spin" />
                      Analyse en cours...
                    </>
                  ) : (
                    <>
                      <Brain className="h-5 w-5 mr-2" />
                      Analyser mon CV
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>

            {/* Analysis Progress */}
            <Card className="bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Processus d'analyse</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Extraction du contenu</span>
                    <Badge variant={uploadedFile ? "default" : "secondary"}>
                      {uploadedFile ? "Terminé" : "En attente"}
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Analyse sémantique</span>
                    <Badge variant={isAnalyzing ? "default" : "secondary"}>
                      {isAnalyzing ? "En cours" : "En attente"}
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Génération des suggestions</span>
                    <Badge variant="secondary">En attente</Badge>
                  </div>
                </div>

                {isAnalyzing && (
                  <div className="space-y-3">
                    <Progress value={66} className="h-2" />
                    <p className="text-sm text-gray-600 text-center">
                      Analyse en cours... Cela peut prendre quelques secondes.
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        ) : (
          /* Analysis Results */
          <div className="space-y-8">
            {/* Overall Score */}
            <Card className="bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-center">Score Global</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-6xl font-bold text-blue-600 mb-4">
                  {analysisResults.overallScore}%
                </div>
                <p className="text-gray-600">Votre CV est bien optimisé avec quelques améliorations possibles</p>
              </CardContent>
            </Card>

            {/* Detailed Scores */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-white/80 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <div className="text-2xl font-bold text-green-600 mb-2">
                    {analysisResults.keywordMatch}%
                  </div>
                  <p className="text-sm text-gray-600">Correspondance mots-clés</p>
                </CardContent>
              </Card>
              <Card className="bg-white/80 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <div className="text-2xl font-bold text-blue-600 mb-2">
                    {analysisResults.readabilityScore}%
                  </div>
                  <p className="text-sm text-gray-600">Lisibilité</p>
                </CardContent>
              </Card>
              <Card className="bg-white/80 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <div className="text-2xl font-bold text-purple-600 mb-2">
                    {analysisResults.atsCompatibility}%
                  </div>
                  <p className="text-sm text-gray-600">Compatibilité ATS</p>
                </CardContent>
              </Card>
            </div>

            {/* Strengths and Improvements */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-green-600">Points forts</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {analysisResults.strengths.map((strength, index) => (
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
                  <CardTitle className="text-orange-600">Améliorations suggérées</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {analysisResults.improvements.map((improvement, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{improvement}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600">
                Télécharger le rapport complet
              </Button>
              <Button variant="outline" size="lg">
                Analyser un autre CV
              </Button>
              <Link to="/job-matching">
                <Button variant="outline" size="lg">
                  <Target className="h-5 w-5 mr-2" />
                  Comparer avec une offre
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CVAnalysis;
