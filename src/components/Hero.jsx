import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Download, ArrowRight, Terminal } from 'lucide-react';

// CUSTOMIZE: Update these lines with your own terminal intro text
const terminalLines = [
  '$ whoami',
  '> AWS Cloud Engineer & DevOps Specialist',
  '$ cat skills.txt',
  '> Terraform | Kubernetes | Docker | CI/CD | Python',
  '$ aws sts get-caller-identity',
  '> { "Account": "YOUR_AWS_ACCOUNT", "Arn": "arn:aws:iam::*:user/YourName" }',
  '$ echo "Building the cloud, one stack at a time."',
  '> Building the cloud, one stack at a time. ✓',
];

function TerminalIntro() {
  const [lines, setLines] = useState([]);
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (currentLine >= terminalLines.length) return;

    const line = terminalLines[currentLine];
    if (currentChar < line.length) {
      const timeout = setTimeout(() => {
        setCurrentChar((c) => c + 1);
      }, 30);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setLines((prev) => [...prev, line]);
        setCurrentLine((l) => l + 1);
        setCurrentChar(0);
      }, 400);
      return () => clearTimeout(timeout);
    }
  }, [currentLine, currentChar]);

  const currentText = currentLine < terminalLines.length
    ? terminalLines[currentLine].slice(0, currentChar)
    : '';

  return (
    <div className="glass-card p-4 font-mono text-xs sm:text-sm max-w-lg w-full">
      <div className="flex items-center gap-2 mb-3 pb-3 border-b border-white/10">
        <div className="w-3 h-3 rounded-full bg-red-500/80" />
        <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
        <div className="w-3 h-3 rounded-full bg-green-500/80" />
        <span className="ml-2 text-gray-500 text-xs">terminal — bash</span>
      </div>
      <div className="space-y-1 min-h-[120px]">
        {lines.map((line, i) => (
          <div
            key={i}
            className={line.startsWith('$') ? 'text-cyan-400' : 'text-green-400'}
          >
            {line}
          </div>
        ))}
        {currentLine < terminalLines.length && (
          <div className={terminalLines[currentLine]?.startsWith('$') ? 'text-cyan-400' : 'text-green-400'}>
            {currentText}
            <span className="cursor-blink text-white">▋</span>
          </div>
        )}
      </div>
    </div>
  );
}

// Floating cloud/orbit decoration
function OrbitDecoration() {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none" aria-hidden="true">
      {/* Outer ring */}
      <div className="absolute w-[500px] h-[500px] rounded-full border border-electric-blue/10 animate-spin-slow" />
      {/* Middle ring */}
      <div className="absolute w-[350px] h-[350px] rounded-full border border-neon-purple/10"
        style={{ animation: 'spin 15s linear infinite reverse' }} />
      {/* Inner ring */}
      <div className="absolute w-[200px] h-[200px] rounded-full border border-cyber-cyan/10 animate-spin-slow" />

      {/* Orbiting dots */}
      {[
        { size: 'w-3 h-3', color: 'bg-electric-blue', orbit: 'orbit-1', delay: '0s' },
        { size: 'w-2 h-2', color: 'bg-neon-purple', orbit: 'orbit-2', delay: '2s' },
        { size: 'w-2 h-2', color: 'bg-cyber-cyan', orbit: 'orbit-3', delay: '4s' },
        { size: 'w-1.5 h-1.5', color: 'bg-cloud-orange', orbit: 'orbit-1', delay: '6s' },
      ].map((dot, i) => (
        <div
          key={i}
          className={`absolute ${dot.size} ${dot.color} rounded-full ${dot.orbit} glow-blue`}
          style={{ animationDelay: dot.delay }}
        />
      ))}
    </div>
  );
}

export default function Hero() {
  const handleScroll = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Hero section"
    >
      {/* Background gradient blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-electric-blue/5 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-purple/5 rounded-full blur-3xl animate-pulse-slow"
          style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyber-cyan/3 rounded-full blur-3xl" />
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-30" aria-hidden="true" />

      <div className="section-container relative z-10 py-20 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-screen lg:min-h-0 lg:py-32">

          {/* Left: Text content */}
          <div className="flex flex-col gap-6 text-center lg:text-left">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex justify-center lg:justify-start"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-electric-blue/10 border border-electric-blue/20 text-electric-blue text-sm font-medium">
                <span className="w-2 h-2 rounded-full bg-electric-blue animate-pulse" />
                Available for opportunities
              </span>
            </motion.div>

            {/* Name */}
            {/* CUSTOMIZE: Replace "Your Name" with your actual name */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight"
            >
              Hi, I'm{' '}
              <span className="gradient-text text-glow-blue">Your Name</span>
            </motion.h1>

            {/* Title */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center justify-center lg:justify-start gap-3"
            >
              <div className="h-px w-8 bg-gradient-to-r from-transparent to-electric-blue hidden lg:block" />
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-300">
                AWS Cloud Engineer
              </h2>
            </motion.div>

            {/* Tagline */}
            {/* CUSTOMIZE: Update this tagline to reflect your specialty */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-gray-400 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              I design and build{' '}
              <span className="text-electric-blue font-medium">scalable, secure cloud infrastructure</span>{' '}
              on AWS — from serverless architectures to Kubernetes clusters, Terraform automation, and
              production-grade CI/CD pipelines.
            </motion.p>

            {/* Tech badges */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-2 justify-center lg:justify-start"
            >
              {['AWS', 'Terraform', 'Kubernetes', 'Docker', 'Python'].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs font-mono font-medium rounded-lg bg-white/5 border border-white/10 text-gray-300"
                >
                  {tech}
                </span>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.button
                onClick={() => handleScroll('projects')}
                className="btn-primary flex items-center justify-center gap-2 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Projects
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <motion.button
                onClick={() => handleScroll('contact')}
                className="btn-secondary flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Me
              </motion.button>

              {/* CUSTOMIZE: Replace href with your actual resume link */}
              <motion.a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary flex items-center justify-center gap-2 text-sm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download className="w-4 h-4" />
                Resume
              </motion.a>
            </motion.div>
          </div>

          {/* Right: Terminal + orbit decoration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col items-center gap-8 relative"
          >
            {/* Orbit decoration (desktop only) */}
            <div className="hidden lg:block absolute inset-0">
              <OrbitDecoration />
            </div>

            {/* Terminal window */}
            <div className="relative z-10">
              <TerminalIntro />
            </div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="grid grid-cols-3 gap-4 w-full max-w-lg"
            >
              {[
                { value: '3+', label: 'Years Exp.' },
                { value: '20+', label: 'AWS Services' },
                { value: '99.9%', label: 'Uptime' },
              ].map((stat) => (
                <div key={stat.label} className="glass-card p-3 text-center">
                  <div className="text-xl font-bold gradient-text">{stat.value}</div>
                  <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={() => handleScroll('about')}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500 hover:text-electric-blue transition-colors group"
        aria-label="Scroll to about section"
      >
        <span className="text-xs font-mono">scroll down</span>
        <ChevronDown className="w-5 h-5 animate-bounce-slow" />
      </motion.button>
    </section>
  );
}
