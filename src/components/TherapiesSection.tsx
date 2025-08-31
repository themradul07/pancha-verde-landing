import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Wind, Droplets, Pill, Users, Heart } from "lucide-react";

const TherapiesSection = () => {
  const therapies = [
    {
      name: "Vamana",
      icon: Wind,
      description: "Therapeutic vomiting to eliminate excess Kapha dosha and respiratory toxins",
      benefits: ["Asthma relief", "Weight management", "Skin disorders", "Respiratory health"],
      duration: "3-5 days"
    },
    {
      name: "Virechana",
      icon: Droplets,
      description: "Controlled purgation therapy to cleanse Pitta dosha and liver toxins",
      benefits: ["Liver detox", "Digestive health", "Skin clarity", "Metabolic balance"],
      duration: "5-7 days"
    },
    {
      name: "Basti",
      icon: Pill,
      description: "Medicated enema therapy to balance Vata dosha and nervous system",
      benefits: ["Joint health", "Nervous system", "Digestive wellness", "Pain relief"],
      duration: "15-30 days"
    },
    {
      name: "Nasya",
      icon: Users,
      description: "Nasal administration of medicines for head and neck purification",
      benefits: ["Sinus relief", "Mental clarity", "Headache relief", "Respiratory wellness"],
      duration: "7-14 days"
    },
    {
      name: "Raktamokshana",
      icon: Heart,
      description: "Blood purification therapy to cleanse blood-borne toxins safely",
      benefits: ["Blood purification", "Skin health", "Circulation", "Inflammatory relief"],
      duration: "1-3 sessions"
    }
  ];

  return (
    <section id="therapies" className="py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Five Sacred Therapies
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Discover the five pillars of Panchakarma - each therapy designed to target specific 
            imbalances and restore your body's natural harmony through time-tested Ayurvedic wisdom.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {therapies.map((therapy, index) => {
            const IconComponent = therapy.icon;
            return (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-bold text-primary">{therapy.name}</CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {therapy.description}
                  </p>
                  
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Key Benefits:</h4>
                    <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                      {therapy.benefits.map((benefit, idx) => (
                        <li key={idx}>{benefit}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex items-center justify-between pt-2">
                    <span className="text-sm text-muted-foreground">
                      Duration: <span className="font-semibold text-primary">{therapy.duration}</span>
                    </span>
                  </div>
                  
                  <Button className="w-full mt-4" variant="outline">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <div className="bg-wellness-light/50 rounded-lg p-8 border border-border">
            <h3 className="text-xl font-bold text-foreground mb-4">
              Personalized Treatment Plans
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Our expert Ayurvedic doctors will assess your constitution and health condition 
              to recommend the most suitable Panchakarma therapy for your unique needs.
            </p>
            <Button size="lg" className="mr-4">
              Get Consultation
            </Button>
            <Button variant="outline" size="lg">
              View All Treatments
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TherapiesSection;