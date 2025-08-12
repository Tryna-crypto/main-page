
import React, { useEffect, useRef, useState } from 'react';
import { GraduationCap, BookOpen, Users, ArrowRight, Calendar, Award, Globe, Zap, Sparkles, Cpu } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface QuickAccessCardsProps {
  onNavigate: (page: string) => void;
}

const QuickAccessCards: React.FC<QuickAccessCardsProps> = ({ onNavigate }) => {
  const cards = [
    {
      icon: GraduationCap,
      title: 'Admissions',
      description: 'Join the future of education with our streamlined admission process and scholarship opportunities.',
      color: 'from-neon-purple to-neon-pink',
      page: 'admissions',
      features: ['Smart Application', 'AI Matching', 'Virtual Tours'],
      accent: 'neon-purple'
    },
    {
      icon: BookOpen,
      title: 'Academics',
      description: 'Experience cutting-edge curriculum powered by AI and designed for the digital age.',
      color: 'from-neon-blue to-neon-cyan',
      page: 'academics',
      features: ['AI-Powered Learning', 'Global Curriculum', 'Expert Mentors'],
      accent: 'neon-blue'
    },
    {
      icon: Users,
      title: 'Student Life',
      description: 'Immerse yourself in a vibrant community with endless opportunities for growth and connection.',
      color: 'from-neon-pink to-neon-orange',
      page: 'student-life',
      features: ['Digital Clubs', 'Virtual Events', 'Global Network'],
      accent: 'neon-pink'
    }
  ];

  const statsCards = [
    {
      icon: Award,
      number: 25,
      suffix: '+',
      label: 'Years Excellence',
      color: 'text-neon-purple',
      bgColor: 'from-neon-purple/20 to-neon-purple/5'
    },
    {
      icon: Globe,
      number: 95,
      suffix: '%',
      label: 'Success Rate',
      color: 'text-neon-pink',
      bgColor: 'from-neon-pink/20 to-neon-pink/5'
    },
    {
      icon: Users,
      number: 1000,
      suffix: '+',
      label: 'Students',
      color: 'text-neon-blue',
      bgColor: 'from-neon-blue/20 to-neon-blue/5'
    },
    {
      icon: Cpu,
      number: 50,
      suffix: '+',
      label: 'Tech Programs',
      color: 'text-neon-cyan',
      bgColor: 'from-neon-cyan/20 to-neon-cyan/5'
    }
  ];

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/5 via-transparent to-neon-blue/5"></div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center px-6 py-3 rounded-full glass-card border-neon-purple/30 mb-6">
            <Sparkles className="w-5 h-5 mr-2 text-neon-purple" />
            <span className="font-mono text-muted-foreground">Your Digital Gateway</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="text-gradient">Excellence Redefined</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Step into the future of education with our revolutionary approach to learning and development.
          </p>
        </div>

        {/* Main Feature Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {cards.map((card, index) => (
            <Card 
              key={index}
              className="feature-card group cursor-pointer animate-fade-in h-full rounded-4xl border-0 bg-transparent"
              onClick={() => onNavigate(card.page)}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="relative p-8 h-full flex flex-col glass-card rounded-4xl">
                {/* Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-4xl`}></div>
                
                {/* Icon */}
                <div className={`relative w-16 h-16 bg-gradient-to-br ${card.color} rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:neon-glow transition-all duration-500`}>
                  <card.icon className="w-8 h-8 text-white" />
                </div>
                
                {/* Content */}
                <h3 className="text-2xl font-bold mb-4 group-hover:text-gradient transition-colors duration-300">
                  {card.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed flex-grow">
                  {card.description}
                </p>

                {/* Features */}
                <div className="space-y-3 mb-6">
                  {card.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-muted-foreground">
                      <div className={`w-2 h-2 bg-${card.accent} rounded-full mr-3 group-hover:animate-neon-pulse`}></div>
                      {feature}
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="flex items-center text-primary font-medium group-hover:text-gradient transition-colors duration-300">
                  <Zap className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                  Explore Now
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {statsCards.map((stat, index) => (
            <AnimatedStatCard key={index} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface AnimatedStatCardProps {
  stat: {
    icon: React.ElementType;
    number: number;
    suffix: string;
    label: string;
    color: string;
    bgColor: string;
  };
  index: number;
}

const AnimatedStatCard: React.FC<AnimatedStatCardProps> = ({ stat, index }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          animateCount();
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  const animateCount = () => {
    const duration = 2000;
    const increment = stat.number / (duration / 50);
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= stat.number) {
        setCount(stat.number);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 50);
  };

  return (
    <Card 
      ref={cardRef}
      className="stat-card border-0 bg-transparent animate-fade-in group rounded-3xl overflow-hidden"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${stat.bgColor} opacity-50 group-hover:opacity-100 transition-opacity duration-500`}></div>
      <CardContent className="relative p-6 text-center glass-card rounded-3xl">
        <div className="flex justify-center mb-4">
          <div className="w-12 h-12 glass-card rounded-2xl flex items-center justify-center group-hover:neon-glow transition-all duration-300">
            <stat.icon className={`w-6 h-6 ${stat.color} group-hover:scale-110 transition-transform duration-300`} />
          </div>
        </div>
        
        <div className={`text-3xl font-bold mb-2 group-hover:${stat.color} transition-colors duration-300 font-mono`}>
          {count}{stat.suffix}
        </div>
        
        <p className="text-sm text-muted-foreground font-medium group-hover:text-foreground transition-colors duration-300">
          {stat.label}
        </p>
      </CardContent>
    </Card>
  );
};

export default QuickAccessCards;
