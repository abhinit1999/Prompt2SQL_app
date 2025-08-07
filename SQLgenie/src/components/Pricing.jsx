// src/components/Pricing.jsx
export default function Pricing() {
  return (
    <div id="pricing" className="py-16 px-6 bg-white">
      <h3 className="text-center text-3xl font-bold text-gray-800 mb-10">Simple Pricing</h3>
      <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6">
        {['Free', 'Pro', 'Enterprise'].map((tier, i) => (
          <div key={i} className="border rounded-xl p-6 shadow hover:shadow-lg transition">
            <h4 className="text-xl font-bold text-indigo-600 mb-2">{tier}</h4>
            <p className="text-gray-600 mb-4">
              {tier === 'Free' && 'Try all basic features for free'}
              {tier === 'Pro' && 'Advanced features for professionals'}
              {tier === 'Enterprise' && 'Custom solutions for teams'}
            </p>
            <p className="text-2xl font-bold mb-4">
              {tier === 'Free' && '₹0/mo'}
              {tier === 'Pro' && '₹6999/mo'}
              {tier === 'Enterprise' && 'Contact Us'}
            </p>
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-full w-full hover:bg-indigo-700">
              {tier === 'Enterprise' ? 'Get in Touch' : 'Start Now'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
