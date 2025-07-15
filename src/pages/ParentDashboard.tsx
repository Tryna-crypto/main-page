
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  User, 
  GraduationCap, 
  Calendar, 
  TrendingUp, 
  Users, 
  Clock,
  Star,
  Award,
  BookOpen,
  Activity,
  LogOut
} from 'lucide-react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

interface ParentDashboardProps {
  onSignOut: () => void;
}

const ParentDashboard: React.FC<ParentDashboardProps> = ({ onSignOut }) => {
  const studentInfo = {
    name: "Hassaan",
    id: "22G149",
    class: "Grade 11-A",
    section: "Science",
    rollNumber: "15",
    dateOfBirth: "March 15, 2007",
    parentName: "Mr. Ahmed Khan",
    contactNumber: "+92 300 1234567"
  };

  const recentGrades = [
    { subject: "Mathematics", grade: "A+", marks: "95/100", date: "2024-01-15" },
    { subject: "Physics", grade: "A", marks: "88/100", date: "2024-01-12" },
    { subject: "Chemistry", grade: "A+", marks: "92/100", date: "2024-01-10" },
    { subject: "Biology", grade: "A", marks: "87/100", date: "2024-01-08" },
    { subject: "English", grade: "A+", marks: "94/100", date: "2024-01-05" },
    { subject: "Urdu", grade: "A", marks: "89/100", date: "2024-01-03" },
    { subject: "Islamic Studies", grade: "A+", marks: "96/100", date: "2024-01-01" },
    { subject: "Computer Science", grade: "A+", marks: "98/100", date: "2023-12-28" },
    { subject: "Mathematics", grade: "A", marks: "90/100", date: "2023-12-25" },
    { subject: "Physics", grade: "A+", marks: "93/100", date: "2023-12-22" }
  ];

  const attendanceData = {
    present: 185,
    absent: 8,
    totalDays: 193,
    percentage: 95.9
  };

  const behaviorReports = [
    { date: "2024-01-10", type: "Excellent", note: "Outstanding participation in science fair", teacher: "Ms. Sarah" },
    { date: "2024-01-05", type: "Good", note: "Helped classmates with mathematics", teacher: "Mr. Ali" },
    { date: "2023-12-20", type: "Excellent", note: "Leadership in group project", teacher: "Dr. Khan" }
  ];

  const upcomingEvents = [
    { date: "2024-01-25", event: "Parent-Teacher Meeting", time: "10:00 AM" },
    { date: "2024-01-30", event: "Science Exhibition", time: "2:00 PM" },
    { date: "2024-02-05", event: "Sports Day", time: "9:00 AM" }
  ];

  const getGradeColor = (grade: string) => {
    switch (grade) {
      case 'A+': return 'bg-green-500/20 text-green-700 dark:text-green-300';
      case 'A': return 'bg-blue-500/20 text-blue-700 dark:text-blue-300';
      case 'B+': return 'bg-yellow-500/20 text-yellow-700 dark:text-yellow-300';
      case 'B': return 'bg-orange-500/20 text-orange-700 dark:text-orange-300';
      default: return 'bg-gray-500/20 text-gray-700 dark:text-gray-300';
    }
  };

  const getBehaviorColor = (type: string) => {
    switch (type) {
      case 'Excellent': return 'bg-green-500/20 text-green-700 dark:text-green-300';
      case 'Good': return 'bg-blue-500/20 text-blue-700 dark:text-blue-300';
      case 'Average': return 'bg-yellow-500/20 text-yellow-700 dark:text-yellow-300';
      default: return 'bg-gray-500/20 text-gray-700 dark:text-gray-300';
    }
  };

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br from-primary/10 to-secondary/10 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground">Parent Portal</h1>
            <p className="text-muted-foreground mt-2">Welcome back! Here's your child's progress overview.</p>
          </div>
          <Button 
            onClick={onSignOut}
            variant="outline"
            className="btn-outline rounded-xl hover:shadow-glow transition-all duration-300"
          >
            <LogOut className="w-4 h-4 mr-2" />
            Sign Out
          </Button>
        </div>

        {/* Student Info Card */}
        <Card className="glass-effect border-0 shadow-elegant rounded-2xl mb-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                <User className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h2 className="text-xl font-bold">Student Information</h2>
                <p className="text-muted-foreground text-sm">Basic details and contact information</p>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">Student Name</p>
                <p className="font-semibold text-foreground">{studentInfo.name}</p>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">Student ID</p>
                <p className="font-semibold text-foreground">{studentInfo.id}</p>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">Class</p>
                <p className="font-semibold text-foreground">{studentInfo.class}</p>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">Section</p>
                <p className="font-semibold text-foreground">{studentInfo.section}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="glass-effect border-0 shadow-elegant rounded-2xl hover:shadow-hero transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Overall Grade</p>
                  <p className="text-2xl font-bold text-foreground">A+</p>
                </div>
                <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center">
                  <Star className="w-6 h-6 text-green-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="glass-effect border-0 shadow-elegant rounded-2xl hover:shadow-hero transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Attendance</p>
                  <p className="text-2xl font-bold text-foreground">{attendanceData.percentage}%</p>
                </div>
                <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
                  <Clock className="w-6 h-6 text-blue-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="glass-effect border-0 shadow-elegant rounded-2xl hover:shadow-hero transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Class Rank</p>
                  <p className="text-2xl font-bold text-foreground">3rd</p>
                </div>
                <div className="w-12 h-12 bg-yellow-500/20 rounded-xl flex items-center justify-center">
                  <Award className="w-6 h-6 text-yellow-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="glass-effect border-0 shadow-elegant rounded-2xl hover:shadow-hero transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Total Subjects</p>
                  <p className="text-2xl font-bold text-foreground">8</p>
                </div>
                <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-purple-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Grades */}
          <Card className="glass-effect border-0 shadow-elegant rounded-2xl">
            <CardHeader>
              <CardTitle className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-primary-foreground" />
                </div>
                <span>Recent Grades (Last 10)</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 max-h-96 overflow-y-auto">
                {recentGrades.map((grade, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-muted/20 rounded-xl">
                    <div>
                      <p className="font-medium text-foreground">{grade.subject}</p>
                      <p className="text-sm text-muted-foreground">{grade.date}</p>
                    </div>
                    <div className="text-right">
                      <Badge className={`${getGradeColor(grade.grade)} border-0`}>
                        {grade.grade}
                      </Badge>
                      <p className="text-sm text-muted-foreground mt-1">{grade.marks}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Attendance & Behavior */}
          <div className="space-y-6">
            {/* Attendance Card */}
            <Card className="glass-effect border-0 shadow-elegant rounded-2xl">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <span>Attendance Summary</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Present Days</span>
                    <span className="font-semibold text-green-600">{attendanceData.present}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Absent Days</span>
                    <span className="font-semibold text-red-600">{attendanceData.absent}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Total Days</span>
                    <span className="font-semibold text-foreground">{attendanceData.totalDays}</span>
                  </div>
                  <div className="pt-2 border-t border-border/20">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-foreground">Attendance Rate</span>
                      <span className="font-bold text-primary">{attendanceData.percentage}%</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Behavior Reports */}
            <Card className="glass-effect border-0 shadow-elegant rounded-2xl">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center">
                    <Activity className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <span>Recent Behavior Reports</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {behaviorReports.map((report, index) => (
                    <div key={index} className="p-3 bg-muted/20 rounded-xl">
                      <div className="flex items-center justify-between mb-2">
                        <Badge className={`${getBehaviorColor(report.type)} border-0`}>
                          {report.type}
                        </Badge>
                        <span className="text-sm text-muted-foreground">{report.date}</span>
                      </div>
                      <p className="text-sm text-foreground mb-1">{report.note}</p>
                      <p className="text-xs text-muted-foreground">By: {report.teacher}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Upcoming Events */}
        <Card className="glass-effect border-0 shadow-elegant rounded-2xl mt-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center">
                <Calendar className="w-5 h-5 text-primary-foreground" />
              </div>
              <span>Upcoming Events</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {upcomingEvents.map((event, index) => (
                <div key={index} className="p-4 bg-muted/20 rounded-xl">
                  <p className="font-medium text-foreground">{event.event}</p>
                  <p className="text-sm text-muted-foreground">{event.date}</p>
                  <p className="text-sm text-primary">{event.time}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ParentDashboard;
