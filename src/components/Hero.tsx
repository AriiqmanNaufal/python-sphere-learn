
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float } from "@react-three/drei";
import { Button } from "@/components/ui/button";
import { ChevronRight, Play } from "lucide-react";
import { PythonCube } from "./PythonCube";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 to-blue-50">
      {/* 3D Background */}
      <div className="absolute inset-0 w-full h-full">
        <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <Float speed={1} rotationIntensity={1} floatIntensity={0.5}>
            <PythonCube position={[-4, 2, -2]} />
          </Float>
          <Float speed={1.5} rotationIntensity={0.8} floatIntensity={0.3}>
            <PythonCube position={[4, -1, -3]} scale={0.7} />
          </Float>
          <Float speed={0.8} rotationIntensity={1.2} floatIntensity={0.4}>
            <PythonCube position={[0, -3, -4]} scale={0.5} />
          </Float>
          <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
        </Canvas>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <div className="mb-6">
          <span className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
            🐍 Python Mastery Awaits
          </span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
          Master <span className="text-blue-600 relative">Python</span>
          <br />
          <span className="text-3xl md:text-5xl text-gray-600">From Zero to Hero</span>
        </h1>
        
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
          Learn Python programming with interactive courses designed for beginners and professionals. 
          Build real projects, master data structures, and unlock your coding potential.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg group">
            Start Learning Now
            <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <Button 
            variant="outline" 
            size="lg" 
            className="border-gray-300 hover:bg-gray-50 px-8 py-4 text-lg group"
          >
            <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
            Watch Demo
          </Button>
        </div>
        
        <div className="mt-12 flex justify-center items-center gap-8 text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span>50+ Interactive Lessons</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <span>Real-World Projects</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
            <span>Certificate Included</span>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-50 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-green-200 rounded-full opacity-50 animate-pulse delay-1000"></div>
    </section>
  );
};
