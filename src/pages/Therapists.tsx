import { useState, useMemo } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star, MapPin, Calendar, User, Eye, Phone } from "lucide-react";

const Therapists = () => {
  const [filters, setFilters] = useState({
    location: "",
    therapyType: "",
    minRating: "",
    sortBy: "name-asc",
    minCharges: "",
    maxCharges: "",
    minExperience: "",
    maxExperience: "",
  });

  const therapists = [
    {
      id: 1,
      name: "Dr. Priya Sharma",
      clinicName: "Ayurveda Wellness Center",
      experience: 12,
      location: "Mumbai",
      charges: 2500,
      therapyTypes: ["Vamana", "Virechana"],
      rating: 4.8,
      image: "/api/placeholder/150/150",
      phone: "+91 9876543210",
    },
    {
      id: 2,
      name: "Dr. Rajesh Kumar",
      clinicName: "Panchakarma Clinic",
      experience: 15,
      location: "Delhi",
      charges: 3000,
      therapyTypes: ["Basti", "Nasya"],
      rating: 4.9,
      image: "/api/placeholder/150/150",
      phone: "+91 9876543211",
    },
    {
      id: 3,
      name: "Dr. Meera Patel",
      clinicName: "Herbal Healing Hub",
      experience: 8,
      location: "Bangalore",
      charges: 2000,
      therapyTypes: ["Rakt Mokshana", "Virechana"],
      rating: 4.7,
      image: "/api/placeholder/150/150",
      phone: "+91 9876543212",
    },
    {
      id: 4,
      name: "Dr. Arjun Singh",
      clinicName: "Traditional Ayurveda",
      experience: 20,
      location: "Chennai",
      charges: 3500,
      therapyTypes: ["Vamana", "Basti", "Nasya"],
      rating: 5.0,
      image: "/api/placeholder/150/150",
      phone: "+91 9876543213",
    },
    {
      id: 5,
      name: "Dr. Kavita Rao",
      clinicName: "Holistic Health Center",
      experience: 10,
      location: "Pune",
      charges: 2200,
      therapyTypes: ["Nasya", "Rakt Mokshana"],
      rating: 4.6,
      image: "/api/placeholder/150/150",
      phone: "+91 9876543214",
    },
    {
      id: 6,
      name: "Dr. Vikram Joshi",
      clinicName: "Ayurvedic Retreat",
      experience: 18,
      location: "Jaipur",
      charges: 2800,
      therapyTypes: ["Virechana", "Basti"],
      rating: 4.8,
      image: "/api/placeholder/150/150",
      phone: "+91 9876543215",
    },
    {
      id: 7,
      name: "Dr. Anjali Gupta",
      clinicName: "Wellness Ayurveda",
      experience: 6,
      location: "Kolkata",
      charges: 1800,
      therapyTypes: ["Vamana", "Nasya"],
      rating: 4.5,
      image: "/api/placeholder/150/150",
      phone: "+91 9876543216",
    },
    {
      id: 8,
      name: "Dr. Sanjay Verma",
      clinicName: "Panchakarma Specialists",
      experience: 14,
      location: "Hyderabad",
      charges: 2600,
      therapyTypes: ["Basti", "Rakt Mokshana"],
      rating: 4.7,
      image: "/api/placeholder/150/150",
      phone: "+91 9876543217",
    },
    {
      id: 9,
      name: "Dr. Neha Agarwal",
      clinicName: "Ayurveda Clinic",
      experience: 9,
      location: "Ahmedabad",
      charges: 2100,
      therapyTypes: ["Virechana", "Nasya"],
      rating: 4.6,
      image: "/api/placeholder/150/150",
      phone: "+91 9876543218",
    },
    {
      id: 10,
      name: "Dr. Rohit Sharma",
      clinicName: "Herbal Therapy Center",
      experience: 11,
      location: "Surat",
      charges: 2400,
      therapyTypes: ["Vamana", "Basti", "Rakt Mokshana"],
      rating: 4.9,
      image: "/api/placeholder/150/150",
      phone: "+91 9876543219",
    },
  ];

  const filteredTherapists = useMemo(() => {
    let filtered = therapists.filter((therapist) => {
      if (filters.location && therapist.location !== filters.location) return false;
      if (filters.therapyType && !therapist.therapyTypes.includes(filters.therapyType)) return false;
      if (filters.minRating && therapist.rating < parseFloat(filters.minRating)) return false;
      if (filters.minCharges && therapist.charges < parseInt(filters.minCharges)) return false;
      if (filters.maxCharges && therapist.charges > parseInt(filters.maxCharges)) return false;
      if (filters.minExperience && therapist.experience < parseInt(filters.minExperience)) return false;
      if (filters.maxExperience && therapist.experience > parseInt(filters.maxExperience)) return false;
      return true;
    });

    // Sort
    if (filters.sortBy === "name-asc") {
      filtered.sort((a, b) => a.name.localeCompare(b.name));
    } else if (filters.sortBy === "name-desc") {
      filtered.sort((a, b) => b.name.localeCompare(a.name));
    } else if (filters.sortBy === "rating-desc") {
      filtered.sort((a, b) => b.rating - a.rating);
    } else if (filters.sortBy === "experience-desc") {
      filtered.sort((a, b) => b.experience - a.experience);
    }

    return filtered;
  }, [filters]);

  const handleFilterChange = (key: string, value: string) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const handleBookNow = (therapist: any) => {
    // Handle booking logic
    alert(`Booking appointment with ${therapist.name}`);
  };

  const handleConsult = (therapist: any) => {
    // Handle consult logic
    alert(`Consulting with ${therapist.name}`);
  };

  const handleViewProfile = (therapist: any) => {
    // Handle view profile logic
    alert(`Viewing profile of ${therapist.name}`);
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-center mb-8 text-gray-900">
            Find Your Ayurvedic Therapist
          </h1>

          {/* Filters */}
          <div className="bg-white p-6 rounded-lg shadow-md mb-8">
            <h2 className="text-2xl font-semibold mb-4">Filters</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div>
                <Label htmlFor="location">Location</Label>
                <Select value={filters.location} onValueChange={(value) => handleFilterChange("location", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select location" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">All Locations</SelectItem>
                    <SelectItem value="Mumbai">Mumbai</SelectItem>
                    <SelectItem value="Delhi">Delhi</SelectItem>
                    <SelectItem value="Bangalore">Bangalore</SelectItem>
                    <SelectItem value="Chennai">Chennai</SelectItem>
                    <SelectItem value="Pune">Pune</SelectItem>
                    <SelectItem value="Jaipur">Jaipur</SelectItem>
                    <SelectItem value="Kolkata">Kolkata</SelectItem>
                    <SelectItem value="Hyderabad">Hyderabad</SelectItem>
                    <SelectItem value="Ahmedabad">Ahmedabad</SelectItem>
                    <SelectItem value="Surat">Surat</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="therapyType">Therapy Type</Label>
                <Select value={filters.therapyType} onValueChange={(value) => handleFilterChange("therapyType", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select therapy" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">All Therapies</SelectItem>
                    <SelectItem value="Vamana">Vamana</SelectItem>
                    <SelectItem value="Virechana">Virechana</SelectItem>
                    <SelectItem value="Basti">Basti</SelectItem>
                    <SelectItem value="Nasya">Nasya</SelectItem>
                    <SelectItem value="Rakt Mokshana">Rakt Mokshana</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="minRating">Minimum Rating</Label>
                <Select value={filters.minRating} onValueChange={(value) => handleFilterChange("minRating", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select rating" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">Any Rating</SelectItem>
                    <SelectItem value="4.5">4.5+</SelectItem>
                    <SelectItem value="4.0">4.0+</SelectItem>
                    <SelectItem value="3.5">3.5+</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="sortBy">Sort By</Label>
                <Select value={filters.sortBy} onValueChange={(value) => handleFilterChange("sortBy", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="name-asc">Name A-Z</SelectItem>
                    <SelectItem value="name-desc">Name Z-A</SelectItem>
                    <SelectItem value="rating-desc">Rating High to Low</SelectItem>
                    <SelectItem value="experience-desc">Experience High to Low</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="minCharges">Min Charges (₹)</Label>
                <Input
                  type="number"
                  placeholder="Min charges"
                  value={filters.minCharges}
                  onChange={(e) => handleFilterChange("minCharges", e.target.value)}
                />
              </div>

              <div>
                <Label htmlFor="maxCharges">Max Charges (₹)</Label>
                <Input
                  type="number"
                  placeholder="Max charges"
                  value={filters.maxCharges}
                  onChange={(e) => handleFilterChange("maxCharges", e.target.value)}
                />
              </div>

              <div>
                <Label htmlFor="minExperience">Min Experience (years)</Label>
                <Input
                  type="number"
                  placeholder="Min experience"
                  value={filters.minExperience}
                  onChange={(e) => handleFilterChange("minExperience", e.target.value)}
                />
              </div>

              <div>
                <Label htmlFor="maxExperience">Max Experience (years)</Label>
                <Input
                  type="number"
                  placeholder="Max experience"
                  value={filters.maxExperience}
                  onChange={(e) => handleFilterChange("maxExperience", e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* Therapists Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTherapists.map((therapist) => (
              <Card key={therapist.id} className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="text-center">
                  <Avatar className="w-20 h-20 mx-auto mb-4">
                    <AvatarImage src={therapist.image} alt={therapist.name} />
                    <AvatarFallback>{therapist.name.split(" ").map(n => n[0]).join("")}</AvatarFallback>
                  </Avatar>
                  <CardTitle className="text-xl">{therapist.name}</CardTitle>
                  <p className="text-gray-600">{therapist.clinicName}</p>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-1">
                      <User className="h-4 w-4 text-gray-500" />
                      <span>{therapist.experience} years exp.</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MapPin className="h-4 w-4 text-gray-500" />
                      <span>{therapist.location}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-500" />
                      <span className="font-semibold">{therapist.rating}</span>
                    </div>
                    <div className="text-lg font-bold text-green-600">
                      ₹{therapist.charges}
                    </div>
                  </div>

                  <div>
                    <p className="text-sm font-semibold mb-2">Therapies:</p>
                    <div className="flex flex-wrap gap-1">
                      {therapist.therapyTypes.map((type, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {type}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex space-x-2">
                    <Button
                      className="flex-1"
                      onClick={() => handleBookNow(therapist)}
                    >
                      <Calendar className="mr-2 h-4 w-4" />
                      Book Now
                    </Button>
                    <Button
                      variant="outline"
                      className="flex-1"
                      onClick={() => handleConsult(therapist)}
                    >
                      <Phone className="mr-2 h-4 w-4" />
                      Consult
                    </Button>
                  </div>

                  <Button
                    variant="ghost"
                    className="w-full"
                    onClick={() => handleViewProfile(therapist)}
                  >
                    <Eye className="mr-2 h-4 w-4" />
                    View Profile
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Therapists;
