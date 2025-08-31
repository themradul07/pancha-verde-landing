import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Priya Mehta",
      age: 34,
      location: "Mumbai",
      treatment: "Complete Panchakarma Program",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
      testimonial: "After struggling with chronic fatigue and digestive issues for years, the Panchakarma therapy completely transformed my health. The doctors were incredibly knowledgeable and the treatment was personalized to my needs. I feel like a new person!",
      condition: "Chronic Fatigue, Digestive Issues"
    },
    {
      name: "Rajesh Kumar",
      age: 42,
      location: "Delhi", 
      treatment: "Virechana Therapy",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      testimonial: "I was skeptical about Ayurvedic treatments initially, but the results speak for themselves. My skin condition cleared up completely after the Virechana therapy, and I haven't felt this energetic in decades. Highly recommend!",
      condition: "Skin Disorders, Low Energy"
    },
    {
      name: "Sunita Sharma",
      age: 38,
      location: "Bangalore",
      treatment: "Basti Therapy", 
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      testimonial: "The Basti therapy helped me immensely with my joint pain and arthritis. The therapists were gentle and caring, and the entire process was comfortable. My mobility has improved significantly, and I'm pain-free now.",
      condition: "Arthritis, Joint Pain"
    },
    {
      name: "Arjun Patel",
      age: 29,
      location: "Pune",
      treatment: "Stress Management Program",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face", 
      testimonial: "Working in a high-stress job was taking a toll on my mental and physical health. The holistic approach combining Panchakarma with meditation and lifestyle changes has been life-changing. I'm calmer, more focused, and genuinely happy.",
      condition: "Stress, Anxiety, Insomnia"
    },
    {
      name: "Meera Reddy",
      age: 45,
      location: "Chennai",
      treatment: "Nasya Therapy",
      rating: 5,
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face",
      testimonial: "I suffered from chronic sinus issues and frequent headaches for over 10 years. The Nasya therapy not only cleared my sinuses but also improved my mental clarity and concentration. I wish I had discovered this treatment sooner!",
      condition: "Chronic Sinusitis, Headaches"
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section id="testimonials" className="py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Our Patients Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Real stories from patients who have experienced the transformative power of 
            authentic Panchakarma therapy. Their healing journey could inspire yours.
          </p>
        </div>

        {/* Main Testimonial Carousel */}
        <div className="relative mb-12">
          <Card className="max-w-4xl mx-auto bg-gradient-to-br from-wellness-light/20 to-background border border-primary/20">
            <CardContent className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center gap-8">
                {/* Patient Image */}
                <div className="flex-shrink-0">
                  <div className="relative">
                    <img 
                      src={currentTestimonial.image} 
                      alt={currentTestimonial.name}
                      className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border-4 border-primary/20"
                    />
                    <div className="absolute -top-2 -right-2 bg-primary rounded-full p-2">
                      <Quote className="w-4 h-4 text-primary-foreground" />
                    </div>
                  </div>
                </div>

                {/* Testimonial Content */}
                <div className="flex-1 text-center md:text-left">
                  {/* Rating */}
                  <div className="flex justify-center md:justify-start items-center mb-4">
                    {[...Array(currentTestimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <blockquote className="text-lg text-foreground mb-6 leading-relaxed italic">
                    "{currentTestimonial.testimonial}"
                  </blockquote>

                  {/* Patient Details */}
                  <div className="space-y-2">
                    <div className="font-bold text-primary text-xl">{currentTestimonial.name}</div>
                    <div className="text-muted-foreground">
                      Age {currentTestimonial.age} • {currentTestimonial.location}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Treatment: <span className="font-semibold text-primary">{currentTestimonial.treatment}</span>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Condition: <span className="font-medium">{currentTestimonial.condition}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-between mt-8">
                <Button 
                  variant="outline" 
                  size="icon"
                  onClick={prevTestimonial}
                  className="rounded-full"
                >
                  <ChevronLeft className="w-4 h-4" />
                </Button>

                {/* Dots Indicator */}
                <div className="flex space-x-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        index === currentIndex ? 'bg-primary' : 'bg-primary/30'
                      }`}
                    />
                  ))}
                </div>

                <Button 
                  variant="outline" 
                  size="icon"
                  onClick={nextTestimonial}
                  className="rounded-full"
                >
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Success Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">98%</div>
            <div className="text-sm text-muted-foreground">Patient Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">1000+</div>
            <div className="text-sm text-muted-foreground">Success Stories</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">15+</div>
            <div className="text-sm text-muted-foreground">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">4.9</div>
            <div className="text-sm text-muted-foreground">Average Rating</div>
          </div>
        </div>

        {/* Thumbnail Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
          {testimonials.map((testimonial, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`relative group ${
                index === currentIndex ? 'ring-2 ring-primary' : ''
              }`}
            >
              <img 
                src={testimonial.image} 
                alt={testimonial.name}
                className="w-full aspect-square rounded-lg object-cover transition-all group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="text-white text-center">
                  <div className="font-semibold text-sm">{testimonial.name}</div>
                  <div className="text-xs">{testimonial.location}</div>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <h3 className="text-xl font-bold text-foreground mb-4">
            Ready to Start Your Healing Journey?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Join thousands of patients who have experienced the life-changing benefits of 
            authentic Panchakarma therapy. Your transformation story could be next.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">Book Your Consultation</Button>
            <Button variant="outline" size="lg">Read More Stories</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;