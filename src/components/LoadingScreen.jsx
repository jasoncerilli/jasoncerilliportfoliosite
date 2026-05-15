import { motion } from 'framer-motion';
import { Cloud } from 'lucide-react';

export default function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[100] bg-dark-900 flex flex-col items-center justify-center gap-6"
      aria-label="Loading"
      role="status"
    >
      {/* Logo */}
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 0.6, type: 'spring', bounce: 0.4 }}
        className="w-16 h-16 rounded-2xl bg-gradient-to-br from-electric-blue to-neon-purple flex items-center justify-center glow-blue"
      >
        <Cloud className="w-8 h-8 text-white" />
      </motion.div>

      {/* Name */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-center"
      >
        {/* CUSTOMIZE: Replace with your name */}
        <div className="text-xl font-bold gradient-text">Your Name</div>
        <div className="text-sm text-gray-500 font-mono mt-1">AWS Cloud Engineer</div>
      </motion.div>

      {/* Loading bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="w-48 h-1 bg-white/5 rounded-full overflow-hidden"
      >
        <motion.div
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{ duration: 1.2, delay: 0.5, ease: 'easeInOut' }}
          className="h-full bg-gradient-to-r from-electric-blue via-cyber-cyan to-neon-purple rounded-full"
        />
      </motion.div>

      {/* Status text */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="text-xs text-gray-600 font-mono"
      >
        Initializing cloud environment...
      </motion.p>
    </motion.div>
  );
}
