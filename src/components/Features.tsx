
import { Code, BookOpen, Trophy, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const Features = () => {
  const features = [
    {
      icon: Code,
      title: "Interactive Coding",
      description: "Write and execute Python code directly in your browser with our interactive IDE.",
    },
    {
      icon: BookOpen,
      title: "Step-by-Step Learning",
      description: "Structured curriculum from basics to advanced concepts with clear explanations.",
    },
    {
      icon: Trophy,
      title: "Real Projects",
      description: "Build actual applications and add impressive projects to your portfolio.",
    },
    {
      icon: Users,
      title: "Community Support",
      description: "Join thousands of learners and get help from instructors and peers.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose Our Python Courses?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the most effective way to learn Python programming with our proven methodology
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-white to-gray-50"
            >
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
