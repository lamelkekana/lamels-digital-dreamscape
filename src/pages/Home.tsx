
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Download, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen flex items-center relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-12 w-full">
        <div className="flex items-center justify-between">
          {/* Text Content */}
          <div className="space-y-8 max-w-2xl">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold text-slate-100 leading-tight">
                Hello I'm{" "}
                <span className="gradient-text">Lamel Kekana</span>
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

          {/* Profile Image with Blob Animation - Right Side */}
          <div className="relative hidden md:block">
            {/* Animated Blob Background */}
            <div className="absolute inset-0 w-80 h-80 opacity-20">
              <div className="absolute w-full h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blob-animation"></div>
              <div className="absolute w-4/5 h-4/5 top-10 left-10 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blob-animation" style={{ animationDelay: '2s' }}></div>
              <div className="absolute w-3/5 h-3/5 top-20 left-20 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full blob-animation" style={{ animationDelay: '4s' }}></div>
            </div>
            
            {/* Profile Image Container */}
            <div className="relative z-10 flex items-center justify-center w-80 h-80">
              <div className="w-64 h-64 rounded-3xl overflow-hidden border-2 border-slate-500/40 shadow-2xl brightness-90 transition-all duration-300 hover:scale-105">
                <img
                  src="/lovable-uploads/a8a8add2-c56f-429e-b82e-477884bcdf1e.png"
                  alt="Lamel Kekana"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
