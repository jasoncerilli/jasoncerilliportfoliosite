import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { skillCategories, techStack, stats } from '../data/skills';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.08 } },
};

function SkillBar({ name, level, icon, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      variants={fadeInUp}
      className="group"
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <span className="text-base" role="img" aria-label={name}>{icon}</span>
          <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
            {name}
          </span>
        </div>
        <span className="text-xs font-mono text-gray-500">{level}%</span>
      </div>
      <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-electric-blue to-cyber-cyan"
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1, delay: index * 0.1, ease: 'easeOut' }}
        />
      </div>
    </motion.div>
  );
}

function StatCounter({ value, label, icon }) {
  return (
    <motion.div
      variants={fadeInUp}
      className="glass-card p-6 text-center group hover:border-electric-blue/30 transition-colors"
      whileHover={{ y: -4 }}
    >
      <div className="text-3xl mb-2" role="img" aria-label={label}>{icon}</div>
      <div className="text-3xl lg:text-4xl font-black gradient-text mb-1">{value}</div>
      <div className="text-sm text-gray-500">{label}</div>
    </motion.div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="relative py-24 lg:py-32 overflow-hidden" aria-label="Skills section">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyber-cyan/5 rounded-full blur-3xl -translate-y-1/2" />
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-neon-purple/5 rounded-full blur-3xl -translate-y-1/2" />
      </div>

      <div className="section-container relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="text-center mb-16"
        >
          <motion.span variants={fadeInUp} className="inline-block text-electric-blue font-mono text-sm font-medium mb-4 tracking-wider uppercase">
            // tech_stack
          </motion.span>
          <motion.h2 variants={fadeInUp} className="section-heading mb-6">
            Skills &{' '}
            <span className="gradient-text">Technologies</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-gray-400 text-lg max-w-2xl mx-auto">
            A curated set of tools and technologies I use to build, deploy, and operate cloud infrastructure.
          </motion.p>
        </motion.div>

        {/* Stats row */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16"
        >
          {stats.map((stat) => (
            <StatCounter key={stat.label} {...stat} />
          ))}
        </motion.div>

        {/* Tech stack badges */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="mb-16"
        >
          <motion.h3 variants={fadeInUp} className="text-center text-sm font-mono text-gray-500 uppercase tracking-wider mb-6">
            Core Technologies
          </motion.h3>
          <motion.div variants={stagger} className="flex flex-wrap gap-3 justify-center">
            {techStack.map((tech) => (
              <motion.span
                key={tech.name}
                variants={fadeInUp}
                className={`px-4 py-2 rounded-xl border text-sm font-semibold ${tech.color} ${tech.bg} transition-all duration-300 hover:scale-105 cursor-default`}
                whileHover={{ y: -2 }}
              >
                {tech.name}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>

        {/* Skill categories with progress bars */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.category}
              variants={fadeInUp}
              className="glass-card p-6 hover:border-white/20 transition-colors"
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-6">
                <div className={`h-1 w-8 rounded-full bg-gradient-to-r ${category.color}`} />
                <h3 className="font-bold text-white">{category.category}</h3>
              </div>

              {/* Skill bars */}
              <motion.div
                variants={stagger}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
                className="space-y-4"
              >
                {category.skills.map((skill, i) => (
                  <SkillBar key={skill.name} {...skill} index={i} />
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom: code snippet decoration */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 glass-card p-6 font-mono text-sm overflow-x-auto"
          aria-label="Example Terraform code snippet"
        >
          <div className="flex items-center gap-2 mb-4 pb-4 border-b border-white/10">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
            <span className="ml-2 text-gray-500 text-xs">main.tf — terraform</span>
          </div>
          <pre className="text-xs sm:text-sm leading-relaxed">
            <code>
              <span className="text-neon-purple">resource</span>{' '}
              <span className="text-green-400">"aws_eks_cluster"</span>{' '}
              <span className="text-cyan-400">"main"</span>{' '}{'{'}{'\n'}
              {'  '}<span className="text-electric-blue">name</span>{'     = '}<span className="text-green-400">var.cluster_name</span>{'\n'}
              {'  '}<span className="text-electric-blue">role_arn</span>{' = '}<span className="text-green-400">aws_iam_role.eks.arn</span>{'\n'}
              {'\n'}
              {'  '}<span className="text-neon-purple">vpc_config</span>{' {'}{'\n'}
              {'    '}<span className="text-electric-blue">subnet_ids</span>{'              = '}<span className="text-green-400">var.private_subnet_ids</span>{'\n'}
              {'    '}<span className="text-electric-blue">endpoint_private_access</span>{' = '}<span className="text-cloud-orange">true</span>{'\n'}
              {'    '}<span className="text-electric-blue">endpoint_public_access</span>{'  = '}<span className="text-cloud-orange">false</span>{'\n'}
              {'  }'}{'\n'}
              {'}'}
            </code>
          </pre>
        </motion.div>
      </div>
    </section>
  );
}
