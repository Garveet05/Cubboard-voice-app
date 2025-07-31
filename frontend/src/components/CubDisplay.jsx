import React from "react";
import { Mic, MicOff } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const CubDisplay = ({
  isInteracting,
  isSpeaking,
  isListening,
  showCompact = false,
}) => {
  const getDisplaySize = () => {
    if (showCompact) return "w-50 h-50";
    return "w-56 h-56 md:w-72 md:h-72";
  };

  const getContainerClass = () => {
    return showCompact
      ? "fixed bottom-6 right-6 z-20"
      : "relative flex flex-col items-center space-y-6";
  };

  return (
    <AnimatePresence>
      <motion.div
        key={showCompact ? "compact" : "full"}
        initial={{ opacity: 0, scale: 0.8, x: 0, y: 0 }}
        animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
        exit={{ opacity: 0, scale: 0.8, x: 0, y: 0 }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
        className={getContainerClass()}
      >
        <div
          className={`relative ${getDisplaySize()} rounded-full overflow-hidden border-4 ${
            isSpeaking || isListening
              ? "border-cyan-400 shadow-2xl shadow-cyan-400/50 animate-pulse"
              : "border-gray-600 shadow-2xl shadow-gray-900/50"
          } transition-all duration-500 bg-gradient-to-br from-gray-800 to-gray-900`}
        >
          {(isSpeaking || isListening) && (
            <>
              <div className="absolute inset-0 rounded-full border-2 border-cyan-400/30 animate-ping"></div>
              <div className="absolute inset-2 rounded-full border-2 border-purple-400/20 animate-pulse"></div>
            </>
          )}

          {isInteracting ? (
            <video
              className="absolute w-full h-full object-cover object-top rounded-full"
              autoPlay
              loop
              muted
              src="/cub-speaking.mp4"
            />
          ) : (
            <img
              src="/cub-image.png"
              alt="Cub"
              className="w-full h-full object-cover object-top rounded-full absolute top-9 left-1"
            />
          )}

          {/* Mic status */}
          <div
            className={`absolute top-2 right-2 ${
              showCompact ? "w-6 h-6" : "w-8 h-8"
            } bg-gray-900/80 backdrop-blur-sm rounded-full flex items-center justify-center border border-gray-600`}
          >
            {isListening ? (
              <Mic
                className={`${
                  showCompact ? "w-3 h-3" : "w-4 h-4"
                } text-red-400 animate-pulse`}
              />
            ) : (
              <MicOff
                className={`${
                  showCompact ? "w-3 h-3" : "w-4 h-4"
                } text-gray-400`}
              />
            )}
          </div>
        </div>

        {!showCompact && (
          <div className="text-center">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
              Hi, Need Help? Talk to me!
            </h2>
            <div className="flex items-center justify-center mt-3 space-x-2">
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-100"></div>
              <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse delay-200"></div>
            </div>
          </div>
        )}
      </motion.div>
    </AnimatePresence>
  );
};

export default CubDisplay;
