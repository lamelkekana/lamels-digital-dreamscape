
import { Monitor, Database, Cloud, Activity, BarChart3, Server } from "lucide-react";
import { useEffect, useState } from "react";

const TechScreen = () => {
  const [dataPoints, setDataPoints] = useState<Array<{ id: number; x: number; y: number; delay: number }>>([]);

  useEffect(() => {
    const points = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 3,
    }));
    setDataPoints(points);
  }, []);

  return (
    <div className="relative w-80 h-80 bg-slate-800/20 backdrop-blur-sm rounded-2xl border border-cyan-500/30 overflow-hidden">
      {/* Screen Border with Glow */}
      <div className="absolute inset-0 rounded-2xl pulse-glow"></div>
      
      {/* Screen Content */}
      <div className="relative h-full p-6 flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <Monitor className="w-5 h-5 text-cyan-400" />
            <span className="text-cyan-400 text-sm font-mono">DATA_TERMINAL</span>
          </div>
          <div className="flex space-x-1">
            <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>

        {/* Data Visualization Area */}
        <div className="flex-1 relative">
          {/* Animated Grid */}
          <div className="absolute inset-0 opacity-20">
            <div className="grid grid-cols-8 grid-rows-8 h-full w-full">
              {Array.from({ length: 64 }).map((_, i) => (
                <div key={i} className="border border-cyan-500/20"></div>
              ))}
            </div>
          </div>

          {/* Floating Data Points */}
          <div className="absolute inset-0">
            {dataPoints.map((point) => (
              <div
                key={point.id}
                className="absolute w-1 h-1 bg-cyan-400 rounded-full data-flow"
                style={{
                  left: `${point.x}%`,
                  top: `${point.y}%`,
                  animationDelay: `${point.delay}s`,
                }}
              ></div>
            ))}
          </div>

          {/* Tech Icons */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="grid grid-cols-3 gap-4 opacity-60">
              <Database className="w-6 h-6 text-cyan-400 animate-pulse" />
              <Cloud className="w-6 h-6 text-blue-400 animate-pulse" style={{ animationDelay: '0.5s' }} />
              <Server className="w-6 h-6 text-cyan-400 animate-pulse" style={{ animationDelay: '1s' }} />
              <Activity className="w-6 h-6 text-blue-400 animate-pulse" style={{ animationDelay: '1.5s' }} />
              <BarChart3 className="w-6 h-6 text-cyan-400 animate-pulse" style={{ animationDelay: '2s' }} />
              <Monitor className="w-6 h-6 text-blue-400 animate-pulse" style={{ animationDelay: '2.5s' }} />
            </div>
          </div>
        </div>

        {/* Status Bar */}
        <div className="mt-4 space-y-2">
          <div className="flex justify-between text-xs font-mono text-cyan-400">
            <span>CPU: 78%</span>
            <span>RAM: 4.2GB</span>
            <span>NET: 1.2Gb/s</span>
          </div>
          <div className="w-full bg-slate-700/50 rounded-full h-1">
            <div className="bg-gradient-to-r from-cyan-400 to-blue-500 h-1 rounded-full animate-pulse" style={{ width: '78%' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechScreen;
