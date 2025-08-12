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
import { GraduationCap, User, Mail, Phone, Calendar, MapPin, FileText, Zap, Star, Heart } from 'lucide-react';

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
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-gradient-hero relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-emerald/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-cyan/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative max-w-5xl mx-auto">
        <Card className="glass-effect border-0 shadow-elegant rounded-4xl overflow-hidden">
          {/* Header */}
          <div className="h-2 bg-gradient-to-r from-emerald via-teal to-cyan"></div>
          
          <CardHeader className="text-center p-12 bg-gradient-to-br from-emerald/5 to-cyan/5">
            <div className="w-24 h-24 bg-gradient-to-r from-emerald to-teal rounded-4xl flex items-center justify-center mx-auto mb-8 animate-glow">
              <GraduationCap className="w-12 h-12 text-white" />
            </div>
            
            <CardTitle className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
              Admission <span className="text-gradient">Application</span>
            </CardTitle>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Join the PISES family - Start your journey of excellence today
            </p>
          </CardHeader>
          
          <CardContent className="p-8 sm:p-12">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-12">
                
                {/* Student Information Section */}
                <div className="space-y-8">
                  <div className="flex items-center space-x-3 pb-4 border-b border-gradient">
                    <div className="w-12 h-12 bg-emerald rounded-2xl flex items-center justify-center">
                      <User className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-semibold text-foreground">Student Information</h3>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-base font-medium text-foreground">First Name *</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Enter first name" 
                              className="glass-effect border-0 rounded-2xl h-14 text-base focus:ring-2 focus:ring-emerald/50"
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
                          <FormLabel className="text-base font-medium text-foreground">Last Name *</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Enter last name" 
                              className="glass-effect border-0 rounded-2xl h-14 text-base focus:ring-2 focus:ring-emerald/50"
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    <FormField
                      control={form.control}
                      name="dateOfBirth"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-base font-medium text-foreground">Date of Birth *</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <Calendar className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                              <Input 
                                type="date"
                                className="glass-effect border-0 rounded-2xl h-14 pl-12 text-base focus:ring-2 focus:ring-emerald/50"
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
                          <FormLabel className="text-base font-medium text-foreground">Gender *</FormLabel>
                          <FormControl>
                            <select 
                              className="flex h-14 w-full rounded-2xl glass-effect border-0 px-4 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald/50 disabled:cursor-not-allowed disabled:opacity-50"
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
                          <FormLabel className="text-base font-medium text-foreground">Nationality *</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Enter nationality" 
                              className="glass-effect border-0 rounded-2xl h-14 text-base focus:ring-2 focus:ring-emerald/50"
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
                <div className="space-y-8">
                  <div className="flex items-center space-x-3 pb-4 border-b border-gradient">
                    <div className="w-12 h-12 bg-teal rounded-2xl flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-semibold text-foreground">Contact Information</h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-base font-medium text-foreground">Email Address *</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                              <Input 
                                type="email"
                                placeholder="Enter email address" 
                                className="glass-effect border-0 rounded-2xl h-14 pl-12 text-base focus:ring-2 focus:ring-teal/50"
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
                          <FormLabel className="text-base font-medium text-foreground">Phone Number *</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                              <Input 
                                type="tel"
                                placeholder="Enter phone number" 
                                className="glass-effect border-0 rounded-2xl h-14 pl-12 text-base focus:ring-2 focus:ring-teal/50"
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
                        <FormLabel className="text-base font-medium text-foreground">Address *</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <MapPin className="absolute left-4 top-4 text-muted-foreground w-5 h-5" />
                            <Textarea 
                              placeholder="Enter complete address" 
                              className="glass-effect border-0 rounded-2xl pl-12 text-base min-h-[100px] focus:ring-2 focus:ring-teal/50"
                              {...field} 
                            />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="city"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-base font-medium text-foreground">City *</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Enter city" 
                              className="glass-effect border-0 rounded-2xl h-14 text-base focus:ring-2 focus:ring-teal/50"
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
                          <FormLabel className="text-base font-medium text-foreground">Country *</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Enter country" 
                              className="glass-effect border-0 rounded-2xl h-14 text-base focus:ring-2 focus:ring-teal/50"
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
                <div className="space-y-8">
                  <div className="flex items-center space-x-3 pb-4 border-b border-gradient">
                    <div className="w-12 h-12 bg-emerald rounded-2xl flex items-center justify-center">
                      <User className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-semibold text-foreground">Parent/Guardian Information</h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="parentName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-base font-medium text-foreground">Parent/Guardian Name *</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Enter parent/guardian name" 
                              className="glass-effect border-0 rounded-2xl h-14 text-base focus:ring-2 focus:ring-emerald/50"
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
                          <FormLabel className="text-base font-medium text-foreground">Occupation *</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Enter occupation" 
                              className="glass-effect border-0 rounded-2xl h-14 text-base focus:ring-2 focus:ring-emerald/50"
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="parentEmail"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-base font-medium text-foreground">Parent Email *</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                              <Input 
                                type="email"
                                placeholder="Enter parent email" 
                                className="glass-effect border-0 rounded-2xl h-14 pl-12 text-base focus:ring-2 focus:ring-teal/50"
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
                          <FormLabel className="text-base font-medium text-foreground">Parent Phone *</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                              <Input 
                                type="tel"
                                placeholder="Enter parent phone" 
                                className="glass-effect border-0 rounded-2xl h-14 pl-12 text-base focus:ring-2 focus:ring-teal/50"
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
                <div className="space-y-8">
                  <div className="flex items-center space-x-3 pb-4 border-b border-gradient">
                    <div className="w-12 h-12 bg-teal rounded-2xl flex items-center justify-center">
                      <GraduationCap className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-semibold text-foreground">Academic Information</h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="previousSchool"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-base font-medium text-foreground">Previous School *</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Enter previous school name" 
                              className="glass-effect border-0 rounded-2xl h-14 text-base focus:ring-2 focus:ring-teal/50"
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
                          <FormLabel className="text-base font-medium text-foreground">Grade Applying For *</FormLabel>
                          <FormControl>
                            <select 
                              className="flex h-14 w-full rounded-2xl glass-effect border-0 px-4 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal/50 disabled:cursor-not-allowed disabled:opacity-50"
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
                        <FormLabel className="text-base font-medium text-foreground">Previous GPA/Grades (Optional)</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Enter previous GPA or grade average" 
                            className="glass-effect border-0 rounded-2xl h-14 text-base focus:ring-2 focus:ring-teal/50"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Additional Information */}
                <div className="space-y-8">
                  <div className="flex items-center space-x-3 pb-4 border-b border-gradient">
                    <div className="w-12 h-12 bg-emerald rounded-2xl flex items-center justify-center">
                      <FileText className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-semibold text-foreground">Additional Information</h3>
                  </div>

                  <FormField
                    control={form.control}
                    name="extracurricular"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-base font-medium text-foreground">Extracurricular Activities (Optional)</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="List any sports, clubs, hobbies, or activities you participate in" 
                            className="glass-effect border-0 rounded-2xl pl-12 text-base min-h-[100px] focus:ring-2 focus:ring-teal/50"
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
                        <FormLabel className="text-base font-medium text-foreground">Special Needs or Accommodations (Optional)</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Please describe any special needs, learning accommodations, or medical conditions we should be aware of" 
                            className="glass-effect border-0 rounded-2xl pl-12 text-base min-h-[100px] focus:ring-2 focus:ring-teal/50"
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
                        <FormLabel className="text-base font-medium text-foreground">Why do you want to join PISES? *</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Please tell us why you want to join PISES and what you hope to achieve here (minimum 50 characters)" 
                            className="glass-effect border-0 rounded-2xl pl-12 text-base min-h-[120px] focus:ring-2 focus:ring-teal/50"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="text-center pt-8">
                  <Button 
                    type="submit" 
                    className="btn-primary text-xl px-16 py-6 h-auto hover:shadow-glow transition-all duration-300 hover:scale-105 rounded-2xl"
                  >
                    <Zap className="w-6 h-6 mr-3" />
                    Submit Application
                  </Button>
                </div>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdmissionForm;
