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
import { User, Mail, Phone, Key, Eye, EyeOff } from 'lucide-react';

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
      <div className="min-h-screen flex items-center justify-center py-8 sm:py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/10 to-secondary/10 backdrop-blur-sm">
        <Card className="w-full max-w-md glass-effect border-0 shadow-elegant rounded-2xl">
          <CardHeader className="text-center pb-4 sm:pb-6">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
              <User className="w-8 h-8 sm:w-10 sm:h-10 text-primary-foreground" />
            </div>
            <CardTitle className="text-2xl sm:text-3xl font-bold text-foreground">Sign In</CardTitle>
            <p className="text-muted-foreground mt-2 text-sm sm:text-base">Access your parent portal</p>
          </CardHeader>
          
          <CardContent className="p-4 sm:p-6 pt-0">
            <Form {...signInForm}>
              <form onSubmit={signInForm.handleSubmit(onSignInSubmit)} className="space-y-4 sm:space-y-6">
                <FormField
                  control={signInForm.control}
                  name="studentId"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium">Student ID</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="22G149" 
                          className="rounded-xl border-input/50 glass-effect text-sm sm:text-base h-10 sm:h-12"
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
                      <FormLabel className="text-sm font-medium">Password</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Input 
                            type={showPassword ? "text" : "password"}
                            placeholder="password123" 
                            className="rounded-xl border-input/50 glass-effect pr-10 text-sm sm:text-base h-10 sm:h-12"
                            {...field} 
                          />
                          <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                          >
                            {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                          </button>
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {signInError && (
                  <p className="text-destructive text-sm text-center">{signInError}</p>
                )}

                <Button 
                  type="submit" 
                  className="w-full btn-primary text-base sm:text-lg py-3 sm:py-4 h-auto rounded-xl hover:shadow-glow transition-all duration-300 hover:scale-105"
                >
                  Sign In
                </Button>
              </form>
            </Form>

            <div className="mt-6 text-center">
              <p className="text-sm text-muted-foreground">
                Don't have an account?{' '}
                <button 
                  onClick={() => setIsSignInMode(false)}
                  className="text-primary hover:underline font-medium"
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
    <div className="min-h-screen flex items-center justify-center py-8 sm:py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/10 to-secondary/10 backdrop-blur-sm">
      <Card className="w-full max-w-md sm:max-w-lg glass-effect border-0 shadow-elegant rounded-2xl">
        <CardHeader className="text-center pb-4 sm:pb-6">
          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
            <User className="w-8 h-8 sm:w-10 sm:h-10 text-primary-foreground" />
          </div>
          <CardTitle className="text-2xl sm:text-3xl font-bold text-foreground">Create Parent Account</CardTitle>
          <p className="text-muted-foreground mt-2 text-sm sm:text-base">Set up your parent portal access</p>
        </CardHeader>
        
        <CardContent className="p-4 sm:p-6 pt-0">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="studentId"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium">Student ID</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Enter student ID" 
                          className="rounded-xl border-input/50 glass-effect text-sm sm:text-base h-10 sm:h-12"
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
                      <FormLabel className="text-sm font-medium">Registration Code</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Key className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                          <Input 
                            placeholder="Enter code" 
                            className="rounded-xl border-input/50 glass-effect pl-10 text-sm sm:text-base h-10 sm:h-12"
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
                name="parentName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium">Parent/Guardian Name</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                        <Input 
                          placeholder="Enter your full name" 
                          className="rounded-xl border-input/50 glass-effect pl-10 text-sm sm:text-base h-10 sm:h-12"
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
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium">Email Address</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                          <Input 
                            type="email" 
                            placeholder="Enter email" 
                            className="rounded-xl border-input/50 glass-effect pl-10 text-sm sm:text-base h-10 sm:h-12"
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
                      <FormLabel className="text-sm font-medium">Phone Number</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                          <Input 
                            type="tel" 
                            placeholder="Enter phone" 
                            className="rounded-xl border-input/50 glass-effect pl-10 text-sm sm:text-base h-10 sm:h-12"
                            {...field} 
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium">Password</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Input 
                            type={showPassword ? "text" : "password"}
                            placeholder="Create password" 
                            className="rounded-xl border-input/50 glass-effect pr-10 text-sm sm:text-base h-10 sm:h-12"
                            {...field} 
                          />
                          <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                          >
                            {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
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
                      <FormLabel className="text-sm font-medium">Confirm Password</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Input 
                            type={showConfirmPassword ? "text" : "password"}
                            placeholder="Confirm password" 
                            className="rounded-xl border-input/50 glass-effect pr-10 text-sm sm:text-base h-10 sm:h-12"
                            {...field} 
                          />
                          <button
                            type="button"
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                          >
                            {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
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
                className="w-full btn-primary text-base sm:text-lg py-3 sm:py-4 h-auto rounded-xl hover:shadow-glow transition-all duration-300 hover:scale-105"
              >
                Create Account
              </Button>
            </form>
          </Form>

          <div className="mt-6 text-center">
            <p className="text-sm text-muted-foreground">
              Already have an account?{' '}
              <button 
                onClick={() => setIsSignInMode(true)}
                className="text-primary hover:underline font-medium"
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
