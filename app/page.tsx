import Link from 'next/link';
import TerminalSidebar from './components/TerminalSidebar';

export default function Home() {
  return (
      <div className="flex">
      <TerminalSidebar />
      <main className="flex-1 lg:ml-80 min-h-screen bg-black text-white relative overflow-hidden">
      {/* Stronger grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.08)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none" />
      
      {/* More visible scanline effect */}
      <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,255,255,0.05)_50%)] bg-[length:100%_4px] pointer-events-none animate-scan" />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-transparent to-purple-900/30 pointer-events-none" />

      {/* Vignette effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="flex flex-col items-center justify-center min-h-[80vh] text-center">
          
          {/* Technical label in corner with flicker */}
          <div className="absolute top-8 right-8 font-mono text-xs text-cyan-400 border border-cyan-400/40 px-3 py-1 bg-cyan-400/10 animate-pulse">
            <span className="text-cyan-300">STATUS:</span> AVAILABLE
          </div>

          {/* Name with stronger glow */}
          <h1 
            className="text-7xl font-bold mb-6 tracking-tight animate-glow" 
            style={{ textShadow: '0 0 30px rgba(0,255,255,0.5), 0 0 60px rgba(0,255,255,0.3)' }}
          >
            Siddharth Dash
          </h1>
          
          {/* Tagline with terminal prompt */}
          <p className="text-3xl mb-4 text-cyan-400 font-mono">
            <span className="text-green-400">$</span> whoami
            <span className="text-white ml-3">→</span> DevOps Engineer | Platform Engineer | SRE | Cloud Engineer
          </p>
          
          {/* Subtitle */}
          <p className="text-xl text-gray-300 max-w-2xl mb-12 leading-relaxed">
            Building scalable infrastructure and automating deployments with Kubernetes, 
            Terraform, and CI/CD pipelines. <span className="text-cyan-400 font-bold">3+ years</span> of production experience 
            across multi-cloud environments.
          </p>

          {/* CTA Buttons with stronger glow on hover */}
          <div className="flex gap-4 mb-16 flex-wrap justify-center">
            <a 
              href="https://github.com/siddharthdashcsye6225" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-cyan-500 hover:bg-cyan-400 text-black font-bold rounded transition-all hover:shadow-[0_0_30px_rgba(0,255,255,0.7)] hover:scale-105"
            >
              GitHub
            </a>
            <a 
              href="https://www.linkedin.com/in/dash-siddharth" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-transparent border-2 border-cyan-500 hover:bg-cyan-500/20 text-cyan-400 font-bold rounded transition-all hover:shadow-[0_0_30px_rgba(0,255,255,0.5)] hover:scale-105"
            >
              LinkedIn
            </a>
            <Link 
              href="/about"
              className="px-8 py-3 bg-transparent border-2 border-purple-500 hover:bg-purple-500/20 text-purple-400 font-bold rounded transition-all hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] hover:scale-105 inline-block"
            >
              About Me
            </Link>
            <Link 
              href="/projects"
              className="px-8 py-3 bg-purple-600 hover:bg-purple-500 text-white font-bold rounded transition-all hover:shadow-[0_0_30px_rgba(168,85,247,0.7)] hover:scale-105 inline-block"
            >
              View Projects →
            </Link>
          </div>

          {/* Quick Stats with technical labels and glow */}
          <div className="grid grid-cols-3 gap-8 text-center">
            <div className="border border-cyan-500/40 bg-cyan-500/10 p-6 rounded backdrop-blur-sm hover:border-cyan-500/70 hover:shadow-[0_0_20px_rgba(0,255,255,0.3)] transition-all group">
              <div className="text-xs text-cyan-400/80 font-mono mb-2 tracking-wider">METRIC_01</div>
              <div className="text-4xl font-bold text-cyan-400 group-hover:text-cyan-300 transition-colors">99.9%</div>
              <div className="text-sm text-gray-400 mt-2">Uptime Achieved</div>
            </div>
            <div className="border border-purple-500/40 bg-purple-500/10 p-6 rounded backdrop-blur-sm hover:border-purple-500/70 hover:shadow-[0_0_20px_rgba(168,85,247,0.3)] transition-all group">
              <div className="text-xs text-purple-400/80 font-mono mb-2 tracking-wider">METRIC_02</div>
              <div className="text-4xl font-bold text-purple-400 group-hover:text-purple-300 transition-colors">240K+</div>
              <div className="text-sm text-gray-400 mt-2">CVEs Monitored</div>
            </div>
            <div className="border border-green-500/40 bg-green-500/10 p-6 rounded backdrop-blur-sm hover:border-green-500/70 hover:shadow-[0_0_20px_rgba(0,255,0,0.3)] transition-all group">
              <div className="text-xs text-green-400/80 font-mono mb-2 tracking-wider">METRIC_03</div>
              <div className="text-4xl font-bold text-green-400 group-hover:text-green-300 transition-colors">70%</div>
              <div className="text-sm text-gray-400 mt-2">Latency Reduction</div>
            </div>
          </div>

        </div>
      </div>

      {/* Terminal aesthetic footer */}
      <div className="fixed bottom-0 left-0 lg:left-80 right-0 bg-black/90 backdrop-blur border-t border-cyan-500/40 px-6 py-3 font-mono text-sm text-cyan-400 z-20 shadow-[0_-5px_20px_rgba(0,255,255,0.1)]">
        <div className="container mx-auto flex justify-between items-center">
          <div>
            <span className="text-green-400">user@portfolio</span>
            <span className="text-gray-500">:</span>
            <span className="text-blue-400">~</span>
            <span className="text-white">$ </span>
            kubectl get status --selector=career
            <span className="animate-pulse ml-1">█</span>
          </div>
          <div className="text-xs text-gray-500">
            LAST_DEPLOY: {new Date().toISOString().split('T')[0]}
          </div>
        </div>
      </div>
    </main>
    </div>
  );
}