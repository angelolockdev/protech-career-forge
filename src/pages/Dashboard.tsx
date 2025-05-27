
import { Badge } from "@/components/ui/badge";
import DashboardStats from "@/components/dashboard/DashboardStats";
import QuickActions from "@/components/dashboard/QuickActions";
import RecentActivity from "@/components/dashboard/RecentActivity";
import ProgressSection from "@/components/dashboard/ProgressSection";

const Dashboard = () => {
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
        <DashboardStats />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Quick Actions */}
          <QuickActions />

          {/* Recent Activity */}
          <RecentActivity />
        </div>

        {/* Progress Section */}
        <ProgressSection />
      </div>
    </div>
  );
};

export default Dashboard;
