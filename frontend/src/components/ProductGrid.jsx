import React from 'react';
import { ShoppingCart, Star, Zap, Shield, Camera, Battery, MapPin } from 'lucide-react';

const ProductGrid = ({ products, onProductSelect, onRestart, onEnd }) => {
  const formatPrice = (price) => {
    return new Intl.NumberFormat('hi-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(price);
  };

  const getFeatureIcon = (spec) => {
    if (spec.toLowerCase().includes('camera')) return <Camera className="w-4 h-4" />;
    if (spec.toLowerCase().includes('battery')) return <Battery className="w-4 h-4" />;
    if (spec.toLowerCase().includes('chip') || spec.toLowerCase().includes('processor')) return <Zap className="w-4 h-4" />;
    return <Shield className="w-4 h-4" />;
  };

  const colorTranslations = {
    'black': 'काला',
    'white': 'सफेद',
    'blue': 'नीला',
    'red': 'लाल',
    'gold': 'सुनहरा',
    'silver': 'चांदी',
    'green': 'हरा',
    'titanium': 'टाइटेनियम',
    'violet': 'बैंगनी',
    'purple': 'जामुनी',
    'yellow': 'पीला'
  };

  if (!products || products.length === 0) {
    return (
      <div className="w-full max-w-7xl mx-auto p-6 text-center">
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-3xl p-12 border border-gray-700/50">
          <h3 className="text-3xl font-bold text-gray-400 mb-4">
            कोई फोन नहीं मिला
          </h3>
          <p className="text-gray-500 text-lg">
            आपकी आवश्यकताओं के अनुसार कोई फोन उपलब्ध नहीं है।
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <button
              className="bg-red-500 text-white px-4 py-2 rounded-full font-semibold hover:bg-red-600 transition"
              onClick={onEnd}
            >
              बातचीत समाप्त करें
            </button>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-full font-semibold hover:bg-blue-600 transition"
              onClick={onRestart}
            >
              फिर से बात करें
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-7xl mx-auto p-6">
      <div className="mb-8 text-center">
        <h3 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
          Best Phone For You
        </h3>
        <p className="text-gray-400 text-lg">On Basis of Your Requirements</p>
        <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto mt-4 rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="flex flex-col lg:flex-row bg-gray-800/50 backdrop-blur-sm rounded-3xl shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 cursor-pointer border border-gray-700/50 group overflow-hidden"
            onClick={() => onProductSelect?.(product)}
          >
            <div className="lg:w-1/2 relative rounded-t-3xl lg:rounded-l-3xl lg:rounded-tr-none overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/300x200?text=Phone+Image';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent"></div>
              <div className="absolute top-4 right-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                TRENDING
              </div>
            </div>

            <div className="lg:w-1/2 p-6">
              <h4 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                {product.name}
              </h4>

              <div className="flex items-center justify-between mb-4">
                <span className="text-2xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                  {formatPrice(product.price)}
                </span>
                <div className="flex items-center space-x-1 bg-yellow-500/20 px-2 py-1 rounded-full">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm text-yellow-400 font-semibold">{product.rating}</span>
                </div>
              </div>

              <div className="mb-4">
                <span className="text-sm text-gray-400 font-medium">Colors Available</span>
                <div className="flex flex-wrap gap-1 mt-1">
                  {product.colors.map((color, index) => (
                    <span
                      key={index}
                      className={`text-xs px-2 py-1 rounded-full ${
                        product.availability?.[color]
                          ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                          : 'bg-red-500/20 text-red-400 border border-red-500/30'
                      }`}
                    >
                      {colorTranslations[color] || color}
                    </span>
                  ))}
                </div>
              </div>

              {product.foundAt && (
                <div className="flex items-center text-sm text-gray-400 mb-4">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>{product.foundAt}</span>
                </div>
              )}

              <div className="space-y-3 mb-6">
                {product.specifications.map((spec, index) => (
                  <div key={index} className="flex items-center text-sm text-gray-300 bg-gray-700/30 rounded-lg p-2">
                    <div className="text-cyan-400 mr-3">
                      {getFeatureIcon(spec)}
                    </div>
                    <span>{spec}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 flex justify-center gap-4">
        <button
          className="bg-red-500 text-white px-5 py-3 rounded-full font-semibold hover:bg-red-600 transition"
          onClick={onEnd}
        >
          End Conversation
        </button>
        <button
          className="bg-blue-500 text-white px-5 py-3 rounded-full font-semibold hover:bg-blue-600 transition"
          onClick={onRestart}
        >
          Back to chat
        </button>
      </div>
    </div>
  );
};

export default ProductGrid;