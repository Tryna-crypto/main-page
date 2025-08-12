import React, { useState, useEffect } from 'react';
import { GraduationCap, BookOpen, Users, Award } from 'lucide-react';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [currentStage, setCurrentStage] = useState(0);

  const stages = [
    { icon: GraduationCap, text: 'Initializing PISES System', duration: 1000 },
    { icon: BookOpen, text: 'Loading Academic Resources', duration: 800 },
    { icon: Users, text: 'Connecting Student Portal', duration: 600 },
    { icon: Award, text: 'Ready to Learn!', duration: 400 }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onLoadingComplete, 300);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  useEffect(() => {
    const stageProgress = progress / 25;
    const newStage = Math.min(Math.floor(stageProgress), stages.length - 1);
    setCurrentStage(newStage);
  }, [progress, stages.length]);

  const CurrentIcon = stages[currentStage]?.icon || GraduationCap;

  return (
    <div className="fixed inset-0 bg-gradient-hero flex items-center justify-center z-50">
      <div className="text-center space-y-8 px-6">
        {/* Animated Logo */}
        <div className="relative">
          <div className="w-24 h-24 bg-white/10 rounded-2xl flex items-center justify-center mx-auto animate-bounce-in">
            <CurrentIcon className="w-12 h-12 text-white animate-glow" />
          </div>
          <div className="absolute -inset-4 bg-white/5 rounded-3xl animate-pulse"></div>
        </div>

        {/* School Name */}
        <div className="space-y-2">
          <h1 className="text-4xl md:text-5xl font-bold text-white animate-fade-in">
            PISES
          </h1>
          <p className="text-xl text-white/80 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Pakistan International School
          </p>
          <p className="text-lg text-white/60 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            English Section
          </p>
        </div>

        {/* Loading Stage */}
        <div className="space-y-4 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <p className="text-white/90 text-lg font-medium">
            {stages[currentStage]?.text}
          </p>
          
          {/* Progress Bar */}
          <div className="w-80 max-w-full mx-auto">
            <div className="loading-bar h-2" style={{ '--progress': `${progress}%` } as React.CSSProperties}>
            </div>
            <div className="flex justify-between text-sm text-white/60 mt-2">
              <span>0%</span>
              <span>{Math.round(progress)}%</span>
              <span>100%</span>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/20 rounded-full animate-float"></div>
          <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-white/15 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-white/25 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-1/4 right-1/3 w-1 h-1 bg-white/30 rounded-full animate-float" style={{ animationDelay: '0.5s' }}></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;