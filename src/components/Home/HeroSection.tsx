
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeroSectionProps {
  onNavigate: (page: string) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [hasScrolled, setHasScrolled] = useState(false);

  const slides = [
    {
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
      title: 'Excellence in Education',
      subtitle: 'Empowering minds, shaping futures at PISES',
      description: 'Join our community of learners where academic excellence meets character development.',
      cta: 'Discover More'
    },
    {
      image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
      title: 'Global Perspectives',
      subtitle: 'Preparing students for tomorrow\'s world',
      description: 'Our international curriculum prepares students for success in a globalized world.',
      cta: 'Learn About Academics'
    },
    {
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
      title: 'Innovation & Technology',
      subtitle: 'Modern learning for the digital age',
      description: 'State-of-the-art facilities and cutting-edge technology enhance every learning experience.',
      cta: 'Take a Virtual Tour'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setHasScrolled(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`hero-slide absolute inset-0 transition-all duration-1000 ${
            index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          }`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          {/* Modern glassmorphism overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/60 to-background/40"></div>
          
          <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
            <div className="max-w-4xl text-foreground space-y-4 sm:space-y-6">
              {/* Modern glassmorphism content container */}
              <div className="glass-container animate-fade-in">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-3 sm:mb-4 animate-slide-in-left text-foreground">
                  {slide.title}
                </h1>
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium text-muted-foreground mb-4 sm:mb-6 animate-slide-in-right">
                  {slide.subtitle}
                </h2>
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl leading-relaxed mb-6 sm:mb-8 animate-fade-in">
                  {slide.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 animate-bounce-in">
                  <Button 
                    size="lg" 
                    className="btn-primary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 h-auto w-full sm:w-auto"
                    onClick={() => onNavigate('admissions')}
                  >
                    Apply Now
                    <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="btn-outline text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 h-auto w-full sm:w-auto"
                    onClick={() => onNavigate('parent-portal')}
                  >
                    Parent Portal
                    <Play className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Modern Glassmorphism Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 sm:w-16 sm:h-16 glass-effect flex items-center justify-center text-foreground transition-all duration-400 hover:scale-110 hover:shadow-glow rounded-3xl"
      >
        <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 sm:w-16 sm:h-16 glass-effect flex items-center justify-center text-foreground transition-all duration-400 hover:scale-110 hover:shadow-glow rounded-3xl"
      >
        <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
      </button>

      {/* Modern Glassmorphism Slide Indicators */}
      <div className="absolute bottom-16 sm:bottom-20 left-1/2 -translate-x-1/2 z-20 flex space-x-3 sm:space-x-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-all duration-400 ${
              index === currentSlide 
                ? 'bg-primary scale-125 shadow-glow' 
                : 'bg-muted-foreground hover:bg-primary/75 hover:scale-110'
            }`}
          />
        ))}
      </div>

      {/* Modern Glassmorphism Scroll Indicator */}
      {!hasScrolled && (
        <div className="absolute bottom-6 sm:bottom-8 right-6 sm:right-8 z-20 text-muted-foreground text-xs sm:text-sm animate-bounce">
          <div className="flex flex-col items-center space-y-2 glass-container p-3 sm:p-4 rounded-3xl">
            <span>Scroll</span>
            <div className="w-px h-6 sm:h-8 bg-muted-foreground"></div>
          </div>
        </div>
      )}
    </section>
  );
};

export default HeroSection;
