
import React from 'react';
import { BookOpen, Globe, Award, Users, Microscope, Calculator, Palette, Music, Zap, Brain, Target } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const AcademicsPage = () => {
  const programs = [
    {
      icon: Globe,
      title: 'International Baccalaureate',
      description: 'Comprehensive IB programme preparing students for global universities',
      features: ['Theory of Knowledge', 'Extended Essay', 'CAS Programme', 'International Recognition'],
      gradient: 'from-emerald to-teal'
    },
    {
      icon: BookOpen,
      title: 'Cambridge Curriculum',
      description: 'World-class Cambridge International Education programme',
      features: ['IGCSE Programme', 'A-Level Studies', 'Global Recognition', 'University Preparation'],
      gradient: 'from-teal to-cyan'
    },
    {
      icon: Microscope,
      title: 'STEM Excellence',
      description: 'Science, Technology, Engineering, and Mathematics focus',
      features: ['Research Projects', 'Lab Facilities', 'Innovation Hub', 'Robotics Club'],
      gradient: 'from-cyan to-mint'
    }
  ];

  const subjects = [
    { icon: Calculator, name: 'Mathematics', description: 'Advanced mathematical concepts and applications', color: 'emerald' },
    { icon: Microscope, name: 'Sciences', description: 'Physics, Chemistry, Biology with practical focus', color: 'teal' },
    { icon: Globe, name: 'Languages', description: 'English, Urdu, Arabic, and optional third languages', color: 'cyan' },
    { icon: BookOpen, name: 'Humanities', description: 'History, Geography, Islamic Studies, Social Sciences', color: 'mint' },
    { icon: Palette, name: 'Arts', description: 'Visual Arts, Drama, Creative Writing', color: 'jade' },
    { icon: Music, name: 'Music', description: 'Instrumental and vocal music programmes', color: 'ocean' }
  ];

  const achievements = [
    { icon: Award, number: '98%', label: 'Pass Rate', color: 'emerald' },
    { icon: Globe, number: '45+', label: 'Countries', color: 'teal' },
    { icon: Brain, number: '15:1', label: 'Student Ratio', color: 'cyan' },
    { icon: Target, number: '100%', label: 'University Rate', color: 'mint' }
  ];

  return (
    <div className="min-h-screen pt-20 animate-fade-in">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-hero overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-emerald/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="relative container mx-auto px-6 text-center text-white">
          <div className="w-24 h-24 glass-effect rounded-4xl flex items-center justify-center mx-auto mb-8 animate-bounce-in">
            <BookOpen className="w-12 h-12 text-emerald" />
          </div>
          
          <h1 className="text-6xl md:text-7xl font-bold mb-8 animate-slide-in-left">
            Academic <span className="text-gradient">Excellence</span>
          </h1>
          
          <p className="text-2xl md:text-3xl mb-12 max-w-5xl mx-auto animate-slide-in-right opacity-90">
            Empowering minds through innovative curriculum and world-class education
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {achievements.map((achievement, index) => (
              <div key={index} className="glass-effect rounded-3xl p-6 text-center animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <achievement.icon className={`w-8 h-8 text-${achievement.color} mx-auto mb-3`} />
                <div className="text-3xl font-bold mb-2">{achievement.number}</div>
                <div className="text-sm opacity-80">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Programs */}
      <section className="py-32 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20 animate-fade-in">
            <div className="inline-flex items-center glass-effect rounded-full px-6 py-3 mb-6">
              <Zap className="w-5 h-5 mr-2 text-emerald" />
              <span className="text-muted-foreground font-mono">World-Class Programs</span>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Our Academic <span className="text-gradient">Programs</span>
            </h2>
            
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              Choose from our internationally recognized programmes that prepare students for success in higher education and beyond.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {programs.map((program, index) => (
              <Card key={index} className="glass-effect border-0 shadow-elegant hover:shadow-hero transition-all duration-700 hover:-translate-y-3 animate-fade-in group rounded-4xl overflow-hidden" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className={`h-2 bg-gradient-to-r ${program.gradient}`}></div>
                
                <CardHeader className="text-center p-8">
                  <div className={`w-20 h-20 bg-gradient-to-r ${program.gradient} rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:animate-glow transition-all duration-500`}>
                    <program.icon className="w-10 h-10 text-white" />
                  </div>
                  <CardTitle className="text-2xl group-hover:text-gradient transition-colors duration-300">{program.title}</CardTitle>
                </CardHeader>
                
                <CardContent className="px-8 pb-8">
                  <p className="text-muted-foreground text-center leading-relaxed mb-6">
                    {program.description}
                  </p>
                  
                  <div className="space-y-3">
                    {program.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                        <div className="w-2 h-2 bg-emerald rounded-full mr-3 group-hover:animate-glow"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Subject Areas */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald/5 to-cyan/5 rounded-[100px]"></div>
        
        <div className="relative container mx-auto px-6">
          <div className="text-center mb-20 animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Subject <span className="text-gradient">Areas</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              Our comprehensive curriculum covers all essential subject areas with depth and rigor.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {subjects.map((subject, index) => (
              <Card key={index} className="glass-effect border-0 shadow-elegant hover:shadow-hero transition-all duration-500 hover:scale-105 animate-fade-in rounded-4xl group" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-8 text-center">
                  <div className={`w-16 h-16 bg-${subject.color} rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:animate-glow transition-all duration-300`}>
                    <subject.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-foreground mb-4 group-hover:text-gradient transition-colors duration-300">
                    {subject.name}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-300">
                    {subject.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Support */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20 animate-fade-in">
              <h2 className="text-5xl font-bold text-foreground mb-6">
                Academic <span className="text-gradient">Support</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Comprehensive support to ensure every student reaches their full potential.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-10">
              <Card className="glass-effect border-0 shadow-elegant rounded-4xl group hover:shadow-hero transition-all duration-500">
                <CardContent className="p-10 text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-emerald to-teal rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:animate-glow">
                    <Users className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground mb-6 group-hover:text-gradient transition-colors duration-300">
                    Personal Tutoring
                  </h3>
                  <p className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-300">
                    One-on-one support and guidance from experienced faculty members to help students excel academically.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="glass-effect border-0 shadow-elegant rounded-4xl group hover:shadow-hero transition-all duration-500">
                <CardContent className="p-10 text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-teal to-cyan rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:animate-glow">
                    <Award className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground mb-6 group-hover:text-gradient transition-colors duration-300">
                    University Counseling
                  </h3>
                  <p className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-300">
                    Expert guidance for university applications and career planning to ensure bright futures.
                  </p>
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
