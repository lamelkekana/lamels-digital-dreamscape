
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  const skills = [
    {
      name: "Machine Learning",
      points: ["Advanced algorithm implementation", "Model optimization and tuning"]
    },
    {
      name: "Data Analysis",
      points: ["Statistical modeling", "Predictive analytics"]
    },
    {
      name: "Deep Learning",
      points: ["Neural network architectures", "Computer vision applications"]
    },
    {
      name: "Data Visualization",
      points: ["Interactive dashboards", "Statistical graphics"]
    },
    {
      name: "Big Data",
      points: ["Distributed computing", "Real-time data processing"]
    }
  ];

  const tools = [
    "Python", "R", "SQL", "TensorFlow", "PyTorch", "Scikit-learn",
    "Pandas", "NumPy", "Matplotlib", "Seaborn", "Tableau", "Power BI",
    "Apache Spark", "Hadoop", "Docker", "AWS", "Google Cloud", "Azure"
  ];

  return (
    <div className="min-h-screen pt-8">
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h1>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            I'm a passionate data scientist with expertise in machine learning, statistical analysis, 
            and data visualization. I love transforming complex data into actionable insights that 
            drive business decisions. With a strong foundation in mathematics and computer science, 
            I tackle challenging problems with innovative solutions.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Skills Card */}
          <Card className="bg-slate-800/50 border-slate-700 card-hover">
            <CardHeader>
              <CardTitle className="text-2xl font-bold gradient-text">Skills</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {skills.map((skill, index) => (
                <div key={skill.name} className="flex items-start">
                  <div className="flex flex-col items-center mr-4 mt-1">
                    <div className="w-1 h-6 bg-gradient-to-b from-cyan-500 to-blue-500 rounded-full"></div>
                    {index < skills.length - 1 && (
                      <div className="w-px h-8 bg-slate-600 mt-1"></div>
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-slate-200 mb-2">
                      {skill.name}
                    </h3>
                    <ul className="space-y-1">
                      {skill.points.map((point, idx) => (
                        <li key={idx} className="text-slate-400 text-sm">
                          • {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Tools & Platforms Card */}
          <Card className="bg-slate-800/50 border-slate-700 card-hover">
            <CardHeader>
              <CardTitle className="text-2xl font-bold gradient-text">Tools & Platforms</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 gap-3">
                {tools.map((tool, index) => (
                  <div key={tool} className="flex items-center">
                    <div className="w-1 h-4 bg-gradient-to-b from-cyan-500 to-blue-500 rounded-full mr-3"></div>
                    <span className="text-slate-300">{tool}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;
