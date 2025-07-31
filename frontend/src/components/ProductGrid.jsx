import React from "react";
import { MapPin } from "lucide-react";

const ProductGrid = ({ products, onProductSelect, onRestart, onEnd, language = 'hindi' }) => {
  const formatPrice = (price) => {
    return new Intl.NumberFormat('hi-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(price);
  };

  const texts = {
    hindi: {
    bestPhoneTitle: "Aapke liye sabse acche phone",
    bestPhoneSubtitle: "Hamaare AI Assistant dwara sujhaaye gaye",
    noPhoneFound: "Koi phone nahi mila",
    noPhoneMessage: "Aapki aavashyaktaon ke anuroop koi phone upalabdh nahi hai.",
    endConversation: "End Conversation",
    backToChat: "Back to Chat",
    selectPhone: "Select This Phone"
    },
    english: {
      bestPhoneTitle: "Best Phones for You",
      bestPhoneSubtitle: "Recommended by our AI Assistant",
      noPhoneFound: "No Phone Found",
      noPhoneMessage: "No phones available matching your requirements.",
      endConversation: "End Conversation",
      backToChat: "Back to Chat",
      selectPhone: "Select This Phone"
    }
  }[language];

  const getFeatureIcon = (feature) => {
    const featureLower = feature.toLowerCase();
    if (featureLower.includes('camera') || featureLower.includes('कैमरा')) return '📸';
    if (featureLower.includes('battery') || featureLower.includes('बैटरी')) return '🔋';
    if (featureLower.includes('storage') || featureLower.includes('स्टोरेज')) return '💾';
    if (featureLower.includes('ram') || featureLower.includes('रैम')) return '⚡';
    if (featureLower.includes('display') || featureLower.includes('डिस्प्ले')) return '📱';
    if (featureLower.includes('processor') || featureLower.includes('प्रोसेसर')) return '🔧';
    return '✨';
  };

  if (!products || products.length === 0) {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900 flex flex-col items-center justify-center p-6 z-50">
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-3xl p-12 border border-gray-700/50 text-center max-w-2xl mb-8">
          <h3 className="text-3xl font-bold text-gray-400 mb-4">
            {texts.noPhoneFound}
          </h3>
          <p className="text-gray-500 text-lg">
            {texts.noPhoneMessage}
          </p>
        </div>
        <div className="flex justify-center gap-4">
          <button
            className="bg-red-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-red-600 transition transform hover:scale-105"
            onClick={onEnd}
          >
            {texts.endConversation}
          </button>
          <button
            className="bg-blue-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-600 transition transform hover:scale-105"
            onClick={onRestart}
          >
            {texts.backToChat}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900 z-50 flex flex-col">
      {/* Header */}
      <div className="flex-shrink-0 p-6 pb-4 text-center">
        <h3 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
          {texts.bestPhoneTitle}
        </h3>
        <p className="text-gray-400 text-lg">{texts.bestPhoneSubtitle}</p>
        <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto mt-4 rounded-full"></div>
      </div>
      
      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto px-6">
        <div className="grid grid-cols-1 gap-6 max-w-7xl mx-auto pb-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="flex flex-col lg:flex-row bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300 transform hover:-translate-y-2 hover:scale-[1.02] cursor-pointer border border-gray-700/50 group overflow-hidden"
            onClick={() => onProductSelect?.(product)}
          >
            <div className="lg:w-1/2 relative rounded-t-2xl lg:rounded-l-2xl lg:rounded-tr-none overflow-hidden h-64 lg:h-auto">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/300x200?text=Phone+Image';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute top-4 right-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                {formatPrice(product.price)}
              </div>
            </div>

            <div className="lg:w-1/2 p-4 lg:p-6">
              <h4 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                {product.name}
              </h4>
              
              {product.description && (
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                  {product.description}
                </p>
              )}
              {product.foundAt && (
                <div className="flex items-center text-sm text-gray-400 mb-4">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>{product.foundAt}</span>
                </div>
              )}

              <div className="space-y-2 mb-4">
                {product.specifications.map((spec, index) => (
                  <div key={index} className="flex items-center text-sm text-gray-300 bg-gray-700/30 rounded-lg p-2">
                    <div className="text-cyan-400 mr-3">
                      {getFeatureIcon(spec)}
                    </div>
                    <span>{spec}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between">
                <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  {formatPrice(product.price)}
                </div>
                <button className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105">
                  {texts.selectPhone}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>

      {/* Fixed Bottom Buttons */}
      <div className="flex-shrink-0 p-6 pt-4">
        <div className="flex justify-center gap-4">
        <button
          className="bg-red-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-red-600 transition transform hover:scale-105 shadow-lg"
          onClick={onEnd}
        >
          {texts.endConversation}
        </button>
        <button
          className="bg-blue-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-600 transition transform hover:scale-105 shadow-lg"
          onClick={onRestart}
        >
          {texts.backToChat}
        </button>
      </div>
      </div>
    </div>
  );
};

export default ProductGrid;