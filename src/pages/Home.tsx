import { Button } from "@/components/ui/button";
import { Github, Linkedin, Download, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import TechScreen from "@/components/TechScreen";

const Home = () => {
  console.log("Home component is rendering");
  
  return (
    <div className="min-h-screen flex items-center relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-12 w-full">
        <div className="flex items-center justify-between">
          {/* Text Content */}
          <div className="space-y-8 max-w-2xl">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold text-slate-100 leading-tight">
                Hello I'm{" "}
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Lamel Kekana
                </span>
              </h1>
              <p className="text-2xl text-slate-400">
                I am a{" "}
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Data Scientist
                </span>
              </p>
            </div>
            
            <p className="text-lg text-slate-300 max-w-2xl leading-relaxed">
              Explore my portfolio for a comprehensive collection of my professional work.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a
                href="https://github.com/lamelkekana"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-800 hover:bg-slate-700 rounded-lg transition-all duration-300 hover:scale-110"
              >
                <Github className="w-6 h-6 text-slate-300" />
              </a>
              <a
                href="https://www.linkedin.com/in/lamel-kekana/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-800 hover:bg-slate-700 rounded-lg transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="w-6 h-6 text-slate-300" />
              </a>
            </div>
            
            {/* Action Buttons */}
            <div className="flex space-x-4">
              <a
                href="/lovable-uploads/Lamel Kekana CV.pdf"
                download
                className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-black font-semibold px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 flex items-center"
              >
                <Download className="w-4 h-4 mr-2" />
                Download CV
              </a>
              <Button
                variant="outline"
                className="border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-slate-300 bg-slate-700/50 px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105"
                asChild
              >
                <Link to="/contact">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Get in Touch
                </Link>
              </Button>
            </div>
          </div>

          {/* Animated Tech Screen - Right Side */}
          <div className="relative hidden md:block w-full h-[600px]">
            {/* Tech Screen */}
            <div className="absolute top-[100px] left-[100px] z-10">
              <TechScreen />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
