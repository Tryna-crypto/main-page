
import React from 'react';
import { Users, Trophy, Music, Palette, Globe, Heart, Zap, Star } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const StudentLifePage = () => {
  const activities = [
    {
      icon: Trophy,
      title: 'Sports & Athletics',
      description: 'Competitive sports teams and recreational activities for all skill levels',
      items: ['Football', 'Basketball', 'Cricket', 'Swimming', 'Tennis', 'Athletics']
    },
    {
      icon: Music,
      title: 'Performing Arts',
      description: 'Express creativity through music, drama, and performance',
      items: ['School Orchestra', 'Drama Club', 'Choir', 'Dance Group', 'Music Production']
    },
    {
      icon: Palette,
      title: 'Visual Arts',
      description: 'Explore artistic expression through various mediums',
      items: ['Art Club', 'Photography', 'Digital Design', 'Sculpture', 'Ceramics']
    },
    {
      icon: Zap,
      title: 'STEM Clubs',
      description: 'Innovation and technology-focused activities',
      items: ['Robotics Club', 'Coding Club', 'Science Olympiad', 'Math Club', 'Engineering']
    },
    {
      icon: Globe,
      title: 'Cultural Activities',
      description: 'Celebrate diversity and global awareness',
      items: ['Model UN', 'Cultural Festival', 'Language Clubs', 'International Day']
    },
    {
      icon: Heart,
      title: 'Community Service',
      description: 'Make a positive impact in the community',
      items: ['Volunteer Programs', 'Environmental Club', 'Charity Drives', 'Mentoring']
    }
  ];

  const events = [
    {
      title: 'Annual Sports Day',
      description: 'Competitive sports events bringing the entire school together',
      image: 'https://images.unsplash.com/photo-1544717302-de2939b7ef71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    },
    {
      title: 'Cultural Festival',
      description: 'Celebrating our diverse heritage through art, music, and food',
      image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    },
    {
      title: 'Science Fair',
      description: 'Student innovations and research projects on display',
      image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    }
  ];

  return (
    <div className="min-h-screen pt-20 animate-fade-in">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-hero">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/10 backdrop-blur-sm"></div>
        <div className="relative container mx-auto px-6 text-center text-white">
          <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mx-auto mb-6 animate-bounce-in">
            <Users className="w-10 h-10" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-slide-in-left">
            Vibrant Student Life
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto animate-slide-in-right">
            Beyond academics, discover a world of opportunities for growth, friendship, and unforgettable experiences.
          </p>
        </div>
      </section>

      {/* Activities & Clubs */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Clubs & Activities
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover your passion and develop new skills through our diverse range of extracurricular activities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activities.map((activity, index) => (
              <Card key={index} className="glass-effect border-0 shadow-elegant hover:shadow-hero transition-all duration-500 hover:-translate-y-2 animate-fade-in group rounded-2xl" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-glow transition-all duration-300">
                    <activity.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">{activity.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-center leading-relaxed">
                    {activity.description}
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {activity.items.map((item, idx) => (
                      <span key={idx} className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full border border-primary/20">
                        {item}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Major Events */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Major Events
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Throughout the year, we host exciting events that bring our community together.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <Card key={index} className="glass-effect border-0 shadow-elegant hover:shadow-hero transition-all duration-500 hover:scale-105 animate-fade-in group rounded-2xl overflow-hidden" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {event.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {event.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Student Leadership */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center animate-bounce-in">
            <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Star className="w-8 h-8 text-primary-foreground" />
            </div>
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Student Leadership
            </h2>
            <p className="text-xl text-muted-foreground mb-12">
              Develop leadership skills and make your voice heard through our student government and leadership programs.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="glass-effect border-0 shadow-elegant rounded-2xl">
                <CardContent className="p-8 text-center">
                  <h3 className="text-xl font-semibold text-foreground mb-4">Student Council</h3>
                  <p className="text-muted-foreground">Represent your peers and drive positive change in school policies.</p>
                </CardContent>
              </Card>
              
              <Card className="glass-effect border-0 shadow-elegant rounded-2xl">
                <CardContent className="p-8 text-center">
                  <h3 className="text-xl font-semibold text-foreground mb-4">Prefect System</h3>
                  <p className="text-muted-foreground">Take responsibility and lead by example in your school community.</p>
                </CardContent>
              </Card>
              
              <Card className="glass-effect border-0 shadow-elegant rounded-2xl">
                <CardContent className="p-8 text-center">
                  <h3 className="text-xl font-semibold text-foreground mb-4">Peer Mentoring</h3>
                  <p className="text-muted-foreground">Guide and support younger students in their academic journey.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StudentLifePage;
