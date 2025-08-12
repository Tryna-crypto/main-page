
import React from 'react';
import { BookOpen, Globe, Award, Users, Microscope, Calculator, Palette, Music } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const AcademicsPage = () => {
  const programs = [
    {
      icon: Globe,
      title: 'International Baccalaureate',
      description: 'Comprehensive IB programme preparing students for global universities',
      features: ['Theory of Knowledge', 'Extended Essay', 'CAS Programme', 'International Recognition']
    },
    {
      icon: BookOpen,
      title: 'Cambridge Curriculum',
      description: 'World-class Cambridge International Education programme',
      features: ['IGCSE Programme', 'A-Level Studies', 'Global Recognition', 'University Preparation']
    },
    {
      icon: Microscope,
      title: 'STEM Excellence',
      description: 'Science, Technology, Engineering, and Mathematics focus',
      features: ['Research Projects', 'Lab Facilities', 'Innovation Hub', 'Robotics Club']
    }
  ];

  const subjects = [
    { icon: Calculator, name: 'Mathematics', description: 'Advanced mathematical concepts and applications' },
    { icon: Microscope, name: 'Sciences', description: 'Physics, Chemistry, Biology with practical focus' },
    { icon: Globe, name: 'Languages', description: 'English, Urdu, Arabic, and optional third languages' },
    { icon: BookOpen, name: 'Humanities', description: 'History, Geography, Islamic Studies, Social Sciences' },
    { icon: Palette, name: 'Arts', description: 'Visual Arts, Drama, Creative Writing' },
    { icon: Music, name: 'Music', description: 'Instrumental and vocal music programmes' }
  ];

  return (
    <div className="min-h-screen pt-20 animate-fade-in">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-hero">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/10 backdrop-blur-sm"></div>
        <div className="relative container mx-auto px-6 text-center text-white">
          <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mx-auto mb-6 animate-bounce-in">
            <BookOpen className="w-10 h-10" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-slide-in-left">
            Academic Excellence
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto animate-slide-in-right">
            Discover our world-class curriculum designed to nurture critical thinking, creativity, and global citizenship.
          </p>
        </div>
      </section>

      {/* Academic Programs */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our Academic Programs
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose from our internationally recognized programmes that prepare students for success in higher education and beyond.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <Card key={index} className="glass-effect border-0 shadow-elegant hover:shadow-hero transition-all duration-500 hover:-translate-y-2 animate-fade-in group rounded-2xl" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-glow transition-all duration-300">
                    <program.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">{program.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-center leading-relaxed">
                    {program.description}
                  </p>
                  <ul className="space-y-2">
                    {program.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Subject Areas */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Subject Areas
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our comprehensive curriculum covers all essential subject areas with depth and rigor.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {subjects.map((subject, index) => (
              <Card key={index} className="glass-effect border-0 shadow-card hover:shadow-elegant transition-all duration-300 hover:scale-105 animate-fade-in rounded-2xl" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                    <subject.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{subject.name}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{subject.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Support */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center animate-bounce-in">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Academic Support & Resources
            </h2>
            <p className="text-xl text-muted-foreground mb-12">
              We provide comprehensive support to ensure every student reaches their full potential.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="glass-effect border-0 shadow-elegant rounded-2xl">
                <CardContent className="p-8 text-center">
                  <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-4">Personal Tutoring</h3>
                  <p className="text-muted-foreground">One-on-one support and guidance from experienced faculty members.</p>
                </CardContent>
              </Card>
              
              <Card className="glass-effect border-0 shadow-elegant rounded-2xl">
                <CardContent className="p-8 text-center">
                  <Award className="w-12 h-12 text-secondary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-4">University Counseling</h3>
                  <p className="text-muted-foreground">Expert guidance for university applications and career planning.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AcademicsPage;
