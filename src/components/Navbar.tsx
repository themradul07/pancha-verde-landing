import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Leaf } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Therapies", href: "#therapies" },
    { label: "Therapists", href: "#therapists" },
    // { label: "Consultation", href: "#consultation" },
    // { label: "Centers Near You", href: "#centers" },
    // { label: "Testimonials", href: "#testimonials" },
    // { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="sticky top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border ">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <Leaf className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-primary">Panchakarma</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                {item.label}
              </a>
            ))}
            <Button className="ml-4">Book Appointment</Button>
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
                <a
                  key={item.label}
                  href={item.href}
                  className="block px-3 py-2 text-foreground hover:text-primary transition-colors font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-2">
                <Button className="w-full">Book Appointment</Button>
              </div>
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