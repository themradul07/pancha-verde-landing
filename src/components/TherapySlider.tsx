import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Calendar } from "lucide-react";
import { useNavigate } from "react-router-dom";

const TherapySlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  const therapies = [
    {
      id: 1,
      name: "Vamana",
      title: "Therapeutic Vomiting",
      description: "A controlled therapeutic vomiting procedure that eliminates toxins from the upper digestive tract and respiratory system.",
      benefits: ["Removes Kapha toxins", "Treats respiratory disorders", "Improves digestion", "Enhances metabolic function"],
      image: "/api/placeholder/1200/800",
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      name: "Virechana",
      title: "Purgation Therapy",
      description: "A therapeutic purgation procedure that cleanses the lower digestive tract and eliminates Pitta toxins from the body.",
      benefits: ["Eliminates Pitta toxins", "Treats skin disorders", "Improves liver function", "Balances digestive fire"],
      image: "/api/placeholder/1200/800",
      color: "from-red-500 to-orange-500"
    },
    {
      id: 3,
      name: "Basti",
      title: "Enema Therapy",
      description: "The most important Panchakarma therapy involving medicated enema to cleanse the colon and balance Vata dosha.",
      benefits: ["Balances Vata dosha", "Treats constipation", "Strengthens immunity", "Improves joint health"],
      image: "/api/placeholder/1200/800",
      color: "from-green-500 to-emerald-500"
    },
    {
      id: 4,
      name: "Nasya",
      title: "Nasal Administration",
      description: "Administration of medicated oils or powders through the nasal passages to treat disorders above the neck.",
      benefits: ["Treats sinus disorders", "Improves mental clarity", "Reduces headaches", "Enhances sensory functions"],
      image: "/api/placeholder/1200/800",
      color: "from-purple-500 to-indigo-500"
    },
    {
      id: 5,
      name: "Rakt Mokshana",
      title: "Blood Purification",
      description: "Therapeutic bloodletting procedure to remove impure blood and toxins, balancing Pitta and Rakta doshas.",
      benefits: ["Purifies blood", "Treats skin diseases", "Reduces inflammation", "Balances Pitta dosha"],
      image: "/api/placeholder/1200/800",
      color: "from-pink-500 to-rose-500"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % therapies.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [therapies.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % therapies.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + therapies.length) % therapies.length);
  };

  const handleBookAppointment = () => {
    const currentUser = localStorage.getItem("currentUser");
    if (currentUser) {
      navigate("/therapists");
    } else {
      localStorage.setItem("redirectAfterLogin", "/therapists");
      navigate("/login");
    }
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-1000"
        style={{
          backgroundImage: `url(${therapies[currentSlide].image})`,
        }}
      />

      {/* Overlay */}
      <div className={`absolute inset-0 bg-gradient-to-r ${therapies[currentSlide].color} opacity-80`} />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center px-4">
        <div className="max-w-4xl text-center text-white">
          <h1 className="mb-4 text-5xl font-bold md:text-7xl">
            {therapies[currentSlide].name}
          </h1>
          <h2 className="mb-6 text-2xl font-semibold md:text-3xl">
            {therapies[currentSlide].title}
          </h2>
          <p className="mb-8 text-lg leading-relaxed md:text-xl">
            {therapies[currentSlide].description}
          </p>

          {/* Benefits */}
          <div className="mb-8">
            <h3 className="mb-4 text-xl font-semibold">Key Benefits:</h3>
            <div className="flex flex-wrap justify-center gap-2">
              {therapies[currentSlide].benefits.map((benefit, index) => (
                <span
                  key={index}
                  className="rounded-full bg-white/20 px-4 py-2 text-sm backdrop-blur-sm"
                >
                  {benefit}
                </span>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <Button
            size="lg"
            className="bg-white text-gray-900 hover:bg-gray-100"
            onClick={handleBookAppointment}
          >
            <Calendar className="mr-2 h-5 w-5" />
            Book Appointment Now
          </Button>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/20 p-3 text-white backdrop-blur-sm transition-all hover:bg-white/30"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/20 p-3 text-white backdrop-blur-sm transition-all hover:bg-white/30"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 space-x-2">
        {therapies.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-3 w-3 rounded-full transition-all ${
              index === currentSlide ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>

      {/* Therapy Names */}
      <div className="absolute bottom-20 left-1/2 flex -translate-x-1/2 space-x-8">
        {therapies.map((therapy, index) => (
          <button
            key={therapy.id}
            onClick={() => setCurrentSlide(index)}
            className={`text-sm font-medium transition-all ${
              index === currentSlide
                ? "text-white scale-110"
                : "text-white/70 hover:text-white"
            }`}
          >
            {therapy.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TherapySlider;
