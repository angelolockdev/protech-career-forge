
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const ProgressSection = () => {
  const progressItems = [
    {
      label: "Optimisation CV",
      value: 85
    },
    {
      label: "Préparation entretiens",
      value: 72
    },
    {
      label: "Matching offres",
      value: 91
    }
  ];

  return (
    <div className="mt-8">
      <Card className="bg-white/80 backdrop-blur-sm">
        <CardHeader>
          <CardTitle>Progression de votre profil</CardTitle>
          <CardDescription>Améliorez votre score pour maximiser vos chances</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {progressItems.map((item, index) => (
              <div key={index}>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium">{item.label}</span>
                  <span className="text-sm text-gray-500">{item.value}%</span>
                </div>
                <Progress value={item.value} className="h-2" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProgressSection;
