
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Download, MessageCircle, User, Code, Mail, MapPin, Phone } from "lucide-react";
import TechScreen from "@/components/TechScreen";

const SinglePage = () => {
  return (
    <div className="min-h-screen">
      {/* Home Section */}
      <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-12 w-full">
          <div className="flex items-center justify-between gap-12">
            {/* Text Content */}
            <div className="space-y-8 max-w-2xl flex-1">
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
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Get in Touch
                </Button>
              </div>
            </div>

            {/* Animated Tech Screen */}
            <div className="relative hidden lg:flex items-center justify-start flex-shrink-0 ml-8">
              <div className="absolute inset-0 w-80 h-80 opacity-20">
                <div className="absolute w-full h-full bg-gradient-to-br from-cyan-400/30 to-blue-500/30 rounded-3xl transform rotate-3 animate-pulse"></div>
              </div>
              <div className="relative z-10">
                <TechScreen />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-slate-100 mb-6">
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Passionate data scientist with expertise in machine learning, analytics, and cloud technologies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <User className="w-6 h-6 text-cyan-400" />
                <h3 className="text-2xl font-semibold text-slate-100">Background</h3>
              </div>
              <p className="text-lg text-slate-300 leading-relaxed">
                I specialize in transforming complex data into actionable insights. With a strong foundation in statistical analysis, machine learning algorithms, and cloud computing, I help organizations make data-driven decisions.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed">
                My expertise spans across Python, R, SQL, and various cloud platforms including AWS and Azure. I'm passionate about creating scalable solutions that drive business value.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 card-hover">
                <Code className="w-8 h-8 text-cyan-400 mb-4" />
                <h4 className="text-lg font-semibold text-slate-100 mb-2">Programming</h4>
                <p className="text-slate-400">Python, R, SQL, JavaScript</p>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 card-hover">
                <div className="w-8 h-8 text-cyan-400 mb-4">📊</div>
                <h4 className="text-lg font-semibold text-slate-100 mb-2">Analytics</h4>
                <p className="text-slate-400">Machine Learning, Statistics</p>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 card-hover">
                <div className="w-8 h-8 text-cyan-400 mb-4">☁️</div>
                <h4 className="text-lg font-semibold text-slate-100 mb-2">Cloud</h4>
                <p className="text-slate-400">AWS, Azure, GCP</p>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 card-hover">
                <div className="w-8 h-8 text-cyan-400 mb-4">📈</div>
                <h4 className="text-lg font-semibold text-slate-100 mb-2">Visualization</h4>
                <p className="text-slate-400">Tableau, Power BI, D3.js</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen flex items-center py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-slate-100 mb-6">
              My <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Explore some of my recent work in data science and analytics.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((project) => (
              <div key={project} className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 card-hover">
                <div className="w-full h-48 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg mb-4 flex items-center justify-center">
                  <Code className="w-12 h-12 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold text-slate-100 mb-2">
                  Data Project {project}
                </h3>
                <p className="text-slate-400 mb-4">
                  A comprehensive analysis using machine learning techniques to extract meaningful insights from complex datasets.
                </p>
                <div className="flex space-x-2">
                  <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm">Python</span>
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">ML</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-slate-100 mb-6">
              Get In <span className="gradient-text">Touch</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Ready to collaborate on your next data science project? Let's connect!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-100">Email</h3>
                  <p className="text-slate-400">lamel.kekana@example.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-100">Phone</h3>
                  <p className="text-slate-400">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-100">Location</h3>
                  <p className="text-slate-400">New York, NY</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-8">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-slate-100 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-slate-100 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-slate-100 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                    placeholder="Tell me about your project..."
                  />
                </div>
                <Button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-black font-semibold py-3 rounded-lg transition-all duration-300 hover:scale-105">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SinglePage;
