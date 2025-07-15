
import React from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle, Send, User, Calendar } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ContactPage = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Address',
      details: ['Pakistan International School of Excellence & Sciences', 'Sector G-10/4, Islamabad', 'Pakistan - 44000']
    },
    {
      icon: Phone,
      title: 'Phone Numbers',
      details: ['+92 51 2345678', '+92 300 1234567', '+92 321 9876543']
    },
    {
      icon: Mail,
      title: 'Email Addresses',
      details: ['info@pises.edu.pk', 'admissions@pises.edu.pk', 'support@pises.edu.pk']
    },
    {
      icon: Clock,
      title: 'Office Hours',
      details: ['Monday - Friday: 8:00 AM - 4:00 PM', 'Saturday: 9:00 AM - 1:00 PM', 'Sunday: Closed']
    }
  ];

  const departments = [
    {
      icon: User,
      title: 'Admissions Office',
      description: 'Information about enrollment, applications, and school tours',
      contact: 'admissions@pises.edu.pk',
      phone: '+92 51 2345679'
    },
    {
      icon: MessageCircle,
      title: 'Academic Affairs',
      description: 'Questions about curriculum, academic programs, and student progress',
      contact: 'academics@pises.edu.pk',
      phone: '+92 51 2345680'
    },
    {
      icon: Calendar,
      title: 'Student Services',
      description: 'Support for current students and extracurricular activities',
      contact: 'students@pises.edu.pk',
      phone: '+92 51 2345681'
    },
    {
      icon: Send,
      title: 'General Inquiries',
      description: 'General questions and information requests',
      contact: 'info@pises.edu.pk',
      phone: '+92 51 2345678'
    }
  ];

  return (
    <div className="min-h-screen pt-20 animate-fade-in">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-hero">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/10 backdrop-blur-sm"></div>
        <div className="relative container mx-auto px-6 text-center text-white">
          <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mx-auto mb-6 animate-bounce-in">
            <MessageCircle className="w-10 h-10" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-slide-in-left">
            Contact Us
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto animate-slide-in-right">
            We're here to help. Reach out to us for any questions, information, or support you need.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Get In Touch
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Multiple ways to reach us. Choose the method that works best for you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="glass-effect border-0 shadow-elegant hover:shadow-hero transition-all duration-500 hover:-translate-y-2 animate-fade-in text-center rounded-2xl" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <info.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">{info.title}</h3>
                  <div className="space-y-2">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-muted-foreground text-sm leading-relaxed">
                        {detail}
                      </p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Department Contacts */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Department Contacts
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Connect directly with the right department for faster assistance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {departments.map((dept, index) => (
              <Card key={index} className="glass-effect border-0 shadow-elegant hover:shadow-hero transition-all duration-500 hover:-translate-y-2 animate-fade-in group rounded-2xl" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center group-hover:shadow-glow transition-all duration-300">
                      <dept.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">{dept.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {dept.description}
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-3">
                      <Mail className="w-4 h-4 text-primary" />
                      <span className="text-sm text-muted-foreground">{dept.contact}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="w-4 h-4 text-primary" />
                      <span className="text-sm text-muted-foreground">{dept.phone}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Send Us a Message
              </h2>
              <p className="text-xl text-muted-foreground">
                Have a specific question? Fill out the form below and we'll get back to you soon.
              </p>
            </div>

            <Card className="glass-effect border-0 shadow-elegant rounded-2xl animate-bounce-in">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Full Name</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-3 bg-background/50 border border-border/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Email Address</label>
                      <input 
                        type="email" 
                        className="w-full px-4 py-3 bg-background/50 border border-border/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Phone Number</label>
                      <input 
                        type="tel" 
                        className="w-full px-4 py-3 bg-background/50 border border-border/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300"
                        placeholder="Enter your phone number"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Subject</label>
                      <select className="w-full px-4 py-3 bg-background/50 border border-border/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300">
                        <option>General Inquiry</option>
                        <option>Admissions</option>
                        <option>Academic Programs</option>
                        <option>Student Services</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Message</label>
                    <textarea 
                      rows={6}
                      className="w-full px-4 py-3 bg-background/50 border border-border/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300 resize-none"
                      placeholder="Enter your message here..."
                    ></textarea>
                  </div>

                  <div className="text-center">
                    <Button size="lg" className="btn-primary text-lg px-8 py-4 h-auto">
                      <Send className="mr-2 w-5 h-5" />
                      Send Message
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Map & Visit */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center animate-bounce-in">
            <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
              <MapPin className="w-8 h-8 text-primary-foreground" />
            </div>
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Visit Our Campus
            </h2>
            <p className="text-xl text-muted-foreground mb-12">
              We welcome visitors to experience our beautiful campus and modern facilities. Schedule a tour today.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="glass-effect border-0 shadow-elegant rounded-2xl">
                <CardContent className="p-8 text-center">
                  <Calendar className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-4">Schedule a Tour</h3>
                  <p className="text-muted-foreground mb-6">Book a personalized campus tour with our admissions team.</p>
                  <Button className="btn-primary">Book Tour</Button>
                </CardContent>
              </Card>
              
              <Card className="glass-effect border-0 shadow-elegant rounded-2xl">
                <CardContent className="p-8 text-center">
                  <MapPin className="w-12 h-12 text-secondary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-4">Directions</h3>
                  <p className="text-muted-foreground mb-6">Get detailed directions to our campus location.</p>
                  <Button variant="outline" className="btn-outline">Get Directions</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
