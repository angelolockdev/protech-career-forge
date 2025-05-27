
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Brain, ArrowLeft, Play, Pause, RotateCcw, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";

const InterviewSimulator = () => {
  const [isSimulating, setIsSimulating] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [simulationComplete, setSimulationComplete] = useState(false);

  const questions = [
    "Présentez-vous en quelques minutes et expliquez votre parcours professionnel.",
    "Pourquoi souhaitez-vous rejoindre notre entreprise ?",
    "Quelles sont vos principales forces et comment peuvent-elles bénéficier à notre équipe ?",
    "Décrivez un défi technique que vous avez relevé récemment.",
    "Où vous voyez-vous dans 5 ans ?"
  ];

  const feedback = [
    {
      question: "Présentez-vous en quelques minutes et expliquez votre parcours professionnel.",
      score: 85,
      feedback: "Bonne structure dans votre présentation. Essayez d'ajouter plus de détails sur vos réalisations concrètes.",
      suggestions: ["Quantifiez vos succès avec des chiffres", "Reliez votre expérience au poste visé"]
    },
    {
      question: "Pourquoi souhaitez-vous rejoindre notre entreprise ?",
      score: 92,
      feedback: "Excellente connaissance de l'entreprise et motivations claires.",
      suggestions: ["Parfait ! Continuez sur cette lancée"]
    }
  ];

  const startSimulation = () => {
    setIsSimulating(true);
    setCurrentQuestion(0);
    setSimulationComplete(false);
    console.log("Starting interview simulation");
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setUserAnswer("");
    } else {
      setIsSimulating(false);
      setSimulationComplete(true);
      console.log("Interview simulation completed");
    }
  };

  const resetSimulation = () => {
    setIsSimulating(false);
    setCurrentQuestion(0);
    setUserAnswer("");
    setSimulationComplete(false);
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
            <h1 className="text-3xl font-bold text-gray-900">Simulateur d'Entretien</h1>
            <p className="text-gray-600 mt-2">Préparez-vous avec notre IA avancée</p>
          </div>
        </div>

        {!isSimulating && !simulationComplete && (
          <Card className="bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-center">Commencer votre simulation d'entretien</CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-blue-50 rounded-lg p-4">
                  <h3 className="font-semibold text-blue-800 mb-2">5 Questions</h3>
                  <p className="text-sm text-blue-600">Questions comportementales et techniques</p>
                </div>
                <div className="bg-green-50 rounded-lg p-4">
                  <h3 className="font-semibold text-green-800 mb-2">Feedback IA</h3>
                  <p className="text-sm text-green-600">Analyse de vos réponses en temps réel</p>
                </div>
                <div className="bg-purple-50 rounded-lg p-4">
                  <h3 className="font-semibold text-purple-800 mb-2">Amélioration</h3>
                  <p className="text-sm text-purple-600">Suggestions personnalisées</p>
                </div>
              </div>
              
              <Button onClick={startSimulation} size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600">
                <Play className="h-5 w-5 mr-2" />
                Commencer la simulation
              </Button>
            </CardContent>
          </Card>
        )}

        {isSimulating && (
          <div className="space-y-6">
            {/* Progress */}
            <Card className="bg-white/80 backdrop-blur-sm">
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">Question {currentQuestion + 1} sur {questions.length}</span>
                  <Badge variant="outline">{Math.round(((currentQuestion + 1) / questions.length) * 100)}%</Badge>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                  ></div>
                </div>
              </CardContent>
            </Card>

            {/* Current Question */}
            <Card className="bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MessageCircle className="h-5 w-5 mr-2" />
                  Question {currentQuestion + 1}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-blue-50 rounded-lg p-6">
                  <p className="text-lg text-gray-800">{questions[currentQuestion]}</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Votre réponse
                  </label>
                  <Textarea
                    placeholder="Tapez votre réponse ici..."
                    value={userAnswer}
                    onChange={(e) => setUserAnswer(e.target.value)}
                    className="min-h-[150px]"
                  />
                </div>

                <div className="flex gap-4">
                  <Button 
                    onClick={nextQuestion}
                    disabled={!userAnswer.trim()}
                    className="flex-1"
                  >
                    {currentQuestion < questions.length - 1 ? "Question suivante" : "Terminer la simulation"}
                  </Button>
                  <Button variant="outline" onClick={resetSimulation}>
                    <RotateCcw className="h-4 w-4 mr-2" />
                    Recommencer
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {simulationComplete && (
          <div className="space-y-6">
            {/* Overall Score */}
            <Card className="bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-center">Résultats de votre simulation</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-5xl font-bold text-green-600 mb-4">88%</div>
                <Badge className="bg-green-100 text-green-700 text-lg px-4 py-2 mb-4">
                  Très bonne performance
                </Badge>
                <p className="text-gray-600">
                  Votre préparation est sur la bonne voie. Quelques ajustements et vous serez parfaitement prêt(e) !
                </p>
              </CardContent>
            </Card>

            {/* Detailed Feedback */}
            <div className="space-y-4">
              {feedback.map((item, index) => (
                <Card key={index} className="bg-white/80 backdrop-blur-sm">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-sm">Question {index + 1}</CardTitle>
                      <Badge variant={item.score >= 90 ? "default" : "secondary"}>
                        {item.score}%
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-sm text-gray-600 italic">"{item.question}"</p>
                    <p className="text-gray-700">{item.feedback}</p>
                    <div className="bg-blue-50 rounded-lg p-3">
                      <h4 className="text-sm font-semibold text-blue-800 mb-2">Suggestions:</h4>
                      <ul className="text-sm text-blue-700 space-y-1">
                        {item.suggestions.map((suggestion, idx) => (
                          <li key={idx}>• {suggestion}</li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={resetSimulation} size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600">
                <RotateCcw className="h-5 w-5 mr-2" />
                Nouvelle simulation
              </Button>
              <Button variant="outline" size="lg">
                Télécharger le rapport
              </Button>
              <Button variant="outline" size="lg">
                Partager les résultats
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default InterviewSimulator;
