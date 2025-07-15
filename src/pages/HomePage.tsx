import React from 'react';
import HeroSection from '@/components/Home/HeroSection';
import QuickAccessCards from '@/components/Home/QuickAccessCards';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <div className="animate-fade-in">
      <HeroSection onNavigate={onNavigate} />
      <QuickAccessCards onNavigate={onNavigate} />
    </div>
  );
};

export default HomePage;