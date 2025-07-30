const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

// Import mock phones data
const mockPhones = [
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

export class ChatbotService {
  constructor() {
    this.conversationState = {
      step: 'greeting',
      userPreferences: {}
    };
    this.speechSynthesis = window.speechSynthesis;
  }

  getGreeting() {
    const message = "mera naam cub hai, mujhe aapki sahayta ke liye banaya gaya hai, aapko konsi company ka phone chahiye?";
    this.speak(message);
    return message;
  }

  // ✅ Single definition of direct phone query checker
  checkDirectPhoneQuery(input) {
    const phoneNameMap = {
      'iphone 16 pro': 'iPhone 16 Pro',
      'iphone16pro': 'iPhone 16 Pro',
      'iphone 16': 'iPhone 16 Pro',
      'iphone 14': 'iPhone 14',
      'iphone14': 'iPhone 14',
      'galaxy s24 ultra': 'Galaxy S24 Ultra',
      'galaxys24ultra': 'Galaxy S24 Ultra',
      's24 ultra': 'Galaxy S24 Ultra',
      'galaxy a55': 'Samsung Galaxy A55',
      'galaxya55': 'Samsung Galaxy A55',
      'a55': 'Samsung Galaxy A55',
      'oneplus 12': 'OnePlus 12',
      'oneplus12': 'OnePlus 12',
      'one plus 12': 'OnePlus 12',
      'xiaomi 14 ultra': 'Xiaomi 14 Ultra',
      'xiaomi14ultra': 'Xiaomi 14 Ultra',
      'mi 14 ultra': 'Xiaomi 14 Ultra',
      'realme gt 6': 'Realme GT 6',
      'realmegt6': 'Realme GT 6',
      'gt 6': 'Realme GT 6',
      'vivo x100 pro': 'Vivo X100 Pro',
      'vivox100pro': 'Vivo X100 Pro',
      'x100 pro': 'Vivo X100 Pro',
      'oppo find x7': 'Oppo Find X7',
      'oppofindx7': 'Oppo Find X7',
      'find x7': 'Oppo Find X7',
      'moto edge 50 pro': 'Moto Edge 50 Pro',
      'motoedge50pro': 'Moto Edge 50 Pro',
      'edge 50 pro': 'Moto Edge 50 Pro',
      'pixel 8 pro': 'Pixel 8 Pro',
      'pixel8pro': 'Pixel 8 Pro',
      'google pixel 8 pro': 'Pixel 8 Pro',
      'infinix zero 30': 'Infinix Zero 30',
      'infinixzero30': 'Infinix Zero 30',
      'zero 30': 'Infinix Zero 30',
      'poco x6 pro': 'Poco X6 Pro',
      'pocox6pro': 'Poco X6 Pro',
      'x6 pro': 'Poco X6 Pro',
      'lava agni 2': 'Lava Agni 2',
      'lavaagni2': 'Lava Agni 2',
      'agni 2': 'Lava Agni 2'
    };

    const normalizedInput = input.toLowerCase().replace(/\s+/g, ' ').trim();

    if (phoneNameMap[normalizedInput]) {
      return phoneNameMap[normalizedInput];
    }

    for (const [key, value] of Object.entries(phoneNameMap)) {
      if (normalizedInput.includes(key) || key.includes(normalizedInput)) {
        return value;
      }
    }

    return null;
  }

  // ✅ Single definition of handler
  handleDirectPhoneQuery(phoneName) {
    const phone = mockPhones.find(p => p.name === phoneName);
    if (phone) {
      
      this.conversationState.step = 'direct_result';
      const message = `${phone.name} mil gaya! Price: ₹${phone.price.toLocaleString()}, Rating: ${phone.rating} out of 5, Available colors: ${phone.colors.join(', ')},Available at: ${phone.foundAt} .Thankyou`;
      this.speak(message);
      return message;
    } else {
      const message = "Sorry, yeh phone hamare database mein nahi mila. Kripaya company name bataiye.";
      this.speak(message);
      return message;
    }
  }

  speak(text) {
    if (this.speechSynthesis) {
      this.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'hi-IN';
      utterance.rate = 0.8;
      utterance.pitch = 1;
      utterance.volume = 1;
      this.speechSynthesis.speak(utterance);
    }
  }

  // ✅ Fixed version — no duplicate declaration
  processUserInput(input) {
    const lowercaseInput = input.toLowerCase();

    const directPhone = this.checkDirectPhoneQuery(lowercaseInput);
    if (directPhone) {
      return this.handleDirectPhoneQuery(directPhone);
    }

    switch (this.conversationState.step) {
      case 'greeting':
        return this.handleCompanyQuery(lowercaseInput);
      case 'budget':
        return this.handleBudgetQuery(lowercaseInput);
      case 'color':
        return this.handleColorQuery(lowercaseInput);
      case 'availability':
        return this.handleAvailabilityQuery(lowercaseInput);
      case 'specification':
        return this.handleSpecificationQuery(lowercaseInput);
      default:
        this.conversationState.step = 'greeting';
        const greeting = this.getGreeting();
        return greeting;
    }
  }

  handleCompanyQuery(input) {
    const companyMap = {
      'apple': ['apple', 'एप्पल', 'iphone'],
      'samsung': ['samsung', 'सैमसंग', 'galaxy'],
      'xiaomi': ['xiaomi', 'शाओमी', 'mi'],
      'oneplus': ['oneplus', 'वनप्लस', 'one plus'],
      'realme': ['realme', 'रियलमी'],
      'oppo': ['oppo', 'ओप्पो'],
      'vivo': ['vivo', 'विवो'],
      'nothing': ['nothing', 'नथिंग'],
      'motorola': ['motorola', 'मोटोरोला', 'moto'],
      'google': ['google', 'गूगल', 'pixel'],
      'infinix': ['infinix', 'इन्फिनिक्स'],
      'poco': ['poco', 'पोको'],
      'lava': ['lava', 'लावा']
    };

    let foundCompany = null;
    for (const [company, variations] of Object.entries(companyMap)) {
      if (variations.some(variant => input.includes(variant))) {
        foundCompany = company;
        break;
      }
    }

    if (foundCompany) {
      this.conversationState.userPreferences.company = foundCompany;
      this.conversationState.step = 'budget';
      const message = `${foundCompany} accha! ab aapka budget kya hai? rupay mein bataiye.`;
      this.speak(message);
      return message;
    }

    const message = "kripaya company name bataiye jaise samsung, apple, xiaomi.";
    this.speak(message);
    return message;
  }

  handleBudgetQuery(input) {
    const budgetMatch = input.match(/(\d+)/);
    if (budgetMatch) {
      const budget = parseInt(budgetMatch[1]);
      this.conversationState.userPreferences.budget = budget;
      this.conversationState.step = 'color';
      const message = "badhiya! aap kaun sa rang pasand karenge?";
      this.speak(message);
      return message;
    }

    const message = "kripaya budget rupay mein bataiye.";
    this.speak(message);
    return message;
  }

  handleColorQuery(input) {
    const colorMap = {
      'black': ['black', 'kala', 'काला'],
      'white': ['white', 'safed', 'सफेद'],
      'blue': ['blue', 'nila', 'नीला'],
      'red': ['red', 'lal', 'लाल'],
      'gold': ['gold', 'sunehra', 'सुनहरा'],
      'silver': ['silver', 'chandi', 'चांदी'],
      'green': ['green', 'hara', 'हरा'],
      'titanium': ['titanium', 'टाइटेनियम'],
      'violet': ['violet', 'baingani', 'बैंगनी'],
      'purple': ['purple', 'jamuni', 'जामुनी'],
      'yellow': ['yellow', 'pila', 'पीला'],
      'beige': ['beige', 'हल्का भूरा']
    };

    let foundColor = null;
    for (const [color, variations] of Object.entries(colorMap)) {
      if (variations.some(variant => input.includes(variant))) {
        foundColor = color;
        break;
      }
    }

    if (foundColor) {
      this.conversationState.userPreferences.color = foundColor;
      this.conversationState.step = 'availability';
      const message = "kya aap chahte ho ki phone abhi available ho?";
      this.speak(message);
      return message;
    }

    const message = "kripaya rang bataiye jaise kala, safed, nila.";
    this.speak(message);
    return message;
  }

  handleAvailabilityQuery(input) {
    const wantsAvailable = input.includes('han') || input.includes('yes') || input.includes('हां') || input.includes('जी');
    this.conversationState.userPreferences.needsAvailability = wantsAvailable;
    this.conversationState.step = 'specification';
    const message = "koi khaas specification chahiye?";
    this.speak(message);
    return message;
  }

  handleSpecificationQuery(input) {
    if (input.includes('nahi') || input.includes('no') || input.includes('नहीं')) {
      this.conversationState.step = 'results';
      const message = "perfect! main aapke liye phone dhundh raha hun...";
      this.speak(message);
      return message;
    }

    this.conversationState.userPreferences.specification = input;
    this.conversationState.step = 'results';
    const message = "perfect! main aapke liye phone dhundh raha hun...";
    this.speak(message);
    return message;
  }

  async searchProducts() {
    try {
      const filtered = mockPhones.filter(phone => {
        const prefs = this.conversationState.userPreferences;

        if (prefs.company && phone.company.toLowerCase() !== prefs.company.toLowerCase()) return false;
        if (prefs.budget && phone.price > prefs.budget) return false;
        if (prefs.color && !phone.colors.includes(prefs.color)) return false;
        if (prefs.needsAvailability && prefs.color && !phone.availability[prefs.color]) return false;
        if (prefs.specification) {
          const spec = prefs.specification.toLowerCase();
          const phoneSpecs = phone.specifications.join(' ').toLowerCase();
          if (!phoneSpecs.includes('camera') && spec.includes('camera')) return false;
          if (!phoneSpecs.includes('display') && spec.includes('display')) return false;
        }

        return true;
      });

      return filtered;
    } catch (error) {
      console.error('Error searching products:', error);
      return [];
    }
  }

  resetConversation() {
    this.conversationState = {
      step: 'greeting',
      userPreferences: {}
    };
    if (this.speechSynthesis) {
      this.speechSynthesis.cancel();
    }
  }

  getCurrentStep() {
    return this.conversationState.step;
  }

  getUserPreferences() {
    return this.conversationState.userPreferences;
  }

  stopSpeaking() {
    if (this.speechSynthesis) {
      this.speechSynthesis.cancel();
    }
  }
}
