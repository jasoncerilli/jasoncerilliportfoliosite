import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Cloud, Shield, Zap, GitBranch, Server, Code2 } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

// CUSTOMIZE: Update these focus areas to match your actual expertise
const focusAreas = [
  {
    icon: Cloud,
    title: 'Cloud Architecture',
    description: 'Designing resilient, multi-AZ AWS architectures with high availability and disaster recovery built in.',
    color: 'text-electric-blue',
    bg: 'bg-electric-blue/10 border-electric-blue/20',
  },
  {
    icon: Server,
    title: 'Infrastructure as Code',
    description: 'Automating infrastructure provisioning with Terraform and CloudFormation for repeatable, version-controlled environments.',
    color: 'text-neon-purple',
    bg: 'bg-neon-purple/10 border-neon-purple/20',
  },
  {
    icon: GitBranch,
    title: 'CI/CD & DevOps',
    description: 'Building automated pipelines with GitHub Actions, CodePipeline, and Jenkins for fast, reliable software delivery.',
    color: 'text-cyber-cyan',
    bg: 'bg-cyber-cyan/10 border-cyber-cyan/20',
  },
  {
    icon: Zap,
    title: 'Serverless & Containers',
    description: 'Deploying Lambda functions, ECS tasks, and EKS clusters for scalable, cost-efficient workloads.',
    color: 'text-cloud-orange',
    bg: 'bg-cloud-orange/10 border-cloud-orange/20',
  },
  {
    icon: Shield,
    title: 'Security & Compliance',
    description: 'Implementing IAM least-privilege, VPC security, encryption, and compliance frameworks like SOC 2 and CIS benchmarks.',
    color: 'text-green-400',
    bg: 'bg-green-400/10 border-green-400/20',
  },
  {
    icon: Code2,
    title: 'Automation & Scripting',
    description: 'Writing Python and Bash scripts to automate operational tasks, monitoring, and cloud resource management.',
    color: 'text-pink-400',
    bg: 'bg-pink-400/10 border-pink-400/20',
  },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="relative py-24 lg:py-32 overflow-hidden" aria-label="About section">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 right-0 w-96 h-96 bg-neon-purple/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-electric-blue/5 rounded-full blur-3xl" />
      </div>

      <div className="section-container relative z-10" ref={ref}>
        {/* Section header */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="text-center mb-16"
        >
          <motion.span
            variants={fadeInUp}
            className="inline-block text-electric-blue font-mono text-sm font-medium mb-4 tracking-wider uppercase"
          >
            // about_me
          </motion.span>
          <motion.h2 variants={fadeInUp} className="section-heading mb-6">
            Building the{' '}
            <span className="gradient-text">Cloud</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-gray-400 text-lg max-w-2xl mx-auto">
            Passionate about designing cloud-native solutions that are secure, scalable, and cost-optimized.
          </motion.p>
        </motion.div>

        {/* Main content grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-16">
          {/* Left: Bio */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="space-y-6"
          >
            <motion.div variants={fadeInUp} className="glass-card p-6 lg:p-8">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="text-electric-blue font-mono text-sm">01.</span>
                Who I Am
              </h3>
              {/* CUSTOMIZE: Replace this bio with your own professional summary */}
              <div className="space-y-4 text-gray-400 leading-relaxed">
                <p>
                  I'm an <span className="text-white font-medium">AWS Cloud Engineer</span> with{' '}
                  <span className="text-electric-blue font-medium">3+ years of experience</span> designing
                  and operating cloud infrastructure at scale. I specialize in turning complex infrastructure
                  challenges into elegant, automated solutions.
                </p>
                <p>
                  My work spans the full cloud lifecycle — from architecting multi-account AWS environments
                  and writing Terraform modules, to building CI/CD pipelines and managing Kubernetes clusters
                  in production.
                </p>
                <p>
                  I'm passionate about{' '}
                  <span className="text-cyber-cyan font-medium">Infrastructure as Code</span>,{' '}
                  <span className="text-neon-purple font-medium">DevSecOps</span>, and building systems
                  that developers love to work with. When I'm not in the cloud, I'm contributing to
                  open-source projects and writing about cloud engineering.
                </p>
              </div>
            </motion.div>

            {/* Quick facts */}
            <motion.div variants={fadeInUp} className="glass-card p-6">
              <h3 className="text-sm font-mono text-electric-blue mb-4 uppercase tracking-wider">
                Quick Facts
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  /* CUSTOMIZE: Update these facts */
                  { label: 'Location', value: 'Your City, Country' },
                  { label: 'Experience', value: '3+ Years' },
                  { label: 'Certifications', value: 'AWS SAA, DVA' },
                  { label: 'Focus', value: 'Cloud & DevOps' },
                  { label: 'Education', value: 'B.S. Computer Science' },
                  { label: 'Status', value: 'Open to Work' },
                ].map((fact) => (
                  <div key={fact.label} className="flex flex-col gap-1">
                    <span className="text-xs text-gray-500 font-mono">{fact.label}</span>
                    <span className="text-sm text-white font-medium">{fact.value}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Focus areas grid */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {focusAreas.map((area) => {
              const Icon = area.icon;
              return (
                <motion.div
                  key={area.title}
                  variants={fadeInUp}
                  className={`glass-card-hover p-5 border ${area.bg} group cursor-default`}
                  whileHover={{ y: -4 }}
                >
                  <div className={`w-10 h-10 rounded-xl ${area.bg} border flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                    <Icon className={`w-5 h-5 ${area.color}`} />
                  </div>
                  <h4 className="text-sm font-semibold text-white mb-2">{area.title}</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">{area.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* AWS Certifications banner */}
        {/* CUSTOMIZE: Update with your actual certifications */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="glass-card p-6 lg:p-8"
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-lg font-bold text-white mb-1">AWS Certifications</h3>
              <p className="text-gray-400 text-sm">Validated expertise in AWS cloud services</p>
            </div>
            <div className="flex flex-wrap gap-3 justify-center sm:justify-end">
              {[
                { name: 'Solutions Architect Associate', short: 'SAA-C03', color: 'text-cloud-orange' },
                { name: 'Developer Associate', short: 'DVA-C02', color: 'text-electric-blue' },
                { name: 'SysOps Administrator', short: 'SOA-C02', color: 'text-cyber-cyan' },
              ].map((cert) => (
                <div
                  key={cert.short}
                  className="flex flex-col items-center px-4 py-3 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors"
                >
                  <span className={`text-lg font-bold font-mono ${cert.color}`}>{cert.short}</span>
                  <span className="text-xs text-gray-500 mt-1 text-center max-w-[100px]">{cert.name}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
