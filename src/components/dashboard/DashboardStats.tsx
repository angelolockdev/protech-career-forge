
import { Card, CardContent } from "@/components/ui/card";
import { 
  FileText, 
  TrendingUp,
  Clock,
  Brain
} from "lucide-react";

const DashboardStats = () => {
  const stats = [
    {
      label: "Analyses ce mois",
      value: "24",
      color: "text-blue-600",
      icon: FileText,
      iconColor: "text-blue-500"
    },
    {
      label: "Score moyen",
      value: "87%",
      color: "text-green-600",
      icon: TrendingUp,
      iconColor: "text-green-500"
    },
    {
      label: "Entretiens simulés",
      value: "8",
      color: "text-purple-600",
      icon: Brain,
      iconColor: "text-purple-500"
    },
    {
      label: "Temps économisé",
      value: "12h",
      color: "text-orange-600",
      icon: Clock,
      iconColor: "text-orange-500"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
      {stats.map((stat, index) => (
        <Card key={index} className="bg-white/80 backdrop-blur-sm">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">{stat.label}</p>
                <p className={`text-2xl font-bold ${stat.color}`}>{stat.value}</p>
              </div>
              <stat.icon className={`h-8 w-8 ${stat.iconColor}`} />
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default DashboardStats;
