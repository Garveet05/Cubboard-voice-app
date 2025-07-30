const mockPhones = [
  {
    id: '1',
    name: 'iPhone 16 Pro',
    company: 'Apple',
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
    company: 'Samsung',
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
    company: 'Oneplus',
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
    company: 'Xiaomi',
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
    company: 'Realme',
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
    company: 'Vivo',
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
    company: 'Oppo',
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

export default mockPhones;
