import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Leaf, User, LogOut } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState<any>(null);
  const { toast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is logged in on component mount
    const user = localStorage.getItem("currentUser");
    if (user) {
      setCurrentUser(JSON.parse(user));
    }

    // Listen for login events
    const handleUserLogin = () => {
      const user = localStorage.getItem("currentUser");
      if (user) {
        setCurrentUser(JSON.parse(user));
      }
    };

    window.addEventListener('userLogin', handleUserLogin);

    // Cleanup
    return () => {
      window.removeEventListener('userLogin', handleUserLogin);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    setCurrentUser(null);
    toast({
      title: "Logged Out",
      description: "You have been successfully logged out.",
    });
    navigate("/");
  };

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Therapies", href: "#therapies" },
    { label: "Therapists", href: "/therapists" },
  ];

  return (
    <nav className="sticky top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border ">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <Leaf className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-primary">Panchakarma</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              item.href.startsWith('/') ? (
                <Link
                  key={item.label}
                  to={item.href}
                  className="text-foreground hover:text-primary transition-colors font-medium"
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-foreground hover:text-primary transition-colors font-medium"
                >
                  {item.label}
                </a>
              )
            ))}

            {currentUser ? (
              // User is logged in - show profile and logout
              <div className="flex items-center space-x-4">
                <div
                  className="flex items-center space-x-2 cursor-pointer hover:bg-accent rounded-md px-2 py-1 transition-colors"
                  onClick={() => navigate("/dashboard")}
                >
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                    <User className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <span className="text-sm font-medium">{currentUser.name}</span>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleLogout}
                  className="flex items-center space-x-1"
                >
                  <LogOut className="w-4 h-4" />
                  <span>Logout</span>
                </Button>
              </div>
            ) : (
              // User is not logged in - show login/signup buttons
              <div className="flex items-center space-x-2">
                <Button variant="ghost" asChild>
                  <Link to="/login">Login</Link>
                </Button>
                <Button asChild>
                  <Link to="/signup">Sign Up</Link>
                </Button>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-background border-t border-border">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                item.href.startsWith('/') ? (
                  <Link
                    key={item.label}
                    to={item.href}
                    className="block px-3 py-2 text-foreground hover:text-primary transition-colors font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <a
                    key={item.label}
                    href={item.href}
                    className="block px-3 py-2 text-foreground hover:text-primary transition-colors font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </a>
                )
              ))}

              {currentUser ? (
                // Mobile: User logged in
                <div className="pt-2 space-y-2">
                  <div
                    className="flex items-center space-x-2 px-3 py-2 cursor-pointer hover:bg-accent rounded-md transition-colors"
                    onClick={() => {
                      navigate("/dashboard");
                      setIsOpen(false);
                    }}
                  >
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                      <User className="w-3 h-3 text-primary-foreground" />
                    </div>
                    <span className="text-sm font-medium">{currentUser.name}</span>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      handleLogout();
                      setIsOpen(false);
                    }}
                    className="w-full flex items-center justify-center space-x-1"
                  >
                    <LogOut className="w-4 h-4" />
                    <span>Logout</span>
                  </Button>
                </div>
              ) : (
                // Mobile: User not logged in
                <div className="pt-2 space-y-2">
                  <Button variant="ghost" asChild className="w-full">
                    <Link to="/login" onClick={() => setIsOpen(false)}>Login</Link>
                  </Button>
                  <Button asChild className="w-full">
                    <Link to="/signup" onClick={() => setIsOpen(false)}>Sign Up</Link>
                  </Button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

// import { Link } from "react-router-dom";
// import { Leaf } from "lucide-react";

// const Navbar = () => {
//   return (
//     <nav className="sticky top-0 left-0 right-0 z-50 w-full bg-card/80 backdrop-blur-sm border-b border-border">
//       <div className="container mx-auto px-4 py-4">
//       <div className="flex items-center justify-between">
//         <Link to="/" className="flex items-center space-x-2 text-sage font-semibold text-xl">
//         <Leaf className="h-8 w-8" />
//             <span>Panchkarma</span>
//           </Link>
          
//           <Link 
//             to="/" 
//             className="text-muted-foreground hover:text-sage transition-colors duration-200"
//           >
//             Home
//           </Link>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;