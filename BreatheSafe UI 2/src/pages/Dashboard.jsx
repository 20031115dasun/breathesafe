import { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
  Thermometer,
  Droplets,
  Wind,
  Activity,
  Leaf,
  AlertTriangle,
  CheckCircle2,
  LogOut,
  Cpu,
} from 'lucide-react';
import BottomNav from '../components/BottomNav';
import { getCurrentUser, signOutUser } from '../utils/auth';

const FALLBACK_DATA = {
  aqi: 42,
  status: 'Good',
  pm1: 8,
  pm25: 14,
  pm10: 22,
  temperature: 28.4,
  humidity: 69,
  co2: 612,
  prediction25Min: {
    aqi: 58,
    status: 'Good',
    summary: 'Air is expected to remain good for the next 25 minutes.',
  },
  updatedAt: new Date().toISOString(),
};

function getAirStatus(aqi) {
  if (aqi <= 50) return 'Good';
  if (aqi <= 100) return 'Moderate';
  if (aqi <= 150) return 'Unhealthy';
  return 'Hazardous';
}

function getStatusStyles(status) {
  const s = status?.toLowerCase();

  if (s === 'good') {
    return {
      pill: 'bg-[#E8F5E9] text-[#1F7A3D] border border-[#A5D6A7]',
      glow: 'rgba(76,175,80,0.18)',
      icon: <CheckCircle2 size={20} />,
    };
  }

  if (s === 'moderate') {
    return {
      pill: 'bg-[#FFF8E1] text-[#B7791F] border border-[#F6D365]',
      glow: 'rgba(246,211,101,0.18)',
      icon: <AlertTriangle size={20} />,
    };
  }

  return {
    pill: 'bg-[#FDECEC] text-[#C0392B] border border-[#F5B7B1]',
    glow: 'rgba(231,76,60,0.18)',
    icon: <AlertTriangle size={20} />,
  };
}

function MetricCard({ title, value, unit, icon, accent }) {
  return (
    <div
      className="rounded-3xl border border-white/70 p-4 shadow-[0_10px_30px_rgba(15,118,110,0.08)]"
      style={{
        background:
          'linear-gradient(135deg, rgba(255,255,255,0.88) 0%, rgba(232,245,233,0.72) 100%)',
        backdropFilter: 'blur(10px)',
      }}
    >
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.22em] text-[#5E9F9A]">
            {title}
          </p>
          <div className="mt-3 flex items-end gap-1">
            <h3 className="text-3xl font-bold text-[#0B5D3B]">{value}</h3>
            <span className="mb-1 text-sm font-medium text-[#2A8C8A]">{unit}</span>
          </div>
        </div>

        <div
          className="flex h-11 w-11 items-center justify-center rounded-2xl"
          style={{
            background: accent,
            boxShadow: '0 8px 20px rgba(15,118,110,0.10)',
          }}
        >
          {icon}
        </div>
      </div>
    </div>
  );
}

export default function Dashboard() {
  const navigate = useNavigate();
  const currentUser = getCurrentUser();

  const [data, setData] = useState(FALLBACK_DATA);
  const [loading, setLoading] = useState(true);

  const handleLogout = () => {
    signOutUser();
    navigate('/Landing');
  };

  useEffect(() => {
    setLoading(false);
  }, []);

  const currentStyles = useMemo(() => getStatusStyles(data.status), [data.status]);

  return (
    <div
      className="relative min-h-screen overflow-hidden pb-28"
      style={{
        background: `
          radial-gradient(circle at top left, rgba(56, 189, 248, 0.12) 0%, transparent 28%),
          radial-gradient(circle at top right, rgba(76, 175, 80, 0.12) 0%, transparent 30%),
          linear-gradient(135deg, #F4FBFA 0%, #F5F7F6 42%, #EEF8F1 100%)
        `,
      }}
    >
      <div className="relative z-10 px-4 pt-20">

        {/* Header */}
        <div className="flex items-center justify-between">
          <p className="text-lg font-semibold text-[#0F766E]">
            Welcome back
          </p>

          <button
            onClick={handleLogout}
            className="flex items-center gap-2 rounded-full border border-[#4CAF50] bg-[#E0F7FA] px-4 py-2 text-sm font-medium text-[#0F766E]"
          >
            <LogOut size={16} />
            Log out
          </button>
        </div>

        {/* 🔥 Prediction Card */}
        <div className="mt-6">
          <div className="rounded-[2rem] border p-6 bg-white/80 backdrop-blur shadow-lg">

            <h2 className="text-2xl font-bold text-[#0B5D3B]">
              Next 25 Minutes
            </h2>

            {/* ✅ Highlighted GOOD */}
            <div className="mt-3 flex items-center gap-3">
              <p className="text-lg font-semibold text-[#0F766E]">
                Air will be
              </p>

              <span
                className="px-4 py-1.5 rounded-full text-sm font-bold 
                           text-[#1F7A3D] border border-[#A5D6A7]"
                style={{
                  background:
                    'linear-gradient(135deg, #E8F5E9 0%, #DDF5F1 100%)',
                  boxShadow: '0 6px 18px rgba(76,175,80,0.18)',
                }}
              >
                {data.prediction25Min.status}
              </span>
            </div>

            <p className="mt-4 text-sm text-[#4F8E89]">
              {data.prediction25Min.summary}
            </p>

          </div>
        </div>

        {/* Current AQI */}
        <div className="mt-5">
          <div className="rounded-[2rem] p-6 bg-white/80 backdrop-blur shadow-lg">

            <div className="flex justify-between">
              <h2 className="text-5xl font-bold text-[#0B5D3B]">
                {data.aqi}
              </h2>

              <div className={`px-4 py-2 rounded-full ${currentStyles.pill}`}>
                {data.status}
              </div>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3">
              <MetricCard title="PM2.5" value={data.pm25} unit="µg/m³" icon={<Activity size={20} />} accent="rgba(76,175,80,0.15)" />
              <MetricCard title="CO₂" value={data.co2} unit="ppm" icon={<Cpu size={20} />} accent="rgba(56,189,248,0.15)" />
              <MetricCard title="Temp" value={data.temperature} unit="°C" icon={<Thermometer size={20} />} accent="rgba(255,152,0,0.15)" />
              <MetricCard title="Humidity" value={data.humidity} unit="%" icon={<Droplets size={20} />} accent="rgba(33,150,243,0.15)" />
            </div>
          </div>
        </div>

        {loading && (
          <p className="mt-4 text-center text-sm text-[#5E9F9A]">
            Loading...
          </p>
        )}
      </div>

      <BottomNav />
    </div>
  );
}