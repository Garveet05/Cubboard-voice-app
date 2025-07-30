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
  }
];

export class ChatbotService {
  constructor() {
    this.conversationState = {
      step: 'greeting',
      userPreferences: {}
    };
  }

  getGreeting() {
    return "mera naam cub hai, mujhe aapki sahayta ke liye banaya gaya hai, aapko konsi company ka phone chahiye?";
  }

  processUserInput(input) {
    const lowercaseInput = input.toLowerCase();

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
        return this.getGreeting();
    }
  }

  handleCompanyQuery(input) {
    const companies = ['samsung', 'apple', 'xiaomi', 'oneplus', 'realme', 'oppo', 'vivo', 'nothing', 'motorola', 'google', 'infinix', 'poco', 'lava'];
    const foundCompany = companies.find(company => 
      input.includes(company) || 
      input.includes('सैमसंग') && company === 'samsung' ||
      input.includes('एप्पल') && company === 'apple' ||
      input.includes('शाओमी') && company === 'xiaomi' ||
      input.includes('वनप्लस') && company === 'oneplus' ||
      input.includes('रियलमी') && company === 'realme' ||
      input.includes('ओप्पो') && company === 'oppo' ||
      input.includes('विवो') && company === 'vivo'
    );
    
    if (foundCompany) {
      this.conversationState.userPreferences.company = foundCompany;
      this.conversationState.step = 'budget';
      return `${foundCompany} accha! ab aapka budget kya hai? rupay mein bataiye.`;
    }
    
    return "kripaya company name bataiye jaise samsung, apple, xiaomi.";
  }

  handleBudgetQuery(input) {
    // Extract numbers from input
    const budgetMatch = input.match(/(\d+)/);
    if (budgetMatch) {
      const budget = parseInt(budgetMatch[1]);
      this.conversationState.userPreferences.budget = budget;
      this.conversationState.step = 'color';
      return "badhiya! aap kaun sa rang pasand karenge?";
    }
    
    return "kripaya budget rupay mein bataiye.";
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
      'yellow': ['yellow', 'pila', 'पीला']
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
      return "kya aap chahte hain ki phone available ho?";
    }

    return "kripaya rang bataiye jaise kala, safed, nila.";
  }

  handleAvailabilityQuery(input) {
    const wantsAvailable = input.includes('han') || input.includes('yes') || input.includes('हां') || input.includes('जी');
    this.conversationState.userPreferences.needsAvailability = wantsAvailable;
    this.conversationState.step = 'specification';
    return "koi khaas specification chahiye?";
  }

  handleSpecificationQuery(input) {
    if (input.includes('nahi') || input.includes('no') || input.includes('नहीं')) {
      this.conversationState.step = 'results';
      return "perfect! main aapke liye phone dhundh raha hun...";
    }
    
    this.conversationState.userPreferences.specification = input;
    this.conversationState.step = 'results';
    return "perfect! main aapke liye phone dhundh raha hun...";
  }

  async searchProducts() {
    try {
      // Filter phones based on user preferences
      const filtered = mockPhones.filter(phone => {
        // Company match
        if (this.conversationState.userPreferences.company && 
            phone.company !== this.conversationState.userPreferences.company) {
          return false;
        }
        
        // Budget match (within 20% range)
        if (this.conversationState.userPreferences.budget) {
          const budget = this.conversationState.userPreferences.budget;
          const budgetRange = budget * 0.3; // 30% range
          if (phone.price < budget - budgetRange || phone.price > budget + budgetRange) {
            return false;
          }
        }
        
        // Color match
        if (this.conversationState.userPreferences.color && 
            !phone.colors.includes(this.conversationState.userPreferences.color)) {
          return false;
        }
        
        // Availability match
        if (this.conversationState.userPreferences.needsAvailability && 
            this.conversationState.userPreferences.color) {
          if (!phone.availability[this.conversationState.userPreferences.color]) {
            return false;
          }
        }
        
        // Specification match (basic keyword matching)
        if (this.conversationState.userPreferences.specification) {
          const spec = this.conversationState.userPreferences.specification.toLowerCase();
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
  }

  getCurrentStep() {
    return this.conversationState.step;
  }

  getUserPreferences() {
    return this.conversationState.userPreferences;
  }
}