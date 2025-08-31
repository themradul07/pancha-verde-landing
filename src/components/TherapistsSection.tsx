import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Calendar, Award } from "lucide-react";
import doctor1 from "@/assets/doctor-1.jpg";
import doctor2 from "@/assets/doctor-2.jpg";
import therapist1 from "@/assets/therapist-1.jpg";
import therapist2 from "@/assets/therapist-2.jpg";
import therapist3 from "@/assets/therapist-3.jpg";

const TherapistsSection = () => {
  const therapists = [
    {
      name: "Dr. Priya Sharma",
      image: doctor1,
      specialization: "Panchakarma Specialist",
      experience: "15 years",
      rating: 4.9,
      qualifications: ["BAMS", "MD (Ayurveda)", "Panchakarma Certification"],
      expertise: ["Vamana", "Virechana", "Women's Health"]
    },
    {
      name: "Dr. Rajesh Kumar",
      image: doctor2,
      specialization: "Senior Ayurvedic Physician",
      experience: "20 years",
      rating: 4.8,
      qualifications: ["BAMS", "PhD (Ayurveda)", "Clinical Research"],
      expertise: ["Basti", "Raktamokshana", "Chronic Diseases"]
    },
    {
      name: "Therapist Meera Patel",
      image: therapist1,
      specialization: "Certified Panchakarma Therapist",
      experience: "8 years",
      rating: 4.9,
      qualifications: ["Panchakarma Diploma", "Marma Therapy", "Abhyanga Specialist"],
      expertise: ["Nasya", "Abhyanga", "Stress Management"]
    },
    {
      name: "Therapist Arjun Singh",
      image: therapist2,
      specialization: "Traditional Ayurvedic Therapist",
      experience: "12 years",
      rating: 4.7,
      qualifications: ["Traditional Training", "Pulse Diagnosis", "Herbal Medicine"],
      expertise: ["All Panchakarma", "Pulse Reading", "Diet Planning"]
    },
    {
      name: "Dr. Kavitha Reddy",
      image: therapist3,
      specialization: "Ayurvedic Wellness Expert",
      experience: "10 years",
      rating: 4.8,
      qualifications: ["BAMS", "Yoga Therapy", "Nutrition Specialist"],
      expertise: ["Preventive Care", "Lifestyle Medicine", "Detox Programs"]
    }
  ];

  return (
    <section id="therapists" className="py-16 px-4 bg-wellness-light/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Meet Our Expert Therapists
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our team of certified Ayurvedic doctors and therapists brings decades of experience 
            in authentic Panchakarma treatments, ensuring you receive the highest quality care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {therapists.map((therapist, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
              <CardHeader className="p-0">
                <div className="relative">
                  <img 
                    src={therapist.image} 
                    alt={therapist.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-primary/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
                    <Star className="w-4 h-4 text-primary-foreground fill-current" />
                    <span className="text-sm font-semibold text-primary-foreground">{therapist.rating}</span>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-foreground mb-1">{therapist.name}</h3>
                  <p className="text-primary font-medium">{therapist.specialization}</p>
                </div>

                <div className="flex items-center space-x-4 mb-4 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{therapist.experience}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Award className="w-4 h-4" />
                    <span>Certified</span>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-foreground mb-2">Qualifications:</h4>
                  <div className="flex flex-wrap gap-1">
                    {therapist.qualifications.map((qual, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {qual}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-foreground mb-2">Expertise:</h4>
                  <div className="flex flex-wrap gap-1">
                    {therapist.expertise.map((exp, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {exp}
                      </Badge>
                    ))}
                  </div>
                </div>

                <Button className="w-full">Book Appointment</Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-card rounded-lg p-8 border border-border">
            <h3 className="text-xl font-bold text-foreground mb-4">
              Why Choose Our Therapists?
            </h3>
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">Certified Experts</h4>
                <p className="text-sm text-muted-foreground">All our therapists are certified by recognized Ayurvedic institutions</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Star className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">Proven Results</h4>
                <p className="text-sm text-muted-foreground">High success rates and positive patient outcomes</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Calendar className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">Flexible Scheduling</h4>
                <p className="text-sm text-muted-foreground">Convenient appointment times to fit your schedule</p>
              </div>
            </div>
            <Button size="lg">View All Therapists</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TherapistsSection;