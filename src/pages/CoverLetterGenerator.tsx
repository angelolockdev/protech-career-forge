
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { MessageSquare, ArrowLeft, Brain, Download, Copy } from "lucide-react";
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";

const CoverLetterGenerator = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    positionTitle: "",
    additionalInfo: ""
  });
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedLetter, setGeneratedLetter] = useState("");

  const handleGenerate = () => {
    if (formData.companyName && formData.positionTitle) {
      setIsGenerating(true);
      console.log("Generating cover letter for:", formData);
      
      setTimeout(() => {
        setIsGenerating(false);
        setGeneratedLetter(
          `Madame, Monsieur,

Vivement intéressé(e) par le poste de ${formData.positionTitle} au sein de ${formData.companyName}, je me permets de vous adresser ma candidature.

Fort(e) de mon expérience en développement logiciel et de ma passion pour les technologies innovantes, je suis convaincu(e) que mon profil correspond parfaitement aux exigences de ce poste. Mes compétences en React, JavaScript et dans la gestion d'équipes techniques me permettront de contribuer efficacement aux projets de ${formData.companyName}.

Au cours de mes précédentes expériences, j'ai notamment :
• Développé et maintenu des applications web performantes utilisées par plus de 10,000 utilisateurs
• Collaboré étroitement avec des équipes cross-fonctionnelles pour livrer des projets dans les délais
• Implémenté des solutions techniques innovantes qui ont amélioré l'efficacité opérationnelle de 30%

${formData.additionalInfo ? formData.additionalInfo + '\n\n' : ''}Particulièrement attiré(e) par la mission et les valeurs de ${formData.companyName}, je serais ravi(e) de mettre mes compétences au service de vos objectifs et de contribuer au succès de vos projets.

Je reste à votre disposition pour tout complément d'information et espère avoir l'opportunité de vous rencontrer pour discuter de ma candidature.

Dans l'attente de votre retour, je vous prie d'agréer, Madame, Monsieur, l'expression de mes salutations distinguées.

[Votre nom]`
        );
        console.log("Cover letter generated successfully!");
      }, 3000);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedLetter);
    console.log("Letter copied to clipboard");
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
            <h1 className="text-3xl font-bold text-gray-900">Générateur de Lettre de Motivation</h1>
            <p className="text-gray-600 mt-2">Créez une lettre personnalisée avec l'IA</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Input Form */}
          <Card className="bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center">
                <MessageSquare className="h-5 w-5 mr-2" />
                Informations sur le poste
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nom de l'entreprise *
                </label>
                <Input
                  placeholder="Ex: TechCorp, Google, Microsoft..."
                  value={formData.companyName}
                  onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Intitulé du poste *
                </label>
                <Input
                  placeholder="Ex: Développeur Full-Stack Senior"
                  value={formData.positionTitle}
                  onChange={(e) => setFormData({ ...formData, positionTitle: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Informations complémentaires (optionnel)
                </label>
                <Textarea
                  placeholder="Ajoutez des éléments spécifiques que vous souhaitez mentionner..."
                  value={formData.additionalInfo}
                  onChange={(e) => setFormData({ ...formData, additionalInfo: e.target.value })}
                  className="min-h-[100px]"
                />
              </div>

              <Button 
                onClick={handleGenerate}
                disabled={!formData.companyName || !formData.positionTitle || isGenerating}
                className="w-full"
                size="lg"
              >
                {isGenerating ? (
                  <>
                    <Brain className="h-5 w-5 mr-2 animate-spin" />
                    Génération en cours...
                  </>
                ) : (
                  <>
                    <Brain className="h-5 w-5 mr-2" />
                    Générer la lettre
                  </>
                )}
              </Button>
            </CardContent>
          </Card>

          {/* Generated Letter */}
          <Card className="bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle>Lettre générée</CardTitle>
              {generatedLetter && (
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" onClick={copyToClipboard}>
                    <Copy className="h-4 w-4 mr-2" />
                    Copier
                  </Button>
                  <Button variant="outline" size="sm">
                    <Download className="h-4 w-4 mr-2" />
                    Télécharger
                  </Button>
                </div>
              )}
            </CardHeader>
            <CardContent>
              {generatedLetter ? (
                <div className="bg-gray-50 rounded-lg p-4 max-h-[600px] overflow-y-auto">
                  <pre className="whitespace-pre-wrap text-sm text-gray-700 font-sans leading-relaxed">
                    {generatedLetter}
                  </pre>
                </div>
              ) : (
                <div className="text-center py-12 text-gray-500">
                  <MessageSquare className="h-12 w-12 mx-auto mb-4 opacity-50" />
                  <p>Remplissez les informations pour générer votre lettre de motivation</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {generatedLetter && (
          <div className="mt-8 text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600">
                Régénérer avec des modifications
              </Button>
              <Button variant="outline" size="lg">
                Sauvegarder dans mes lettres
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CoverLetterGenerator;
