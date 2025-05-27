
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { DollarSign, ArrowLeft, Brain, TrendingUp, MapPin, Briefcase } from "lucide-react";
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";

const SalaryEstimator = () => {
  const [formData, setFormData] = useState({
    jobTitle: "",
    location: "",
    experience: "",
    company: ""
  });
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [estimationComplete, setEstimationComplete] = useState(false);

  const handleEstimate = () => {
    if (formData.jobTitle && formData.location && formData.experience) {
      setIsAnalyzing(true);
      console.log("Starting salary estimation for:", formData);
      
      setTimeout(() => {
        setIsAnalyzing(false);
        setEstimationComplete(true);
        console.log("Salary estimation completed!");
      }, 2000);
    }
  };

  const salaryData = {
    estimatedSalary: {
      min: 45000,
      max: 65000,
      average: 55000
    },
    marketData: {
      percentile25: 42000,
      percentile50: 55000,
      percentile75: 68000,
      percentile90: 82000
    },
    factors: [
      { factor: "Expérience", impact: "+15%", description: "Votre niveau d'expérience est au-dessus de la moyenne" },
      { factor: "Localisation", impact: "+8%", description: "Paris offre des salaires supérieurs à la moyenne nationale" },
      { factor: "Compétences", impact: "+12%", description: "Vos compétences techniques sont très demandées" },
      { factor: "Taille entreprise", impact: "+5%", description: "Les grandes entreprises paient généralement mieux" }
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
            <h1 className="text-3xl font-bold text-gray-900">Estimateur de Salaire</h1>
            <p className="text-gray-600 mt-2">Découvrez votre valeur sur le marché</p>
          </div>
        </div>

        {!estimationComplete ? (
          <Card className="bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center">
                <DollarSign className="h-5 w-5 mr-2" />
                Informations pour l'estimation
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Intitulé du poste *
                  </label>
                  <Input
                    placeholder="Ex: Développeur Full-Stack"
                    value={formData.jobTitle}
                    onChange={(e) => setFormData({ ...formData, jobTitle: e.target.value })}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Localisation *
                  </label>
                  <Select onValueChange={(value) => setFormData({ ...formData, location: value })}>
                    <SelectTrigger>
                      <SelectValue placeholder="Sélectionnez une ville" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="paris">Paris</SelectItem>
                      <SelectItem value="lyon">Lyon</SelectItem>
                      <SelectItem value="marseille">Marseille</SelectItem>
                      <SelectItem value="toulouse">Toulouse</SelectItem>
                      <SelectItem value="nice">Nice</SelectItem>
                      <SelectItem value="nantes">Nantes</SelectItem>
                      <SelectItem value="bordeaux">Bordeaux</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Années d'expérience *
                  </label>
                  <Select onValueChange={(value) => setFormData({ ...formData, experience: value })}>
                    <SelectTrigger>
                      <SelectValue placeholder="Sélectionnez votre expérience" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="0-1">0-1 an</SelectItem>
                      <SelectItem value="2-3">2-3 ans</SelectItem>
                      <SelectItem value="4-5">4-5 ans</SelectItem>
                      <SelectItem value="6-8">6-8 ans</SelectItem>
                      <SelectItem value="9-12">9-12 ans</SelectItem>
                      <SelectItem value="13+">13+ ans</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Taille d'entreprise (optionnel)
                  </label>
                  <Select onValueChange={(value) => setFormData({ ...formData, company: value })}>
                    <SelectTrigger>
                      <SelectValue placeholder="Taille de l'entreprise" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="startup">Startup (1-50)</SelectItem>
                      <SelectItem value="pme">PME (51-250)</SelectItem>
                      <SelectItem value="eti">ETI (251-5000)</SelectItem>
                      <SelectItem value="grande">Grande entreprise (5000+)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <Button 
                onClick={handleEstimate}
                disabled={!formData.jobTitle || !formData.location || !formData.experience || isAnalyzing}
                className="w-full"
                size="lg"
              >
                {isAnalyzing ? (
                  <>
                    <Brain className="h-5 w-5 mr-2 animate-spin" />
                    Calcul en cours...
                  </>
                ) : (
                  <>
                    <DollarSign className="h-5 w-5 mr-2" />
                    Estimer mon salaire
                  </>
                )}
              </Button>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-8">
            {/* Salary Estimation */}
            <Card className="bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-center">Estimation salariale</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-5xl font-bold text-green-600 mb-4">
                  {salaryData.estimatedSalary.average.toLocaleString()}€
                </div>
                <Badge className="bg-green-100 text-green-700 text-lg px-4 py-2 mb-4">
                  Salaire annuel brut
                </Badge>
                <p className="text-gray-600 mb-6">
                  Fourchette: {salaryData.estimatedSalary.min.toLocaleString()}€ - {salaryData.estimatedSalary.max.toLocaleString()}€
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-blue-50 rounded-lg p-4">
                    <MapPin className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                    <div className="font-semibold text-blue-800">{formData.location}</div>
                    <div className="text-sm text-blue-600">Localisation</div>
                  </div>
                  <div className="bg-purple-50 rounded-lg p-4">
                    <Briefcase className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                    <div className="font-semibold text-purple-800">{formData.experience}</div>
                    <div className="text-sm text-purple-600">Expérience</div>
                  </div>
                  <div className="bg-orange-50 rounded-lg p-4">
                    <TrendingUp className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                    <div className="font-semibold text-orange-800">+12%</div>
                    <div className="text-sm text-orange-600">vs moyenne marché</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Market Data */}
            <Card className="bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Données du marché</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-800">
                      {salaryData.marketData.percentile25.toLocaleString()}€
                    </div>
                    <div className="text-sm text-gray-600">25e percentile</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">
                      {salaryData.marketData.percentile50.toLocaleString()}€
                    </div>
                    <div className="text-sm text-gray-600">Médiane</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-800">
                      {salaryData.marketData.percentile75.toLocaleString()}€
                    </div>
                    <div className="text-sm text-gray-600">75e percentile</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">
                      {salaryData.marketData.percentile90.toLocaleString()}€
                    </div>
                    <div className="text-sm text-gray-600">90e percentile</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Factors Analysis */}
            <Card className="bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Facteurs influençant votre salaire</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {salaryData.factors.map((factor, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex-1">
                        <div className="font-semibold text-gray-800">{factor.factor}</div>
                        <div className="text-sm text-gray-600">{factor.description}</div>
                      </div>
                      <Badge className="bg-green-100 text-green-700">
                        {factor.impact}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600">
                Télécharger le rapport
              </Button>
              <Button variant="outline" size="lg">
                Comparer avec d'autres postes
              </Button>
              <Button variant="outline" size="lg">
                Nouvelle estimation
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SalaryEstimator;
