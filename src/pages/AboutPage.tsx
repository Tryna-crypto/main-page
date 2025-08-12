import React from 'react';
import { Award, Globe, Building, Users, BookOpen, Target } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const AboutPage: React.FC = () => {
  const features = [
    {
      icon: Globe,
      title: 'Global Recognition',
      description: 'Internationally accredited curriculum preparing students for worldwide opportunities.',
      details: ['Cambridge International Examinations', 'Globally recognized qualifications', 'University partnerships worldwide']
    },
    {
      icon: Award,
      title: 'Awards & Excellence',
      description: 'Recognized for outstanding academic achievements and educational innovation.',
      details: ['Educational Excellence Awards', 'Student Achievement Recognition', 'Faculty Development Programs']
    },
    {
      icon: Building,
      title: 'Modern Facilities',
      description: 'State-of-the-art infrastructure designed to enhance the learning experience.',
      details: ['Smart classrooms', 'Science & Technology labs', 'Sports & recreation facilities']
    }
  ];

  const values = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'Striving for the highest standards in education and character development.'
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Building strong relationships between students, families, and educators.'
    },
    {
      icon: BookOpen,
      title: 'Innovation',
      description: 'Embracing modern teaching methods and educational technology.'
    }
  ];

  return (
    <div className="animate-fade-in pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-hero text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              About PISES
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              Pakistan International School (English Section) - Where Excellence Meets Innovation
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">25+</div>
                <div className="text-white/70">Years of Excellence</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">1000+</div>
                <div className="text-white/70">Students Graduated</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">50+</div>
                <div className="text-white/70">Expert Faculty</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <Card className="feature-card bg-gradient-card border-0 shadow-card">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-foreground mb-6">Our Mission</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To provide world-class education that nurtures critical thinking, creativity, and character development. 
                  We are committed to preparing our students to become global citizens who contribute positively to society.
                </p>
              </CardContent>
            </Card>

            <Card className="feature-card bg-gradient-card border-0 shadow-card">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-foreground mb-6">Our Vision</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To be the leading international school in Pakistan, recognized for academic excellence, innovative teaching, 
                  and developing students who are prepared to meet the challenges of the 21st century.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              What Sets Us Apart
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover the features that make PISES a leader in international education.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="feature-card bg-card border-0 shadow-card">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-6">
                    <feature.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    {feature.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {feature.description}
                  </p>

                  <ul className="space-y-2">
                    {feature.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The principles that guide everything we do at PISES.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-glow transition-all duration-300">
                  <value.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-muted-foreground">
              A timeline of milestones and achievements.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {[
              { year: '1998', title: 'Foundation', description: 'PISES was established with a vision to provide world-class education.' },
              { year: '2005', title: 'Cambridge Affiliation', description: 'Became an official Cambridge International School.' },
              { year: '2010', title: 'Campus Expansion', description: 'Opened our state-of-the-art secondary campus.' },
              { year: '2015', title: 'Technology Integration', description: 'Launched our comprehensive digital learning program.' },
              { year: '2020', title: 'Online Learning Excellence', description: 'Successfully transitioned to hybrid learning model.' },
              { year: '2023', title: 'Innovation Hub', description: 'Opened our new STEM and Innovation Center.' }
            ].map((milestone, index) => (
              <div key={index} className="flex items-center group">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0 group-hover:shadow-glow transition-all duration-300">
                  {milestone.year}
                </div>
                <div className="ml-8">
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {milestone.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {milestone.description}
                  </p>
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