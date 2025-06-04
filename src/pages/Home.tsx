
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Download, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  console.log("Home component is rendering");
  
  return (
    <div className="min-h-screen flex items-center relative overflow-hidden bg-slate-900">
      <div className="max-w-7xl mx-auto px-6 py-12 w-full">
        <div className="flex items-center justify-between">
          {/* Text Content */}
          <div className="space-y-8 max-w-2xl">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold text-slate-100 leading-tight">
                Hello I'm{" "}
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Lamel Kekana</span>
              </h1>
              <p className="text-2xl text-slate-400">I am a data scientist</p>
            </div>
            
            <p className="text-lg text-slate-300 max-w-2xl leading-relaxed">
              Explore my portfolio for a comprehensive collection of my professional work.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-800 hover:bg-slate-700 rounded-lg transition-all duration-300 hover:scale-110"
              >
                <Github className="w-6 h-6 text-slate-300" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-800 hover:bg-slate-700 rounded-lg transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="w-6 h-6 text-slate-300" />
              </a>
            </div>
            
            {/* Action Buttons */}
            <div className="flex space-x-4">
              <Button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-black font-semibold px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105">
                <Download className="w-4 h-4 mr-2" />
                Download CV
              </Button>
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

          {/* Profile Image with Subtle Square Blob - Right Side */}
          <div className="relative hidden md:block">
            {/* Subtle Square Blob Background */}
            <div className="absolute inset-0 w-80 h-80 opacity-10">
              <div className="absolute w-full h-full bg-gradient-to-br from-cyan-400/30 to-blue-500/30 rounded-3xl transform rotate-3 animate-pulse"></div>
            </div>
            
            {/* Profile Image Container - Empty for now */}
            <div className="relative z-10 flex items-center justify-center w-80 h-80">
              <div className="w-64 h-64 rounded-3xl border-2 border-slate-500/40 shadow-2xl bg-slate-800/50 flex items-center justify-center transition-all duration-300 hover:scale-105">
                <div className="text-slate-400 text-center">
                  <div className="w-16 h-16 bg-slate-600/50 rounded-full mx-auto mb-2"></div>
                  <p className="text-sm">Image placeholder</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
