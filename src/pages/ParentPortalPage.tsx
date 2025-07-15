import React, { useState } from 'react';
import { User, BookOpen, Calendar, MessageCircle, BarChart, Bell, Shield, Settings } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import ParentPortalForm from '@/components/Forms/ParentPortalForm';
import ParentDashboard from './ParentDashboard';

const ParentPortalPage = () => {
  const [showForm, setShowForm] = useState(false);
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [currentStudentId, setCurrentStudentId] = useState('');

  const handleSignIn = (studentId: string) => {
    setCurrentStudentId(studentId);
    setIsSignedIn(true);
    setShowForm(false);
  };

  const handleSignOut = () => {
    setIsSignedIn(false);
    setCurrentStudentId('');
    setShowForm(false);
  };

  const features = [
    {
      icon: BarChart,
      title: 'Academic Progress',
      description: 'Track your child\'s grades, assignments, and academic performance in real-time',
      benefits: ['Real-time grade updates', 'Assignment tracking', 'Progress reports', 'Performance analytics']
    },
    {
      icon: Calendar,
      title: 'School Calendar',
      description: 'Stay updated with school events, holidays, and important dates',
      benefits: ['Event notifications', 'Assignment due dates', 'Parent-teacher meetings', 'School holidays']
    },
    {
      icon: MessageCircle,
      title: 'Communication Hub',
      description: 'Direct communication with teachers and school administration',
      benefits: ['Teacher messaging', 'School announcements', 'Emergency alerts', 'Meeting requests']
    },
    {
      icon: Bell,
      title: 'Instant Notifications',
      description: 'Receive important updates about your child\'s school activities',
      benefits: ['Attendance alerts', 'Grade notifications', 'Event reminders', 'Emergency notices']
    }
  ];

  const portalSections = [
    {
      icon: User,
      title: 'Student Profile',
      description: 'View and update student information, contact details, and emergency contacts'
    },
    {
      icon: BookOpen,
      title: 'Academic Records',
      description: 'Access transcripts, report cards, and academic history'
    },
    {
      icon: Calendar,
      title: 'Attendance Tracking',
      description: 'Monitor daily attendance and absence records'
    },
    {
      icon: Shield,
      title: 'Fee Management',
      description: 'View fee structure, payment history, and make online payments'
    }
  ];

  if (isSignedIn) {
    return <ParentDashboard onSignOut={handleSignOut} />;
  }

  if (showForm) {
    return <ParentPortalForm onSignIn={handleSignIn} />;
  }

  return (
    <div className="min-h-screen pt-20 animate-fade-in">
      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 lg:py-20 bg-gradient-hero">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/10 backdrop-blur-sm"></div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 animate-bounce-in">
            <User className="w-8 h-8 sm:w-10 sm:h-10" />
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 animate-slide-in-left">
            Parent Portal
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl mb-6 sm:mb-8 max-w-4xl mx-auto animate-slide-in-right">
            Stay connected with your child's educational journey through our comprehensive parent portal.
          </p>
          <Button 
            size="lg" 
            className="btn-primary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 h-auto animate-bounce-in hover:shadow-glow transition-all duration-300 hover:scale-105 rounded-xl"
            onClick={() => setShowForm(true)}
          >
            Access Portal
          </Button>
        </div>
      </section>

      {/* Portal Features */}
      <section className="py-12 sm:py-16 lg:py-20 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4">
              Portal Features
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-4xl mx-auto">
              Our parent portal provides comprehensive access to your child's academic journey and school activities.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="glass-effect border-0 shadow-elegant hover:shadow-hero transition-all duration-500 hover:-translate-y-2 animate-fade-in group rounded-2xl h-full" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-primary rounded-xl flex items-center justify-center group-hover:shadow-glow transition-all duration-300 flex-shrink-0">
                      <feature.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-lg sm:text-xl group-hover:text-primary transition-colors">{feature.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4 pt-0">
                  <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                    {feature.description}
                  </p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-xs sm:text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portal Sections */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4">
              Portal Sections
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-4xl mx-auto">
              Navigate through different sections to access specific information about your child's school experience.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {portalSections.map((section, index) => (
              <Card key={index} className="glass-effect border-0 shadow-card hover:shadow-elegant transition-all duration-300 hover:scale-105 animate-fade-in cursor-pointer group rounded-2xl h-full" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-4 sm:p-6 text-center">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:shadow-glow transition-all duration-300">
                    <section.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">{section.title}</h3>
                  <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">{section.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Getting Started */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-primary/10 to-secondary/10 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center animate-bounce-in">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
              <Settings className="w-6 h-6 sm:w-8 sm:h-8 text-primary-foreground" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 sm:mb-6">
              Getting Started
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 sm:mb-12">
              Setting up your parent portal account is simple and secure. Follow these easy steps to get started.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
              <Card className="glass-effect border-0 shadow-elegant rounded-2xl h-full">
                <CardContent className="p-6 sm:p-8 text-center">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/20 rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4 text-primary font-bold text-lg sm:text-xl">
                    1
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3 sm:mb-4">Register Account</h3>
                  <p className="text-muted-foreground text-sm sm:text-base">Use your student ID and provided registration code to create your account.</p>
                </CardContent>
              </Card>
              
              <Card className="glass-effect border-0 shadow-elegant rounded-2xl h-full">
                <CardContent className="p-6 sm:p-8 text-center">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-secondary/20 rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4 text-secondary font-bold text-lg sm:text-xl">
                    2
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3 sm:mb-4">Verify Identity</h3>
                  <p className="text-muted-foreground text-sm sm:text-base">Complete identity verification through email and phone number confirmation.</p>
                </CardContent>
              </Card>
              
              <Card className="glass-effect border-0 shadow-elegant rounded-2xl h-full">
                <CardContent className="p-6 sm:p-8 text-center">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-accent/20 rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4 text-accent font-bold text-lg sm:text-xl">
                    3
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3 sm:mb-4">Access Portal</h3>
                  <p className="text-muted-foreground text-sm sm:text-base">Log in to your portal and explore all the available features and information.</p>
                </CardContent>
              </Card>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Button 
                size="lg" 
                className="btn-primary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 h-auto hover:shadow-glow transition-all duration-300 hover:scale-105 rounded-xl w-full sm:w-auto"
                onClick={() => setShowForm(true)}
              >
                Create Account
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="btn-outline text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 h-auto hover:shadow-glow transition-all duration-300 hover:scale-105 rounded-xl w-full sm:w-auto"
                onClick={() => setShowForm(true)}
              >
                Login to Portal
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ParentPortalPage;
