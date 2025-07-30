const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

export class ChatbotService {
  constructor() {
    this.conversationState = {
      step: 'idle',
      userPreferences: {}
    };
  }

  getGreeting() {
    return "Namaste! Main Cub hun. Main aapki phone dhundne mein madad kar sakta hun. Aap kis company ka phone chahte hain?";
  }

  processUserInput(input) {
    const lowercaseInput = input.toLowerCase();

    switch (this.conversationState.step) {
      case 'greeting':
        return this.handleCompanyQuery(lowercaseInput);
      case 'company':
        return this.handlePriceQuery(lowercaseInput);
      case 'price':
        return this.handleColorQuery(lowercaseInput);
      case 'color':
        this.conversationState.step = 'results';
        return "Bahut accha! Main aapke liye phone dhundh raha hun...";
      default:
        this.conversationState.step = 'greeting';
        return this.getGreeting();
    }
  }

  handleCompanyQuery(input) {
    const companies = ['samsung', 'apple', 'xiaomi', 'oneplus', 'realme', 'oppo', 'vivo'];
    const foundCompany = companies.find(company => input.includes(company));
    
    if (foundCompany) {
      this.conversationState.userPreferences.company = foundCompany;
      this.conversationState.step = 'price';
      const companyName = foundCompany.charAt(0).toUpperCase() + foundCompany.slice(1);
      return `${companyName} acchi pasand hai! Aapka budget kya hai? Kam, madhyam ya zyada?`;
    }
    
    return "Kripaya koi phone company bataiye jaise Samsung, Apple, Xiaomi aadi.";
  }

  handlePriceQuery(input) {
    let priceRange = '';
    if (input.includes('kam') || input.includes('low') || input.includes('cheap')) {
      priceRange = 'low';
    } else if (input.includes('madhyam') || input.includes('medium') || input.includes('mid')) {
      priceRange = 'medium';
    } else if (input.includes('zyada') || input.includes('high') || input.includes('expensive')) {
      priceRange = 'high';
    }

    if (priceRange) {
      this.conversationState.userPreferences.priceRange = priceRange;
      this.conversationState.step = 'color';
      return "Badhiya! Aap kaun sa rang pasand karenge?";
    }

    return "Kripaya apna budget bataiye - kam, madhyam ya zyada.";
  }

  handleColorQuery(input) {
    const colors = ['black', 'white', 'blue', 'red', 'gold', 'silver'];
    const foundColor = colors.find(color => 
      input.includes(color) || 
      input.includes(this.translateColor(color))
    );

    if (foundColor) {
      this.conversationState.userPreferences.color = foundColor;
      return "Perfect! Main aapke liye phone dhundh raha hun...";
    }

    return "Kripaya koi rang bataiye jaise kala, safed, nila aadi.";
  }

  translateColor(color) {
    const colorMap = {
      'black': 'kala',
      'white': 'safed',
      'blue': 'nila',
      'red': 'lal',
      'gold': 'sunehra',
      'silver': 'chandi'
    };
    return colorMap[color] || color;
  }

  async searchProducts() {
    try {
      const response = await fetch(`${API_BASE_URL}/search-phones`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          preferences: this.conversationState.userPreferences
        })
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      return data.products || [];
    } catch (error) {
      console.error('Error searching products:', error);
      return this.getMockProducts();
    }
  }

  getMockProducts() {
    return [
      {
        id: '1',
        name: 'iPhone 15 Pro',
        company: 'apple',
        price: 134900,
        color: 'black',
        image: 'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg',
        specifications: ['256GB Storage', '6.1" ProMotion Display', 'A17 Pro Chip', '48MP Camera']
      },
      {
        id: '2',
        name: 'Galaxy S24 Ultra',
        company: 'samsung',
        price: 129999,
        color: 'titanium',
        image: 'https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg',
        specifications: ['512GB Storage', '6.8" Dynamic AMOLED', 'Snapdragon 8 Gen 3', '200MP Camera']
      },
      {
        id: '3',
        name: 'OnePlus 12',
        company: 'oneplus',
        price: 64999,
        color: 'green',
        image: 'https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg',
        specifications: ['256GB Storage', '6.82" LTPO AMOLED', 'Snapdragon 8 Gen 3', '50MP Camera']
      },
      {
        id: '4',
        name: 'Xiaomi 14 Ultra',
        company: 'xiaomi',
        price: 99999,
        color: 'white',
        image: 'https://images.pexels.com/photos/1440727/pexels-photo-1440727.jpeg',
        specifications: ['512GB Storage', '6.73" LTPO AMOLED', 'Snapdragon 8 Gen 3', 'Leica Camera']
      }
    ];
  }

  resetConversation() {
    this.conversationState = {
      step: 'idle',
      userPreferences: {}
    };
  }

  getCurrentStep() {
    return this.conversationState.step;
  }
}