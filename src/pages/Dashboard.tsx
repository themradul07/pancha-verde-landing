import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import {
  CreditCard,
  Calendar,
  TrendingUp,
  MessageCircle,
  Phone,
  User,
  Clock,
  CheckCircle,
  XCircle
} from "lucide-react";
import Navbar from "@/components/Navbar";

const Dashboard = () => {
  const [currentUser, setCurrentUser] = useState<any>(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is logged in
    const user = localStorage.getItem("currentUser");
    if (user) {
      setCurrentUser(JSON.parse(user));
    } else {
      // Redirect to login if not authenticated
      navigate("/login");
    }
  }, [navigate]);

  if (!currentUser) {
    return <div>Loading...</div>;
  }

  // Mock data for demonstration
  const paymentHistory = [
    { id: 1, date: "2024-01-15", amount: 150, status: "completed", description: "Panchakarma Session" },
    { id: 2, date: "2024-01-10", amount: 200, status: "completed", description: "Consultation Fee" },
    { id: 3, date: "2024-01-05", amount: 100, status: "pending", description: "Therapy Session" },
  ];

  const bookedSessions = [
    { id: 1, date: "2024-01-20", time: "10:00 AM", therapist: "Dr. Sharma", type: "Panchakarma", status: "confirmed" },
    { id: 2, date: "2024-01-25", time: "2:00 PM", therapist: "Dr. Patel", type: "Consultation", status: "pending" },
  ];

  const progressData = {
    overall: 75,
    sessionsCompleted: 12,
    totalSessions: 16,
    goals: [
      { name: "Weight Management", progress: 80 },
      { name: "Stress Reduction", progress: 65 },
      { name: "Energy Levels", progress: 90 },
    ]
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="container mx-auto px-4 py-8">
        {/* Welcome Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Welcome back, {currentUser.name}!
          </h1>
          <p className="text-muted-foreground">
            Here's an overview of your wellness journey
          </p>
        </div>

        {/* Dashboard Tabs */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="payments">Payments</TabsTrigger>
            <TabsTrigger value="sessions">Sessions</TabsTrigger>
            <TabsTrigger value="progress">Progress</TabsTrigger>
            <TabsTrigger value="communication">Communication</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Quick Stats */}
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Sessions</CardTitle>
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{progressData.sessionsCompleted}</div>
                  <p className="text-xs text-muted-foreground">
                    of {progressData.totalSessions} completed
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Overall Progress</CardTitle>
                  <TrendingUp className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{progressData.overall}%</div>
                  <Progress value={progressData.overall} className="mt-2" />
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Next Session</CardTitle>
                  <Clock className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">Jan 20</div>
                  <p className="text-xs text-muted-foreground">10:00 AM</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Messages</CardTitle>
                  <MessageCircle className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">3</div>
                  <p className="text-xs text-muted-foreground">unread</p>
                </CardContent>
              </Card>
            </div>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
                <CardDescription>Access your most used features</CardDescription>
              </CardHeader>
              <CardContent className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Button className="h-20 flex flex-col items-center justify-center space-y-2">
                  <MessageCircle className="h-6 w-6" />
                  <span className="text-sm">Chat with Therapist</span>
                </Button>
                <Button variant="outline" className="h-20 flex flex-col items-center justify-center space-y-2">
                  <Phone className="h-6 w-6" />
                  <span className="text-sm">Book Consultation</span>
                </Button>
                <Button variant="outline" className="h-20 flex flex-col items-center justify-center space-y-2">
                  <Calendar className="h-6 w-6" />
                  <span className="text-sm">Schedule Session</span>
                </Button>
                <Button variant="outline" className="h-20 flex flex-col items-center justify-center space-y-2">
                  <CreditCard className="h-6 w-6" />
                  <span className="text-sm">View Payments</span>
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Payments Tab */}
          <TabsContent value="payments" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Payment History</CardTitle>
                <CardDescription>View all your transactions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {paymentHistory.map((payment) => (
                    <div key={payment.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-4">
                        <CreditCard className="h-8 w-8 text-muted-foreground" />
                        <div>
                          <p className="font-medium">{payment.description}</p>
                          <p className="text-sm text-muted-foreground">{payment.date}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <span className="font-medium">${payment.amount}</span>
                        <Badge variant={payment.status === 'completed' ? 'default' : 'secondary'}>
                          {payment.status === 'completed' ? (
                            <CheckCircle className="h-3 w-3 mr-1" />
                          ) : (
                            <Clock className="h-3 w-3 mr-1" />
                          )}
                          {payment.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Sessions Tab */}
          <TabsContent value="sessions" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Booked Sessions</CardTitle>
                <CardDescription>Your upcoming and past therapy sessions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {bookedSessions.map((session) => (
                    <div key={session.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-4">
                        <Avatar>
                          <AvatarFallback>{session.therapist.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">{session.type}</p>
                          <p className="text-sm text-muted-foreground">with {session.therapist}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="text-right">
                          <p className="font-medium">{session.date}</p>
                          <p className="text-sm text-muted-foreground">{session.time}</p>
                        </div>
                        <Badge variant={session.status === 'confirmed' ? 'default' : 'secondary'}>
                          {session.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Progress Tab */}
          <TabsContent value="progress" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Progress Report</CardTitle>
                <CardDescription>Track your wellness journey</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">Overall Progress</span>
                    <span className="text-sm text-muted-foreground">{progressData.overall}%</span>
                  </div>
                  <Progress value={progressData.overall} />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {progressData.goals.map((goal, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">{goal.name}</span>
                        <span className="text-sm text-muted-foreground">{goal.progress}%</span>
                      </div>
                      <Progress value={goal.progress} />
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t">
                  <h4 className="font-medium mb-2">Recent Achievements</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Completed 12 therapy sessions</li>
                    <li>• Improved energy levels by 90%</li>
                    <li>• Reduced stress levels by 65%</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Communication Tab */}
          <TabsContent value="communication" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Chat with Therapist */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <MessageCircle className="h-5 w-5" />
                    <span>Chat with Therapist</span>
                  </CardTitle>
                  <CardDescription>Connect with your assigned therapist</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full">
                    Start Chat
                  </Button>
                </CardContent>
              </Card>

              {/* Book Consultancy */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Phone className="h-5 w-5" />
                    <span>Book Consultancy</span>
                  </CardTitle>
                  <CardDescription>Schedule a consultation session</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full">
                    Book Now
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Dashboard;
