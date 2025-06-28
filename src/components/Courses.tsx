
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Star, Users, Loader2 } from "lucide-react";
import { useCourses } from "@/hooks/useCourses";

export const Courses = () => {
  const { data: courses, isLoading, error } = useCourses();

  const formatPrice = (priceInCents: number) => {
    return `$${(priceInCents / 100).toFixed(0)}`;
  };

  const formatStudents = (students: number) => {
    return students.toLocaleString();
  };

  if (isLoading) {
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
          
          <div className="flex justify-center items-center py-20">
            <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
            <span className="ml-2 text-gray-600">Loading courses...</span>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
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
          
          <div className="text-center py-20">
            <p className="text-red-600">Error loading courses. Please try again later.</p>
          </div>
        </div>
      </section>
    );
  }

  if (!courses || courses.length === 0) {
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
          
          <div className="text-center py-20">
            <p className="text-gray-600">No courses available at the moment.</p>
          </div>
        </div>
      </section>
    );
  }

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
          {courses.map((course) => (
            <Card key={course.id} className="overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white">
              <div className="relative">
                <img 
                  src={course.image_url || "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=300&fit=crop"} 
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
                    <span>{formatStudents(course.students)}</span>
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
                    {formatPrice(course.price)}
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
