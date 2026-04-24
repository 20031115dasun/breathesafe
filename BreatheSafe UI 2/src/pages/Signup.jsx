import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { signUpUser } from '../utils/auth';

export default function SignUp() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();
    setError('');

    if (!fullName.trim() || !email.trim() || !password.trim() || !confirmPassword.trim()) {
      setError('Please fill in all fields.');
      return;
    }

    if (fullName.trim().length < 3) {
      setError('Full name must be at least 3 characters.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      setError('Please enter a valid email address.');
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    setLoading(true);

    setTimeout(() => {
      const result = signUpUser({ fullName, email, password });

      if (!result.success) {
        setError(result.message);
        setLoading(false);
        return;
      }

      navigate('/dashboard');
    }, 500);
  };

  return (
    <div
      className="relative min-h-screen overflow-hidden flex flex-col px-6 py-8"
      style={{
        background: `
          radial-gradient(circle at top left, rgba(56, 189, 248, 0.10) 0%, transparent 30%),
          radial-gradient(circle at top right, rgba(76, 175, 80, 0.10) 0%, transparent 32%),
          linear-gradient(135deg, #F4FBFA 0%, #F5F7F6 45%, #EEF8F1 100%)
        `,
      }}
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -left-16 h-72 w-72 rounded-full bg-[#38BDF8]/10 blur-3xl" />
        <div className="absolute top-24 -right-20 h-80 w-80 rounded-full bg-[#4CAF50]/12 blur-3xl" />
        <div className="absolute bottom-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-[#0F766E]/8 blur-3xl" />
      </div>

      <motion.button
        type="button"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        onClick={() => navigate('/Landing')}
        className="relative z-10 self-start p-2 -ml-2 text-[#0F766E] hover:text-[#0B5D3B] transition-colors"
      >
        <ArrowLeft size={28} strokeWidth={2.5} />
      </motion.button>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 flex-1 flex flex-col justify-center items-center gap-8 mt-4"
      >
        <h1 className="text-4xl font-bold text-[#0B5D3B]">Sign up</h1>

        <form
          onSubmit={handleSignUp}
          className="w-full max-w-sm flex flex-col gap-4"
        >
          <input
            type="text"
            placeholder="Full name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="w-full px-5 py-4 rounded-2xl bg-gradient-to-r from-[#E0F7FA] to-[#E8F5E9] placeholder-[#6FA8A3] text-[#0F766E] outline-none focus:ring-2 focus:ring-[#4CAF50] shadow-[0_5px_15px_rgba(56,189,248,0.08)]"
          />

          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-5 py-4 rounded-2xl bg-gradient-to-r from-[#E0F7FA] to-[#E8F5E9] placeholder-[#6FA8A3] text-[#0F766E] outline-none focus:ring-2 focus:ring-[#4CAF50] shadow-[0_5px_15px_rgba(56,189,248,0.08)]"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-5 py-4 rounded-2xl bg-gradient-to-r from-[#E0F7FA] to-[#E8F5E9] placeholder-[#6FA8A3] text-[#0F766E] outline-none focus:ring-2 focus:ring-[#4CAF50] shadow-[0_5px_15px_rgba(56,189,248,0.08)]"
          />

          <input
            type="password"
            placeholder="Confirm password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full px-5 py-4 rounded-2xl bg-gradient-to-r from-[#E0F7FA] to-[#E8F5E9] placeholder-[#6FA8A3] text-[#0F766E] outline-none focus:ring-2 focus:ring-[#4CAF50] shadow-[0_5px_15px_rgba(56,189,248,0.08)]"
          />

          {error && (
            <p className="text-sm text-red-500 text-center">{error}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 rounded-full text-lg font-semibold transition-all duration-200 active:scale-95 mt-2 disabled:opacity-70"
            style={{
              background: 'linear-gradient(135deg, #E0F7FA 0%, #D1FAF5 100%)',
              color: '#0F766E',
              border: '2px solid #4CAF50',
              boxShadow: '0 10px 25px rgba(15,118,110,0.15)',
            }}
          >
            {loading ? 'Creating account...' : 'Create account'}
          </button>
        </form>

        <p className="text-[#6FA8A3] text-sm text-center mt-2">
          Already have an account?{' '}
          <Link to="/signin" className="text-[#0F766E] font-medium hover:underline">
            Sign in
          </Link>
        </p>
      </motion.div>
    </div>
  );
}