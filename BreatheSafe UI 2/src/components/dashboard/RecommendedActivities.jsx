const recommended = [
  'Take a walk', 'Go for a run', 'Outdoor sports',
  'Bike riding', 'Garden work', 'Open windows',
];
const notRecommended = ['Intense exercise', 'Long outdoor stays'];

export default function RecommendedActivities({ status }) {
  return (
    <div className="aqi-card-gradient rounded-3xl p-5 text-white shadow-xl">
      <h3 className="font-bold text-lg mb-4">Recommended Activities</h3>
      <div className="grid grid-cols-2 gap-2 mb-4">
        {recommended.map(a => (
          <div key={a} className="bg-white/20 rounded-xl px-3 py-2 text-xs font-medium text-center">{a}</div>
        ))}
      </div>
      <div className="bg-red-500/30 rounded-2xl p-4">
        <p className="font-semibold text-sm mb-2">Not Recommended</p>
        <div className="flex flex-col gap-2">
          {notRecommended.map(a => (
            <div key={a} className="bg-white/20 rounded-xl px-3 py-2 text-xs font-medium text-center">{a}</div>
          ))}
        </div>
      </div>
    </div>
  );
}