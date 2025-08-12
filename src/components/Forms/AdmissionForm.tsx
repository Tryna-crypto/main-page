import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { GraduationCap, User, Mail, Phone, Calendar, MapPin, FileText } from 'lucide-react';

const admissionSchema = z.object({
  // Student Information
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters'),
  dateOfBirth: z.string().min(1, 'Date of birth is required'),
  gender: z.string().min(1, 'Please select gender'),
  nationality: z.string().min(2, 'Nationality is required'),
  
  // Contact Information
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  address: z.string().min(10, 'Please enter complete address'),
  city: z.string().min(2, 'City is required'),
  country: z.string().min(2, 'Country is required'),
  
  // Parent/Guardian Information
  parentName: z.string().min(2, 'Parent/Guardian name is required'),
  parentEmail: z.string().email('Please enter a valid parent email'),
  parentPhone: z.string().min(10, 'Please enter valid parent phone number'),
  parentOccupation: z.string().min(2, 'Parent occupation is required'),
  
  // Academic Information
  previousSchool: z.string().min(2, 'Previous school name is required'),
  gradeApplying: z.string().min(1, 'Please select grade applying for'),
  previousGPA: z.string().optional(),
  
  // Additional Information
  extracurricular: z.string().optional(),
  specialNeeds: z.string().optional(),
  motivation: z.string().min(50, 'Please provide at least 50 characters explaining your motivation'),
});

type AdmissionFormData = z.infer<typeof admissionSchema>;

const AdmissionForm = () => {
  const form = useForm<AdmissionFormData>({
    resolver: zodResolver(admissionSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      dateOfBirth: '',
      gender: '',
      nationality: '',
      email: '',
      phone: '',
      address: '',
      city: '',
      country: '',
      parentName: '',
      parentEmail: '',
      parentPhone: '',
      parentOccupation: '',
      previousSchool: '',
      gradeApplying: '',
      previousGPA: '',
      extracurricular: '',
      specialNeeds: '',
      motivation: '',
    },
  });

  const onSubmit = (data: AdmissionFormData) => {
    console.log('Admission Application:', data);
    // Handle form submission here
  };

  return (
    <div className="min-h-screen py-8 sm:py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/10 to-secondary/10 backdrop-blur-sm relative">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-4 h-4 bg-neon-teal/20 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-6 h-6 bg-neon-green/15 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 left-40 w-3 h-3 bg-neon-cyan/25 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 right-40 w-2 h-2 bg-neon-aqua/30 rounded-full animate-float" style={{ animationDelay: '0.5s' }}></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <Card className="glass-effect border-0 shadow-elegant rounded-2xl">
          <CardHeader className="text-center pb-4 sm:pb-6">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-glow">
              <GraduationCap className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
            </div>
            <CardTitle className="text-2xl sm:text-3xl font-bold text-foreground">Admission Application</CardTitle>
            <p className="text-muted-foreground mt-2 text-sm sm:text-base">Join the PISES family - Start your application today</p>
          </CardHeader>
          
          <CardContent className="p-4 sm:p-6 pt-0">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 sm:space-y-8">
                
                {/* Student Information Section */}
                <div className="space-y-4 sm:space-y-6">
                  <div className="flex items-center space-x-2 pb-2 border-b border-primary/30">
                    <User className="w-5 h-5 text-primary" />
                    <h3 className="text-lg sm:text-xl font-semibold text-foreground">Student Information</h3>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-medium">First Name *</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Enter first name" 
                              className="rounded-xl border-primary/30 glass-effect text-sm sm:text-base h-10 sm:h-12 focus:border-primary focus:shadow-glow"
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-medium">Last Name *</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Enter last name" 
                              className="rounded-xl border-primary/30 glass-effect text-sm sm:text-base h-10 sm:h-12 focus:border-primary focus:shadow-glow"
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <FormField
                      control={form.control}
                      name="dateOfBirth"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-medium">Date of Birth *</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                              <Input 
                                type="date"
                                className="rounded-xl border-primary/30 glass-effect pl-10 text-sm sm:text-base h-10 sm:h-12 focus:border-primary focus:shadow-glow"
                                {...field} 
                              />
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="gender"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-medium">Gender *</FormLabel>
                          <FormControl>
                            <select 
                              className="flex h-10 sm:h-12 w-full rounded-xl border border-primary/30 bg-transparent px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 glass-effect focus:border-primary focus:shadow-glow"
                              {...field}
                            >
                              <option value="">Select Gender</option>
                              <option value="male">Male</option>
                              <option value="female">Female</option>
                              <option value="other">Other</option>
                            </select>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="nationality"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-medium">Nationality *</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Enter nationality" 
                              className="rounded-xl border-primary/30 glass-effect text-sm sm:text-base h-10 sm:h-12 focus:border-primary focus:shadow-glow"
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                {/* Contact Information Section */}
                <div className="space-y-4 sm:space-y-6">
                  <div className="flex items-center space-x-2 pb-2 border-b border-primary/30">
                    <Mail className="w-5 h-5 text-primary" />
                    <h3 className="text-lg sm:text-xl font-semibold text-foreground">Contact Information</h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-medium">Email Address *</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                              <Input 
                                type="email"
                                placeholder="Enter email address" 
                                className="rounded-xl border-primary/30 glass-effect pl-10 text-sm sm:text-base h-10 sm:h-12 focus:border-primary focus:shadow-glow"
                                {...field} 
                              />
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-medium">Phone Number *</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                              <Input 
                                type="tel"
                                placeholder="Enter phone number" 
                                className="rounded-xl border-primary/30 glass-effect pl-10 text-sm sm:text-base h-10 sm:h-12 focus:border-primary focus:shadow-glow"
                                {...field} 
                              />
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="address"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium">Address *</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <MapPin className="absolute left-3 top-3 text-muted-foreground w-4 h-4" />
                            <Textarea 
                              placeholder="Enter complete address" 
                              className="rounded-xl border-primary/30 glass-effect pl-10 text-sm sm:text-base min-h-[80px] focus:border-primary focus:shadow-glow"
                              {...field} 
                            />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="city"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-medium">City *</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Enter city" 
                              className="rounded-xl border-primary/30 glass-effect text-sm sm:text-base h-10 sm:h-12 focus:border-primary focus:shadow-glow"
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="country"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-medium">Country *</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Enter country" 
                              className="rounded-xl border-primary/30 glass-effect text-sm sm:text-base h-10 sm:h-12 focus:border-primary focus:shadow-glow"
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                {/* Parent/Guardian Information */}
                <div className="space-y-4 sm:space-y-6">
                  <div className="flex items-center space-x-2 pb-2 border-b border-primary/30">
                    <User className="w-5 h-5 text-primary" />
                    <h3 className="text-lg sm:text-xl font-semibold text-foreground">Parent/Guardian Information</h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="parentName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-medium">Parent/Guardian Name *</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Enter parent/guardian name" 
                              className="rounded-xl border-primary/30 glass-effect text-sm sm:text-base h-10 sm:h-12 focus:border-primary focus:shadow-glow"
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="parentOccupation"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-medium">Occupation *</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Enter occupation" 
                              className="rounded-xl border-primary/30 glass-effect text-sm sm:text-base h-10 sm:h-12 focus:border-primary focus:shadow-glow"
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="parentEmail"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-medium">Parent Email *</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                              <Input 
                                type="email"
                                placeholder="Enter parent email" 
                                className="rounded-xl border-primary/30 glass-effect pl-10 text-sm sm:text-base h-10 sm:h-12 focus:border-primary focus:shadow-glow"
                                {...field} 
                              />
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="parentPhone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-medium">Parent Phone *</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                              <Input 
                                type="tel"
                                placeholder="Enter parent phone" 
                                className="rounded-xl border-primary/30 glass-effect pl-10 text-sm sm:text-base h-10 sm:h-12 focus:border-primary focus:shadow-glow"
                                {...field} 
                              />
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                {/* Academic Information */}
                <div className="space-y-4 sm:space-y-6">
                  <div className="flex items-center space-x-2 pb-2 border-b border-primary/30">
                    <GraduationCap className="w-5 h-5 text-primary" />
                    <h3 className="text-lg sm:text-xl font-semibold text-foreground">Academic Information</h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="previousSchool"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-medium">Previous School *</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Enter previous school name" 
                              className="rounded-xl border-primary/30 glass-effect text-sm sm:text-base h-10 sm:h-12 focus:border-primary focus:shadow-glow"
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="gradeApplying"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-medium">Grade Applying For *</FormLabel>
                          <FormControl>
                            <select 
                              className="flex h-10 sm:h-12 w-full rounded-xl border border-primary/30 bg-transparent px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 glass-effect focus:border-primary focus:shadow-glow"
                              {...field}
                            >
                              <option value="">Select Grade</option>
                              <option value="grade-1">Grade 1</option>
                              <option value="grade-2">Grade 2</option>
                              <option value="grade-3">Grade 3</option>
                              <option value="grade-4">Grade 4</option>
                              <option value="grade-5">Grade 5</option>
                              <option value="grade-6">Grade 6</option>
                              <option value="grade-7">Grade 7</option>
                              <option value="grade-8">Grade 8</option>
                              <option value="grade-9">Grade 9</option>
                              <option value="grade-10">Grade 10</option>
                              <option value="grade-11">Grade 11</option>
                              <option value="grade-12">Grade 12</option>
                            </select>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="previousGPA"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium">Previous GPA/Grades (Optional)</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Enter previous GPA or grade average" 
                            className="rounded-xl border-primary/30 glass-effect text-sm sm:text-base h-10 sm:h-12 focus:border-primary focus:shadow-glow"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Additional Information */}
                <div className="space-y-4 sm:space-y-6">
                  <div className="flex items-center space-x-2 pb-2 border-b border-primary/30">
                    <FileText className="w-5 h-5 text-primary" />
                    <h3 className="text-lg sm:text-xl font-semibold text-foreground">Additional Information</h3>
                  </div>

                  <FormField
                    control={form.control}
                    name="extracurricular"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium">Extracurricular Activities (Optional)</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="List any sports, clubs, hobbies, or activities you participate in" 
                            className="rounded-xl border-primary/30 glass-effect text-sm sm:text-base min-h-[80px] focus:border-primary focus:shadow-glow"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="specialNeeds"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium">Special Needs or Accommodations (Optional)</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Please describe any special needs, learning accommodations, or medical conditions we should be aware of" 
                            className="rounded-xl border-primary/30 glass-effect text-sm sm:text-base min-h-[80px] focus:border-primary focus:shadow-glow"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="motivation"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium">Why do you want to join PISES? *</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Please tell us why you want to join PISES and what you hope to achieve here (minimum 50 characters)" 
                            className="rounded-xl border-primary/30 glass-effect text-sm sm:text-base min-h-[120px] focus:border-primary focus:shadow-glow"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full btn-primary text-base sm:text-lg py-4 sm:py-6 h-auto rounded-xl hover:shadow-glow transition-all duration-300 hover:scale-105"
                >
                  Submit Application
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdmissionForm;
