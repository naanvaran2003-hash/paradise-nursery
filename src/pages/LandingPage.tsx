import { Link } from 'react-router-dom';
import { Leaf } from 'lucide-react';

const LandingPage = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/6231797/pexels-photo-6231797.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/70 via-green-800/60 to-teal-900/70"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-12 text-center">
        <div className="flex items-center justify-center mb-8">
          <Leaf className="w-16 h-16 text-emerald-300 mr-4" strokeWidth={1.5} />
          <h1 className="text-6xl md:text-7xl font-bold text-white tracking-tight">
            Paradise Nursery
          </h1>
        </div>

        <div className="mb-12 space-y-6">
          <p className="text-xl md:text-2xl text-emerald-50 leading-relaxed max-w-3xl mx-auto font-light">
            Welcome to Paradise Nursery, where nature meets nurture. We cultivate the finest
            collection of houseplants to transform your living spaces into verdant sanctuaries
            of tranquility and beauty.
          </p>
          <p className="text-lg md:text-xl text-emerald-100 leading-relaxed max-w-2xl mx-auto font-light">
            From air-purifying companions to low-maintenance beauties, each plant in our
            carefully curated selection is chosen to bring life, color, and clean air to
            your home or office.
          </p>
        </div>

        <Link
          to="/products"
          className="inline-block px-12 py-5 bg-white text-emerald-900 text-lg font-semibold rounded-full
                   hover:bg-emerald-50 transition-all duration-300 transform hover:scale-105
                   shadow-2xl hover:shadow-emerald-500/50"
        >
          Get Started
        </Link>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <h3 className="text-3xl font-bold text-emerald-300 mb-2">100+</h3>
            <p className="text-emerald-50">Plant Varieties</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <h3 className="text-3xl font-bold text-emerald-300 mb-2">Expert</h3>
            <p className="text-emerald-50">Care Guidance</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <h3 className="text-3xl font-bold text-emerald-300 mb-2">Fresh</h3>
            <p className="text-emerald-50">Healthy Plants</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
