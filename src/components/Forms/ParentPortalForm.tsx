import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { User, Mail, Phone, Key, Eye, EyeOff, Zap, Shield, Star } from 'lucide-react';

const parentPortalSchema = z.object({
  studentId: z.string().min(1, 'Student ID is required'),
  registrationCode: z.string().min(6, 'Registration code must be at least 6 characters'),
  parentName: z.string().min(2, 'Parent name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
  confirmPassword: z.string().min(8, 'Please confirm your password'),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

const signInSchema = z.object({
  studentId: z.string().min(1, 'Student ID is required'),
  password: z.string().min(1, 'Password is required'),
});

type ParentPortalFormData = z.infer<typeof parentPortalSchema>;
type SignInFormData = z.infer<typeof signInSchema>;

interface ParentPortalFormProps {
  onSignIn?: (studentId: string) => void;
}

const ParentPortalForm: React.FC<ParentPortalFormProps> = ({ onSignIn }) => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);
  const [isSignInMode, setIsSignInMode] = React.useState(true);
  const [signInError, setSignInError] = React.useState('');

  const form = useForm<ParentPortalFormData>({
    resolver: zodResolver(parentPortalSchema),
    defaultValues: {
      studentId: '',
      registrationCode: '',
      parentName: '',
      email: '',
      phone: '',
      password: '',
      confirmPassword: '',
    },
  });

  const signInForm = useForm<SignInFormData>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      studentId: '',
      password: '',
    },
  });

  const onSubmit = (data: ParentPortalFormData) => {
    console.log('Parent Portal Registration:', data);
    // Handle form submission here
  };

  const onSignInSubmit = (data: SignInFormData) => {
    console.log('Sign in attempt:', data);
    setSignInError('');
    
    // Check credentials
    if (data.studentId === '22G149' && data.password === 'password123') {
      console.log('Sign in successful for:', data.studentId);
      onSignIn?.(data.studentId);
    } else {
      console.log('Invalid credentials');
      setSignInError('Invalid Student ID or Password');
    }
  };

  if (isSignInMode) {
    return (
      <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gradient-hero relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-80 h-80 bg-emerald/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        </div>

        <Card className="relative w-full max-w-lg glass-effect border-0 shadow-elegant rounded-4xl overflow-hidden">
          <div className="h-2 bg-gradient-to-r from-emerald to-cyan"></div>
          
          <CardHeader className="text-center p-8 bg-gradient-to-br from-emerald/5 to-cyan/5">
            <div className="w-20 h-20 bg-gradient-to-r from-emerald to-teal rounded-3xl flex items-center justify-center mx-auto mb-6 animate-glow">
              <User className="w-10 h-10 text-white" />
            </div>
            
            <CardTitle className="text-3xl font-bold text-foreground mb-4">
              Parent <span className="text-gradient">Portal</span>
            </CardTitle>
            
            <p className="text-muted-foreground">
              Access your personalized dashboard
            </p>
          </CardHeader>
          
          <CardContent className="p-8">
            <Form {...signInForm}>
              <form onSubmit={signInForm.handleSubmit(onSignInSubmit)} className="space-y-6">
                <FormField
                  control={signInForm.control}
                  name="studentId"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-base font-medium text-foreground">Student ID</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="22G149" 
                          className="glass-effect border-0 rounded-2xl h-14 text-base focus:ring-2 focus:ring-emerald/50"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={signInForm.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-base font-medium text-foreground">Password</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Input 
                            type={showPassword ? "text" : "password"}
                            placeholder="password123" 
                            className="glass-effect border-0 rounded-2xl h-14 pr-12 text-base focus:ring-2 focus:ring-emerald/50"
                            {...field} 
                          />
                          <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                          >
                            {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                          </button>
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {signInError && (
                  <div className="glass-effect rounded-2xl p-4 border border-destructive/20 bg-destructive/10">
                    <p className="text-destructive text-sm text-center">{signInError}</p>
                  </div>
                )}

                <Button 
                  type="submit" 
                  className="w-full btn-primary text-lg py-4 h-auto rounded-2xl hover:shadow-glow transition-all duration-300 hover:scale-105"
                >
                  <Shield className="w-5 h-5 mr-2" />
                  Sign In
                </Button>
              </form>
            </Form>

            <div className="mt-8 text-center">
              <p className="text-sm text-muted-foreground">
                Don't have an account?{' '}
                <button 
                  onClick={() => setIsSignInMode(false)}
                  className="text-emerald hover:text-teal font-medium transition-colors"
                >
                  Create Account
                </button>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gradient-hero relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-emerald/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-cyan/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <Card className="relative w-full max-w-2xl glass-effect border-0 shadow-elegant rounded-4xl overflow-hidden">
        <div className="h-2 bg-gradient-to-r from-emerald via-teal to-cyan"></div>
        
        <CardHeader className="text-center p-8 bg-gradient-to-br from-emerald/5 to-cyan/5">
          <div className="w-20 h-20 bg-gradient-to-r from-emerald to-teal rounded-3xl flex items-center justify-center mx-auto mb-6 animate-glow">
            <User className="w-10 h-10 text-white" />
          </div>
          
          <CardTitle className="text-3xl font-bold text-foreground mb-4">
            Create Parent <span className="text-gradient">Account</span>
          </CardTitle>
          
          <p className="text-muted-foreground">
            Set up your parent portal access
          </p>
        </CardHeader>
        
        <CardContent className="p-8">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              
              {/* Account Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="studentId"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-base font-medium text-foreground">Student ID</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Enter student ID" 
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
                  name="registrationCode"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-base font-medium text-foreground">Registration Code</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Key className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                          <Input 
                            placeholder="Enter code" 
                            className="glass-effect border-0 rounded-2xl h-14 pl-12 text-base focus:ring-2 focus:ring-emerald/50"
                            {...field} 
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* Personal Information */}
              <FormField
                control={form.control}
                name="parentName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-base font-medium text-foreground">Parent/Guardian Name</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                        <Input 
                          placeholder="Enter your full name" 
                          className="glass-effect border-0 rounded-2xl h-14 pl-12 text-base focus:ring-2 focus:ring-teal/50"
                          {...field} 
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Contact Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-base font-medium text-foreground">Email Address</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                          <Input 
                            type="email" 
                            placeholder="Enter email" 
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
                      <FormLabel className="text-base font-medium text-foreground">Phone Number</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                          <Input 
                            type="tel" 
                            placeholder="Enter phone" 
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

              {/* Password Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-base font-medium text-foreground">Password</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Input 
                            type={showPassword ? "text" : "password"}
                            placeholder="Create password" 
                            className="glass-effect border-0 rounded-2xl h-14 pr-12 text-base focus:ring-2 focus:ring-cyan/50"
                            {...field} 
                          />
                          <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                          >
                            {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                          </button>
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="confirmPassword"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-base font-medium text-foreground">Confirm Password</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Input 
                            type={showConfirmPassword ? "text" : "password"}
                            placeholder="Confirm password" 
                            className="glass-effect border-0 rounded-2xl h-14 pr-12 text-base focus:ring-2 focus:ring-cyan/50"
                            {...field} 
                          />
                          <button
                            type="button"
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                          >
                            {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                          </button>
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <Button 
                type="submit" 
                className="w-full btn-primary text-lg py-4 h-auto rounded-2xl hover:shadow-glow transition-all duration-300 hover:scale-105"
              >
                <Star className="w-5 h-5 mr-2" />
                Create Account
              </Button>
            </form>
          </Form>

          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground">
              Already have an account?{' '}
              <button 
                onClick={() => setIsSignInMode(true)}
                className="text-emerald hover:text-teal font-medium transition-colors"
              >
                Sign In
              </button>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ParentPortalForm;
