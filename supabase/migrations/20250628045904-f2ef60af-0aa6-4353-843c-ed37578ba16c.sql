
-- Create courses table to store Python course information
CREATE TABLE public.courses (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  level TEXT NOT NULL CHECK (level IN ('Beginner', 'Intermediate', 'Advanced')),
  duration TEXT NOT NULL,
  students INTEGER NOT NULL DEFAULT 0,
  rating DECIMAL(2,1) NOT NULL DEFAULT 0.0,
  price INTEGER NOT NULL, -- Price in cents (e.g., 7900 for $79.00)
  image_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Insert the existing courses from your landing page
INSERT INTO public.courses (title, description, level, duration, students, rating, price, image_url) VALUES
('Python Fundamentals', 'Master the basics of Python programming from variables to functions.', 'Beginner', '8 weeks', 12450, 4.9, 7900, 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=300&fit=crop'),
('Data Science with Python', 'Learn pandas, numpy, and matplotlib for data analysis and visualization.', 'Intermediate', '12 weeks', 8230, 4.8, 12900, 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop'),
('Web Development with Django', 'Build full-stack web applications using Django framework.', 'Advanced', '16 weeks', 5890, 4.9, 17900, 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop');

-- Enable Row Level Security (make courses publicly readable for now)
ALTER TABLE public.courses ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to read courses (public landing page)
CREATE POLICY "Anyone can view courses" 
  ON public.courses 
  FOR SELECT 
  USING (true);

-- Create policy for future admin functionality (only authenticated users can modify)
CREATE POLICY "Only authenticated users can manage courses" 
  ON public.courses 
  FOR ALL 
  USING (auth.uid() IS NOT NULL);
