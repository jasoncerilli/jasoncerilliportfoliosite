import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, Github, Linkedin, Send, CheckCircle, AlertCircle, MapPin, Clock } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

// CUSTOMIZE: Update these social links with your own
const socialLinks = [
  {
    name: 'LinkedIn',
    icon: Linkedin,
    href: 'https://linkedin.com/in/yourusername',
    color: 'text-blue-400',
    bg: 'bg-blue-400/10 border-blue-400/20 hover:bg-blue-400/20',
    label: 'Connect on LinkedIn',
  },
  {
    name: 'GitHub',
    icon: Github,
    href: 'https://github.com/yourusername',
    color: 'text-gray-300',
    bg: 'bg-white/5 border-white/10 hover:bg-white/10',
    label: 'Follow on GitHub',
  },
  {
    name: 'Email',
    icon: Mail,
    href: 'mailto:your.email@example.com', // CUSTOMIZE
    color: 'text-electric-blue',
    bg: 'bg-electric-blue/10 border-electric-blue/20 hover:bg-electric-blue/20',
    label: 'Send an email',
  },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Invalid email address';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    else if (formData.message.trim().length < 10) newErrors.message = 'Message must be at least 10 characters';
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setStatus('loading');

    /**
     * CUSTOMIZE: This form is set up for Netlify Forms.
     * For Formspree, replace the fetch URL with your Formspree endpoint:
     * fetch('https://formspree.io/f/YOUR_FORM_ID', { ... })
     *
     * For Netlify Forms, the form below will work automatically when deployed to Netlify.
     * Just make sure the form has data-netlify="true" attribute.
     */
    try {
      const formBody = new URLSearchParams({
        'form-name': 'contact',
        ...formData,
      });

      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: formBody.toString(),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="relative py-24 lg:py-32 overflow-hidden" aria-label="Contact section">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-neon-purple/5 rounded-full blur-3xl" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-electric-blue/5 rounded-full blur-3xl" />
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
            // get_in_touch
          </motion.span>
          <motion.h2 variants={fadeInUp} className="section-heading mb-6">
            Let's{' '}
            <span className="gradient-text">Connect</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-gray-400 text-lg max-w-2xl mx-auto">
            Have a cloud project in mind? Looking for a DevOps engineer? I'd love to hear from you.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left: Info */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="space-y-8"
          >
            <motion.div variants={fadeInUp} className="glass-card p-6 lg:p-8">
              <h3 className="text-xl font-bold text-white mb-4">Get in Touch</h3>
              {/* CUSTOMIZE: Update this message */}
              <p className="text-gray-400 leading-relaxed mb-6">
                I'm currently open to new opportunities — full-time roles, contract work, or consulting.
                Whether you need help architecting a cloud solution, setting up CI/CD, or just want to
                talk cloud engineering, my inbox is always open.
              </p>

              {/* Contact details */}
              <div className="space-y-4">
                {/* CUSTOMIZE: Update location and timezone */}
                <div className="flex items-center gap-3 text-gray-400">
                  <div className="w-8 h-8 rounded-lg bg-electric-blue/10 border border-electric-blue/20 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4 text-electric-blue" />
                  </div>
                  <span className="text-sm">Your City, Country</span>
                </div>
                <div className="flex items-center gap-3 text-gray-400">
                  <div className="w-8 h-8 rounded-lg bg-cyber-cyan/10 border border-cyber-cyan/20 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-4 h-4 text-cyber-cyan" />
                  </div>
                  <span className="text-sm">Response time: within 24 hours</span>
                </div>
                <div className="flex items-center gap-3 text-gray-400">
                  <div className="w-8 h-8 rounded-lg bg-green-400/10 border border-green-400/20 flex items-center justify-center flex-shrink-0">
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  </div>
                  <span className="text-sm text-green-400">Available for new projects</span>
                </div>
              </div>
            </motion.div>

            {/* Social links */}
            <motion.div variants={fadeInUp} className="space-y-3">
              <h3 className="text-sm font-mono text-gray-500 uppercase tracking-wider">Find me on</h3>
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target={social.href.startsWith('mailto') ? undefined : '_blank'}
                    rel={social.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                    className={`flex items-center gap-4 p-4 rounded-xl border transition-all duration-300 ${social.bg}`}
                    whileHover={{ x: 4 }}
                    aria-label={social.label}
                  >
                    <div className={`w-10 h-10 rounded-xl ${social.bg} border flex items-center justify-center flex-shrink-0`}>
                      <Icon className={`w-5 h-5 ${social.color}`} />
                    </div>
                    <div>
                      <div className={`font-semibold ${social.color}`}>{social.name}</div>
                      <div className="text-xs text-gray-500">{social.label}</div>
                    </div>
                  </motion.a>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Right: Contact form */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            transition={{ delay: 0.2 }}
          >
            <div className="glass-card p-6 lg:p-8">
              <h3 className="text-xl font-bold text-white mb-6">Send a Message</h3>

              {/* Success state */}
              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex items-center gap-3 p-4 rounded-xl bg-green-500/10 border border-green-500/20 text-green-400 mb-6"
                  role="alert"
                >
                  <CheckCircle className="w-5 h-5 flex-shrink-0" />
                  <p className="text-sm">Message sent! I'll get back to you within 24 hours.</p>
                </motion.div>
              )}

              {/* Error state */}
              {status === 'error' && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex items-center gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 mb-6"
                  role="alert"
                >
                  <AlertCircle className="w-5 h-5 flex-shrink-0" />
                  <p className="text-sm">Something went wrong. Please try emailing me directly.</p>
                </motion.div>
              )}

              {/* Form — data-netlify enables Netlify Forms */}
              <form
                name="contact"
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                noValidate
                className="space-y-5"
              >
                {/* Netlify hidden fields */}
                <input type="hidden" name="form-name" value="contact" />
                <input type="hidden" name="bot-field" />

                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className={`form-input ${errors.name ? 'border-red-500/50' : ''}`}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                    aria-invalid={!!errors.name}
                    autoComplete="name"
                  />
                  {errors.name && (
                    <p id="name-error" className="mt-1 text-xs text-red-400" role="alert">{errors.name}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email <span className="text-red-400">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    className={`form-input ${errors.email ? 'border-red-500/50' : ''}`}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                    aria-invalid={!!errors.email}
                    autoComplete="email"
                  />
                  {errors.email && (
                    <p id="email-error" className="mt-1 text-xs text-red-400" role="alert">{errors.email}</p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or opportunity..."
                    rows={5}
                    className={`form-input resize-none ${errors.message ? 'border-red-500/50' : ''}`}
                    aria-describedby={errors.message ? 'message-error' : undefined}
                    aria-invalid={!!errors.message}
                  />
                  {errors.message && (
                    <p id="message-error" className="mt-1 text-xs text-red-400" role="alert">{errors.message}</p>
                  )}
                </div>

                {/* Submit */}
                <motion.button
                  type="submit"
                  disabled={status === 'loading'}
                  className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={status !== 'loading' ? { scale: 1.02 } : {}}
                  whileTap={status !== 'loading' ? { scale: 0.98 } : {}}
                >
                  {status === 'loading' ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
