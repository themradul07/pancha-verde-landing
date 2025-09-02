import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link, useNavigate } from "react-router-dom";
import { signupSchema } from "@/lib/schemas";
import { useToast } from "@/hooks/use-toast";

type SignupFormData = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  role: "patient" | "therapist" | "admin";
};

const SignupForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
  });

  const onSubmit = async (data: SignupFormData) => {
    setIsLoading(true);

    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Simulate storing user data (in a real app, this would be an API call)
      const users = JSON.parse(localStorage.getItem("users") || "[]");
      const existingUser = users.find((user: any) => user.email === data.email);

      if (existingUser) {
        toast({
          title: "Signup Failed",
          description: "An account with this email already exists.",
          variant: "destructive",
        });
        return;
      }

      // Store user data
      const newUser = {
        id: Date.now().toString(),
        name: data.name,
        email: data.email,
        password: data.password, // In real app, this would be hashed
        role: data.role,
        createdAt: new Date().toISOString(),
      };

      users.push(newUser);
      localStorage.setItem("users", JSON.stringify(users));

      // Show success toast
      toast({
        title: "Signup Successful!",
        description: "Welcome to Panchkarma wellness. You are now logged in.",
      });

      // Store current user session
      localStorage.setItem("currentUser", JSON.stringify(newUser));

      // Dispatch custom event to notify navbar of login
      window.dispatchEvent(new Event('userLogin'));

      // Navigate to appropriate dashboard based on role
      if (data.role === "therapist") {
        navigate("/therapist-dashboard");
      } else {
        navigate("/dashboard");
      }
    } catch (error) {
      toast({
        title: "Signup Failed",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto shadow-card border-border/50 bg-card/95 backdrop-blur-sm">
      <CardHeader className="space-y-2 text-center">
        <CardTitle className="text-2xl font-semibold text-sage">
          Join Panchkarma
        </CardTitle>
        <CardDescription className="text-muted-foreground">
          Create your wellness account
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-6">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-foreground font-medium">
              Full Name
            </Label>
            <Input
              id="name"
              type="text"
              placeholder="Enter your full name"
              {...register("name")}
              className="rounded-lg border-border focus:border-sage focus:ring-sage/20"
            />
            {errors.name && (
              <p className="text-sm text-red-500">{errors.name.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-foreground font-medium">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              {...register("email")}
              className="rounded-lg border-border focus:border-sage focus:ring-sage/20"
            />
            {errors.email && (
              <p className="text-sm text-red-500">{errors.email.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="password" className="text-foreground font-medium">
              Password
            </Label>
            <Input
              id="password"
              type="password"
              placeholder="Create a password"
              {...register("password")}
              className="rounded-lg border-border focus:border-sage focus:ring-sage/20"
            />
            {errors.password && (
              <p className="text-sm text-red-500">{errors.password.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="confirmPassword" className="text-foreground font-medium">
              Confirm Password
            </Label>
            <Input
              id="confirmPassword"
              type="password"
              placeholder="Confirm your password"
              {...register("confirmPassword")}
              className="rounded-lg border-border focus:border-sage focus:ring-sage/20"
            />
            {errors.confirmPassword && (
              <p className="text-sm text-red-500">{errors.confirmPassword.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="role" className="text-foreground font-medium">
              Role
            </Label>
            <Controller
              name="role"
              control={control}
              render={({ field }) => (
                <Select onValueChange={field.onChange} value={field.value}>
                  <SelectTrigger className="rounded-lg border-border focus:border-sage focus:ring-sage/20">
                    <SelectValue placeholder="Select your role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="patient">Patient</SelectItem>
                    <SelectItem value="therapist">Therapist</SelectItem>
                    <SelectItem value="admin">Admin</SelectItem>
                  </SelectContent>
                </Select>
              )}
            />
            {errors.role && (
              <p className="text-sm text-red-500">{errors.role.message}</p>
            )}
          </div>

          <Button
            type="submit"
            disabled={isLoading}
            size="lg"
            className="w-full rounded-lg font-medium"
          >
            {isLoading ? "Creating Account..." : "Sign Up for Panchkarma"}
          </Button>
        </form>

        <div className="text-center">
          <p className="text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-sage hover:text-sage-light font-medium transition-colors duration-200"
            >
              Sign in
            </Link>
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default SignupForm;
