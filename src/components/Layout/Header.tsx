
import React, { useState } from 'react';
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

  return (
    <header className="fixed top-0 left-0 right-0 z-50 modern-header">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div 
            className="flex items-center space-x-3 cursor-pointer group"
            onClick={() => handleNavClick('home')}
          >
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center group-hover:shadow-glow transition-all duration-300 group-hover:scale-105">
              <GraduationCap className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">PISES</h1>
              <p className="text-xs text-muted-foreground">Pakistan International School</p>
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
          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleDarkMode}
              className="w-9 h-9 hover:bg-muted rounded-lg transition-all duration-300"
            >
              {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden w-9 h-9 hover:bg-muted rounded-lg transition-all duration-300"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu lg:hidden ${mobileMenuOpen ? 'open' : ''}`}>
        <nav className="flex flex-col p-6 space-y-2">
          {navItems.map((item) => (
            <button
              key={item.value}
              onClick={() => handleNavClick(item.value)}
              className={`text-left p-4 rounded-xl transition-all duration-300 ${
                currentPage === item.value 
                  ? 'bg-primary text-primary-foreground shadow-glow' 
                  : 'text-foreground hover:bg-muted hover:text-primary'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
