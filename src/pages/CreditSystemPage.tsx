
import React from 'react';
import { Award, BookOpen, Users, Trophy, Star, CheckCircle, Target, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const CreditSystemPage = () => {
  const creditCategories = [
    {
      icon: BookOpen,
      title: 'Academic Excellence',
      description: 'Earn credits for outstanding academic performance and achievements',
      points: '10-50 credits',
      activities: ['High grades', 'Academic competitions', 'Research projects', 'Honor roll']
    },
    {
      icon: Users,
      title: 'Community Service',
      description: 'Contribute to society and earn credits for volunteer work',
      points: '5-30 credits',
      activities: ['Volunteer hours', 'Charity events', 'Community projects', 'Environmental initiatives']
    },
    {
      icon: Trophy,
      title: 'Leadership & Activities',
      description: 'Develop leadership skills through various school activities',
      points: '15-40 credits',
      activities: ['Student council', 'Club leadership', 'Event organization', 'Peer mentoring']
    },
    {
      icon: Star,
      title: 'Special Achievements',
      description: 'Recognition for exceptional accomplishments and talents',
      points: '20-100 credits',
      activities: ['Awards & medals', 'International competitions', 'Published work', 'Innovation projects']
    }
  ];

  const benefits = [
    {
      icon: Award,
      title: 'University Applications',
      description: 'Strengthen college applications with documented achievements'
    },
    {
      icon: Trophy,
      title: 'Recognition Ceremonies',
      description: 'Special recognition at school events and graduation'
    },
    {
      icon: Target,
      title: 'Scholarship Opportunities',
      description: 'Priority consideration for merit-based scholarships'
    },
    {
      icon: TrendingUp,
      title: 'Personal Development',
      description: 'Track growth and development throughout your academic journey'
    }
  ];

  const milestones = [
    { credits: 100, title: 'Bronze Level', color: 'bg-amber-600', description: 'Active participant in school community' },
    { credits: 250, title: 'Silver Level', color: 'bg-gray-400', description: 'Dedicated contributor to school excellence' },
    { credits: 500, title: 'Gold Level', color: 'bg-yellow-500', description: 'Outstanding leader and role model' },
    { credits: 1000, title: 'Platinum Level', color: 'bg-purple-600', description: 'Exceptional achiever and community leader' }
  ];

  return (
    <div className="min-h-screen pt-20 animate-fade-in">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-hero">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/10 backdrop-blur-sm"></div>
        <div className="relative container mx-auto px-6 text-center text-white">
          <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mx-auto mb-6 animate-bounce-in">
            <Award className="w-10 h-10" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-slide-in-left">
            Credit System
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto animate-slide-in-right">
            Recognize and reward student achievements through our comprehensive credit tracking system.
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              How It Works
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our credit system rewards students for academic excellence, leadership, community service, and special achievements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {creditCategories.map((category, index) => (
              <Card key={index} className="glass-effect border-0 shadow-elegant hover:shadow-hero transition-all duration-500 hover:-translate-y-2 animate-fade-in group rounded-2xl" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center group-hover:shadow-glow transition-all duration-300">
                        <category.icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <CardTitle className="text-xl group-hover:text-primary transition-colors">{category.title}</CardTitle>
                    </div>
                    <span className="text-primary font-semibold bg-primary/10 px-3 py-1 rounded-full text-sm">
                      {category.points}
                    </span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {category.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {category.activities.map((activity, idx) => (
                      <span key={idx} className="px-3 py-1 bg-muted text-muted-foreground text-xs rounded-full border">
                        {activity}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievement Levels */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Achievement Levels
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Progress through different achievement levels as you accumulate credits throughout your academic journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {milestones.map((milestone, index) => (
              <Card key={index} className="glass-effect border-0 shadow-card hover:shadow-elegant transition-all duration-300 hover:scale-105 animate-fade-in text-center rounded-2xl" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6">
                  <div className={`w-16 h-16 ${milestone.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                    <Trophy className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{milestone.title}</h3>
                  <div className="text-2xl font-bold text-primary mb-3">{milestone.credits}+ Credits</div>
                  <p className="text-muted-foreground text-sm leading-relaxed">{milestone.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              System Benefits
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our credit system provides tangible benefits that support your academic and personal growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="glass-effect border-0 shadow-card hover:shadow-elegant transition-all duration-300 hover:scale-105 animate-fade-in text-center rounded-2xl" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Get Started */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center animate-bounce-in">
            <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-8 h-8 text-primary-foreground" />
            </div>
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Start Earning Credits Today
            </h2>
            <p className="text-xl text-muted-foreground mb-12">
              Begin your journey towards recognition and achievement. Every positive action counts towards your credit accumulation.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="glass-effect border-0 shadow-elegant rounded-2xl">
                <CardContent className="p-8 text-center">
                  <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mx-auto mb-4 text-primary font-bold text-xl">
                    1
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">Excel Academically</h3>
                  <p className="text-muted-foreground">Focus on your studies and participate in academic competitions.</p>
                </CardContent>
              </Card>
              
              <Card className="glass-effect border-0 shadow-elegant rounded-2xl">
                <CardContent className="p-8 text-center">
                  <div className="w-12 h-12 bg-secondary/20 rounded-xl flex items-center justify-center mx-auto mb-4 text-secondary font-bold text-xl">
                    2
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">Get Involved</h3>
                  <p className="text-muted-foreground">Join clubs, volunteer for events, and take on leadership roles.</p>
                </CardContent>
              </Card>
              
              <Card className="glass-effect border-0 shadow-elegant rounded-2xl">
                <CardContent className="p-8 text-center">
                  <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center mx-auto mb-4 text-accent font-bold text-xl">
                    3
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">Track Progress</h3>
                  <p className="text-muted-foreground">Monitor your credits and work towards the next achievement level.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CreditSystemPage;
