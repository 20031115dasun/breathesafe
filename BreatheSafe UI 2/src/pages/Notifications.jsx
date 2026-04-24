import { motion } from 'framer-motion';
import BottomNav from '../components/BottomNav';
import { Wind, AlertTriangle, CheckCircle, Bell } from 'lucide-react';

const mockNotifications = [
  {
    id: 1,
    icon: AlertTriangle,
    iconColor: '#B7791F',
    iconBg: 'linear-gradient(135deg, #FFF8E1 0%, #FFF3CD 100%)',
    borderColor: '#F6D365',
    title: 'AQI Rising',
    message: 'Air quality in Living Room has reached Moderate levels.',
    time: '2 min ago',
  },
  {
    id: 2,
    icon: CheckCircle,
    iconColor: '#1F7A3D',
    iconBg: 'linear-gradient(135deg, #E8F5E9 0%, #DFF3E4 100%)',
    borderColor: '#A5D6A7',
    title: 'Air Quality Normal',
    message: 'Your bedroom air quality is back to Normal.',
    time: '1 hr ago',
  },
  {
    id: 3,
    icon: Wind,
    iconColor: '#0F766E',
    iconBg: 'linear-gradient(135deg, #E0F7FA 0%, #E6F7FF 100%)',
    borderColor: '#A7E3EE',
    title: 'Daily Summary',
    message: 'Average AQI today: 72. Mostly Normal conditions.',
    time: '5 hr ago',
  },
];

export default function Notifications() {
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
          className="flex items-center gap-3"
        >
          <div
            className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/70"
            style={{
              background:
                'linear-gradient(135deg, rgba(224,247,250,0.92) 0%, rgba(232,245,233,0.88) 100%)',
              boxShadow: '0 10px 28px rgba(15,118,110,0.08)',
              backdropFilter: 'blur(10px)',
            }}
          >
            <Bell size={22} color="#0F766E" />
          </div>

          <div>
            <p className="text-sm text-[#5E9F9A]">Recent updates</p>
            <h1 className="text-3xl font-bold text-[#0B5D3B]">Notifications</h1>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
          className="mt-4 text-sm leading-6 text-[#4F8E89]"
        >
          Stay informed about live air quality changes, alerts, and daily summaries from
          your BreatheSafe system.
        </motion.p>

        {/* Notifications list */}
        <div className="mt-7 flex flex-col gap-4">
          {mockNotifications.map((n, i) => (
            <motion.div
              key={n.id}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              className="rounded-[1.75rem] border border-white/70 p-4 shadow-[0_12px_30px_rgba(15,118,110,0.08)]"
              style={{
                background:
                  'linear-gradient(135deg, rgba(255,255,255,0.88) 0%, rgba(232,245,233,0.72) 100%)',
                backdropFilter: 'blur(10px)',
              }}
            >
              <div className="flex items-start gap-4">
                <div
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border"
                  style={{
                    background: n.iconBg,
                    borderColor: n.borderColor,
                  }}
                >
                  <n.icon size={22} color={n.iconColor} />
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex items-start justify-between gap-3">
                    <p className="text-sm font-semibold text-[#0B5D3B]">{n.title}</p>
                    <span className="shrink-0 text-xs text-[#6FA8A3]">{n.time}</span>
                  </div>

                  <p className="mt-1 text-sm leading-relaxed text-[#4F8E89]">
                    {n.message}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <BottomNav />
    </div>
  );
}