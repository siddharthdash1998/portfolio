import Link from 'next/link';

export default function ProjectsPage() {
  const projects = [
    {
      id: 'llamacve',
      title: 'LLaMaCVE',
      subtitle: 'AI-Powered CVE Intelligence Platform',
      description: 'Real-time vulnerability monitoring with RAG-based LLM analysis',
      tags: ['Kubernetes', 'Go', 'Kafka', 'LLM', 'Terraform'],
      metrics: [
        { label: 'CVEs Tracked', value: '240K+' },
        { label: 'Uptime', value: '99.9%' },
        { label: 'Latency', value: '<2s' }
      ]
    },
    {
      id: 'webapp',
      title: 'Cloud Native WebApp',
      subtitle: 'Production-Grade GCP Infrastructure',
      description: 'RESTful API with automated CI/CD and infrastructure as code',
      tags: ['GCP', 'FastAPI', 'Terraform', 'Packer', 'GitHub Actions'],
      metrics: [
        { label: 'Deploy Time', value: '50% faster' },
        { label: 'Availability', value: '99.9%' },
        { label: 'Security', value: 'TLS + KMS' }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white p-8">
      {/* Grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.08)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl font-bold mb-4" style={{ textShadow: '0 0 30px rgba(0,255,255,0.5)' }}>
            Projects
          </h1>
          <p className="text-xl text-gray-400">
            Production-grade infrastructure and automation projects
          </p>
          <div className="text-cyan-400 font-mono text-sm mt-2">
            $ kubectl get projects --namespace=portfolio
          </div>
        </div>

        {/* Project cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Link
              key={project.id}
              href={`/projects/${project.id}`}
              className="group border border-cyan-500/30 bg-cyan-500/5 rounded-lg p-6 hover:border-cyan-500/60 hover:shadow-[0_0_30px_rgba(0,255,255,0.2)] transition-all backdrop-blur-sm"
            >
              {/* Project header */}
              <div className="mb-4">
                <div className="text-xs text-cyan-400/60 font-mono mb-2">PROJECT_{project.id.toUpperCase()}</div>
                <h2 className="text-3xl font-bold text-cyan-400 group-hover:text-cyan-300 transition-colors mb-2">
                  {project.title}
                </h2>
                <p className="text-purple-400 font-medium">{project.subtitle}</p>
              </div>

              {/* Description */}
              <p className="text-gray-400 mb-4">{project.description}</p>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-1 bg-purple-500/20 text-purple-300 border border-purple-500/30 rounded font-mono"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-3 gap-4 mb-4">
                {project.metrics.map((metric) => (
                  <div key={metric.label} className="text-center">
                    <div className="text-sm text-cyan-400 font-bold">{metric.value}</div>
                    <div className="text-xs text-gray-500">{metric.label}</div>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="flex items-center text-cyan-400 group-hover:text-cyan-300 font-mono text-sm">
                View Details
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}