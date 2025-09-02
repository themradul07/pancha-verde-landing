import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { MessageCircle, Users, Calendar, TrendingUp, UserCheck, FileText } from "lucide-react";
import TherapistNavbar from "@/components/TherapistNavbar";

const TherapistDashboard = () => {
  const [currentUser, setCurrentUser] = useState<any>(null);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("currentUser") || "{}");
    setCurrentUser(user);
  }, []);

  // Mock data for demonstration
  const patients = [
    { id: 1, name: "John Doe", email: "john@example.com", progress: 75, lastSession: "2024-01-15", status: "Active" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", progress: 60, lastSession: "2024-01-14", status: "Active" },
    { id: 3, name: "Bob Johnson", email: "bob@example.com", progress: 90, lastSession: "2024-01-13", status: "Completed" },
  ];

  const sessions = [
    { id: 1, patient: "John Doe", date: "2024-01-20", time: "10:00 AM", type: "Consultation", status: "Scheduled" },
    { id: 2, patient: "Jane Smith", date: "2024-01-21", time: "2:00 PM", type: "Follow-up", status: "Scheduled" },
    { id: 3, patient: "Bob Johnson", date: "2024-01-15", time: "11:00 AM", type: "Final Review", status: "Completed" },
  ];

  const messages = [
    { id: 1, from: "John Doe", message: "Thank you for the session today!", time: "2 hours ago", unread: true },
    { id: 2, from: "Jane Smith", message: "Can we reschedule our appointment?", time: "1 day ago", unread: false },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-sage/10 via-white to-sage/5">
      <TherapistNavbar />
      <div className="max-w-7xl mx-auto p-6 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-sage">Therapist Dashboard</h1>
            <p className="text-muted-foreground">Welcome back, {currentUser?.name}</p>
          </div>
          <Avatar className="h-12 w-12">
            <AvatarImage src="" />
            <AvatarFallback className="bg-sage text-white">
              {currentUser?.name?.charAt(0)?.toUpperCase()}
            </AvatarFallback>
          </Avatar>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Patients</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{patients.length}</div>
              <p className="text-xs text-muted-foreground">+2 from last month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Sessions</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {sessions.filter(s => s.status === "Scheduled").length}
              </div>
              <p className="text-xs text-muted-foreground">This week</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Avg Progress</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {Math.round(patients.reduce((acc, p) => acc + p.progress, 0) / patients.length)}%
              </div>
              <p className="text-xs text-muted-foreground">Patient improvement</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Unread Messages</CardTitle>
              <MessageCircle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {messages.filter(m => m.unread).length}
              </div>
              <p className="text-xs text-muted-foreground">Need attention</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="patients" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="patients">Patients</TabsTrigger>
            <TabsTrigger value="sessions">Sessions</TabsTrigger>
            <TabsTrigger value="messages">Messages</TabsTrigger>
            <TabsTrigger value="progress">Progress</TabsTrigger>
          </TabsList>

          <TabsContent value="patients" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <UserCheck className="h-5 w-5" />
                  Patient Management
                </CardTitle>
                <CardDescription>Manage your patients and their progress</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {patients.map((patient) => (
                    <div key={patient.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-4">
                        <Avatar>
                          <AvatarFallback>{patient.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">{patient.name}</p>
                          <p className="text-sm text-muted-foreground">{patient.email}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="text-right">
                          <p className="text-sm font-medium">Progress</p>
                          <Progress value={patient.progress} className="w-20" />
                          <p className="text-xs text-muted-foreground">{patient.progress}%</p>
                        </div>
                        <Badge variant={patient.status === "Active" ? "default" : "secondary"}>
                          {patient.status}
                        </Badge>
                        <Button variant="outline" size="sm">
                          View Details
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="sessions" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  Upcoming Sessions
                </CardTitle>
                <CardDescription>Manage your scheduled appointments</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {sessions.map((session) => (
                    <div key={session.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <p className="font-medium">{session.patient}</p>
                        <p className="text-sm text-muted-foreground">
                          {session.date} at {session.time}
                        </p>
                        <p className="text-sm text-muted-foreground">{session.type}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge variant={session.status === "Scheduled" ? "default" : "secondary"}>
                          {session.status}
                        </Badge>
                        <Button variant="outline" size="sm">
                          {session.status === "Scheduled" ? "Start Session" : "View Notes"}
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="messages" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageCircle className="h-5 w-5" />
                  Patient Messages
                </CardTitle>
                <CardDescription>Communicate with your patients</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {messages.map((message) => (
                    <div key={message.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-4">
                        <Avatar>
                          <AvatarFallback>{message.from.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">{message.from}</p>
                          <p className="text-sm text-muted-foreground">{message.message}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-sm text-muted-foreground">{message.time}</span>
                        {message.unread && <Badge variant="destructive">New</Badge>}
                        <Button variant="outline" size="sm">
                          Reply
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="progress" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  Progress Reports
                </CardTitle>
                <CardDescription>Track patient progress and update records</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {patients.map((patient) => (
                    <div key={patient.id} className="p-4 border rounded-lg">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <p className="font-medium">{patient.name}</p>
                          <p className="text-sm text-muted-foreground">Last session: {patient.lastSession}</p>
                        </div>
                        <Button variant="outline" size="sm">
                          Update Progress
                        </Button>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Overall Progress</span>
                          <span>{patient.progress}%</span>
                        </div>
                        <Progress value={patient.progress} />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default TherapistDashboard;
