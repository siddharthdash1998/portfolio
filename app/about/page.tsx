export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      {/* Grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.08)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none" />
      
      <div className="relative z-10 max-w-5xl mx-auto">
        
        {/* Header */}
        <div className="mb-12">
          <div className="text-cyan-400 font-mono text-sm mb-4">
            $ cat ~/about/profile.md
          </div>
          <h1 className="text-6xl font-bold mb-4 text-cyan-400" style={{ textShadow: '0 0 30px rgba(0,255,255,0.5)' }}>
            About Me
          </h1>
          <p className="text-2xl text-purple-400 mb-6">
            DevOps Platform Engineer | Cloud Infrastructure Specialist
          </p>
        </div>

        {/* Professional Summary */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-cyan-400 border-b border-cyan-500/30 pb-2">
            // Professional Summary
          </h2>
          <div className="bg-cyan-500/5 border border-cyan-500/30 rounded-lg p-6 backdrop-blur-sm">
            <p className="text-gray-300 leading-relaxed mb-4">
              DevOps Platform Engineer with <span className="text-cyan-400 font-bold">3+ years of experience</span> optimizing 
              multi-cloud (Azure, AWS, GCP) infrastructure and ensuring compliance across enterprise and fintech environments.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Skilled in automating deployments through CI/CD pipelines (Jenkins, GitHub Actions, Azure DevOps) and leveraging 
              Kubernetes, Docker, and Infrastructure as Code to deliver secure, cost-efficient, and scalable systems.
            </p>
          </div>
        </section>

        {/* Work Experience */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-cyan-400 border-b border-cyan-500/30 pb-2">
            // Work Experience
          </h2>
          
          {/* PanAgora */}
          <div className="mb-8 bg-purple-500/5 border border-purple-500/30 rounded-lg p-6 backdrop-blur-sm">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-2xl font-bold text-purple-400">Platform DevOps Engineer Co-op</h3>
                <p className="text-cyan-400 font-mono">PanAgora Asset Management</p>
              </div>
              <div className="text-gray-400 text-sm">Jan 2025 – Aug 2025</div>
            </div>
            <div className="space-y-2 text-gray-300">
              <p>• Managed production AI/ML infrastructure with <span className="text-cyan-400">300+ Azure resources</span> using Bicep and PowerShell for IaC & policy-based IAM governance</p>
              <p>• Enhanced CI/CD pipelines using Azure DevOps, cutting build agent provisioning time by <span className="text-green-400">90%</span> via Packer-based image templating</p>
              <p>• Automated data collection via Azure Runbooks, ingesting <span className="text-cyan-400">10K+ telemetry data points daily</span> into Log Analytics Workspace</p>
              <p>• Implemented Grafana on Azure Container Apps, monitoring 30+ Azure OpenAI and ML services, reducing manual reporting effort by <span className="text-green-400">80%</span></p>
              <p>• Automated Linux and Windows Server Golden Image creation with Arctic Wolf & SentinelOne integration, reducing manual setup time by <span className="text-green-400">70%</span></p>
              <p>• Developed auto-tagging & budget control via Azure Functions, saving <span className="text-green-400">$1,000/month</span></p>
              <p>• Implemented OAuth 2.0, JWT, and TLS security policies across 15+ internal APIs, leading to <span className="text-green-400">15% cost reduction</span> in private networking</p>
              <p>• Containerized 10+ legacy applications, reducing deployment failures by <span className="text-green-400">~60%</span></p>
            </div>
          </div>

          {/* GAP Inc */}
          <div className="bg-purple-500/5 border border-purple-500/30 rounded-lg p-6 backdrop-blur-sm">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-2xl font-bold text-purple-400">DevOps Engineer (Database Engineering)</h3>
                <p className="text-cyan-400 font-mono">GAP Inc</p>
              </div>
              <div className="text-gray-400 text-sm">Jun 2020 – Jun 2023</div>
            </div>
            <div className="space-y-2 text-gray-300">
              <p>• Promoted from Associate to Software Engineer in 1 year; led automation initiatives & mentored 5 engineers</p>
              <p>• Administered multi-cloud database infrastructure (Oracle, Redis, PostgreSQL) across on-prem & cloud, managing <span className="text-cyan-400">500+ instances</span></p>
              <p>• Created CI/CD pipelines with Jenkins & Groovy, saving <span className="text-green-400">100+ hours monthly</span></p>
              <p>• Built observability stack (New Relic, Nagios, Grafana, Splunk), ensuring <span className="text-green-400">99.99% SLI/SLO/SLA</span> compliance</p>
              <p>• Led zero-downtime Redis migration, delivering <span className="text-green-400">$738K annual savings</span> and cutting downtime incidents by <span className="text-green-400">40%</span></p>
              <p>• Contributed to migration of 50+ PostgreSQL databases to Kubernetes using Percona Operator</p>
              <p>• Built Python-based self-service portal, reducing DBA intervention by <span className="text-green-400">~70%</span> and accelerating delivery timelines by <span className="text-green-400">3×</span></p>
              <p>• Developed Ansible playbooks automating PostgreSQL/Oracle provisioning across 100+ environments, cutting setup time from <span className="text-red-400">~2 days to under 1 hour</span></p>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-cyan-400 border-b border-cyan-500/30 pb-2">
            // Technical Skills
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* Programming */}
            <div className="bg-cyan-500/5 border border-cyan-500/30 rounded-lg p-6 backdrop-blur-sm">
              <h3 className="text-lg font-bold text-cyan-400 mb-4 font-mono">Programming & Scripting</h3>
              <div className="flex flex-wrap gap-2">
                {['Python', 'Go', 'SQL', 'Bash', 'PowerShell'].map(skill => (
                  <span key={skill} className="px-3 py-1 bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 rounded text-sm font-mono">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Databases */}
            <div className="bg-purple-500/5 border border-purple-500/30 rounded-lg p-6 backdrop-blur-sm">
              <h3 className="text-lg font-bold text-purple-400 mb-4 font-mono">Databases</h3>
              <div className="flex flex-wrap gap-2">
                {['Oracle', 'PostgreSQL', 'MySQL', 'Redis', 'Cloud SQL'].map(skill => (
                  <span key={skill} className="px-3 py-1 bg-purple-500/20 text-purple-300 border border-purple-500/30 rounded text-sm font-mono">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Container Orchestration */}
            <div className="bg-green-500/5 border border-green-500/30 rounded-lg p-6 backdrop-blur-sm">
              <h3 className="text-lg font-bold text-green-400 mb-4 font-mono">Container Orchestration</h3>
              <div className="flex flex-wrap gap-2">
                {['Kubernetes', 'Docker', 'Helm', 'EKS', 'ACA', 'ECS'].map(skill => (
                  <span key={skill} className="px-3 py-1 bg-green-500/20 text-green-300 border border-green-500/30 rounded text-sm font-mono">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* CI/CD */}
            <div className="bg-yellow-500/5 border border-yellow-500/30 rounded-lg p-6 backdrop-blur-sm">
              <h3 className="text-lg font-bold text-yellow-400 mb-4 font-mono">CI/CD & DevOps</h3>
              <div className="flex flex-wrap gap-2">
                {['Jenkins', 'GitHub Actions', 'Azure DevOps', 'GitLab CI', 'ArgoCD'].map(skill => (
                  <span key={skill} className="px-3 py-1 bg-yellow-500/20 text-yellow-300 border border-yellow-500/30 rounded text-sm font-mono">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Infrastructure as Code */}
            <div className="bg-red-500/5 border border-red-500/30 rounded-lg p-6 backdrop-blur-sm">
              <h3 className="text-lg font-bold text-red-400 mb-4 font-mono">Infrastructure as Code</h3>
              <div className="flex flex-wrap gap-2">
                {['Terraform', 'Bicep', 'Packer', 'CloudFormation', 'Ansible'].map(skill => (
                  <span key={skill} className="px-3 py-1 bg-red-500/20 text-red-300 border border-red-500/30 rounded text-sm font-mono">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Cloud Platforms */}
            <div className="bg-blue-500/5 border border-blue-500/30 rounded-lg p-6 backdrop-blur-sm">
              <h3 className="text-lg font-bold text-blue-400 mb-4 font-mono">Cloud Platforms</h3>
              <div className="flex flex-wrap gap-2">
                {['AWS', 'Azure', 'GCP', 'Multi-Cloud'].map(skill => (
                  <span key={skill} className="px-3 py-1 bg-blue-500/20 text-blue-300 border border-blue-500/30 rounded text-sm font-mono">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Observability */}
            <div className="bg-pink-500/5 border border-pink-500/30 rounded-lg p-6 backdrop-blur-sm">
              <h3 className="text-lg font-bold text-pink-400 mb-4 font-mono">Observability & Monitoring</h3>
              <div className="flex flex-wrap gap-2">
                {['Prometheus', 'Grafana', 'New Relic', 'Splunk', 'CloudWatch', 'Log Analytics'].map(skill => (
                  <span key={skill} className="px-3 py-1 bg-pink-500/20 text-pink-300 border border-pink-500/30 rounded text-sm font-mono">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Security */}
            <div className="bg-orange-500/5 border border-orange-500/30 rounded-lg p-6 backdrop-blur-sm">
              <h3 className="text-lg font-bold text-orange-400 mb-4 font-mono">Security</h3>
              <div className="flex flex-wrap gap-2">
                {['SSL/TLS', 'JWT', 'OAuth 2.0', 'Trivy', 'Checkov', 'Arctic Wolf', 'SentinelOne'].map(skill => (
                  <span key={skill} className="px-3 py-1 bg-orange-500/20 text-orange-300 border border-orange-500/30 rounded text-sm font-mono">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-cyan-400 border-b border-cyan-500/30 pb-2">
            // Certifications
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-500/5 border border-green-500/30 rounded-lg p-6 backdrop-blur-sm">
              <div className="text-green-400 font-bold text-lg mb-2">HashiCorp Terraform Associate</div>
              <div className="text-gray-400 text-sm">Infrastructure as Code Certification</div>
            </div>
            <div className="bg-blue-500/5 border border-blue-500/30 rounded-lg p-6 backdrop-blur-sm">
              <div className="text-blue-400 font-bold text-lg mb-2">Microsoft Azure Administrator (AZ-104)</div>
              <div className="text-gray-400 text-sm">Azure Infrastructure Management</div>
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-cyan-400 border-b border-cyan-500/30 pb-2">
            // Education
          </h2>
          <div className="space-y-6">
            <div className="bg-purple-500/5 border border-purple-500/30 rounded-lg p-6 backdrop-blur-sm">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold text-purple-400">M.S. Information Systems (DevOps and Cloud Track)</h3>
                <div className="text-gray-400 text-sm">Dec 2025</div>
              </div>
              <p className="text-cyan-400 font-mono mb-2">Northeastern University</p>
              <p className="text-gray-400 text-sm">Coursework: Cloud Computing, Networking, Data Structures and Algorithms, Linux</p>
            </div>

            <div className="bg-purple-500/5 border border-purple-500/30 rounded-lg p-6 backdrop-blur-sm">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold text-purple-400">B.S. Computer Science</h3>
                <div className="text-gray-400 text-sm">Jul 2020</div>
              </div>
              <p className="text-cyan-400 font-mono mb-2">NIT Jaipur</p>
              <p className="text-gray-400 text-sm">Coursework: Operating Systems, Database Management Systems</p>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <div className="border-t border-cyan-500/30 pt-8 text-center">
          <p className="text-gray-400 mb-6">Let's build something amazing together</p>
          <div className="flex gap-4 justify-center">
            <a
              href="https://github.com/siddharthdash1998"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-cyan-500/20 border border-cyan-500/50 text-cyan-400 rounded hover:bg-cyan-500/30 transition-all font-bold"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/dash-siddharth"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-blue-500/20 border border-blue-500/50 text-blue-400 rounded hover:bg-blue-500/30 transition-all font-bold"
            >
              LinkedIn
            </a>
            <a
              href="mailto:siddharthdash28@gmail.com"
              className="px-8 py-3 bg-purple-500/20 border border-purple-500/50 text-purple-400 rounded hover:bg-purple-500/30 transition-all font-bold"
            >
              Email
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}