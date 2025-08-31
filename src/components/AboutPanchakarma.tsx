import { Heart, Droplets, Leaf, Scale, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const AboutPanchakarma = () => {
  const benefits = [
    {
      icon: Heart,
      title: "Healing",
      description: "Restore your body's natural healing capacity"
    },
    {
      icon: Droplets,
      title: "Detox",
      description: "Eliminate toxins and purify your system"
    },
    {
      icon: Leaf,
      title: "Wellness",
      description: "Achieve optimal health and vitality"
    },
    {
      icon: Scale,
      title: "Balance",
      description: "Harmonize your doshas and energy"
    },
    {
      icon: Sparkles,
      title: "Rejuvenation",
      description: "Revitalize your mind, body, and spirit"
    }
  ];

  return (
    <section className="py-16 px-4 bg-wellness-light/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            About Panchakarma Therapy
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Panchakarma is the most powerful healing and detoxification system in Ayurveda. 
            This ancient 5-step process cleanses the body of accumulated toxins, restores balance, 
            and rejuvenates every cell for optimal health and vitality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <Card key={index} className="text-center group hover:scale-105 transition-transform duration-300">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-12 bg-card rounded-lg p-8 border border-border">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                The Ancient Science of Healing
              </h3>
              <p className="text-muted-foreground mb-4">
                Rooted in 5,000-year-old Ayurvedic wisdom, Panchakarma is not just a treatment 
                but a complete transformation of your health. Our authentic approach follows 
                traditional protocols while incorporating modern safety standards.
              </p>
              <p className="text-muted-foreground">
                Each therapy is customized to your unique constitution (Prakriti) and current 
                imbalances (Vikriti), ensuring the most effective and personalized healing experience.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">Natural Treatments</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">5000+</div>
                <div className="text-sm text-muted-foreground">Years of Wisdom</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">95%</div>
                <div className="text-sm text-muted-foreground">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">0</div>
                <div className="text-sm text-muted-foreground">Side Effects</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPanchakarma;