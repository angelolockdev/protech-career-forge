
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle } from "lucide-react";

const RecentActivity = () => {
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

  return (
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
  );
};

export default RecentActivity;
