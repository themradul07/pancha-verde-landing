import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, Users, Star, Calendar } from "lucide-react";
import { useNavigate } from "react-router-dom";

const TherapyCards = () => {
  const navigate = useNavigate();

  const therapies = [
    {
      id: 1,
      name: "Vamana",
      title: "Therapeutic Vomiting Therapy",
      description: "Vamana is a therapeutic vomiting procedure that eliminates toxins from the upper digestive tract and respiratory system. It's particularly effective for Kapha-related disorders.",
      duration: "2-3 hours",
      sessions: "1-3 sessions",
      benefits: [
        "Removes accumulated Kapha toxins",
        "Treats chronic respiratory disorders",
        "Improves digestive function",
        "Enhances metabolic rate",
        "Reduces obesity and related conditions",
        "Treats skin disorders",
        "Improves mental clarity"
      ],
      indications: [
        "Bronchitis", "Asthma", "Obesity", "Diabetes", "Skin diseases",
        "Psoriasis", "Allergic rhinitis", "Sinusitis", "Migraine"
      ],
      preparation: [
        "Light diet for 3-5 days before",
        "Medicated ghee intake",
        "Avoid heavy foods and alcohol",
        "Mental preparation and relaxation"
      ],
      image: "/api/placeholder/400/300",
      color: "bg-blue-50 border-blue-200"
    },
    {
      id: 2,
      name: "Virechana",
      title: "Purgation Therapy",
      description: "Virechana is a therapeutic purgation procedure that cleanses the lower digestive tract and eliminates Pitta toxins from the body through controlled bowel movements.",
      duration: "3-4 hours",
      sessions: "1-2 sessions",
      benefits: [
        "Eliminates Pitta toxins from the body",
        "Treats chronic skin disorders",
        "Improves liver and gallbladder function",
        "Balances digestive fire (Agni)",
        "Reduces acidity and heartburn",
        "Treats jaundice and hepatitis",
        "Improves hormonal balance"
      ],
      indications: [
        "Skin diseases", "Psoriasis", "Eczema", "Acidity", "Jaundice",
        "Hepatitis", "Thyroid disorders", "PCOD", "Migraine", "Arthritis"
      ],
      preparation: [
        "Snehana (oleation) for 3-7 days",
        "Light, warm diet",
        "Avoid spicy and oily foods",
        "Adequate rest and sleep"
      ],
      image: "/api/placeholder/400/300",
      color: "bg-red-50 border-red-200"
    },
    {
      id: 3,
      name: "Basti",
      title: "Enema Therapy",
      description: "Basti is the most important Panchakarma therapy involving medicated enema to cleanse the colon and balance Vata dosha. It's considered half of all treatments in Ayurveda.",
      duration: "45-60 minutes",
      sessions: "8-30 sessions",
      benefits: [
        "Balances Vata dosha primarily",
        "Treats chronic constipation",
        "Strengthens immune system",
        "Improves joint and muscle health",
        "Reduces neurological disorders",
        "Enhances reproductive health",
        "Improves mental stability"
      ],
      indications: [
        "Constipation", "Arthritis", "Paralysis", "Sciatica", "Back pain",
        "Infertility", "Neurological disorders", "Mental disorders", "Obesity"
      ],
      preparation: [
        "Abhyanga (oil massage)",
        "Svedana (fomentation)",
        "Light diet",
        "Proper bowel preparation"
      ],
      image: "/api/placeholder/400/300",
      color: "bg-green-50 border-green-200"
    },
    {
      id: 4,
      name: "Nasya",
      title: "Nasal Administration Therapy",
      description: "Nasya involves administration of medicated oils or powders through the nasal passages to treat disorders above the neck and improve sensory functions.",
      duration: "20-30 minutes",
      sessions: "7-21 sessions",
      benefits: [
        "Treats chronic sinus disorders",
        "Improves mental clarity and memory",
        "Reduces headaches and migraines",
        "Enhances sensory functions",
        "Balances Prana Vata",
        "Treats cervical spondylitis",
        "Improves hair and scalp health"
      ],
      indications: [
        "Sinusitis", "Migraine", "Headache", "Hair loss", "Cervical spondylitis",
        "Facial paralysis", "Mental disorders", "Anxiety", "Depression"
      ],
      preparation: [
        "Face and head massage",
        "Steam inhalation",
        "Light diet",
        "Avoid cold exposure"
      ],
      image: "/api/placeholder/400/300",
      color: "bg-purple-50 border-purple-200"
    },
    {
      id: 5,
      name: "Rakt Mokshana",
      title: "Blood Purification Therapy",
      description: "Rakt Mokshana is a therapeutic bloodletting procedure to remove impure blood and toxins, balancing Pitta and Rakta doshas through controlled blood removal.",
      duration: "30-45 minutes",
      sessions: "1-3 sessions",
      benefits: [
        "Purifies impure blood",
        "Treats chronic skin diseases",
        "Reduces inflammation and swelling",
        "Balances Pitta and Rakta doshas",
        "Treats varicose veins",
        "Reduces hypertension",
        "Improves circulation"
      ],
      indications: [
        "Skin diseases", "Psoriasis", "Eczema", "Acne", "Varicose veins",
        "Hypertension", "Gout", "Arthritis", "Inflammation", "Tumors"
      ],
      preparation: [
        "Dietary restrictions",
        "Avoid blood thinners",
        "Medical examination",
        "Mental preparation"
      ],
      image: "/api/placeholder/400/300",
      color: "bg-pink-50 border-pink-200"
    }
  ];

  const handleBookAppointment = () => {
    const currentUser = localStorage.getItem("currentUser");
    if (currentUser) {
      navigate("/therapists");
    } else {
      navigate("/login");
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Panchakarma Therapies
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the five fundamental cleansing therapies of Ayurveda, each designed to eliminate toxins
            and restore balance to your body and mind.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {therapies.map((therapy) => (
            <Card key={therapy.id} className={`${therapy.color} hover:shadow-lg transition-shadow duration-300`}>
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary" className="text-sm">
                    {therapy.name}
                  </Badge>
                  <div className="flex items-center space-x-1 text-sm text-gray-600">
                    <Clock className="h-4 w-4" />
                    <span>{therapy.duration}</span>
                  </div>
                </div>
                <CardTitle className="text-xl">{therapy.title}</CardTitle>
                <CardDescription className="text-gray-700">
                  {therapy.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Duration and Sessions */}
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center space-x-1">
                    <Users className="h-4 w-4 text-gray-500" />
                    <span>{therapy.sessions}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-500" />
                    <span>Highly Effective</span>
                  </div>
                </div>

                {/* Key Benefits */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Key Benefits:</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    {therapy.benefits.slice(0, 4).map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-green-500 mr-2">•</span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Indications */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Treats:</h4>
                  <div className="flex flex-wrap gap-1">
                    {therapy.indications.slice(0, 3).map((indication, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {indication}
                      </Badge>
                    ))}
                    {therapy.indications.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{therapy.indications.length - 3} more
                      </Badge>
                    )}
                  </div>
                </div>

                {/* Preparation */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Preparation:</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    {therapy.preparation.slice(0, 2).map((prep, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        {prep}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <Button
                  className="w-full mt-4"
                  onClick={handleBookAppointment}
                >
                  <Calendar className="mr-2 h-4 w-4" />
                  Book {therapy.name} Therapy
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TherapyCards;
