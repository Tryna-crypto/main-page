
import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, GraduationCap, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
  currentPage: string;
  onNavigate: (page: string) => void;
}

const Header: React.FC<HeaderProps> = ({ darkMode, toggleDarkMode, currentPage, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { label: 'Home', value: 'home' },
    { label: 'About', value: 'about' },
    { label: 'Admissions', value: 'admissions' },
    { label: 'Academics', value: 'academics' },
    { label: 'Student Life', value: 'student-life' },
    { label: 'Parent Portal', value: 'parent-portal' },
    { label: 'Credit System', value: 'credit-system' },
    { label: 'Contact', value: 'contact' }
  ];

  const handleNavClick = (page: string) => {
    onNavigate(page);
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header className={`nav-glass transition-all duration-300 ${scrolled ? 'py-3' : 'py-4'}`}>
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Futuristic Logo */}
            <div 
              className="flex items-center space-x-4 cursor-pointer group"
              onClick={() => handleNavClick('home')}
            >
              <div className="relative">
                <div className="w-14 h-14 bg-gradient-to-r from-neon-purple to-neon-pink rounded-2xl flex items-center justify-center group-hover:neon-glow transition-all duration-300 group-hover:scale-110">
                  <GraduationCap className="w-8 h-8 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-neon-cyan rounded-full animate-neon-pulse"></div>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gradient">PISES</h1>
                <p className="text-xs text-muted-foreground font-mono hidden sm:block">Pakistan International School</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <button
                  key={item.value}
                  onClick={() => handleNavClick(item.value)}
                  className={`nav-link ${currentPage === item.value ? 'active' : ''}`}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Controls */}
            <div className="flex items-center space-x-3">
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleDarkMode}
                className="w-12 h-12 glass-card rounded-xl transition-all duration-300 hover:scale-110 hover:neon-border"
              >
                {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden w-12 h-12 glass-card rounded-xl transition-all duration-300 hover:scale-110 hover:neon-border"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-background/30 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Futuristic Mobile Menu */}
      <div className={`mobile-menu lg:hidden ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="flex flex-col h-full">
          {/* Mobile Header */}
          <div className="flex items-center justify-between p-6 border-b border-border/20">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-r from-neon-purple to-neon-pink rounded-xl flex items-center justify-center">
                <GraduationCap className="w-7 h-7 text-white" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-gradient">PISES</h2>
                <p className="text-xs text-muted-foreground font-mono">Navigation</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="w-10 h-10 glass-card rounded-xl"
              onClick={() => setMobileMenuOpen(false)}
            >
              <X className="w-5 h-5" />
            </Button>
          </div>

          {/* Mobile Navigation */}
          <nav className="flex-1 p-6 space-y-3">
            {navItems.map((item, index) => (
              <button
                key={item.value}
                onClick={() => handleNavClick(item.value)}
                className={`w-full text-left p-4 rounded-2xl transition-all duration-300 glass-card hover:scale-[1.02] hover:neon-border relative overflow-hidden ${
                  currentPage === item.value 
                    ? 'bg-gradient-to-r from-neon-purple/20 to-neon-pink/20 border-neon-purple/50 text-primary font-semibold neon-glow' 
                    : 'text-foreground hover:text-primary'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative z-10 flex items-center">
                  <Zap className="w-4 h-4 mr-3 opacity-60" />
                  {item.label}
                </div>
                {currentPage === item.value && (
                  <div className="absolute inset-0 bg-gradient-to-r from-neon-purple/10 to-neon-pink/10 animate-neon-pulse"></div>
                )}
              </button>
            ))}
          </nav>

          {/* Mobile Footer */}
          <div className="p-6 border-t border-border/20">
            <div className="glass-card p-4 rounded-2xl text-center">
              <p className="text-sm text-muted-foreground mb-3 font-mono">Switch Theme</p>
              <Button
                onClick={toggleDarkMode}
                className="w-full btn-glass hover:neon-border"
                variant="outline"
              >
                {darkMode ? (
                  <>
                    <Sun className="w-4 h-4 mr-2" />
                    Light Mode
                  </>
                ) : (
                  <>
                    <Moon className="w-4 h-4 mr-2" />
                    Dark Mode
                  </>
                )}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
