import React, { useState } from 'react';
import { ArrowLeft, Check, X, Star, Zap } from 'lucide-react';


const Phones = [
  {
    id: '1',
    name: 'iPhone 16 Pro',
    company: 'apple',
    rating: 4.4,
    price: 134900,
    colors: ['black', 'white', 'blue'],
    availability: {
      black: true,
      white: true,
      blue: false
    },
    variants: ['128GB', '256GB', '512GB'],
    specifications: ['6.1" ProMotion Display', 'A17 Pro Chip', '48MP Triple Camera'],
    image: 'https://m.media-amazon.com/images/I/31XFFW-tHNL._SY445_SX342_QL70_FMwebp_.jpg',
    foundAt: 'Apple Store, Delhi'
  },
  {
    id: '2',
    name: 'Galaxy S24 Ultra',
    company: 'samsung',
    rating: 4.7,
    price: 129999,
    colors: ['titanium', 'black', 'silver'],
    availability: {
      titanium: true,
      black: true,
      silver: false
    },
    variants: ['256GB', '512GB'],
    specifications: ['6.8" AMOLED', 'Snapdragon 8 Gen 3', '200MP Camera'],
    image: 'https://m.media-amazon.com/images/I/41X9qNxoJKL._SX300_SY300_QL70_FMwebp_.jpg',
    foundAt: 'Samsung Store, Mumbai'
  },
  {
    id: '3',
    name: 'OnePlus 12',
    company: 'oneplus',
    rating: 4.5,
    price: 64999,
    colors: ['green', 'black'],
    availability: {
      green: true,
      black: true
    },
    variants: ['128GB', '256GB'],
    specifications: ['6.82" AMOLED', 'Snapdragon 8 Gen 3', '50MP Triple Camera'],
    image: 'https://m.media-amazon.com/images/I/41J4+TiUz6L._SY300_SX300_.jpg',
    foundAt: 'Croma, Bangalore'
  },
  {
    id: '4',
    name: 'Xiaomi 14 Ultra',
    company: 'xiaomi',
    rating: 4.6,
    price: 99999,
    colors: ['white', 'black'],
    availability: {
      white: true,
      black: false
    },
    variants: ['256GB', '512GB'],
    specifications: ['6.73" LTPO AMOLED', 'Snapdragon 8 Gen 3', 'Leica Camera'],
    image: 'https://m.media-amazon.com/images/I/41r6mLsKMbL._SX300_SY300_QL70_FMwebp_.jpg',
    foundAt: 'Mi Home, Pune'
  },
  {
    id: '5',
    name: 'Realme GT 6',
    company: 'realme',
    rating: 4.3,
    price: 36999,
    colors: ['silver', 'blue'],
    availability: {
      silver: true,
      blue: true
    },
    variants: ['128GB', '256GB'],
    specifications: ['6.7" AMOLED', 'Snapdragon 8s Gen 3', 'AI Camera'],
    image: 'https://m.media-amazon.com/images/I/41ofU8c2xOL._SX300_SY300_QL70_FMwebp_.jpg',
    foundAt: 'Realme Store, Hyderabad'
  },
  {
    id: '6',
    name: 'Vivo X100 Pro',
    company: 'vivo',
    rating: 4.4,
    price: 89999,
    colors: ['black', 'red'],
    availability: {
      black: true,
      red: true
    },
    variants: ['256GB'],
    specifications: ['6.78" AMOLED', 'Dimensity 9300', 'ZEISS Lens'],
    image: 'https://m.media-amazon.com/images/I/71mwKuVAMmL._AC_UY327_FMwebp_QL65_.jpg',
    foundAt: 'Vivo Store, Chandigarh'
  },
  {
    id: '7',
    name: 'Oppo Find X7',
    company: 'oppo',
    rating: 4.2,
    price: 84999,
    colors: ['gold', 'blue'],
    availability: {
      gold: true,
      blue: false
    },
    variants: ['512GB'],
    specifications: ['LTPO AMOLED', 'Snapdragon 8 Gen 2', 'Periscope Camera'],
    image: 'https://m.media-amazon.com/images/I/71WNcgI8H7L._AC_UY327_FMwebp_QL65_.jpg',
    foundAt: 'Oppo Gallery, Jaipur'
  },
  {
    id: '8',
    name: 'iPhone 14',
    company: 'Apple',
    rating: 4.6,
    price: 79999,
    colors: ['blue', 'black', 'red'],
    availability: {
      blue: true,
      black: true,
      red: true
    },
    variants: ['128GB', '256GB'],
    specifications: ['6.1" OLED', 'A15 Bionic', '12MP Camera'],
    image: 'https://m.media-amazon.com/images/I/618Bb+QzCmL._SX679_.jpg',
    foundAt: 'Apple Store, Lucknow'
  },
  {
    id: '9',
    name: 'Samsung Galaxy A55',
    company: 'Samsung',
    rating: 4.1,
    price: 38999,
    colors: ['violet', 'black'],
    availability: {
      violet: true,
      black: true
    },
    variants: ['128GB', '256GB'],
    specifications: ['6.6" Super AMOLED', 'Exynos 1480', '50MP Camera'],
    image: 'hhttps://m.media-amazon.com/images/I/71oZ2oEeD4L._AC_UY327_FMwebp_QL65_.jpg',
    foundAt: 'Samsung Store, Ahmedabad'
  },
  {
    id: '10',
    name: 'Nothing Phone (2)',
    company: 'Nothing',
    rating: 4.5,
    price: 49999,
    colors: ['white', 'black'],
    availability: {
      white: true,
      black: false
    },
    variants: ['256GB', '512GB'],
    specifications: ['6.7" AMOLED', 'Snapdragon 8+ Gen 1', 'Glyph Interface'],
    image: 'https://m.media-amazon.com/images/I/81lRPeeHZgL._SY679_.jpg',
    foundAt: 'Flipkart Warehouse, Noida'
  },
  {
    id: '11',
    name: 'Moto Edge 50 Pro',
    company: 'Motorola',
    rating: 4.3,
    price: 34999,
    colors: ['black', 'purple'],
    availability: {
      black: true,
      purple: true
    },
    variants: ['128GB', '256GB'],
    specifications: ['6.7" pOLED', 'Snapdragon 7 Gen 3', '125W Charging'],
    image: 'https://m.media-amazon.com/images/I/715aoVxQNTL._AC_UY327_FMwebp_QL65_.jpg',
    foundAt: 'Motorola Experience Store, Indore'
  },
  {
    id: '12',
    name: 'Pixel 8 Pro',
    company: 'Google',
    rating: 4.7,
    price: 106999,
    colors: ['blue', 'black', 'beige'],
    availability: {
      blue: true,
      black: true,
      beige: true
    },
    variants: ['128GB', '256GB'],
    specifications: ['6.7" LTPO OLED', 'Tensor G3', 'Pro Camera Tools'],
    image: 'https://m.media-amazon.com/images/I/61esJgWizNL._AC_UY327_FMwebp_QL65_.jpg',
    foundAt: 'Google Store, Online'
  },
  {
    id: '13',
    name: 'Infinix Zero 30',
    company: 'Infinix',
    rating: 4.0,
    price: 23999,
    colors: ['gold', 'black'],
    availability: {
      gold: true,
      black: true
    },
    variants: ['128GB'],
    specifications: ['6.78" AMOLED', 'Dimensity 8020', '4K Selfie Camera'],
    image: 'https://m.media-amazon.com/images/I/511Di+XT3ML._AC_UY327_FMwebp_QL65_.jpg',
    foundAt: 'Infinix Kiosk, Surat'
  },
  {
    id: '14',
    name: 'Poco X6 Pro',
    company: 'Poco',
    rating: 4.2,
    price: 26999,
    colors: ['yellow', 'black'],
    availability: {
      yellow: true,
      black: false
    },
    variants: ['128GB', '256GB'],
    specifications: ['6.67" AMOLED', 'Dimensity 8300 Ultra', 'AI Features'],
    image: 'https://m.media-amazon.com/images/I/61MOQVWuJaL._AC_UY327_FMwebp_QL65_.jpg',
    foundAt: 'Mi Partner Store, Bhopal'
  },
  {
    id: '15',
    name: 'Lava Agni 2',
    company: 'Lava',
    rating: 4.1,
    price: 21999,
    colors: ['green', 'blue'],
    availability: {
      green: true,
      blue: true
    },
    variants: ['128GB'],
    specifications: ['6.5" AMOLED', 'Dimensity 7050', '66W Charging'],
    image: 'https://m.media-amazon.com/images/I/61OBw+XUiuL._AC_UY327_FMwebp_QL65_.jpg',
    foundAt: 'Lava Store, Patna'
  }
];

const PhoneComparison = ({ phones = [], onBack, onEnd }) => {
  const [selectedPhones, setSelectedPhones] = useState([]);
  const [isComparing, setIsComparing] = useState(false);

  const handlePhoneSelect = (phone) => {
    if (selectedPhones.find(p => p.id === phone.id)) {
      // Remove if already selected
      setSelectedPhones(selectedPhones.filter(p => p.id !== phone.id));
    } else if (selectedPhones.length < 2) {
      // Add if less than 2 selected
      setSelectedPhones([...selectedPhones, phone]);
    }
  };

  const startComparison = () => {
    if (selectedPhones.length === 2) {
      setIsComparing(true);
    }
  };

  const resetSelection = () => {
    setSelectedPhones([]);
    setIsComparing(false);
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(price);
  };

  const getAvailableColors = (phone) => {
    return phone.colors.filter(color => phone.availability[color]);
  };

  const renderColorDot = (color, available) => (
    <div
      key={color}
      className={`w-4 h-4 rounded-full border-2 ${
        available ? 'border-white' : 'border-gray-500 opacity-30'
      }`}
      style={{
        backgroundColor: color === 'black' ? '#000' : 
                        color === 'white' ? '#fff' : 
                        color === 'blue' ? '#3b82f6' : 
                        color === 'red' ? '#ef4444' : 
                        color === 'green' ? '#10b981' : color
      }}
      title={`${color} ${available ? '(Available)' : '(Out of Stock)'}`}
    />
  );

  if (isComparing && selectedPhones.length === 2) {
    const [phone1, phone2] = selectedPhones;
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 p-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <button
              onClick={() => setIsComparing(false)}
              className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Selection</span>
            </button>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Phone Comparison
            </h1>
            <button
              onClick={onEnd}
              className="px-6 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors"
            >
              End
            </button>
          </div>

          {/* Comparison Table */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/50">
            <div className="grid grid-cols-3 gap-8">
              {/* Feature Labels */}
              <div className="space-y-6">
                <div className="h-20"></div> {/* Space for phone names */}
                <div className="text-lg font-semibold text-gray-300">Name</div>
                <div className="text-lg font-semibold text-gray-300">Company</div>
                <div className="text-lg font-semibold text-gray-300">Price</div>
                <div className="text-lg font-semibold text-gray-300">Rating</div>
                <div className="text-lg font-semibold text-gray-300">Available Colors</div>
                <div className="text-lg font-semibold text-gray-300">Stock Status</div>
              </div>

              {/* Phone 1 */}
              <div className="space-y-6 text-center">
                <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl p-6 border border-cyan-500/30">
                  <h2 className="text-2xl font-bold text-cyan-100 mb-2">{phone1.name}</h2>
                  <div className="w-16 h-16 bg-gray-700 rounded-lg mx-auto flex items-center justify-center">
                    📱
                  </div>
                </div>
                <div className="text-white font-medium">{phone1.name}</div>
                <div className="text-white capitalize">{phone1.company}</div>
                <div className="text-green-400 font-bold text-xl">{formatPrice(phone1.price)}</div>
                <div className="flex items-center justify-center space-x-1">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span className="text-yellow-400 font-semibold">{phone1.rating}</span>
                </div>
                <div className="flex justify-center space-x-2">
                  {phone1.colors.map(color => renderColorDot(color, phone1.availability[color]))}
                </div>
                <div className="text-sm">
                  {getAvailableColors(phone1).length > 0 ? (
                    <span className="text-green-400 flex items-center justify-center space-x-1">
                      <Check className="w-4 h-4" />
                      <span>In Stock</span>
                    </span>
                  ) : (
                    <span className="text-red-400 flex items-center justify-center space-x-1">
                      <X className="w-4 h-4" />
                      <span>Out of Stock</span>
                    </span>
                  )}
                </div>
              </div>

              {/* Phone 2 */}
              <div className="space-y-6 text-center">
                <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl p-6 border border-purple-500/30">
                  <h2 className="text-2xl font-bold text-purple-100 mb-2">{phone2.name}</h2>
                  <div className="w-16 h-16 bg-gray-700 rounded-lg mx-auto flex items-center justify-center">
                    📱
                  </div>
                </div>
                <div className="text-white font-medium">{phone2.name}</div>
                <div className="text-white capitalize">{phone2.company}</div>
                <div className="text-green-400 font-bold text-xl">{formatPrice(phone2.price)}</div>
                <div className="flex items-center justify-center space-x-1">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span className="text-yellow-400 font-semibold">{phone2.rating}</span>
                </div>
                <div className="flex justify-center space-x-2">
                  {phone2.colors.map(color => renderColorDot(color, phone2.availability[color]))}
                </div>
                <div className="text-sm">
                  {getAvailableColors(phone2).length > 0 ? (
                    <span className="text-green-400 flex items-center justify-center space-x-1">
                      <Check className="w-4 h-4" />
                      <span>In Stock</span>
                    </span>
                  ) : (
                    <span className="text-red-400 flex items-center justify-center space-x-1">
                      <X className="w-4 h-4" />
                      <span>Out of Stock</span>
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* VS Indicator */}
            <div className="flex justify-center my-8">
              <div className="bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full p-4">
                <span className="text-white font-bold text-2xl">VS</span>
              </div>
            </div>

            {/* Winner Analysis */}
            <div className="mt-8 bg-gray-900/50 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-center mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Quick Analysis
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="text-center">
                  <h4 className="font-semibold text-green-400 mb-2">Better Value</h4>
                  <p className="text-white">
                    {phone1.price < phone2.price ? phone1.name : phone2.name}
                    <span className="text-gray-400 text-sm block">
                      Lower price point
                    </span>
                  </p>
                </div>
                <div className="text-center">
                  <h4 className="font-semibold text-yellow-400 mb-2">Higher Rated</h4>
                  <p className="text-white">
                    {phone1.rating > phone2.rating ? phone1.name : phone2.rating > phone1.rating ? phone2.name : 'Tie'}
                    <span className="text-gray-400 text-sm block">
                      Better user rating
                    </span>
                  </p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-center space-x-4 mt-8">
              <button
                onClick={resetSelection}
                className="px-8 py-3 bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white rounded-2xl font-bold transition-all duration-300 transform hover:scale-105"
              >
                Compare Different Phones
              </button>
              <button
                onClick={onBack}
                className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white rounded-2xl font-bold transition-all duration-300 transform hover:scale-105"
              >
                Back to Results
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={onBack}
            className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Results</span>
          </button>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Select Phones to Compare
          </h1>
          <button
            onClick={onEnd}
            className="px-6 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors"
          >
            End
          </button>
        </div>

        {/* Selection Info */}
        <div className="text-center mb-8">
          <p className="text-gray-300 text-lg">
            Select exactly 2 phones to compare ({selectedPhones.length}/2 selected)
          </p>
          {selectedPhones.length === 2 && (
            <button
              onClick={startComparison}
              className="mt-4 px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white rounded-2xl font-bold transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 mx-auto"
            >
              <Zap className="w-6 h-6" />
              <span>Compare Selected Phones</span>
            </button>
          )}
        </div>

        {/* Phone Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {phones.map((phone) => {
            const isSelected = selectedPhones.find(p => p.id === phone.id);
            const availableColors = getAvailableColors(phone);
            
            return (
              <div
                key={phone.id}
                onClick={() => handlePhoneSelect(phone)}
                className={`relative bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border cursor-pointer transition-all duration-300 transform hover:scale-105 ${
                  isSelected
                    ? 'border-cyan-500 bg-cyan-500/10 shadow-lg shadow-cyan-500/25'
                    : 'border-gray-700/50 hover:border-gray-600'
                }`}
              >
                {/* Selection Indicator */}
                {isSelected && (
                  <div className="absolute top-4 right-4 bg-cyan-500 rounded-full p-1">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                )}

                {/* Phone Icon */}
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-gray-700 rounded-lg mx-auto flex items-center justify-center text-2xl">
                    📱
                  </div>
                </div>

                {/* Phone Info */}
                <div className="text-center space-y-3">
                  <h3 className="text-xl font-bold text-white">{phone.name}</h3>
                  <p className="text-gray-400 capitalize">{phone.company}</p>
                  
                  <div className="flex items-center justify-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-yellow-400 font-semibold">{phone.rating}</span>
                  </div>
                  
                  <p className="text-2xl font-bold text-green-400">{formatPrice(phone.price)}</p>
                  
                  {/* Colors */}
                  <div className="flex justify-center space-x-2">
                    {phone.colors.map(color => renderColorDot(color, phone.availability[color]))}
                  </div>
                  
                  {/* Availability */}
                  <div className="text-sm">
                    {availableColors.length > 0 ? (
                      <span className="text-green-400">✓ Available in {availableColors.length} color{availableColors.length > 1 ? 's' : ''}</span>
                    ) : (
                      <span className="text-red-400">✗ Out of Stock</span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {phones.length === 0 && (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">📱</div>
            <h2 className="text-2xl font-bold text-gray-400 mb-2">No Phones Available</h2>
            <p className="text-gray-500">No phones found for comparison.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PhoneComparison;