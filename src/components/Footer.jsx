import { motion } from 'framer-motion';
import { Cloud, Github, Linkedin, Mail, Heart } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

// CUSTOMIZE: Update social links
const socialLinks = [
  { icon: Github, href: 'https://github.com/yourusername', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com/in/yourusername', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:your.email@example.com', label: 'Email' },
];

export default function Footer() {
  const handleNavClick = (href) => {
    const id = href.replace('#', '');
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-white/5 bg-dark-800/50 backdrop-blur-sm" role="contentinfo">
      <div className="section-container py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-electric-blue to-neon-purple flex items-center justify-center">
                <Cloud className="w-4 h-4 text-white" />
              </div>
              {/* CUSTOMIZE: Replace with your name/brand */}
              <span className="font-bold gradient-text">YourName.cloud</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              AWS Cloud Engineer building scalable, secure, and automated cloud infrastructure.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Navigation</h3>
            <nav aria-label="Footer navigation">
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                      className="text-sm text-gray-500 hover:text-electric-blue transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Connect</h3>
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target={social.href.startsWith('mailto') ? undefined : '_blank'}
                    rel={social.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                    className="w-10 h-10 rounded-xl glass-card flex items-center justify-center text-gray-400 hover:text-electric-blue hover:border-electric-blue/30 transition-all"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={social.label}
                  >
                    <Icon className="w-4 h-4" />
                  </motion.a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* CUSTOMIZE: Update year and your name */}
          <p className="text-gray-600 text-sm flex items-center gap-1">
            © {new Date().getFullYear()} Your Name. Built with
            <Heart className="w-3 h-3 text-red-500 fill-red-500 mx-1" />
            and deployed on Netlify.
          </p>
          <div className="flex items-center gap-4 text-xs text-gray-600">
            <span className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              All systems operational
            </span>
            <span>React + Vite + Tailwind</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
