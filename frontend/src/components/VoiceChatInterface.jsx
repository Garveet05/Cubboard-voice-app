import React, { useState, useEffect } from 'react';
import { Mic, Square, MessageCircle, Phone, Sparkles } from 'lucide-react';
import CubDisplay from './CubDisplay';
import ProductGrid from './ProductGrid';
import { useSpeechRecognition } from '../hooks/useSpeechRecognition';
import { useSpeechSynthesis } from '../hooks/useSpeechSynthesis';
import { ChatbotService } from '../services/chatbotService';

const VoiceChatInterface = () => {
  const [isActive, setIsActive] = useState(false);
  const [chatbot] = useState(new ChatbotService());
  const [messages, setMessages] = useState([]);
  const [products, setProducts] = useState([]);
  const [showProducts, setShowProducts] = useState(false);
  const [initialGreetingDone, setInitialGreetingDone] = useState(false);

  const {
    isListening,
    transcript,
    startListening,
    stopListening,
    isSupported: speechRecognitionSupported,
  } = useSpeechRecognition();

  const {
    speak,
    isSpeaking,
    stop: stopSpeaking,
    isSupported: speechSynthesisSupported,
  } = useSpeechSynthesis();

  useEffect(() => {
    if (transcript && !isListening) {
      handleUserMessage(transcript);
    }
  }, [transcript, isListening]);

  const handleUserMessage = async (userMessage) => {
    const userMsg = {
      id: Date.now().toString(),
      text: userMessage,
      isBot: false,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMsg]);

    const response = chatbot.processUserInput(userMessage);
    const botMsg = {
      id: (Date.now() + 1).toString(),
      text: response,
      isBot: true,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, botMsg]);

    speak(response);

    if (chatbot.getCurrentStep() === 'results') {
      try {
        const searchResults = await chatbot.searchProducts();
        setProducts(searchResults);
        setShowProducts(true);

        setTimeout(() => {
          speak('Yahan aapke liye kuch behtareen phones hain.');
        }, 2000);
      } catch (error) {
        console.error('Error searching products:', error);
      }
    }
  };

  const handleTalkToMe = () => {
    if (!isActive) {
      setIsActive(true);
      setShowProducts(false);
      chatbot.resetConversation();
      setMessages([]);

      const greeting = chatbot.getGreeting();
      const greetingMsg = {
        id: Date.now().toString(),
        text: greeting,
        isBot: true,
        timestamp: new Date(),
      };
      setMessages([greetingMsg]);
      speak(greeting);
      setInitialGreetingDone(true);
    } else {
      isListening ? stopListening() : startListening();
    }
  };

  const handleStopConversation = () => {
    setIsActive(false);
    stopListening();
    stopSpeaking();
    setShowProducts(false);
    chatbot.resetConversation();
    setMessages([]);
    setProducts([]);
    setInitialGreetingDone(false);
  };

  const renderTalkButton = () => {
    if (!isActive) {
      return (
        <button
          onClick={handleTalkToMe}
          disabled={!speechRecognitionSupported || !speechSynthesisSupported}
          className="bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-600 text-white px-10 py-5 rounded-3xl font-bold text-xl hover:from-cyan-600 hover:via-purple-700 hover:to-pink-700 transition-all duration-300 shadow-2xl shadow-cyan-500/25 transform hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-4 border border-cyan-400/20"
        >
          <Phone className="w- h-7" />
          <span>Start Talking</span>
          <Sparkles className="w-7 h-7 animate-pulse" />
        </button>
      );
    }

    return (
      <div className="flex flex-col items-center space-y-6">
        <div className="flex space-x-6">
          <button
            onClick={handleTalkToMe}
            className={`px-8 py-4 rounded-2xl font-bold transition-all duration-300 flex items-center space-x-3 shadow-lg transform hover:scale-105 ${
              isListening
                ? 'bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white shadow-red-500/25'
                : 'bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white shadow-green-500/25'
            }`}
          >
            {isListening ? <Square className="w-6 h-6" /> : <Mic className="w-6 h-6" />}
            <span>{isListening ? 'Stop' : 'Start'}</span>
          </button>

          <button
            onClick={handleStopConversation}
            className="px-8 py-4 bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white rounded-2xl font-bold transition-all duration-300 shadow-lg shadow-gray-500/25 transform hover:scale-105"
          >
            End Conversation
          </button>
        </div>
      </div>
    );
  };

  if (!speechRecognitionSupported || !speechSynthesisSupported) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center">
        <div className="text-center p-10 bg-gray-800/50 backdrop-blur-sm rounded-3xl shadow-2xl border border-gray-700/50">
          <div className="text-6xl mb-6">⚠️</div>
          <h2 className="text-3xl font-bold text-red-400 mb-6">Support Nahi Hai</h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            Aapka browser voice features ko support nahi karta.
            <br />
            Kripaya Chrome ya Edge ka upyog kariye.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
      {/* Blurred background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Main UI */}
      {showProducts ? (
        <>
          <div className="relative z-10 pt-8">
            <ProductGrid products={products} />
          </div>
          <CubDisplay
            isInteracting={isSpeaking}
            isSpeaking={isSpeaking}
            isListening={isListening}
            showCompact={true}
          />
          {renderTalkButton()}
        </>
      ) : (
        <div className="relative z-10 flex flex-col lg:flex-row items-stretch justify-center min-h-screen p-4 lg:p-12 space-y-10 lg:space-y-0 lg:space-x-10">
          {/* Left: Cub + Buttons */}
          <div className="w-full lg:w-1/2 flex flex-col items-center justify-center space-y-10">
            <CubDisplay
              isInteracting={isSpeaking}
              isSpeaking={isSpeaking}
              isListening={isListening}
            />
            {renderTalkButton()}
            <div className="text-center text-gray-400">
              <p className="text-lg font-medium">
                {isListening && (
                  <span className="text-red-400 animate-pulse">🎤 Listening to You...</span>
                )}
                {isSpeaking && (
                  <span className="text-cyan-400 animate-pulse">🗣️ Cub is Speaking...</span>
                )}
                {!isListening && !isSpeaking && isActive && (
                  <span className="text-green-400">✨ Press Start to speak.</span>
                )}
              </p>
            </div>
          </div>

          {/* Right: ChatBox */}
          {isActive && (
            <div className="w-full lg:w-1/2 max-h-[80vh] overflow-y-auto bg-gray-800/30 backdrop-blur-sm rounded-3xl shadow-2xl p-6 border border-gray-700/50">
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                ChatBox
              </h3>
              <div className="space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                  >
                    <div
                      className={`max-w-xs lg:max-w-md px-6 py-4 rounded-2xl shadow-lg ${
                        message.isBot
                          ? 'bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-100 border border-cyan-500/30'
                          : 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-purple-500/25'
                      }`}
                    >
                      {message.text}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default VoiceChatInterface;
