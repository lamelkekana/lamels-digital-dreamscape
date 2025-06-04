
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Automated Data Pipeline with Interactive Dashboard",
      description: "End-to-end automated data pipeline integrating data ingestion, processing, and visualization. Features an interactive dashboard with weekly data refresh, enabling timely data-driven decision-making.",
      technologies: ["AWS", "Python", "SQL", "Metabase"],
      hasDemo: true,
      codeUrl: "https://github.com/lamelkekana/Automated-Data-Pipeline-Interactive-Dashboard",
      liveUrl: "https://insightportals.fyi/",
      image: "/lovable-uploads/d8f3cf42-11af-4157-b8d5-626d18f6c4a6.png",
      needsAccess: true
    },
    {
      title: "Anime Recommendation System",
      description: "Unsupervised machine learning-based app combining content-based, collaborative, and hybrid filtering techniques to deliver personalized anime recommendations. Enhances user experience through diverse recommendation strategies.",
      technologies: ["Streamlit", "Scikit-learn", "NLTK", "Surprise"],
      hasDemo: true,
      codeUrl: "https://github.com/lamelkekana/Team4_anime_app",
      liveUrl: "https://team4anime.streamlit.app/",
      image: "/lovable-uploads/0b1f9729-95b8-4ac0-b7f4-be4b151700ac.png",
      needsAccess: false
    },
    {
      title: "Fuel Economy Factors and MPH Prediction",
      description: "Analysis of factors influencing vehicle fuel efficiency (MPH) combined with a predictive model to estimate fuel economy based on key vehicle attributes. Supports informed decisions for consumers and manufacturers.",
      technologies: ["Pandas", "NumPy", "Plotly", "Scikit-learn"],
      hasDemo: false,
      codeUrl: "https://github.com/lamelkekana/Fuel_Economy_Insights",
      liveUrl: "",
      image: "/lovable-uploads/339b3520-7264-4fe7-b731-1a4b1d73ab46.png",
      needsAccess: false
    },
    {
      title: "Life Insurance Premium Analysis",
      description: "Exploratory Data Analysis of dependents' data to uncover patterns affecting life insurance premium rates. Focused on identifying how demographic and lifestyle factors contribute to risk assessment and pricing models, supporting data-driven strategies for premium optimization.",
      technologies: ["Pandas", "NumPy", "Seaborn"],
      hasDemo: false,
      codeUrl: "https://github.com/lamelkekana/Life-Insurance-Exploratory-Data-Analysis",
      liveUrl: "",
      image: "/lovable-uploads/01f1c254-e6de-4d66-975b-2873c327153d.png",
      needsAccess: false
    },
    {
      title: "Obesity Analysis and Prediction",
      description: "Predictive modeling using lifestyle and demographic data to classify obesity levels and support data-driven health risk assessments and interventions.",
      technologies: ["Pandas", "NumPy", "Scikit-learn"],
      hasDemo: false,
      codeUrl: "https://github.com/lamelkekana/Obesity_Prediction",
      liveUrl: "",
      image: "/lovable-uploads/375836e9-62e1-472d-a613-3c5bf6d546d6.png",
      needsAccess: false
    }
  ];

  const handleImageClick = (codeUrl: string) => {
    window.open(codeUrl, '_blank');
  };

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
              <div className="relative h-48 overflow-hidden cursor-pointer" onClick={() => handleImageClick(project.codeUrl)}>
                <div className="absolute inset-0 bg-slate-900/20"></div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110 opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-800/90 via-slate-800/30 to-transparent"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-slate-900/80 p-3 rounded-full backdrop-blur-sm">
                    <Github className="w-8 h-8 text-white" />
                  </div>
                </div>
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
                
                {/* Special note for data pipeline project */}
                {project.needsAccess && (
                  <div className="bg-cyan-900/20 border border-cyan-500/30 rounded-lg p-3">
                    <p className="text-cyan-400 text-xs">
                      💼 This is a workplace simulation app. Contact me to request user access for demo purposes.
                    </p>
                  </div>
                )}
                
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
                    className="border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-slate-300 bg-slate-700/50 flex-1"
                    onClick={() => window.open(project.codeUrl, '_blank')}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                  
                  {project.hasDemo && project.liveUrl && (
                    <Button
                      size="sm"
                      className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-slate-900 font-semibold flex-1"
                      onClick={() => window.open(project.liveUrl, '_blank')}
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
