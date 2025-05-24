
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Download, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen flex items-center relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-12 w-full">
        <div className="relative">
          {/* Profile Image with Glow Effect - Positioned over "Hello I'm" text */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 z-10">
            <div className="relative">
              {/* Animated Glow Ring */}
              <div className="absolute inset-0 rounded-full animate-pulse">
                <div className="w-40 h-40 rounded-full bg-gradient-to-r from-slate-500/20 to-slate-600/20 blur-lg"></div>
              </div>
              
              {/* Subtle Ring Effect */}
              <div className="absolute inset-0 w-40 h-40 rounded-full border border-slate-500/30 animate-spin" style={{ animationDuration: '10s' }}></div>
              
              {/* Profile Image */}
              <div className="relative w-36 h-36 rounded-full overflow-hidden border border-slate-500/40 shadow-xl brightness-125">
                <img
                  src="/lovable-uploads/a8a8add2-c56f-429e-b82e-477884bcdf1e.png"
                  alt="Lamel Kekana"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-8 max-w-4xl pt-20">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold text-slate-100 leading-tight text-center">
                Hello I'm{" "}
                <span className="gradient-text">Lamel Kekana</span>
              </h1>
              <p className="text-2xl text-slate-400 text-center">I am a data scientist</p>
            </div>
            
            <p className="text-lg text-slate-300 max-w-2xl leading-relaxed text-center mx-auto">
              Explore my portfolio for a comprehensive collection of my professional work.
            </p>
            
            {/* Social Links */}
            <div className="flex justify-center space-x-4">
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
            <div className="flex justify-center space-x-4">
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
        </div>
      </div>
    </div>
  );
};

export default Home;
