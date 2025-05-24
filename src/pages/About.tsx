
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Database, BarChart3, PieChart, Brain, Cloud, GitBranch, Laptop, Server, FileSpreadsheet, Github, Container, Activity } from "lucide-react";

const About = () => {
  const skills = [
    {
      title: "Data Manipulation",
      icon: Database,
      points: ["Data cleaning", "Pandas, NumPy"]
    },
    {
      title: "Data Analysis",
      icon: BarChart3,
      points: ["Exploratory Data Analysis (EDA)"]
    },
    {
      title: "Data Visualization",
      icon: PieChart,
      points: ["Matplotlib, Seaborn, Plotly", "Tableau, Power BI"]
    },
    {
      title: "Machine Learning",
      icon: Brain,
      points: ["Supervised and unsupervised learning", "Scikit-learn, TensorFlow, NLP"]
    },
    {
      title: "Databases",
      icon: Server,
      points: ["SQL"]
    },
    {
      title: "Cloud Platforms",
      icon: Cloud,
      points: ["AWS", "Cloud computing, deployment and storage"]
    },
    {
      title: "Version Control",
      icon: GitBranch,
      points: ["Git/Github"]
    }
  ];

  const tools = [
    {
      title: "Jupyter notebooks/Lab",
      icon: Laptop
    },
    {
      title: "MySQL",
      icon: Server
    },
    {
      title: "Excel",
      icon: FileSpreadsheet
    },
    {
      title: "AWS",
      icon: Cloud
    },
    {
      title: "PowerBI",
      icon: Activity
    },
    {
      title: "Git/github",
      icon: Github
    },
    {
      title: "Docker",
      icon: Container
    }
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
            Passionate data scientist with expertise in machine learning, data visualization, 
            and statistical analysis. I transform complex data into actionable insights that 
            drive business decisions and create meaningful impact.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Skills Card */}
          <Card className="bg-slate-800/50 border-slate-700 card-hover">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-slate-200 mb-4">
                Skills
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {skills.map((skill, index) => (
                <div key={skill.title} className="flex items-start space-x-4">
                  <div className="w-1 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full flex-shrink-0 mt-1" style={{ height: '60px' }}></div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <skill.icon className="w-5 h-5 text-cyan-400" />
                      <h3 className="text-lg font-semibold text-slate-200">{skill.title}</h3>
                    </div>
                    <ul className="space-y-1 ml-8">
                      {skill.points.map((point, pointIndex) => (
                        <li key={pointIndex} className="text-slate-400 text-sm">• {point}</li>
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
              <CardTitle className="text-2xl font-bold text-slate-200 mb-4">
                Tools & Platforms
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {tools.map((tool, index) => (
                <div key={tool.title} className="flex items-center space-x-4">
                  <div className="w-1 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full flex-shrink-0" style={{ height: '24px' }}></div>
                  <div className="flex items-center space-x-3">
                    <tool.icon className="w-5 h-5 text-cyan-400" />
                    <span className="text-slate-300 font-medium">{tool.title}</span>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;
