import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import BottomNav from '../components/BottomNav';
import {
  User,
  Edit3,
  PlusCircle,
  BarChart2,
  Bell,
  HelpCircle,
  LogOut,
} from 'lucide-react';

const menuItems = [
  { label: 'Update user', icon: Edit3, to: '/profile/update' },
  { label: 'Add device', icon: PlusCircle, to: '/add-device' },
  { label: 'AQI History', icon: BarChart2, to: '/history' },
  { label: 'Notifications', icon: Bell, to: '/notifications' },
];

const USER_STORAGE_KEY = 'local_user';

function getStoredUser() {
  try {
    const raw = localStorage.getItem(USER_STORAGE_KEY);

    if (raw) {
      return JSON.parse(raw);
    }

    const defaultUser = {
      full_name: 'Dasun Sadeepa',
      email: 'Dasun@gmail.com',
    };

    localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(defaultUser));
    return defaultUser;
  } catch (error) {
    console.error('Failed to read user from localStorage:', error);
    return {
      full_name: 'Dasun Sadeepa',
      email: 'Dasun@gmail.com',
    };
  }
}

export default function Profile() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    setUser(getStoredUser());
  }, []);

  const handleLogout = () => {
    localStorage.removeItem(USER_STORAGE_KEY);
    navigate('/Landing');
  };

  return (
    <div
      className="relative min-h-screen overflow-hidden pb-28"
      style={{
        background: `
          radial-gradient(circle at top left, rgba(56, 189, 248, 0.12) 0%, transparent 28%),
          radial-gradient(circle at top right, rgba(76, 175, 80, 0.12) 0%, transparent 30%),
          radial-gradient(circle at center, rgba(15, 118, 110, 0.08) 0%, transparent 38%),
          linear-gradient(135deg, #F4FBFA 0%, #F5F7F6 42%, #EEF8F1 100%)
        `,
      }}
    >
      {/* Background glows */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -left-16 h-72 w-72 rounded-full bg-[#38BDF8]/10 blur-3xl" />
        <div className="absolute top-20 -right-16 h-80 w-80 rounded-full bg-[#4CAF50]/12 blur-3xl" />
        <div className="absolute bottom-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-[#0F766E]/10 blur-3xl" />
      </div>

      <div className="relative z-10 px-6 pt-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col items-center"
        >
          <p className="text-sm text-[#5E9F9A]">Your personal account</p>
          <h1 className="mt-1 text-3xl font-bold text-[#0B5D3B]">Profile</h1>

          <div
            className="mt-6 flex h-24 w-24 items-center justify-center rounded-full border border-white/80"
            style={{
              background:
                'linear-gradient(135deg, rgba(224,247,250,0.95) 0%, rgba(232,245,233,0.92) 100%)',
              boxShadow: '0 16px 35px rgba(15,118,110,0.12)',
              backdropFilter: 'blur(12px)',
            }}
          >
            <User size={46} color="#0F766E" />
          </div>

          <div className="mt-4 text-center">
            <p className="text-xl font-semibold text-[#0B5D3B]">
              {user?.full_name || 'Dasun Sadeepa'}
            </p>
            <p className="mt-1 text-sm text-[#5E9F9A]">
              {user?.email || 'Dasun@gmail.com'}
            </p>
          </div>
        </motion.div>

        {/* Menu */}
        <div className="mt-8 flex flex-col gap-4">
          {menuItems.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.06 }}
            >
              <Link
                to={item.to}
                className="flex items-center justify-between rounded-[1.75rem] border border-white/70 px-5 py-4 transition-all duration-200 active:scale-[0.98]"
                style={{
                  background:
                    'linear-gradient(135deg, rgba(255,255,255,0.88) 0%, rgba(232,245,233,0.72) 100%)',
                  boxShadow: '0 12px 30px rgba(15,118,110,0.08)',
                  backdropFilter: 'blur(10px)',
                }}
              >
                <div className="flex items-center gap-4">
                  <div
                    className="flex h-11 w-11 items-center justify-center rounded-2xl"
                    style={{
                      background:
                        'linear-gradient(135deg, #E0F7FA 0%, #E8F5E9 100%)',
                      boxShadow: '0 8px 20px rgba(15,118,110,0.08)',
                    }}
                  >
                    <item.icon size={20} color="#0F766E" />
                  </div>

                  <span className="text-base font-medium text-[#0B5D3B]">
                    {item.label}
                  </span>
                </div>

                <span className="text-xl text-[#6FA8A3]">›</span>
              </Link>
            </motion.div>
          ))}

          <motion.button
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: menuItems.length * 0.06 }}
            onClick={handleLogout}
            className="mt-2 flex items-center justify-center gap-2 rounded-full px-5 py-4 text-base font-semibold transition active:scale-[0.98]"
            style={{
              background: 'linear-gradient(135deg, #E0F7FA 0%, #D1FAF5 100%)',
              color: '#0F766E',
              border: '2px solid #4CAF50',
              boxShadow: '0 10px 25px rgba(15,118,110,0.12)',
            }}
          >
            <LogOut size={18} />
            Logout
          </motion.button>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}