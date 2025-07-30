import React from 'react';
import { ShoppingCart, Star, Zap, Shield, Camera, Battery } from 'lucide-react';

const ProductGrid = ({ products, onProductSelect }) => {
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

  return (
    <div className="w-full max-w-7xl mx-auto p-6">
      <div className="mb-8 text-center">
        <h3 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
          Aapke Liye Behtareen Phones
        </h3>
        <p className="text-gray-400 text-lg">Aapki pasand ke anusar chune gaye phones</p>
        <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto mt-4 rounded-full"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-gray-800/50 backdrop-blur-sm rounded-3xl shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 cursor-pointer border border-gray-700/50 group overflow-hidden"
            onClick={() => onProductSelect?.(product)}
          >
            {/* Image container with overlay */}
            <div className="relative aspect-w-16 aspect-h-12 rounded-t-3xl overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent"></div>
              
              {/* Floating badge */}
              <div className="absolute top-4 right-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                TRENDING
              </div>
            </div>
            
            <div className="p-6">
              <h4 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                {product.name}
              </h4>
              
              <div className="flex items-center justify-between mb-4">
                <span className="text-2xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                  {formatPrice(product.price)}
                </span>
                <div className="flex items-center space-x-1 bg-yellow-500/20 px-2 py-1 rounded-full">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm text-yellow-400 font-semibold">4.8</span>
                </div>
              </div>
              
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
              
              <button className="w-full bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-600 text-white py-3 px-4 rounded-2xl font-bold hover:from-cyan-600 hover:via-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-cyan-500/25 transform hover:scale-105">
                <ShoppingCart className="w-5 h-5" />
                <span>Abhi Kharidiye</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;