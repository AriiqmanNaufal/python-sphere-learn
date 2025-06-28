
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Star, Users } from "lucide-react";

export const Courses = () => {
  const courses = [
    {
      title: "Python Fundamentals",
      description: "Master the basics of Python programming from variables to functions.",
      level: "Beginner",
      duration: "8 weeks",
      students: "12,450",
      rating: "4.9",
      price: "$79",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=300&fit=crop",
    },
    {
      title: "Data Science with Python",
      description: "Learn pandas, numpy, and matplotlib for data analysis and visualization.",
      level: "Intermediate",
      duration: "12 weeks",
      students: "8,230",
      rating: "4.8",
      price: "$129",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop",
    },
    {
      title: "Web Development with Django",
      description: "Build full-stack web applications using Django framework.",
      level: "Advanced",
      duration: "16 weeks",
      students: "5,890",
      rating: "4.9",
      price: "$179",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Popular Python Courses
          </h2>
          <p className="text-xl text-gray-600">
            Choose the perfect course for your skill level and career goals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white">
              <div className="relative">
                <img 
                  src={course.image} 
                  alt={course.title}
                  className="w-full h-48 object-cover"
                />
                <Badge 
                  className={`absolute top-4 left-4 ${
                    course.level === 'Beginner' ? 'bg-green-500' : 
                    course.level === 'Intermediate' ? 'bg-yellow-500' : 'bg-red-500'
                  }`}
                >
                  {course.level}
                </Badge>
              </div>
              
              <CardHeader className="pb-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {course.title}
                </h3>
                <p className="text-gray-600">
                  {course.description}
                </p>
              </CardHeader>

              <CardContent className="pt-0">
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    <span>{course.students}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span>{course.rating}</span>
                  </div>
                </div>
              </CardContent>

              <CardFooter className="pt-0">
                <div className="flex items-center justify-between w-full">
                  <span className="text-2xl font-bold text-blue-600">
                    {course.price}
                  </span>
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    Enroll Now
                  </Button>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
