
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, ArrowRight, Sparkles, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeroSectionProps {
  onNavigate: (page: string) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
      title: 'Future of Education',
      subtitle: 'Shaping tomorrow\'s leaders today',
      description: 'Experience next-generation learning with cutting-edge technology and world-class education.',
      cta: 'Begin Journey',
      accent: 'neon-purple'
    },
    {
      image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
      title: 'Global Innovation',
      subtitle: 'Connected learning ecosystem',
      description: 'Join a worldwide community of learners and innovators preparing for the digital future.',
      cta: 'Explore Programs',
      accent: 'neon-pink'
    },
    {
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
      title: 'Tech Integration',
      subtitle: 'AI-powered personalized learning',
      description: 'Harness the power of artificial intelligence and immersive technologies for enhanced education.',
      cta: 'Virtual Tour',
      accent: 'neon-blue'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="relative h-screen overflow-hidden hero-modern">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ${
              index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
            }`}
            style={{ 
              backgroundImage: `url(${slide.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/70 to-background/50"></div>
          </div>
        ))}
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-neon-purple rounded-full animate-float opacity-60"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-neon-pink rounded-full animate-float opacity-40" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-40 left-20 w-3 h-3 bg-neon-blue rounded-full animate-float opacity-50" style={{ animationDelay: '4s' }}></div>
        <div className="absolute top-60 right-40 w-1.5 h-1.5 bg-neon-cyan rounded-full animate-float opacity-70" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 h-full flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="glass-card p-8 rounded-4xl">
              {/* Badge */}
              <div className="inline-flex items-center px-4 py-2 rounded-full glass-card border-neon-purple/30 mb-6">
                <Sparkles className="w-4 h-4 mr-2 text-neon-purple" />
                <span className="text-sm font-mono text-muted-foreground">Next-Gen Education</span>
              </div>

              <h1 className="text-4xl lg:text-7xl font-bold leading-tight mb-6">
                <span className="text-gradient">{slides[currentSlide].title}</span>
              </h1>
              
              <h2 className="text-xl lg:text-3xl font-medium text-muted-foreground mb-6 font-mono">
                {slides[currentSlide].subtitle}
              </h2>
              
              <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed mb-8">
                {slides[currentSlide].description}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="btn-neon group"
                  onClick={() => onNavigate('admissions')}
                >
                  <Zap className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                  Apply Now
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                
                <Button 
                  size="lg" 
                  className="btn-glass group"
                  onClick={() => onNavigate('parent-portal')}
                >
                  <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  Parent Portal
                </Button>
              </div>
            </div>
          </div>

          {/* Right Content - Stats Dashboard */}
          <div className="hidden lg:block animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="glass-card p-8 rounded-4xl">
              <h3 className="text-2xl font-bold mb-6 text-gradient">Live Stats</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="stat-card p-6 rounded-2xl">
                  <div className="text-3xl font-bold text-neon-purple mb-2">25+</div>
                  <div className="text-sm text-muted-foreground font-mono">Years Excellence</div>
                </div>
                <div className="stat-card p-6 rounded-2xl">
                  <div className="text-3xl font-bold text-neon-pink mb-2">95%</div>
                  <div className="text-sm text-muted-foreground font-mono">Success Rate</div>
                </div>
                <div className="stat-card p-6 rounded-2xl">
                  <div className="text-3xl font-bold text-neon-blue mb-2">1K+</div>
                  <div className="text-sm text-muted-foreground font-mono">Students</div>
                </div>
                <div className="stat-card p-6 rounded-2xl">
                  <div className="text-3xl font-bold text-neon-cyan mb-2">50+</div>
                  <div className="text-sm text-muted-foreground font-mono">Activities</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-20 w-14 h-14 glass-card rounded-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:neon-border"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-20 w-14 h-14 glass-card rounded-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:neon-border"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-primary scale-125 neon-glow' 
                : 'bg-muted-foreground/50 hover:bg-primary/75 hover:scale-110'
            }`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 right-6 z-20 animate-bounce">
        <div className="glass-card p-4 rounded-2xl">
          <div className="text-xs font-mono text-muted-foreground mb-2">Scroll</div>
          <div className="w-px h-8 bg-gradient-to-b from-neon-purple to-transparent mx-auto"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
