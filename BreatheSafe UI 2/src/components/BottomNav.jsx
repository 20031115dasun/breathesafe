import { Link, useLocation } from 'react-router-dom';
import { Home, Bell, Plus, RefreshCw, User } from 'lucide-react';

export default function BottomNav() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <div className="fixed bottom-0 left-0 right-0 flex justify-center pb-5 px-4 z-50">
      <div
        className="relative flex items-center gap-6 px-6 py-3 rounded-full border border-white/60"
        style={{
          background:
            'linear-gradient(135deg, rgba(255,255,255,0.75) 0%, rgba(232,245,233,0.65) 100%)',
          backdropFilter: 'blur(14px)',
          boxShadow: '0 20px 40px rgba(15,118,110,0.12)',
        }}
      >
        {/* Glow behind */}
        <div className="absolute inset-0 rounded-full bg-[#4CAF50]/10 blur-xl -z-10" />

        {/* Home */}
        <Link
          to="/"
          className={`transition ${
            isActive('/') ? 'text-[#0F766E]' : 'text-[#7FA9A6]'
          }`}
        >
          <Home size={22} />
        </Link>

        {/* Notifications */}
        <Link
          to="/notifications"
          className={`transition ${
            isActive('/notifications') ? 'text-[#0F766E]' : 'text-[#7FA9A6]'
          }`}
        >
          <Bell size={22} />
        </Link>

        {/* Center Add Button */}
        <Link
          to="/add-device"
          className="relative flex items-center justify-center w-14 h-14 rounded-full -mt-6"
          style={{
            background:
              'linear-gradient(135deg, #0F766E 0%, #2E7D32 60%, #4CAF50 100%)',
            boxShadow: '0 12px 30px rgba(15,118,110,0.35)',
          }}
        >
          <Plus size={26} className="text-white" />

          {/* Glow */}
          <div className="absolute inset-0 rounded-full bg-[#4CAF50]/20 blur-xl" />
        </Link>

        {/* Devices */}
        <Link
          to="/devices"
          className={`transition ${
            isActive('/devices') ? 'text-[#0F766E]' : 'text-[#7FA9A6]'
          }`}
        >
          <RefreshCw size={22} />
        </Link>

        {/* Profile */}
        <Link
          to="/profile"
          className={`transition ${
            isActive('/profile') ? 'text-[#0F766E]' : 'text-[#7FA9A6]'
          }`}
        >
          <User size={22} />
        </Link>
      </div>
    </div>
  );
}