import { useState, useEffect } from 'react';

// Translation map from Roman Hindi to Devanagari Hindi
const romanToHindiMap = {
  'Namaste! Main Cub hun. Main aapki phone dhundne mein madad kar sakta hun. Aap kis company ka phone chahte hain?': 'नमस्ते! मैं कब हूं। मैं आपकी फोन ढूंढने में मदद कर सकता हूं। आप किस कंपनी का फोन चाहते हैं?',
  'acchi pasand hai! Aapka budget kya hai? Kam, madhyam ya zyada?': 'अच्छी पसंद है! आपका बजट क्या है? कम, मध्यम या ज्यादा?',
  'Badhiya! Aap kaun sa rang pasand karenge?': 'बढ़िया! आप कौन सा रंग पसंद करेंगे?',
  'Perfect! Main aapke liye phone dhundh raha hun...': 'परफेक्ट! मैं आपके लिए फोन ढूंढ रहा हूं...',
  'Bahut accha! Main aapke liye phone dhundh raha hun...': 'बहुत अच्छा! मैं आपके लिए फोन ढूंढ रहा हूं...',
  'Kripaya koi phone company bataiye jaise Samsung, Apple, Xiaomi aadi.': 'कृपया कोई फोन कंपनी बताइए जैसे सैमसंग, एप्पल, शाओमी आदि।',
  'Kripaya apna budget bataiye - kam, madhyam ya zyada.': 'कृपया अपना बजट बताइए - कम, मध्यम या ज्यादा।',
  'Kripaya koi rang bataiye jaise kala, safed, nila aadi.': 'कृपया कोई रंग बताइए जैसे काला, सफेद, नीला आदि।',
  'Yahan aapke liye kuch behtareen phones hain.': 'यहां आपके लिए कुछ बेहतरीन फोन हैं।'
};

// Function to translate Roman Hindi to Devanagari Hindi
const translateToHindi = (romanText) => {
  // Check for exact matches first
  if (romanToHindiMap[romanText]) {
    return romanToHindiMap[romanText];
  }
  
  // Check for partial matches (for dynamic company names)
  for (const [roman, hindi] of Object.entries(romanToHindiMap)) {
    if (romanText.includes('acchi pasand hai!') && roman.includes('acchi pasand hai!')) {
      return romanText.replace(/(\w+) acchi pasand hai!/, (match, company) => {
        const companyInHindi = company === 'samsung' ? 'सैमसंग' : 
                              company === 'apple' ? 'एप्पल' : 
                              company === 'xiaomi' ? 'शाओमी' : 
                              company === 'oneplus' ? 'वनप्लस' : 
                              company === 'realme' ? 'रियलमी' : 
                              company === 'oppo' ? 'ओप्पो' : 
                              company === 'vivo' ? 'विवो' : company;
        return `${companyInHindi} अच्छी पसंद है! आपका बजट क्या है? कम, मध्यम या ज्यादा?`;
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