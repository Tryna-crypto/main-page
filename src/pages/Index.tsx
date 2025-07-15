
import React, { useState, useEffect } from 'react';
import LoadingScreen from '@/components/Layout/LoadingScreen';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import AdmissionsPage from './AdmissionsPage';
import AcademicsPage from './AcademicsPage';
import StudentLifePage from './StudentLifePage';
import ParentPortalPage from './ParentPortalPage';
import CreditSystemPage from './CreditSystemPage';
import ContactPage from './ContactPage';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState('home');
  const [darkMode, setDarkMode] = useState(true); // Default to dark theme

  useEffect(() => {
    // Set dark theme as default
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      setDarkMode(false);
      document.documentElement.classList.remove('dark');
    } else {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(prev => {
      const newMode = !prev;
      if (newMode) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
      return newMode;
    });
  };

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={handleNavigate} />;
      case 'about':
        return <AboutPage />;
      case 'admissions':
        return <AdmissionsPage />;
      case 'academics':
        return <AcademicsPage />;
      case 'student-life':
        return <StudentLifePage />;
      case 'parent-portal':
        return <ParentPortalPage />;
      case 'credit-system':
        return <CreditSystemPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  if (isLoading) {
    return <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Header 
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        currentPage={currentPage}
        onNavigate={handleNavigate}
      />
      <main className="animate-fade-in">
        {renderPage()}
      </main>
      <Footer onNavigate={handleNavigate} />
    </div>
  );
};

export default Index;
