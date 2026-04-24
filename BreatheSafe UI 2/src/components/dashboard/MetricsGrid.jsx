const metrics = (data) => [
  { label: 'PM1.01', value: data.pm1 },
  { label: 'PM2.5', value: data.pm25 },
  { label: 'PM10', value: data.pm10 },
  { label: 'Temp', value: data.temperature },
  { label: 'Humidity', value: `${data.humidity}%` },
  { label: 'CO2', value: data.co2 },
];

export default function MetricsGrid({ data }) {
  return (
    <div className="grid grid-cols-3 gap-3">
      {metrics(data).map(m => (
        <div key={m.label} className="aqi-card-gradient rounded-2xl p-4 text-white text-center shadow-md">
          <p className="text-xl font-bold">{m.value}</p>
          <p className="text-xs opacity-75 mt-0.5">{m.label}</p>
        </div>
      ))}
    </div>
  );
}