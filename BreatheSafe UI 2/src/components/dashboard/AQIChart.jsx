import { ScatterChart, Scatter, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts';

const data = [
  { hour: 0, aqi: 55 }, { hour: 2, aqi: 60 }, { hour: 4, aqi: 48 },
  { hour: 6, aqi: 72 }, { hour: 8, aqi: 85 }, { hour: 10, aqi: 78 },
  { hour: 12, aqi: 90 }, { hour: 14, aqi: 82 }, { hour: 16, aqi: 75 },
  { hour: 18, aqi: 68 }, { hour: 20, aqi: 62 }, { hour: 22, aqi: 57 },
];

export default function AQIChart() {
  return (
    <div className="aqi-card-gradient rounded-3xl p-5 text-white shadow-xl">
      <h3 className="font-bold text-lg mb-4">24 Hour History</h3>
      <div className="bg-white/10 rounded-2xl p-3">
        <ResponsiveContainer width="100%" height={160}>
          <ScatterChart margin={{ top: 10, right: 10, bottom: 0, left: -20 }}>
            <XAxis dataKey="hour" tick={{ fill: 'rgba(255,255,255,0.6)', fontSize: 10 }} tickLine={false} axisLine={false} />
            <YAxis dataKey="aqi" tick={{ fill: 'rgba(255,255,255,0.6)', fontSize: 10 }} tickLine={false} axisLine={false} />
            <Tooltip
              cursor={false}
              contentStyle={{ background: 'rgba(0,0,0,0.6)', border: 'none', borderRadius: 8, color: 'white', fontSize: 12 }}
              formatter={(v) => [v, 'AQI']}
            />
            <Scatter data={data} fill="#ff6b6b" opacity={0.8} />
          </ScatterChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}