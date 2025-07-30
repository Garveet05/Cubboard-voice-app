import { useState, useEffect } from 'react';

// Translation map from Roman Hindi to Devanagari Hindi
const romanToHindiMap = {
  'mera naam cub hai, mujhe aapki sahayta ke liye banaya gaya hai, aapko konsi company ka phone chahiye?': ' मेरा नाम कब है, मुझे आपकी सहायता के लिए बनाया गया है, आपको कौनसी कंपनी का फोन चाहिए?',
  'accha! ab aapka budget kya hai? rupay mein bataiye.': 'अच्छा! अब आपका बजट क्या है? रुपये में बताइए।',
  'badhiya! aap kaun sa rang pasand karenge?': 'बढ़िया! आप कौन सा रंग पसंद करेंगे?',
  'kya aap chahte ho ki phone abhi available ho?': 'क्या आप चाहते हैं कि फोन अब उपलब्ध हो?',
  'koi khaas specification chahiye?': 'कोई खास स्पेसिफिकेशन चाहिए?',
  'perfect! main aapke liye phone dhundh raha hun...': 'परफेक्ट! मैं आपके लिए फोन ढूंढ रहा हूं...',
  'maaf kijiye, aapki requirement ke anusar koi phone nahi mila.': 'माफ़ कीजिए, आपकी आवश्यकता के अनुसार कोई फोन नहीं मिला।',
  'yahan aapke liye kuch behtareen phones hain.': 'यहां आपके लिए कुछ बेहतरीन फोन हैं।',
  'kripaya company name bataiye jaise samsung, apple, xiaomi.': 'कृपया कंपनी नाम बताइए जैसे सैमसंग, एप्पल, शाओमी।',
  'kripaya budget rupay mein bataiye.': 'कृपया बजट रुपये में बताइए।',
  'kripaya rang bataiye jaise kala, safed, nila.': 'कृपया रंग बताइए जैसे काला, सफेद, नीला।',
  'han ya nahi mein jawab dijiye.': 'हां या नहीं में जवाब दीजिए।',
  'koi specification bataiye.': 'कोई स्पेसिफिकेशन बताइए।'
};

// Company name translations
const companyTranslations = {
  'apple': 'एप्पल',
  'samsung': 'सैमसंग', 
  'xiaomi': 'शाओमी',
  'oneplus': 'वनप्लस',
  'realme': 'रियलमी',
  'oppo': 'ओप्पो',
  'vivo': 'विवो',
  'nothing': 'नथिंग',
  'motorola': 'मोटोरोला',
  'google': 'गूगल',
  'infinix': 'इन्फिनिक्स',
  'poco': 'पोको',
  'lava': 'लावा'
};

// Function to translate Roman Hindi to Devanagari Hindi
const translateToHindi = (romanText) => {
  // Check for exact matches first
  if (romanToHindiMap[romanText.toLowerCase()]) {
    return romanToHindiMap[romanText.toLowerCase()];
  }
  
  // Handle dynamic company responses
  const companyMatch = romanText.match(/(\w+) accha!/);
  if (companyMatch) {
    const company = companyMatch[1].toLowerCase();
    const hindiCompany = companyTranslations[company] || company;
    return `${hindiCompany} अच्छा! अब आपका बजट क्या है? रुपये में बताइए।`;
  }
  
  // Check for partial matches (for dynamic company names)
  for (const [roman, hindi] of Object.entries(romanToHindiMap)) {
    if (romanText.includes('accha!') && roman.includes('accha!')) {
      return romanText.replace(/(\w+) accha!/, (match, company) => {
        const companyInHindi = companyTranslations[company.toLowerCase()] || company;
        return `${companyInHindi} अच्छा! अब आपका बजट क्या है? रुपये में बताइए।`;
      });
    }
  }
  
  // If no translation found, return original text
  return romanText;
};

export const useSpeechSynthesis = () => {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const isSupported = 'speechSynthesis' in window;

  useEffect(() => {
    if (!isSupported) return;

    const handleEnd = () => setIsSpeaking(false);

    speechSynthesis.addEventListener('voiceschanged', handleEnd);

    return () => {
      speechSynthesis.removeEventListener('voiceschanged', handleEnd);
    };
  }, [isSupported]);

  const speak = (text, lang = 'hi-IN') => {
    if (!isSupported) return;

    speechSynthesis.cancel();

    // Translate Roman Hindi to Devanagari Hindi for speech
    const hindiText = translateToHindi(text);

    const utterance = new SpeechSynthesisUtterance(hindiText);
    utterance.lang = lang;
    utterance.rate = 0.9;
    utterance.pitch = 1.1;

    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);

    speechSynthesis.speak(utterance);
  };

  const stop = () => {
    if (isSupported) {
      speechSynthesis.cancel();
      setIsSpeaking(false);
    }
  };

  return {
    speak,
    isSpeaking,
    stop,
    isSupported,
  };
};