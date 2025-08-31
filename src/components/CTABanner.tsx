import { Button } from "@/components/ui/button";
import { Sparkles, Heart, Leaf } from "lucide-react";

const CTABanner = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-r from-primary via-wellness-accent to-primary relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-20 h-20 bg-primary-foreground/10 rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-primary-foreground/10 rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-primary-foreground/5 rounded-full"></div>
      </div>

      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="text-center text-primary-foreground">
          {/* Icon */}
          <div className="flex justify-center items-center space-x-2 mb-6">
            <div className="w-12 h-12 bg-primary-foreground/20 rounded-full flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-primary-foreground" />
            </div>
            <div className="w-12 h-12 bg-primary-foreground/20 rounded-full flex items-center justify-center">
              <Heart className="w-6 h-6 text-primary-foreground" />
            </div>
            <div className="w-12 h-12 bg-primary-foreground/20 rounded-full flex items-center justify-center">
              <Leaf className="w-6 h-6 text-primary-foreground" />
            </div>
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Start Your Panchakarma
            <br />
            Journey Today
          </h2>

          {/* Subheading */}
          <p className="text-lg md:text-xl mb-8 opacity-90 max-w-2xl mx-auto leading-relaxed">
            Experience the ancient wisdom of Ayurveda and transform your health naturally. 
            Take the first step towards a healthier, more balanced life with our authentic 
            Panchakarma treatments.
          </p>

          {/* Key Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 text-sm">
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-4">
              <div className="font-semibold mb-1">✨ Personalized Treatment</div>
              <div className="opacity-80">Customized therapy based on your constitution</div>
            </div>
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-4">
              <div className="font-semibold mb-1">🌿 100% Natural</div>
              <div className="opacity-80">No chemicals, only pure Ayurvedic medicines</div>
            </div>
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-4">
              <div className="font-semibold mb-1">👨‍⚕️ Expert Guidance</div>
              <div className="opacity-80">Certified doctors with decades of experience</div>
            </div>
          </div>

          {/* Call-to-Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button 
              size="lg" 
              variant="secondary"
              className="text-lg px-8 py-6 bg-primary-foreground text-primary hover:bg-primary-foreground/90"
            >
              Book Appointment
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="text-lg px-8 py-6 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              Find Centers
            </Button>
          </div>

          {/* Special Offer */}
          <div className="bg-primary-foreground/20 backdrop-blur-sm rounded-lg p-6 mb-8 max-w-2xl mx-auto">
            <div className="text-lg font-bold mb-2">🎉 Special Offer</div>
            <div className="text-sm opacity-90">
              Book your consultation this month and get <span className="font-bold">20% off</span> on 
              your first Panchakarma treatment package. Limited time offer!
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-6 text-sm opacity-80">
            <div className="flex items-center space-x-1">
              <span className="w-2 h-2 bg-primary-foreground rounded-full"></span>
              <span>Free Consultation</span>
            </div>
            <div className="flex items-center space-x-1">
              <span className="w-2 h-2 bg-primary-foreground rounded-full"></span>
              <span>Same Day Booking</span>
            </div>
            <div className="flex items-center space-x-1">
              <span className="w-2 h-2 bg-primary-foreground rounded-full"></span>
              <span>Flexible Timings</span>
            </div>
            <div className="flex items-center space-x-1">
              <span className="w-2 h-2 bg-primary-foreground rounded-full"></span>
              <span>Money Back Guarantee</span>
            </div>
          </div>

          {/* Urgency Text */}
          <div className="mt-6 text-sm opacity-75">
            ⏰ Join 500+ patients who started their healing journey this month
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;