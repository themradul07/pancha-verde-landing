import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Calendar } from "lucide-react";
import { useNavigate } from "react-router-dom";

const BenefitsSection = () => {
  const navigate = useNavigate();

  const benefits = [
    "Detoxifies the body by eliminating accumulated toxins and waste materials",
    "Balances the three doshas (Vata, Pitta, Kapha) for optimal health",
    "Strengthens the immune system and improves disease resistance",
    "Enhances digestion and metabolism for better nutrient absorption",
    "Promotes mental clarity, reduces stress, and improves sleep quality",
    "Rejuvenates tissues and organs for overall vitality and longevity",
    "Improves skin health and reduces chronic skin conditions"
  ];

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
    <section className="py-16 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Benefits of Panchakarma Therapy
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the transformative power of Ayurveda's comprehensive detoxification and rejuvenation therapy.
            Panchakarma offers holistic healing that addresses the root causes of imbalance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {benefits.map((benefit, index) => (
            <Card key={index} className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                  <CardTitle className="text-lg text-gray-900">
                    Benefit {index + 1}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  {benefit}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg"
            onClick={handleBookAppointment}
          >
            <Calendar className="mr-2 h-5 w-5" />
            Book Your Panchakarma Session
          </Button>
          <p className="mt-4 text-gray-600">
            Start your journey towards holistic wellness today
          </p>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
