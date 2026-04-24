export default function AQICard({ aqi, status }) {
  return (
    <div className="aqi-card-gradient rounded-3xl p-6 text-white shadow-xl">
      <div className="flex items-end gap-4">
        <span className="text-8xl font-bold leading-none">{aqi}</span>
        <div className="mb-2">
          <p className="text-2xl font-semibold opacity-90">{status}</p>
          <p className="text-sm opacity-70">Air Quality Index</p>
        </div>
      </div>
    </div>
  );
}