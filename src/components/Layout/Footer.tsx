
import React from 'react';
import { GraduationCap, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const quickLinks = [
    { label: 'About', value: 'about' },
    { label: 'Admissions', value: 'admissions' },
    { label: 'Academics', value: 'academics' },
    { label: 'Student Life', value: 'student-life' }
  ];

  const services = [
    { label: 'Parent Portal', value: 'parent-portal' },
    { label: 'Credit System', value: 'credit-system' },
    { label: 'Contact', value: 'contact' },
    { label: 'Support', value: 'contact' }
  ];

  return (
    <footer className="relative mt-20 bg-card border-t border-border">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="md:col-span-2 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center shadow-glow">
                <GraduationCap className="w-7 h-7 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground">PISES</h3>
                <p className="text-muted-foreground">Pakistan International School</p>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed max-w-md">
              Empowering minds and shaping futures through excellence in education. 
              Join our community of learners where academic achievement meets character development.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                <div key={index} className="w-10 h-10 modern-card bg-muted/50 rounded-xl flex items-center justify-center hover:bg-primary/20 hover:border-primary/30 transition-all duration-300 cursor-pointer group">
                  <Icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-foreground">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.value}>
                  <button
                    onClick={() => onNavigate(link.value)}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:translate-x-1 transform"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-foreground">Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.value}>
                  <button
                    onClick={() => onNavigate(service.value)}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:translate-x-1 transform"
                  >
                    {service.label}
                  </button>
                </li>
              ))}
            </ul>
            
            {/* Contact Info */}
            <div className="mt-8 space-y-3">
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-sm">info@pises.edu.pk</span>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Phone className="w-4 h-4 text-primary" />
                <span className="text-sm">+92 300 1234567</span>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-sm">Islamabad, Pakistan</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-muted-foreground text-sm">
            © 2024 PISES. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <button className="text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </button>
            <button className="text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
