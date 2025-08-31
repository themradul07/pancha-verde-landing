import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, MapPin, Phone, Clock, Star, Navigation } from "lucide-react";

const CentersSection = () => {
  const [searchLocation, setSearchLocation] = useState("");

  const centers = [
    {
      name: "Ayur Wellness Center",
      address: "123 Wellness Street, Mumbai, Maharashtra",
      distance: "2.5 km",
      rating: 4.8,
      phone: "+91 98765 43210",
      timing: "9:00 AM - 8:00 PM",
      services: ["All Panchakarma", "Consultation", "Herbal Pharmacy"],
      specialties: ["Chronic Diseases", "Stress Management", "Weight Loss"]
    },
    {
      name: "Traditional Ayurveda Clinic",
      address: "456 Heritage Road, Delhi, Delhi",
      distance: "3.2 km",
      rating: 4.9,
      phone: "+91 87654 32109",
      timing: "8:00 AM - 9:00 PM",
      services: ["Panchakarma", "Yoga Therapy", "Diet Planning"],
      specialties: ["Women's Health", "Digestive Disorders", "Arthritis"]
    },
    {
      name: "Holistic Health Center",
      address: "789 Serenity Lane, Bangalore, Karnataka",
      distance: "4.1 km",
      rating: 4.7,
      phone: "+91 76543 21098",
      timing: "7:00 AM - 10:00 PM",
      services: ["Full Panchakarma", "Meditation", "Massage Therapy"],
      specialties: ["Detoxification", "Anti-aging", "Immunity Boost"]
    },
    {
      name: "Vedic Wellness Retreat",
      address: "321 Peaceful Gardens, Pune, Maharashtra",
      distance: "5.8 km",
      rating: 4.6,
      phone: "+91 65432 10987",
      timing: "6:00 AM - 11:00 PM",
      services: ["Residential Programs", "Day Treatments", "Workshops"],
      specialties: ["Complete Detox", "Lifestyle Diseases", "Mental Wellness"]
    }
  ];

  return (
    <section id="centers" className="py-16 px-4 bg-wellness-light/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Find Centers Near You
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            Locate authentic Panchakarma centers in your area. All our partner centers 
            maintain the highest standards of traditional Ayurvedic treatments.
          </p>

          {/* Search Bar */}
          <div className="max-w-md mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                type="text"
                placeholder="Enter your location (city, pincode, area)"
                value={searchLocation}
                onChange={(e) => setSearchLocation(e.target.value)}
                className="pl-10 pr-4"
              />
              <Button 
                className="absolute right-2 top-1/2 transform -translate-y-1/2 h-8"
                size="sm"
              >
                Search
              </Button>
            </div>
          </div>
        </div>

        {/* Centers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {centers.map((center, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-xl font-bold text-foreground mb-2">
                      {center.name}
                    </CardTitle>
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-2">
                      <MapPin className="w-4 h-4" />
                      <span>{center.address}</span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-500 fill-current" />
                        <span className="font-semibold">{center.rating}</span>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {center.distance} away
                      </Badge>
                    </div>
                  </div>
                  <Button size="sm" variant="outline">
                    <Navigation className="w-4 h-4 mr-1" />
                    Directions
                  </Button>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <Phone className="w-4 h-4 text-primary" />
                    <span>{center.phone}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-primary" />
                    <span>{center.timing}</span>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-2">Services:</h4>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {center.services.map((service, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {service}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-2">Specialties:</h4>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {center.specialties.map((specialty, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {specialty}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-2">
                  <Button className="flex-1">Book Appointment</Button>
                  <Button variant="outline" className="flex-1">View Details</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Interactive Map Placeholder */}
        <div className="bg-card rounded-lg border border-border overflow-hidden">
          <div className="p-6 border-b border-border">
            <h3 className="text-xl font-bold text-foreground mb-2">Interactive Map</h3>
            <p className="text-muted-foreground">
              Explore all Panchakarma centers on the map and find the most convenient location for you.
            </p>
          </div>
          <div className="h-64 bg-wellness-light/30 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
              <p className="text-muted-foreground mb-4">Interactive map will be loaded here</p>
              <Button variant="outline">Load Map</Button>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-6 h-6 text-primary" />
            </div>
            <h4 className="font-semibold text-foreground mb-2">50+ Locations</h4>
            <p className="text-sm text-muted-foreground">Centers across major cities in India</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Star className="w-6 h-6 text-primary" />
            </div>
            <h4 className="font-semibold text-foreground mb-2">Verified Centers</h4>
            <p className="text-sm text-muted-foreground">All centers are certified and quality-assured</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-6 h-6 text-primary" />
            </div>
            <h4 className="font-semibold text-foreground mb-2">Flexible Hours</h4>
            <p className="text-sm text-muted-foreground">Extended hours to fit your schedule</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CentersSection;