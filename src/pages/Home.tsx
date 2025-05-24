
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Download, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen pt-20 flex items-center">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-bold text-slate-100">
                Hello I'm{" "}
                <span className="gradient-text">Lamel Kekana</span>
              </h1>
              <p className="text-xl text-slate-400">I am a data scientist</p>
            </div>
            
            <p className="text-lg text-slate-300 max-w-xl leading-relaxed">
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
                className="border-slate-600 text-slate-300 hover:bg-slate-800 px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105"
                asChild
              >
                <Link to="/contact">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Get in Touch
                </Link>
              </Button>
            </div>
          </div>
          
          {/* Image with Blob */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Blob Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-slate-700/30 to-slate-600/30 rounded-full blob-animation transform -translate-x-4 -translate-y-4 w-80 h-80"></div>
              
              {/* Profile Image */}
              <div className="relative w-72 h-72 rounded-full overflow-hidden border-4 border-slate-700/50 shadow-2xl">
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
