import React, { useEffect, useRef, useState } from 'react';
import { GraduationCap, BookOpen, Users, ArrowRight, Calendar, Award, Globe } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface QuickAccessCardsProps {
  onNavigate: (page: string) => void;
}

const QuickAccessCards: React.FC<QuickAccessCardsProps> = ({ onNavigate }) => {
  const cards = [
    {
      icon: GraduationCap,
      title: 'Admissions',
      description: 'Start your journey with PISES. Learn about our admission process, requirements, and scholarships.',
      color: 'bg-primary',
      page: 'admissions',
      features: ['Online Application', 'Scholarship Info', 'Campus Tours']
    },
    {
      icon: BookOpen,
      title: 'Academics',
      description: 'Explore our comprehensive curriculum designed to prepare students for global success.',
      color: 'bg-secondary',
      page: 'academics',
      features: ['International Curriculum', 'Expert Faculty', 'Research Programs']
    },
    {
      icon: Users,
      title: 'Student Life',
      description: 'Discover the vibrant community and exciting opportunities that await our students.',
      color: 'bg-accent',
      page: 'student-life',
      features: ['Clubs & Societies', 'Sports Teams', 'Cultural Events']
    }
  ];

  const statsCards = [
    {
      icon: Award,
      number: 25,
      suffix: '+',
      label: 'Years of Excellence',
      color: 'text-primary'
    },
    {
      icon: Globe,
      number: 95,
      suffix: '%',
      label: 'University Acceptance',
      color: 'text-primary'
    },
    {
      icon: Users,
      number: 1000,
      suffix: '+',
      label: 'Happy Students',
      color: 'text-primary'
    },
    {
      icon: Calendar,
      number: 50,
      suffix: '+',
      label: 'Extra-curricular Activities',
      color: 'text-primary'
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4 animate-fade-in">
            Your Gateway to Excellence
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-4xl mx-auto animate-fade-in px-4">
            Discover the opportunities that await you at PISES. From world-class academics to vibrant student life.
          </p>
        </div>

        {/* Modern Quick Access Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16 sm:mb-20">
          {cards.map((card, index) => (
            <Card 
              key={index}
              className="feature-card group cursor-pointer animate-fade-in h-full"
              onClick={() => onNavigate(card.page)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="relative p-6 sm:p-8 h-full flex flex-col">
                <div className={`w-12 h-12 sm:w-16 sm:h-16 ${card.color} rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:shadow-glow transition-all duration-300 group-hover:scale-110 flex-shrink-0`}>
                  <card.icon className="w-6 h-6 sm:w-8 sm:h-8 text-primary-foreground" />
                </div>
                
                <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4 group-hover:text-primary transition-colors">
                  {card.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base flex-grow">
                  {card.description}
                </p>

                <ul className="space-y-2 mb-4 sm:mb-6 flex-shrink-0">
                  {card.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-xs sm:text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 group-hover:shadow-glow transition-all duration-300 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="flex items-center text-primary font-medium group-hover:text-primary-glow transition-colors text-sm sm:text-base">
                  Learn More
                  <ArrowRight className="ml-2 w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Modern Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
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
      className="glass-effect text-center border-0 shadow-elegant hover:shadow-hero transition-all duration-500 hover:-translate-y-1 animate-fade-in group rounded-2xl overflow-hidden"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <CardContent className="relative p-4 sm:p-6">
        <div className="flex justify-center mb-3 sm:mb-4">
          <stat.icon className={`w-6 h-6 sm:w-8 sm:h-8 ${stat.color} group-hover:scale-110 transition-transform duration-300`} />
        </div>
        <div className={`text-2xl sm:text-3xl font-bold text-foreground mb-2 group-hover:${stat.color} transition-colors duration-300`}>
          {count}{stat.suffix}
        </div>
        <p className="text-xs sm:text-sm text-muted-foreground font-medium group-hover:text-foreground transition-colors duration-300 leading-tight">
          {stat.label}
        </p>
      </CardContent>
    </Card>
  );
};

export default QuickAccessCards;
