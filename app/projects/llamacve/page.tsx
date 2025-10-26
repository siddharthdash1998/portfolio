import Image from 'next/image';
import Link from 'next/link';

export default function LLaMaCVEPage() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      {/* Grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.08)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none" />
      
      <div className="relative z-10 max-w-5xl mx-auto">
        
        {/* Header */}
        <div className="mb-12">
          <div className="text-cyan-400 font-mono text-sm mb-4">
            $ cat ~/projects/llamacve/README.md
          </div>
          <h1 className="text-6xl font-bold mb-4 text-cyan-400" style={{ textShadow: '0 0 30px rgba(0,255,255,0.5)' }}>
            LLaMaCVE
          </h1>
          <p className="text-2xl text-purple-400 mb-6">
            AI-Powered CVE Intelligence Platform
          </p>
          <div className="flex gap-4">
            <a
              href="https://github.com/cyse7125-su24-team10"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-cyan-500/20 border border-cyan-500/50 text-cyan-400 rounded hover:bg-cyan-500/30 transition-all font-mono text-sm"
            >
              <span className="text-green-400">→</span> View on GitHub
            </a>
          </div>
        </div>

        {/* The Problem */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-cyan-400 border-b border-cyan-500/30 pb-2">
            // The Problem
          </h2>
          <div className="bg-cyan-500/5 border border-cyan-500/30 rounded-lg p-6 backdrop-blur-sm">
            <h3 className="text-xl font-bold text-purple-400 mb-4">
              Real-Time Vulnerability Intelligence at Scale
            </h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Organizations struggle to stay current with 240,000+ Common Vulnerabilities and Exposures (CVEs) 
              and need intelligent, real-time vulnerability analysis to prioritize security responses effectively.
            </p>
            <div className="grid md:grid-cols-3 gap-4 mt-6">
              <div className="bg-red-500/10 border border-red-500/30 rounded p-4">
                <div className="text-red-400 font-bold mb-2">Challenge 1</div>
                <div className="text-sm text-gray-400">Manual CVE tracking across 240K+ vulnerabilities</div>
              </div>
              <div className="bg-red-500/10 border border-red-500/30 rounded p-4">
                <div className="text-red-400 font-bold mb-2">Challenge 2</div>
                <div className="text-sm text-gray-400">Lack of contextual AI-driven vulnerability insights</div>
              </div>
              <div className="bg-red-500/10 border border-red-500/30 rounded p-4">
                <div className="text-red-400 font-bold mb-2">Challenge 3</div>
                <div className="text-sm text-gray-400">No semantic search for security researchers</div>
              </div>
            </div>
          </div>
        </section>

        {/* My Role */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-cyan-400 border-b border-cyan-500/30 pb-2">
            // My Role
          </h2>
          <div className="bg-purple-500/5 border border-purple-500/30 rounded-lg p-6 backdrop-blur-sm">
            <p className="text-lg text-gray-300 mb-4">
              <span className="text-purple-400 font-bold">DevOps Engineer & Infrastructure Lead</span>
            </p>
            <p className="text-gray-300 leading-relaxed">
              Designed and implemented the entire production infrastructure on AWS EKS, including custom Kubernetes 
              operators, event streaming pipelines, CI/CD automation, security hardening, and full-stack observability. 
              Built a self-hosted RAG-based LLM system with enterprise-grade reliability and security.
            </p>
          </div>
        </section>

        {/* Architecture Diagrams */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-cyan-400 border-b border-cyan-500/30 pb-2">
            // Architecture
          </h2>
          
          {/* AWS Infrastructure */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-purple-400 mb-4">AWS EKS Infrastructure</h3>
            <div className="bg-gray-900/50 border border-cyan-500/30 rounded-lg p-4 backdrop-blur-sm">
              <Image
                src="/diagrams/aws_diagram.jpeg"
                alt="AWS EKS Architecture"
                width={1200}
                height={800}
                className="w-full h-auto rounded"
              />
            </div>
            <p className="text-gray-400 text-sm mt-2">
              Production Kubernetes cluster on AWS EKS with multi-AZ deployment, auto-scaling, and Istio service mesh
            </p>
          </div>

          {/* Main Architecture */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-purple-400 mb-4">System Architecture</h3>
            <div className="bg-gray-900/50 border border-cyan-500/30 rounded-lg p-4 backdrop-blur-sm">
              <Image
                src="/diagrams/architecture_diagram.jpeg"
                alt="System Architecture"
                width={1200}
                height={800}
                className="w-full h-auto rounded"
              />
            </div>
            <p className="text-gray-400 text-sm mt-2">
              Event-driven architecture with Kafka streaming, custom K8s operator, and PostgreSQL + Pinecone data layer
            </p>
          </div>

          {/* RAG Pipeline */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-purple-400 mb-4">RAG Pipeline Architecture</h3>
            <div className="bg-gray-900/50 border border-cyan-500/30 rounded-lg p-4 backdrop-blur-sm">
              <Image
                src="/diagrams/rag.jpeg"
                alt="RAG Pipeline"
                width={1200}
                height={800}
                className="w-full h-auto rounded"
              />
            </div>
            <p className="text-gray-400 text-sm mt-2">
              Retrieval-Augmented Generation pipeline with LLaMA 3.1, Pinecone vector search, and LangChain integration
            </p>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-cyan-400 border-b border-cyan-500/30 pb-2">
            // Tech Stack
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            
            {/* Infrastructure & Orchestration */}
            <div className="bg-cyan-500/5 border border-cyan-500/30 rounded-lg p-6 backdrop-blur-sm">
              <h3 className="text-lg font-bold text-cyan-400 mb-4 font-mono">Infrastructure & Orchestration</h3>
              <div className="space-y-2">
                {[
                  { name: 'Amazon EKS', purpose: 'Managed Kubernetes cluster' },
                  { name: 'Kubernetes Operator (Go)', purpose: 'Custom CVE monitoring controller' },
                  { name: 'Helm', purpose: 'Package management & templating' },
                  { name: 'Terraform', purpose: 'Infrastructure as Code' }
                ].map((tech) => (
                  <div key={tech.name} className="flex justify-between items-start">
                    <span className="text-cyan-300 font-mono text-sm">{tech.name}</span>
                    <span className="text-gray-500 text-xs text-right ml-4">{tech.purpose}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CI/CD & Automation */}
            <div className="bg-purple-500/5 border border-purple-500/30 rounded-lg p-6 backdrop-blur-sm">
              <h3 className="text-lg font-bold text-purple-400 mb-4 font-mono">CI/CD & Automation</h3>
              <div className="space-y-2">
                {[
                  { name: 'Jenkins', purpose: 'Automated build pipelines' },
                  { name: 'Packer', purpose: 'Custom AMI creation' },
                  { name: 'Semantic Release', purpose: 'Automated versioning' },
                  { name: 'Docker', purpose: 'Container image management' }
                ].map((tech) => (
                  <div key={tech.name} className="flex justify-between items-start">
                    <span className="text-purple-300 font-mono text-sm">{tech.name}</span>
                    <span className="text-gray-500 text-xs text-right ml-4">{tech.purpose}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Data Pipeline */}
            <div className="bg-green-500/5 border border-green-500/30 rounded-lg p-6 backdrop-blur-sm">
              <h3 className="text-lg font-bold text-green-400 mb-4 font-mono">Data Pipeline</h3>
              <div className="space-y-2">
                {[
                  { name: 'Apache Kafka', purpose: 'Event streaming (99.9% uptime)' },
                  { name: 'PostgreSQL', purpose: 'Relational data storage' },
                  { name: 'Pinecone', purpose: 'Vector database for embeddings' },
                  { name: 'Flyway', purpose: 'Database migrations' }
                ].map((tech) => (
                  <div key={tech.name} className="flex justify-between items-start">
                    <span className="text-green-300 font-mono text-sm">{tech.name}</span>
                    <span className="text-gray-500 text-xs text-right ml-4">{tech.purpose}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* AI/ML */}
            <div className="bg-yellow-500/5 border border-yellow-500/30 rounded-lg p-6 backdrop-blur-sm">
              <h3 className="text-lg font-bold text-yellow-400 mb-4 font-mono">AI/ML Stack</h3>
              <div className="space-y-2">
                {[
                  { name: 'LLaMA 3.1 (8B)', purpose: 'Self-hosted LLM' },
                  { name: 'Ollama', purpose: 'LLM runtime' },
                  { name: 'LangChain', purpose: 'RAG orchestration' },
                  { name: 'Hugging Face', purpose: 'Text embeddings' }
                ].map((tech) => (
                  <div key={tech.name} className="flex justify-between items-start">
                    <span className="text-yellow-300 font-mono text-sm">{tech.name}</span>
                    <span className="text-gray-500 text-xs text-right ml-4">{tech.purpose}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Security */}
            <div className="bg-red-500/5 border border-red-500/30 rounded-lg p-6 backdrop-blur-sm">
              <h3 className="text-lg font-bold text-red-400 mb-4 font-mono">Security</h3>
              <div className="space-y-2">
                {[
                  { name: 'Istio mTLS', purpose: 'Service mesh encryption' },
                  { name: 'Cert-Manager', purpose: 'Automated TLS certificates' },
                  { name: 'IAM Policies', purpose: 'AWS access control' },
                  { name: 'CIS Benchmarks', purpose: 'Security compliance' }
                ].map((tech) => (
                  <div key={tech.name} className="flex justify-between items-start">
                    <span className="text-red-300 font-mono text-sm">{tech.name}</span>
                    <span className="text-gray-500 text-xs text-right ml-4">{tech.purpose}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Observability */}
            <div className="bg-blue-500/5 border border-blue-500/30 rounded-lg p-6 backdrop-blur-sm">
              <h3 className="text-lg font-bold text-blue-400 mb-4 font-mono">Observability</h3>
              <div className="space-y-2">
                {[
                  { name: 'Prometheus', purpose: 'Metrics collection' },
                  { name: 'Grafana', purpose: 'Visualization dashboards' },
                  { name: 'CloudWatch', purpose: 'AWS monitoring' },
                  { name: 'Istio Ingress', purpose: 'Gateway metrics' }
                ].map((tech) => (
                  <div key={tech.name} className="flex justify-between items-start">
                    <span className="text-blue-300 font-mono text-sm">{tech.name}</span>
                    <span className="text-gray-500 text-xs text-right ml-4">{tech.purpose}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* Key Achievements */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-cyan-400 border-b border-cyan-500/30 pb-2">
            // Key Achievements
          </h2>
          <div className="space-y-4">
            {[
              {
                title: 'Custom Kubernetes Operator',
                description: 'Developed a Go-based operator to monitor 240K+ CVEs in real-time',
                metric: '70% reduction in vulnerability detection latency',
                color: 'cyan'
              },
              {
                title: 'Event-Driven Architecture',
                description: 'Engineered Kafka-based streaming pipeline processing 240K+ CVE records',
                metric: '99.9% uptime, 4× throughput improvement',
                color: 'purple'
              },
              {
                title: 'RAG Pipeline',
                description: 'Built Retrieval-Augmented Generation system with Ollama LLM and LangChain',
                metric: '<2s response latency',
                color: 'green'
              },
              {
                title: 'Semantic Search',
                description: 'Implemented AI query system using Hugging Face embeddings',
                metric: '85% improvement in search relevance',
                color: 'yellow'
              },
              {
                title: 'Production-Grade Security',
                description: 'Deployed Istio mTLS, multi-AZ architecture, and IAM encryption',
                metric: '100% TLS coverage, 3× fault tolerance increase',
                color: 'red'
              },
              {
                title: 'CI/CD Automation',
                description: 'Automated pipelines with Jenkins, Helm linting, and semantic versioning',
                metric: '90% reduction in deployment errors',
                color: 'blue'
              },
              {
                title: 'Full-Stack Observability',
                description: 'Integrated Prometheus + Grafana for real-time monitoring',
                metric: 'AI pipeline health, Kafka throughput, K8s metrics',
                color: 'cyan'
              }
            ].map((achievement, idx) => (
              <div
                key={idx}
                className={`bg-${achievement.color}-500/5 border border-${achievement.color}-500/30 rounded-lg p-6 backdrop-blur-sm hover:border-${achievement.color}-500/50 transition-all group`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className={`text-lg font-bold text-${achievement.color}-400 mb-2 group-hover:text-${achievement.color}-300 transition-colors`}>
                      {achievement.title}
                    </h3>
                    <p className="text-gray-300 mb-2">{achievement.description}</p>
                    <div className={`text-${achievement.color}-400 font-mono text-sm`}>
                      → {achievement.metric}
                    </div>
                  </div>
                  <div className="text-4xl opacity-20 ml-4">{idx + 1}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Impact Metrics */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-cyan-400 border-b border-cyan-500/30 pb-2">
            // Impact
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { label: 'CVEs Tracked', value: '240K+', color: 'cyan' },
              { label: 'System Uptime', value: '99.9%', color: 'green' },
              { label: 'Response Time', value: '<2s', color: 'purple' },
              { label: 'Deployment Errors', value: '-90%', color: 'red' }
            ].map((metric) => (
              <div
                key={metric.label}
                className={`bg-${metric.color}-500/10 border border-${metric.color}-500/30 rounded-lg p-6 text-center backdrop-blur-sm hover:border-${metric.color}-500/60 transition-all`}
              >
                <div className={`text-4xl font-bold text-${metric.color}-400 mb-2`}>{metric.value}</div>
                <div className="text-gray-400 text-sm">{metric.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Footer CTA */}
        <div className="border-t border-cyan-500/30 pt-8 text-center">
          <a
            href="https://github.com/cyse7125-su24-team10"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-cyan-500 hover:bg-cyan-400 text-black font-bold rounded transition-all hover:shadow-[0_0_30px_rgba(0,255,255,0.7)] hover:scale-105"
          >
            View Full Source Code on GitHub →
          </a>
        </div>

      </div>
    </div>
  );
}