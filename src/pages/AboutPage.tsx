
import React from 'react';
import { Award, Globe, Building, Users, BookOpen, Target, Zap, Heart, Star, Lightbulb } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const AboutPage: React.FC = () => {
  const features = [
    {
      icon: Globe,
      title: 'Global Recognition',
      description: 'Internationally accredited curriculum preparing students for worldwide opportunities.',
      details: ['Cambridge International Examinations', 'Globally recognized qualifications', 'University partnerships worldwide'],
      color: 'emerald'
    },
    {
      icon: Award,
      title: 'Awards & Excellence',
      description: 'Recognized for outstanding academic achievements and educational innovation.',
      details: ['Educational Excellence Awards', 'Student Achievement Recognition', 'Faculty Development Programs'],
      color: 'teal'
    },
    {
      icon: Building,
      title: 'Modern Facilities',
      description: 'State-of-the-art infrastructure designed to enhance the learning experience.',
      details: ['Smart classrooms', 'Science & Technology labs', 'Sports & recreation facilities'],
      color: 'cyan'
    }
  ];

  const values = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'Striving for the highest standards in education and character development.',
      color: 'emerald'
    },
    {
      icon: Heart,
      title: 'Community',
      description: 'Building strong relationships between students, families, and educators.',
      color: 'teal'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Embracing modern teaching methods and educational technology.',
      color: 'cyan'
    }
  ];

  const milestones = [
    { year: '1998', title: 'Foundation', description: 'PISES was established with a vision to provide world-class education.', color: 'emerald' },
    { year: '2005', title: 'Cambridge Affiliation', description: 'Became an official Cambridge International School.', color: 'teal' },
    { year: '2010', title: 'Campus Expansion', description: 'Opened our state-of-the-art secondary campus.', color: 'cyan' },
    { year: '2015', title: 'Technology Integration', description: 'Launched our comprehensive digital learning program.', color: 'mint' },
    { year: '2020', title: 'Online Learning Excellence', description: 'Successfully transitioned to hybrid learning model.', color: 'jade' },
    { year: '2023', title: 'Innovation Hub', description: 'Opened our new STEM and Innovation Center.', color: 'ocean' }
  ];

  const stats = [
    { number: '25+', label: 'Years of Excellence', icon: Award, color: 'emerald' },
    { number: '1000+', label: 'Students Graduated', icon: Users, color: 'teal' },
    { number: '50+', label: 'Expert Faculty', icon: BookOpen, color: 'cyan' },
    { number: '98%', label: 'Success Rate', icon: Star, color: 'mint' }
  ];

  return (
    <div className="min-h-screen pt-20 animate-fade-in">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-hero overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-emerald/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-cyan/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-teal/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
        </div>
        
        <div className="relative container mx-auto px-6 text-center text-white">
          <div className="w-28 h-28 glass-effect rounded-4xl flex items-center justify-center mx-auto mb-8 animate-bounce-in">
            <BookOpen className="w-14 h-14 text-emerald" />
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-8 animate-slide-in-left">
            About <span className="text-gradient">PISES</span>
          </h1>
          
          <p className="text-2xl md:text-3xl mb-12 max-w-5xl mx-auto animate-slide-in-right opacity-90">
            Pakistan International School (English Section) - Where Excellence Meets Innovation
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="glass-effect rounded-3xl p-6 text-center animate-fade-in group hover:scale-105 transition-all duration-300" style={{ animationDelay: `${index * 0.2}s` }}>
                <stat.icon className={`w-8 h-8 text-${stat.color} mx-auto mb-3 group-hover:animate-glow`} />
                <div className="text-3xl font-bold mb-2">{stat.number}</div>
                <div className="text-sm opacity-80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-32 relative">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 max-w-7xl mx-auto">
            <Card className="glass-effect border-0 shadow-elegant rounded-4xl group hover:shadow-hero transition-all duration-500 overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-emerald to-teal"></div>
              <CardContent className="p-12">
                <div className="w-16 h-16 bg-gradient-to-r from-emerald to-teal rounded-3xl flex items-center justify-center mb-8 group-hover:animate-glow">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-4xl font-bold text-foreground mb-8 group-hover:text-gradient transition-colors duration-300">
                  Our Mission
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-300">
                  To provide world-class education that nurtures critical thinking, creativity, and character development. 
                  We are committed to preparing our students to become global citizens who contribute positively to society.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-effect border-0 shadow-elegant rounded-4xl group hover:shadow-hero transition-all duration-500 overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-teal to-cyan"></div>
              <CardContent className="p-12">
                <div className="w-16 h-16 bg-gradient-to-r from-teal to-cyan rounded-3xl flex items-center justify-center mb-8 group-hover:animate-glow">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-4xl font-bold text-foreground mb-8 group-hover:text-gradient transition-colors duration-300">
                  Our Vision
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-300">
                  To be the leading international school in Pakistan, recognized for academic excellence, innovative teaching, 
                  and developing students who are prepared to meet the challenges of the 21st century.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald/5 to-cyan/5 rounded-[100px]"></div>
        
        <div className="relative container mx-auto px-6">
          <div className="text-center mb-20 animate-fade-in">
            <div className="inline-flex items-center glass-effect rounded-full px-6 py-3 mb-6">
              <Star className="w-5 h-5 mr-2 text-emerald" />
              <span className="text-muted-foreground font-mono">What Sets Us Apart</span>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Excellence <span className="text-gradient">Redefined</span>
            </h2>
            
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              Discover the features that make PISES a leader in international education.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {features.map((feature, index) => (
              <Card key={index} className="glass-effect border-0 shadow-elegant hover:shadow-hero transition-all duration-700 hover:-translate-y-3 animate-fade-in group rounded-4xl overflow-hidden" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className={`h-2 bg-${feature.color}`}></div>
                
                <CardContent className="p-10">
                  <div className={`w-20 h-20 bg-${feature.color} rounded-3xl flex items-center justify-center mb-8 group-hover:animate-glow transition-all duration-500`}>
                    <feature.icon className="w-10 h-10 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-foreground mb-6 group-hover:text-gradient transition-colors duration-300">
                    {feature.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-8 leading-relaxed group-hover:text-foreground transition-colors duration-300">
                    {feature.description}
                  </p>

                  <div className="space-y-3">
                    {feature.details.map((detail, idx) => (
                      <div key={idx} className="flex items-center text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                        <div className={`w-2 h-2 bg-${feature.color} rounded-full mr-3 group-hover:animate-glow`}></div>
                        {detail}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20 animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Our Core <span className="text-gradient">Values</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              The principles that guide everything we do at PISES.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <div key={index} className="text-center group animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="glass-effect rounded-4xl p-10 hover:shadow-hero transition-all duration-500 hover:-translate-y-2">
                  <div className={`w-24 h-24 bg-${value.color} rounded-full flex items-center justify-center mx-auto mb-8 group-hover:animate-glow transition-all duration-300`}>
                    <value.icon className="w-12 h-12 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-foreground mb-6 group-hover:text-gradient transition-colors duration-300">
                    {value.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-300">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald/5 to-cyan/5 rounded-[100px]"></div>
        
        <div className="relative container mx-auto px-6">
          <div className="text-center mb-20 animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Our <span className="text-gradient">Journey</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              A timeline of milestones and achievements that shaped our legacy.
            </p>
          </div>

          <div className="max-w-5xl mx-auto space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-center group animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className={`w-24 h-24 bg-${milestone.color} rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0 group-hover:animate-glow transition-all duration-300 shadow-elegant`}>
                  {milestone.year}
                </div>
                
                <div className="ml-8 flex-1">
                  <Card className="glass-effect border-0 shadow-elegant hover:shadow-hero transition-all duration-500 rounded-3xl overflow-hidden">
                    <div className={`h-1 bg-${milestone.color}`}></div>
                    <CardContent className="p-8">
                      <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-gradient transition-colors duration-300">
                        {milestone.title}
                      </h3>
                      <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                        {milestone.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
