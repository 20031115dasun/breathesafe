import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Landing() {
  return (
    <div
      className="relative min-h-screen overflow-hidden flex flex-col items-center justify-between px-6 py-16"
      style={{
        background: `
          radial-gradient(circle at top left, rgba(56, 189, 248, 0.10) 0%, transparent 30%),
          radial-gradient(circle at top right, rgba(76, 175, 80, 0.10) 0%, transparent 32%),
          radial-gradient(circle at center, rgba(15, 118, 110, 0.06) 0%, transparent 38%),
          linear-gradient(135deg, #F4FBFA 0%, #F5F7F6 45%, #EEF8F1 100%)
        `,
      }}
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -left-16 h-72 w-72 rounded-full bg-[#38BDF8]/10 blur-3xl" />
        <div className="absolute top-24 -right-20 h-80 w-80 rounded-full bg-[#4CAF50]/12 blur-3xl" />
        <div className="absolute bottom-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-[#0F766E]/10 blur-3xl" />
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[32%] bg-gradient-to-t from-[#EAF7F3] to-transparent" />
      <div className="pointer-events-none absolute bottom-[-70px] left-[-5%] h-56 w-[110%] rounded-[100%] bg-white/55 blur-2xl" />

      <div />

      <motion.div
        initial={{ opacity: 0, y: 28, scale: 0.94 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative z-10 flex flex-col items-center"
      >
        <motion.div
          animate={{ y: [0, -7, 0] }}
          transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut' }}
          className="relative flex items-center justify-center"
        >
          <div className="absolute h-72 w-72 rounded-full bg-[#38BDF8]/10 blur-3xl" />
          <div className="absolute h-72 w-72 rounded-full bg-[#4CAF50]/12 blur-3xl" />
          <div className="absolute h-60 w-60 rounded-full bg-[#0F766E]/10 blur-2xl" />

          <img
            src="/Logo.png"
            alt="BreatheSafe Logo"
            className="relative w-72 h-auto drop-shadow-[0_22px_40px_rgba(15,118,110,0.18)]"
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="mt-10 text-center text-sm font-semibold uppercase tracking-[0.32em] text-[#2A8C8A]"
        >
          Clean air. Smarter living.
        </motion.p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.25 }}
        className="relative z-10 flex w-full max-w-[320px] gap-4"
      >
        <Link
          to="/signin"
          className="flex-1 rounded-full px-6 py-4 text-center text-lg font-semibold transition-all duration-200 active:scale-95"
          style={{
            background: 'linear-gradient(135deg, #E0F7FA 0%, #D1FAF5 100%)',
            color: '#0F766E',
            border: '2px solid #4CAF50',
            boxShadow: '0 10px 25px rgba(15,118,110,0.15)',
          }}
        >
          Sign in
        </Link>

        <Link
          to="/signup"
          className="flex-1 rounded-full px-6 py-4 text-center text-lg font-semibold transition-all duration-200 active:scale-95"
          style={{
            background: 'linear-gradient(135deg, #E6F7FF 0%, #E0F2FE 100%)',
            color: '#0B5D3B',
            border: '2px solid #2E7D32',
            boxShadow: '0 10px 25px rgba(76,175,80,0.15)',
          }}
        >
          Sign up
        </Link>
      </motion.div>
    </div>
  );
}