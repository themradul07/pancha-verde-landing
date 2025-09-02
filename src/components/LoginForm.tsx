import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link, useNavigate } from "react-router-dom";
import { loginSchema } from "@/lib/schemas";
import { useToast } from "@/hooks/use-toast";

type LoginFormData = {
  email: string;
  password: string;
};

const LoginForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormData) => {
    setIsLoading(true);

    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Simulate login check (in a real app, this would be an API call)
      const users = JSON.parse(localStorage.getItem("users") || "[]");
      const user = users.find((u: any) => u.email === data.email && u.password === data.password);

      if (!user) {
        toast({
          title: "Login Failed",
          description: "Invalid email or password.",
          variant: "destructive",
        });
        setIsLoading(false);
        return;
      }

      // Store current user session
      localStorage.setItem("currentUser", JSON.stringify(user));

      // Show success toast
      toast({
        title: "Login Successful!",
        description: `Welcome back, ${user.name}!`,
      });

      // Dispatch custom event to notify navbar of login
      window.dispatchEvent(new Event('userLogin'));

      // Check for redirect after login
      const redirectPath = localStorage.getItem("redirectAfterLogin");
      if (redirectPath) {
        localStorage.removeItem("redirectAfterLogin");
        navigate(redirectPath);
      } else {
        // Navigate to dashboard or home based on role
        if (user.role === "therapist") {
          navigate("/therapist-dashboard");
        } else {
          navigate("/dashboard");
        }
      }
    } catch (error) {
      toast({
        title: "Login Failed",
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
          Welcome Back
        </CardTitle>
        <CardDescription className="text-muted-foreground">
          Sign in to your Panchkarma wellness account
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-6">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
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
              placeholder="Enter your password"
              {...register("password")}
              className="rounded-lg border-border focus:border-sage focus:ring-sage/20"
            />
            {errors.password && (
              <p className="text-sm text-red-500">{errors.password.message}</p>
            )}
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="remember"
                checked={rememberMe}
                onCheckedChange={(checked) => setRememberMe(!!checked)}
                className="data-[state=checked]:bg-sage data-[state=checked]:border-sage"
              />
              <Label
                htmlFor="remember"
                className="text-sm text-muted-foreground cursor-pointer"
              >
                Remember me
              </Label>
            </div>

            <Link
              to="/forgot-password"
              className="text-sm text-sage hover:text-sage-light transition-colors duration-200"
            >
              Forgot Password?
            </Link>
          </div>

          <Button
            type="submit"
            disabled={isLoading}
            size="lg"
            className="w-full rounded-lg font-medium"
          >
            {isLoading ? "Signing In..." : "Login to Panchkarma"}
          </Button>
        </form>

        <div className="text-center">
          <p className="text-sm text-muted-foreground">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="text-sage hover:text-sage-light font-medium transition-colors duration-200"
            >
              Sign up for Panchkarma
            </Link>
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default LoginForm;
