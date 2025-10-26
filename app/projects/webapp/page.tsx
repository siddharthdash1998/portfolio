import Image from 'next/image';
import Link from 'next/link';

export default function WebAppPage() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      {/* Grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.08)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none" />
      
      <div className="relative z-10 max-w-5xl mx-auto">
        
        {/* Header */}
        <div className="mb-12">
          <div className="text-cyan-400 font-mono text-sm mb-4">
            $ cat ~/projects/webapp/README.md
          </div>
          <h1 className="text-6xl font-bold mb-4 text-cyan-400" style={{ textShadow: '0 0 30px rgba(0,255,255,0.5)' }}>
            Cloud Native WebApp
          </h1>
          <p className="text-2xl text-purple-400 mb-6">
            Production-Grade GCP Infrastructure with CI/CD
          </p>
          <div className="flex gap-4">
            <a
              href="https://github.com/siddharthdashcsye6225"
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
            // The Challenge
          </h2>
          <div className="bg-cyan-500/5 border border-cyan-500/30 rounded-lg p-6 backdrop-blur-sm">
            <h3 className="text-xl font-bold text-purple-400 mb-4">
              Building Production-Ready Cloud Infrastructure
            </h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Organizations need secure, scalable cloud infrastructure that combines Infrastructure as Code, 
              automated CI/CD pipelines, and production-grade security - all while maintaining cost efficiency 
              and deployment velocity.
            </p>
            <div className="grid md:grid-cols-3 gap-4 mt-6">
              <div className="bg-red-500/10 border border-red-500/30 rounded p-4">
                <div className="text-red-400 font-bold mb-2">Challenge 1</div>
                <div className="text-sm text-gray-400">Manual infrastructure provisioning slows deployment cycles</div>
              </div>
              <div className="bg-red-500/10 border border-red-500/30 rounded p-4">
                <div className="text-red-400 font-bold mb-2">Challenge 2</div>
                <div className="text-sm text-gray-400">Lack of automation in testing and deployment workflows</div>
              </div>
              <div className="bg-red-500/10 border border-red-500/30 rounded p-4">
                <div className="text-red-400 font-bold mb-2">Challenge 3</div>
                <div className="text-sm text-gray-400">Insufficient observability and security hardening</div>
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
              <span className="text-purple-400 font-bold">DevOps Engineer & Infrastructure Architect</span>
            </p>
            <p className="text-gray-300 leading-relaxed">
              Designed and implemented the complete cloud infrastructure on GCP using Terraform, built automated 
              CI/CD pipelines with GitHub Actions, created custom machine images with Packer, and established 
              production-grade observability, security, and auto-scaling capabilities.
            </p>
          </div>
        </section>

        {/* Architecture Diagram */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-cyan-400 border-b border-cyan-500/30 pb-2">
            // Architecture
          </h2>
          
          <div className="mb-8">
            <h3 className="text-xl font-bold text-purple-400 mb-4">GCP Infrastructure Architecture</h3>
            <div className="bg-gray-900/50 border border-cyan-500/30 rounded-lg p-4 backdrop-blur-sm">
              <Image
                src="/diagrams/cloudnative_diagram.jpeg"
                alt="Cloud Native WebApp Architecture"
                width={1200}
                height={800}
                className="w-full h-auto rounded"
              />
            </div>
            <p className="text-gray-400 text-sm mt-2">
              Production infrastructure on GCP with VPC isolation, Cloud SQL, auto-scaling managed instance groups, 
              and Google-managed SSL load balancer
            </p>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-cyan-400 border-b border-cyan-500/30 pb-2">
            // Tech Stack
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            
            {/* Infrastructure & IaC */}
            <div className="bg-cyan-500/5 border border-cyan-500/30 rounded-lg p-6 backdrop-blur-sm">
              <h3 className="text-lg font-bold text-cyan-400 mb-4 font-mono">Infrastructure & IaC</h3>
              <div className="space-y-2">
                {[
                  { name: 'Google Cloud Platform', purpose: 'Cloud provider' },
                  { name: 'Terraform', purpose: 'Infrastructure as Code' },
                  { name: 'Packer', purpose: 'Custom image building' },
                  { name: 'Cloud DNS', purpose: 'Domain management' }
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
                  { name: 'GitHub Actions', purpose: 'CI/CD pipelines' },
                  { name: 'Cloud Build', purpose: 'Automated builds' },
                  { name: 'Cloud Functions', purpose: 'Serverless automation' },
                  { name: 'Cloud Pub/Sub', purpose: 'Event-driven workflows' }
                ].map((tech) => (
                  <div key={tech.name} className="flex justify-between items-start">
                    <span className="text-purple-300 font-mono text-sm">{tech.name}</span>
                    <span className="text-gray-500 text-xs text-right ml-4">{tech.purpose}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Application */}
            <div className="bg-green-500/5 border border-green-500/30 rounded-lg p-6 backdrop-blur-sm">
              <h3 className="text-lg font-bold text-green-400 mb-4 font-mono">Application Layer</h3>
              <div className="space-y-2">
                {[
                  { name: 'FastAPI', purpose: 'RESTful API framework' },
                  { name: 'Python', purpose: 'Application language' },
                  { name: 'SQLAlchemy', purpose: 'Database ORM' },
                  { name: 'Pytest', purpose: 'Testing framework' }
                ].map((tech) => (
                  <div key={tech.name} className="flex justify-between items-start">
                    <span className="text-green-300 font-mono text-sm">{tech.name}</span>
                    <span className="text-gray-500 text-xs text-right ml-4">{tech.purpose}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Data & Storage */}
            <div className="bg-yellow-500/5 border border-yellow-500/30 rounded-lg p-6 backdrop-blur-sm">
              <h3 className="text-lg font-bold text-yellow-400 mb-4 font-mono">Data & Storage</h3>
              <div className="space-y-2">
                {[
                  { name: 'Cloud SQL', purpose: 'Managed PostgreSQL' },
                  { name: 'Cloud Storage (GCS)', purpose: 'Object storage' },
                  { name: 'Cloud KMS', purpose: 'Encryption key management' },
                  { name: 'VPC Peering', purpose: 'Private connectivity' }
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
                  { name: 'SSL/TLS', purpose: 'Google-managed certificates' },
                  { name: 'VPC', purpose: 'Network isolation' },
                  { name: 'Cloud KMS', purpose: 'Data encryption at rest' },
                  { name: 'IAM', purpose: 'Access control' }
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
                  { name: 'Cloud Logging', purpose: 'Centralized logs' },
                  { name: 'Cloud Monitoring', purpose: 'Metrics & alerts' },
                  { name: 'Ops Agent', purpose: 'System metrics collection' },
                  { name: 'Health Checks', purpose: 'Service availability' }
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
                title: 'RESTful API Development',
                description: 'Built FastAPI services with user authentication, comprehensive testing (unit & integration), and efficient resource management',
                metric: 'Full CRUD operations with validation',
                color: 'cyan'
              },
              {
                title: 'Automated CI/CD Pipeline',
                description: 'Orchestrated GitHub Actions workflows for continuous integration and deployment',
                metric: 'Automated testing, building, and deployment',
                color: 'purple'
              },
              {
                title: 'Custom Machine Images',
                description: 'Built Packer-based custom images with pre-installed dependencies',
                metric: '50% reduction in deployment time',
                color: 'green'
              },
              {
                title: 'Enhanced Observability',
                description: 'Implemented Cloud Logging and Monitoring with secure VPC architecture',
                metric: 'Real-time visibility into system health',
                color: 'yellow'
              },
              {
                title: 'Email Verification Automation',
                description: 'Automated email verification using Cloud Pub/Sub and Cloud Functions',
                metric: 'Event-driven serverless architecture',
                color: 'red'
              },
              {
                title: 'Auto-Scaling & Load Balancing',
                description: 'Implemented managed instance groups with auto-scaling policies',
                metric: '99.9% availability with elastic scaling',
                color: 'blue'
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
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { label: 'Deployment Time', value: '-50%', color: 'cyan' },
              { label: 'Availability', value: '99.9%', color: 'green' },
              { label: 'Automation', value: '100%', color: 'purple' }
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
            href="https://github.com/siddharthdashcsye6225"
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