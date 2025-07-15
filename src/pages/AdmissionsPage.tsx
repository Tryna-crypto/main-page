
import React, { useState } from 'react';
import { GraduationCap, FileText, Calendar, Users, CheckCircle, Clock, Award, Globe } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import AdmissionForm from '@/components/Forms/AdmissionForm';

const AdmissionsPage = () => {
  const [showForm, setShowForm] = useState(false);
  
  const admissionSteps = [
    {
      icon: FileText,
      title: 'Application Form',
      description: 'Complete our comprehensive online application form with all required details.',
      timeline: 'Day 1'
    },
    {
      icon: Calendar,
      title: 'Schedule Interview',
      description: 'Book a convenient time for your admission interview and assessment.',
      timeline: 'Day 3-5'
    },
    {
      icon: Users,
      title: 'Assessment Day',
      description: 'Participate in our holistic assessment including academic and personality evaluation.',
      timeline: 'Day 7-10'
    },
    {
      icon: CheckCircle,
      title: 'Decision',
      description: 'Receive your admission decision and next steps for enrollment.',
      timeline: 'Day 14'
    }
  ];

  const requirements = [
    'Previous academic transcripts',
    'Birth certificate',
    'Passport-sized photographs',
    'Medical records',
    'Character reference letter',
    'English proficiency certificate (if applicable)'
  ];

  if (showForm) {
    return <AdmissionForm />;
  }

  return (
    <div className="min-h-screen pt-20 animate-fade-in">
      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 lg:py-20 bg-gradient-hero">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/10 backdrop-blur-sm"></div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 animate-bounce-in">
            <GraduationCap className="w-8 h-8 sm:w-10 sm:h-10" />
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 animate-slide-in-left">
            Join PISES Family
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl mb-6 sm:mb-8 max-w-4xl mx-auto animate-slide-in-right">
            Begin your journey of excellence with us. Discover our streamlined admission process designed to welcome exceptional minds.
          </p>
          <Button 
            size="lg" 
            className="btn-primary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 h-auto animate-bounce-in hover:shadow-glow transition-all duration-300 hover:scale-105 rounded-xl"
            onClick={() => setShowForm(true)}
          >
            Start Application
          </Button>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-12 sm:py-16 lg:py-20 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4">
              Admission Process
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-4xl mx-auto">
              Our simple four-step process ensures we find the perfect fit for both students and our community.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {admissionSteps.map((step, index) => (
              <Card key={index} className="glass-effect border-0 shadow-elegant hover:shadow-hero transition-all duration-500 hover:-translate-y-2 animate-fade-in group rounded-2xl h-full" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader className="text-center pb-4">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:shadow-glow transition-all duration-300">
                    <step.icon className="w-6 h-6 sm:w-8 sm:h-8 text-primary-foreground" />
                  </div>
                  <div className="text-primary font-semibold text-xs sm:text-sm mb-2">{step.timeline}</div>
                  <CardTitle className="text-lg sm:text-xl group-hover:text-primary transition-colors">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center leading-relaxed text-sm sm:text-base">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements & Scholarships */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
            {/* Requirements */}
            <Card className="glass-effect border-0 shadow-elegant rounded-2xl animate-slide-in-left h-full">
              <CardHeader>
                <CardTitle className="text-xl sm:text-2xl flex items-center">
                  <FileText className="w-5 h-5 sm:w-6 sm:h-6 text-primary mr-3 flex-shrink-0" />
                  Requirements
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 sm:space-y-4">
                {requirements.map((req, index) => (
                  <div key={index} className="flex items-center space-x-3 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground text-sm sm:text-base">{req}</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Scholarships */}
            <Card className="glass-effect border-0 shadow-elegant rounded-2xl animate-slide-in-right h-full">
              <CardHeader>
                <CardTitle className="text-xl sm:text-2xl flex items-center">
                  <Award className="w-5 h-5 sm:w-6 sm:h-6 text-secondary mr-3 flex-shrink-0" />
                  Scholarships Available
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 sm:space-y-6">
                <div className="space-y-3 sm:space-y-4">
                  <div className="p-3 sm:p-4 bg-primary/10 rounded-xl border border-primary/20">
                    <h4 className="font-semibold text-primary mb-2 text-sm sm:text-base">Merit Scholarship</h4>
                    <p className="text-muted-foreground text-xs sm:text-sm">Up to 50% tuition coverage for outstanding academic performance</p>
                  </div>
                  <div className="p-3 sm:p-4 bg-secondary/10 rounded-xl border border-secondary/20">
                    <h4 className="font-semibold text-secondary mb-2 text-sm sm:text-base">Need-Based Aid</h4>
                    <p className="text-muted-foreground text-xs sm:text-sm">Financial assistance for families demonstrating need</p>
                  </div>
                  <div className="p-3 sm:p-4 bg-accent/10 rounded-xl border border-accent/20">
                    <h4 className="font-semibold text-accent mb-2 text-sm sm:text-base">Talent Scholarship</h4>
                    <p className="text-muted-foreground text-xs sm:text-sm">Recognition for exceptional skills in arts, sports, or leadership</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-primary/10 to-secondary/10 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto animate-bounce-in">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 sm:mb-6">
              Ready to Begin Your Journey?
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground mb-6 sm:mb-8">
              Take the first step towards excellence. Our admissions team is here to guide you through every step.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Button 
                size="lg" 
                className="btn-primary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 h-auto hover:shadow-glow transition-all duration-300 hover:scale-105 rounded-xl w-full sm:w-auto"
                onClick={() => setShowForm(true)}
              >
                Apply Now
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="btn-outline text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 h-auto hover:shadow-glow transition-all duration-300 hover:scale-105 rounded-xl w-full sm:w-auto"
              >
                Schedule Campus Tour
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdmissionsPage;
