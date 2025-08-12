
import React, { useState } from 'react';
import { GraduationCap, FileText, Calendar, Users, CheckCircle, Award, Globe, Zap, Clock, Target } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import AdmissionForm from '@/components/Forms/AdmissionForm';

const AdmissionsPage = () => {
  const [showForm, setShowForm] = useState(false);
  
  const admissionSteps = [
    {
      icon: FileText,
      title: 'Application Form',
      description: 'Complete our streamlined online application with intelligent form assistance.',
      timeline: 'Day 1',
      color: 'emerald'
    },
    {
      icon: Calendar,
      title: 'Schedule Interview',
      description: 'Book your personalized interview slot through our smart scheduling system.',
      timeline: 'Day 3-5',
      color: 'teal'
    },
    {
      icon: Users,
      title: 'Assessment Day',
      description: 'Experience our holistic evaluation including academic and personality assessment.',
      timeline: 'Day 7-10',
      color: 'cyan'
    },
    {
      icon: CheckCircle,
      title: 'Decision',
      description: 'Receive your admission decision with detailed feedback and next steps.',
      timeline: 'Day 14',
      color: 'mint'
    }
  ];

  const requirements = [
    { text: 'Previous academic transcripts', completed: true },
    { text: 'Birth certificate', completed: true },
    { text: 'Passport-sized photographs', completed: false },
    { text: 'Medical records', completed: false },
    { text: 'Character reference letter', completed: false },
    { text: 'English proficiency certificate (if applicable)', completed: false }
  ];

  const scholarships = [
    {
      title: 'Merit Excellence',
      percentage: '50%',
      description: 'Outstanding academic achievement recognition',
      color: 'emerald',
      icon: Award
    },
    {
      title: 'Need-Based Support',
      percentage: '40%',
      description: 'Financial assistance for deserving families',
      color: 'teal',
      icon: Users
    },
    {
      title: 'Talent Recognition',
      percentage: '30%',
      description: 'Special skills in arts, sports, or leadership',
      color: 'cyan',
      icon: Target
    }
  ];

  if (showForm) {
    return <AdmissionForm />;
  }

  return (
    <div className="min-h-screen pt-20 animate-fade-in">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-hero overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-80 h-80 bg-emerald/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="relative container mx-auto px-6 text-center text-white">
          <div className="w-28 h-28 glass-effect rounded-4xl flex items-center justify-center mx-auto mb-8 animate-bounce-in">
            <GraduationCap className="w-14 h-14 text-emerald" />
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-8 animate-slide-in-left">
            Join <span className="text-gradient">PISES</span>
          </h1>
          
          <p className="text-2xl md:text-3xl mb-12 max-w-5xl mx-auto animate-slide-in-right opacity-90">
            Begin your journey of excellence with our revolutionary admission experience
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-bounce-in">
            <Button 
              size="lg" 
              className="btn-primary text-xl px-12 py-6 h-auto hover:shadow-glow transition-all duration-300 hover:scale-105 rounded-2xl"
              onClick={() => setShowForm(true)}
            >
              <Zap className="w-6 h-6 mr-3" />
              Start Application
            </Button>
            
            <Button 
              size="lg" 
              className="btn-outline text-xl px-12 py-6 h-auto hover:shadow-glow transition-all duration-300 hover:scale-105 rounded-2xl"
            >
              <Globe className="w-6 h-6 mr-3" />
              Virtual Tour
            </Button>
          </div>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-32 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20 animate-fade-in">
            <div className="inline-flex items-center glass-effect rounded-full px-6 py-3 mb-6">
              <Clock className="w-5 h-5 mr-2 text-emerald" />
              <span className="text-muted-foreground font-mono">Simple Process</span>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Admission <span className="text-gradient">Journey</span>
            </h2>
            
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              Our streamlined four-step process ensures we find the perfect fit for both students and our community.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {admissionSteps.map((step, index) => (
              <Card key={index} className="glass-effect border-0 shadow-elegant hover:shadow-hero transition-all duration-700 hover:-translate-y-3 animate-fade-in group rounded-4xl relative overflow-hidden" style={{ animationDelay: `${index * 0.2}s` }}>
                {/* Progress Line */}
                {index < admissionSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-emerald to-transparent z-10"></div>
                )}
                
                <div className={`h-1 bg-${step.color}`}></div>
                
                <CardHeader className="text-center p-8">
                  <div className={`w-20 h-20 bg-${step.color} rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:animate-glow transition-all duration-500`}>
                    <step.icon className="w-10 h-10 text-white" />
                  </div>
                  
                  <div className={`text-${step.color} font-bold text-sm mb-3 font-mono`}>
                    {step.timeline}
                  </div>
                  
                  <CardTitle className="text-xl group-hover:text-gradient transition-colors duration-300">
                    {step.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="px-8 pb-8">
                  <p className="text-muted-foreground text-center leading-relaxed group-hover:text-foreground transition-colors duration-300">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements & Scholarships */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald/5 to-cyan/5 rounded-[100px]"></div>
        
        <div className="relative container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Requirements */}
            <Card className="glass-effect border-0 shadow-elegant rounded-4xl animate-slide-in-left overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-emerald to-teal"></div>
              
              <CardHeader className="p-8">
                <CardTitle className="text-3xl flex items-center">
                  <FileText className="w-8 h-8 text-emerald mr-4" />
                  Requirements
                </CardTitle>
              </CardHeader>
              
              <CardContent className="px-8 pb-8">
                <div className="space-y-4">
                  {requirements.map((req, index) => (
                    <div key={index} className="flex items-center space-x-4 p-4 glass-effect rounded-2xl animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                      <CheckCircle className={`w-6 h-6 ${req.completed ? 'text-emerald' : 'text-muted-foreground'}`} />
                      <span className={`${req.completed ? 'text-foreground' : 'text-muted-foreground'} flex-1`}>
                        {req.text}
                      </span>
                      {req.completed && (
                        <div className="w-2 h-2 bg-emerald rounded-full animate-glow"></div>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Scholarships */}
            <Card className="glass-effect border-0 shadow-elegant rounded-4xl animate-slide-in-right overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-teal to-cyan"></div>
              
              <CardHeader className="p-8">
                <CardTitle className="text-3xl flex items-center">
                  <Award className="w-8 h-8 text-teal mr-4" />
                  Scholarships
                </CardTitle>
              </CardHeader>
              
              <CardContent className="px-8 pb-8">
                <div className="space-y-6">
                  {scholarships.map((scholarship, index) => (
                    <div key={index} className={`p-6 glass-effect rounded-3xl group hover:bg-${scholarship.color}/10 transition-all duration-300 animate-fade-in`} style={{ animationDelay: `${index * 0.1}s` }}>
                      <div className="flex items-center mb-4">
                        <div className={`w-12 h-12 bg-${scholarship.color} rounded-2xl flex items-center justify-center mr-4 group-hover:animate-glow`}>
                          <scholarship.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h4 className={`font-bold text-${scholarship.color} text-lg group-hover:text-gradient transition-colors duration-300`}>
                            {scholarship.title}
                          </h4>
                          <div className="text-2xl font-bold text-foreground">
                            Up to {scholarship.percentage}
                          </div>
                        </div>
                      </div>
                      <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                        {scholarship.description}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-6xl mx-auto animate-bounce-in">
            <div className="glass-effect rounded-4xl p-16">
              <h2 className="text-5xl font-bold text-foreground mb-8">
                Ready to Begin Your <span className="text-gradient">Journey?</span>
              </h2>
              
              <p className="text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto">
                Take the first step towards excellence. Our admissions team is here to guide you through every step of the way.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button 
                  size="lg" 
                  className="btn-primary text-xl px-12 py-6 h-auto hover:shadow-glow transition-all duration-300 hover:scale-105 rounded-2xl"
                  onClick={() => setShowForm(true)}
                >
                  <GraduationCap className="w-6 h-6 mr-3" />
                  Apply Now
                </Button>
                
                <Button 
                  size="lg" 
                  className="btn-outline text-xl px-12 py-6 h-auto hover:shadow-glow transition-all duration-300 hover:scale-105 rounded-2xl"
                >
                  <Calendar className="w-6 h-6 mr-3" />
                  Schedule Tour
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdmissionsPage;
