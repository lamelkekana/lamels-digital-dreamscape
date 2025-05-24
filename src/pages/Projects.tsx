
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Predictive Analytics Dashboard",
      description: "Advanced machine learning models for sales forecasting with interactive visualizations and real-time data processing.",
      technologies: ["Python", "TensorFlow", "React", "D3.js"],
      hasDemo: true,
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=200&fit=crop"
    },
    {
      title: "Customer Segmentation Analysis",
      description: "Comprehensive clustering analysis to identify customer segments using unsupervised learning techniques.",
      technologies: ["R", "K-means", "Tableau", "SQL"],
      hasDemo: true,
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=200&fit=crop"
    },
    {
      title: "Sentiment Analysis Engine",
      description: "Natural language processing system for social media sentiment analysis with 94% accuracy rate.",
      technologies: ["Python", "NLTK", "PyTorch", "Docker"],
      hasDemo: false,
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=200&fit=crop"
    },
    {
      title: "Financial Risk Assessment",
      description: "Machine learning model for credit risk evaluation using ensemble methods and feature engineering.",
      technologies: ["Python", "XGBoost", "Pandas", "Scikit-learn"],
      hasDemo: false,
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=200&fit=crop"
    },
    {
      title: "Time Series Forecasting",
      description: "LSTM-based forecasting model for stock price prediction with automated feature selection.",
      technologies: ["Python", "Keras", "NumPy", "Matplotlib"],
      hasDemo: false,
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=200&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen pt-8">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="gradient-text">Projects</span>
          </h1>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto">
            A showcase of my data science projects, featuring machine learning models, 
            analytics dashboards, and innovative solutions to complex problems.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={project.title} className="bg-slate-800/50 border-slate-700 card-hover group overflow-hidden">
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-800/80 to-transparent"></div>
              </div>

              <CardHeader>
                <CardTitle className="text-xl font-bold text-slate-200 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-slate-400 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-slate-700/50 text-cyan-400 text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Buttons */}
                <div className="flex space-x-3 pt-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-slate-600 text-slate-300 hover:bg-slate-700 hover:border-slate-500 flex-1"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                  
                  {project.hasDemo && (
                    <Button
                      size="sm"
                      className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-slate-900 font-semibold flex-1"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
