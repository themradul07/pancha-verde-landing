import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Video, Phone, MessageCircle, Clock, Shield, Users } from "lucide-react";

const ConsultationSection = () => {
  const consultationTypes = [
    {
      type: "Video Consultation",
      icon: Video,
      duration: "30-45 minutes",
      price: "$50",
      description: "Face-to-face consultation with our certified Ayurvedic doctors",
      features: ["Personalized assessment", "Treatment recommendations", "Follow-up plan"]
    },
    {
      type: "Phone Consultation",
      icon: Phone,
      duration: "20-30 minutes", 
      price: "$35",
      description: "Convenient phone consultation for follow-ups and guidance",
      features: ["Quick assessments", "Medication guidance", "Lifestyle advice"]
    },
    {
      type: "Chat Consultation",
      icon: MessageCircle,
      duration: "Available 24/7",
      price: "$25",
      description: "Instant messaging with our healthcare professionals",
      features: ["Quick queries", "Immediate responses", "Document sharing"]
    }
  ];

  const whyConsult = [
    {
      icon: Shield,
      title: "Certified Doctors",
      description: "All our doctors are certified by recognized Ayurvedic medical councils"
    },
    {
      icon: Users,
      title: "Personalized Care",
      description: "Individual treatment plans based on your unique constitution"
    },
    {
      icon: Clock,
      title: "Flexible Timing",
      description: "Available consultations at your convenient time slots"
    }
  ];

  return (
    <section id="consultation" className="py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Consult Certified Ayurvedic Doctors
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Get expert guidance from our certified Ayurvedic physicians before starting your 
            Panchakarma journey. Personalized consultations to ensure the best treatment plan for you.
          </p>
        </div>

        {/* Consultation Types */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {consultationTypes.map((consultation, index) => {
            const IconComponent = consultation.icon;
            return (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-bold text-primary">{consultation.type}</CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-foreground">{consultation.price}</div>
                    <div className="text-sm text-muted-foreground">{consultation.duration}</div>
                  </div>
                  
                  <p className="text-muted-foreground text-sm text-center">
                    {consultation.description}
                  </p>
                  
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Includes:</h4>
                    <ul className="space-y-1">
                      {consultation.features.map((feature, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-center">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Button className="w-full mt-4">
                    Book Now
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Why Consult Section */}
        <div className="bg-wellness-light/30 rounded-lg p-8 mb-12">
          <h3 className="text-2xl font-bold text-foreground text-center mb-8">
            Why Consult Before Treatment?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyConsult.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-primary to-wellness-accent rounded-lg p-8 text-center text-primary-foreground">
          <h3 className="text-2xl font-bold mb-4">Ready to Start Your Healing Journey?</h3>
          <p className="mb-6 opacity-90">
            Schedule a consultation with our expert Ayurvedic doctors today and get a personalized 
            treatment plan designed specifically for your health needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Consult a Doctor Now
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              Schedule Later
            </Button>
          </div>
          
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div className="flex items-center justify-center space-x-2">
              <Badge variant="secondary" className="bg-primary-foreground/20 text-primary-foreground">
                ✓ Free Initial Assessment
              </Badge>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Badge variant="secondary" className="bg-primary-foreground/20 text-primary-foreground">
                ✓ Same Day Appointments
              </Badge>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Badge variant="secondary" className="bg-primary-foreground/20 text-primary-foreground">
                ✓ 100% Satisfaction Guarantee
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultationSection;