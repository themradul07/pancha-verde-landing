import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login attempt:", formData);
    // Login logic would go here
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
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
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-foreground font-medium">
              Email or Mobile
            </Label>
            <Input
              id="email"
              type="text"
              placeholder="Enter your email or mobile number"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              className="rounded-lg border-border focus:border-sage focus:ring-sage/20"
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="password" className="text-foreground font-medium">
              Password
            </Label>
            <Input
              id="password"
              type="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={(e) => handleInputChange("password", e.target.value)}
              className="rounded-lg border-border focus:border-sage focus:ring-sage/20"
              required
            />
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="remember"
                checked={formData.rememberMe}
                onCheckedChange={(checked) => handleInputChange("rememberMe", !!checked)}
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
            // variant="wellness" 
            size="lg" 
            className="w-full rounded-lg font-medium"
          >
            Login to Panchkarma
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