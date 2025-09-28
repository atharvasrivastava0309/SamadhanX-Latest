import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Clock, CheckCircle, Plus, User, Bell } from "lucide-react";
import Navigation from "@/components/Navigation";

const UserDashboard = () => {
  // Mock user data - will be replaced with real data from database
  const mockUser = {
    name: "John Doe",
    email: "john.doe@example.com"
  };

  // Mock complaint statistics - will be fetched from database for logged-in user
  const complaintStats = {
    total: 12,
    solved: 8,
    pending: 4
  };

  const statsCards = [
    {
      title: "Total Complaints",
      value: complaintStats.total,
      icon: FileText,
      color: "text-blue-600",
      bg: "bg-blue-50",
      description: "All your submitted complaints"
    },
    {
      title: "Complaints Solved",
      value: complaintStats.solved,
      icon: CheckCircle,
      color: "text-green-600",
      bg: "bg-green-50",
      description: "Successfully resolved issues"
    },
    {
      title: "Complaints Pending",
      value: complaintStats.pending,
      icon: Clock,
      color: "text-yellow-600",
      bg: "bg-yellow-50",
      description: "Awaiting resolution"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8 mt-16">
        {/* Welcome Section */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-primary/10 rounded-full">
              <User className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-foreground">
                Welcome, {mockUser.name}
              </h1>
              <p className="text-muted-foreground">
                Track and manage your complaints from your personal dashboard
              </p>
            </div>
          </div>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {statsCards.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover-scale">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-full ${stat.bg}`}>
                      <Icon className={`h-6 w-6 ${stat.color}`} />
                    </div>
                    <div className="text-right">
                      <p className="text-3xl font-bold text-foreground">{stat.value}</p>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{stat.title}</h3>
                    <p className="text-sm text-muted-foreground">{stat.description}</p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Action Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Submit New Complaint Card */}
          <Card className="hover:shadow-lg transition-all duration-300 hover-scale">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Plus className="h-5 w-5 text-primary" />
                Submit New Complaint
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Have a new issue to report? Submit a complaint and we'll track it for you.
              </p>
              <Link to="/submit">
                <Button className="w-full" size="lg">
                  <Plus className="h-4 w-4 mr-2" />
                  Submit Complaint
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Track Existing Complaints Card */}
          <Card className="hover:shadow-lg transition-all duration-300 hover-scale">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-primary" />
                Track Complaints
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Check the status of your existing complaints and get updates.
              </p>
              <Link to="/track">
                <Button variant="outline" className="w-full" size="lg">
                  <FileText className="h-4 w-4 mr-2" />
                  Track Status
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        {/* Recent Activity Section */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bell className="h-5 w-5 text-primary" />
              Recent Activity
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {/* Mock recent activities */}
              {[
                {
                  action: "Complaint Status Updated",
                  details: "Your road repair complaint (#CR-2024-001) is now in progress",
                  time: "2 hours ago",
                  status: "in-progress"
                },
                {
                  action: "New Response Received",
                  details: "Municipal officer responded to your water supply issue (#WS-2024-003)",
                  time: "1 day ago",
                  status: "response"
                },
                {
                  action: "Complaint Resolved",
                  details: "Your street light complaint (#SL-2024-002) has been marked as resolved",
                  time: "3 days ago",
                  status: "resolved"
                }
              ].map((activity, index) => (
                <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-muted/50">
                  <div className={`p-2 rounded-full ${
                    activity.status === 'resolved' ? 'bg-green-100' :
                    activity.status === 'in-progress' ? 'bg-yellow-100' :
                    'bg-blue-100'
                  }`}>
                    <Bell className={`h-4 w-4 ${
                      activity.status === 'resolved' ? 'text-green-600' :
                      activity.status === 'in-progress' ? 'text-yellow-600' :
                      'text-blue-600'
                    }`} />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-foreground">{activity.action}</p>
                    <p className="text-sm text-muted-foreground">{activity.details}</p>
                    <p className="text-xs text-muted-foreground mt-1">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default UserDashboard;
