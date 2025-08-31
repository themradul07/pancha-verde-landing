import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { 
  Leaf, 
  MapPin, 
  Phone, 
  Mail, 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube,
  Clock,
  Heart
} from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { label: "About Us", href: "#about" },
    { label: "Our Therapies", href: "#therapies" },
    { label: "Find Centers", href: "#centers" },
    { label: "Book Appointment", href: "#book" },
    { label: "Patient Portal", href: "#portal" },
    { label: "Blog", href: "#blog" }
  ];

  const services = [
    { label: "Panchakarma Therapy", href: "#panchakarma" },
    { label: "Ayurvedic Consultation", href: "#consultation" },
    { label: "Herbal Medicine", href: "#herbs" },
    { label: "Yoga & Meditation", href: "#yoga" },
    { label: "Diet Planning", href: "#diet" },
    { label: "Lifestyle Counseling", href: "#lifestyle" }
  ];

  const support = [
    { label: "Help Center", href: "#help" },
    { label: "Contact Support", href: "#support" },
    { label: "Treatment Guide", href: "#guide" },
    { label: "Insurance Info", href: "#insurance" },
    { label: "Terms & Conditions", href: "#terms" },
    { label: "Privacy Policy", href: "#privacy" }
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Newsletter Section */}
      <div className="border-b border-primary-foreground/20">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">Stay Connected with Wellness</h3>
            <p className="mb-6 opacity-90">
              Get the latest insights on Ayurveda, wellness tips, and special offers delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input 
                type="email" 
                placeholder="Enter your email"
                className="bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground placeholder:text-primary-foreground/60"
              />
              <Button variant="secondary" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                Subscribe
              </Button>
            </div>
            <p className="text-xs mt-4 opacity-70">
              Join 10,000+ subscribers. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary-foreground rounded-full flex items-center justify-center">
                <Leaf className="w-5 h-5 text-primary" />
              </div>
              <span className="text-xl font-bold">Panchakarma</span>
            </div>
            <p className="mb-6 opacity-90 leading-relaxed max-w-md">
              Authentic Ayurvedic healing through traditional Panchakarma therapy. 
              Transform your health naturally with our certified practitioners and 
              time-tested treatments.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 opacity-70" />
                <span className="text-sm">123 Wellness Street, Health City, HC 12345</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 opacity-70" />
                <span className="text-sm">+1 (555) 123-HEAL</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 opacity-70" />
                <span className="text-sm">info@panchakarma.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-4 h-4 opacity-70" />
                <span className="text-sm">Mon-Sat: 8AM-8PM, Sun: 9AM-6PM</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex space-x-4">
              <Button size="icon" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Facebook className="w-4 h-4" />
              </Button>
              <Button size="icon" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Twitter className="w-4 h-4" />
              </Button>
              <Button size="icon" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Instagram className="w-4 h-4" />
              </Button>
              <Button size="icon" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Youtube className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-sm opacity-80 hover:opacity-100 hover:underline transition-opacity"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <a 
                    href={service.href} 
                    className="text-sm opacity-80 hover:opacity-100 hover:underline transition-opacity"
                  >
                    {service.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              {support.map((item, index) => (
                <li key={index}>
                  <a 
                    href={item.href} 
                    className="text-sm opacity-80 hover:opacity-100 hover:underline transition-opacity"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <Separator className="bg-primary-foreground/20" />

      {/* Bottom Footer */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm opacity-80 mb-4 md:mb-0">
            © 2024 Panchakarma Wellness Center. All rights reserved.
          </div>
          
          <div className="flex items-center space-x-1 text-sm opacity-80">
            <span>Made with</span>
            <Heart className="w-4 h-4 fill-current" />
            <span>for your wellness journey</span>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-4 pt-4 border-t border-primary-foreground/20">
          <div className="text-xs opacity-70 text-center">
            <p className="mb-2">
              <strong>Disclaimer:</strong> The information provided on this website is for educational purposes only. 
              Consult with qualified healthcare professionals before starting any treatment.
            </p>
            <p>
              Licensed Ayurvedic Practice | Registered with Ministry of AYUSH | 
              ISO 9001:2015 Certified | Member of National Ayurvedic Medical Association
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;