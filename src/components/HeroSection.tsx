import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-wellness-bg.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden mt-16">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat "
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-primary/10 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
          Rejuvenate with{" "}
          <span className="text-primary">Authentic</span>
          <br />
          Panchakarma Therapy
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
          Experience the ancient wisdom of Ayurveda through authentic Panchakarma treatments. 
          Detoxify, heal, and restore your body's natural balance with our certified therapists.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="text-lg px-8 py-6">
            Book Appointment
          </Button>
          <Button variant="outline" size="lg" className="text-lg px-8 py-6">
            Consult a Doctor
          </Button>
        </div>

        {/* Features */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 text-center">
          <div className="bg-card/80 backdrop-blur-sm rounded-lg p-4 border border-border/50">
            <div className="text-2xl font-bold text-primary">15+</div>
            <div className="text-sm text-muted-foreground">Years Experience</div>
          </div>
          <div className="bg-card/80 backdrop-blur-sm rounded-lg p-4 border border-border/50">
            <div className="text-2xl font-bold text-primary">500+</div>
            <div className="text-sm text-muted-foreground">Happy Patients</div>
          </div>
          <div className="bg-card/80 backdrop-blur-sm rounded-lg p-4 border border-border/50">
            <div className="text-2xl font-bold text-primary">50+</div>
            <div className="text-sm text-muted-foreground">Expert Therapists</div>
          </div>
          <div className="bg-card/80 backdrop-blur-sm rounded-lg p-4 border border-border/50">
            <div className="text-2xl font-bold text-primary">25+</div>
            <div className="text-sm text-muted-foreground">Treatment Centers</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;