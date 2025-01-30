export default function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-gray-900 rounded-lg p-8 hover:bg-gray-800 transition-colors">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 text-yellow-400">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}
