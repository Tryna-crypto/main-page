
import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, GraduationCap } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
  currentPage: string;
  onNavigate: (page: string) => void;
}

const Header: React.FC<HeaderProps> = ({ darkMode, toggleDarkMode, currentPage, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (mobileMenuOpen && !target.closest('.mobile-menu') && !target.closest('.mobile-menu-button')) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [mobileMenuOpen]);

  // Prevent body scroll when mobile menu is open
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
      <header className="fixed top-0 left-0 right-0 z-50 glass-header">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div 
              className="flex items-center space-x-4 cursor-pointer group"
              onClick={() => handleNavClick('home')}
            >
              <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center group-hover:shadow-glow transition-all duration-400 group-hover:scale-110">
                <GraduationCap className="w-7 h-7 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-foreground">PISES</h1>
                <p className="text-sm text-muted-foreground hidden sm:block">Pakistan International School</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-2">
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

            {/* Theme Toggle & Mobile Menu */}
            <div className="flex items-center space-x-3">
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleDarkMode}
                className="w-12 h-12 glass-effect rounded-2xl transition-all duration-400 hover:scale-110 hover:shadow-glow"
              >
                {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </Button>

              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden w-12 h-12 glass-effect rounded-2xl transition-all duration-400 hover:scale-110 hover:shadow-glow mobile-menu-button"
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
          className="fixed inset-0 bg-background/60 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Menu */}
      <div className={`mobile-menu lg:hidden ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="flex flex-col h-full">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between p-6 border-b border-border/20">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-foreground">PISES</h2>
                <p className="text-xs text-muted-foreground">Menu</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="w-10 h-10 glass-effect rounded-xl"
              onClick={() => setMobileMenuOpen(false)}
            >
              <X className="w-5 h-5" />
            </Button>
          </div>

          {/* Mobile Navigation */}
          <nav className="flex-1 p-6 space-y-3">
            {navItems.map((item) => (
              <button
                key={item.value}
                onClick={() => handleNavClick(item.value)}
                className={`w-full text-left p-4 rounded-2xl transition-all duration-400 glass-effect hover:scale-[1.02] ${
                  currentPage === item.value 
                    ? 'bg-primary text-primary-foreground shadow-glow font-semibold' 
                    : 'text-foreground hover:bg-gradient-primary hover:shadow-card'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Footer */}
          <div className="p-6 border-t border-border/20">
            <div className="glass-effect p-4 rounded-2xl text-center">
              <p className="text-sm text-muted-foreground mb-2">Switch Theme</p>
              <Button
                onClick={toggleDarkMode}
                className="w-full glass-effect rounded-xl hover:scale-105 transition-all duration-400"
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
