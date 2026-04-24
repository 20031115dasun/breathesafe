const advice = {
  Normal: {
    general: 'Air quality is acceptable. However, there may be a risk for some people, particularly those who are unusually sensitive to air pollution.',
    sensitive: 'Enjoy outdoor activities. Air quality is acceptable for sensitive groups.',
  },
  Good: {
    general: 'Air quality is satisfactory, and air pollution poses little or no risk.',
    sensitive: 'Great day to be active outside.',
  },
  Moderate: {
    general: 'Air quality is acceptable for most people. Unusually sensitive people should consider limiting outdoor activity.',
    sensitive: 'Sensitive groups should reduce prolonged outdoor exertion.',
  },
};

export default function HealthAdvice({ status }) {
  const a = advice[status] || advice.Normal;
  return (
    <div className="aqi-card-gradient rounded-3xl p-5 text-white shadow-xl">
      <h3 className="font-bold text-lg mb-4">Health Advice</h3>
      <div className="bg-white/20 rounded-2xl p-4 mb-3">
        <p className="font-semibold text-sm mb-1">General public</p>
        <p className="text-xs opacity-90 leading-relaxed">{a.general}</p>
      </div>
      <div className="bg-white/20 rounded-2xl p-4">
        <p className="font-semibold text-sm mb-1">Sensitive groups</p>
        <p className="text-xs opacity-90 leading-relaxed">{a.sensitive}</p>
      </div>
    </div>
  );
}