import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useTheme } from '../context/ThemeContext.jsx';

const expoEase = [0.16, 1, 0.3, 1];

export const WaveLoader = ({
  isLoading = true,
  label = 'Ocean Space',
  fullscreen = true,
}) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="wave-loader"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 0.96,
            transition: { duration: 0.3, ease: expoEase },
          }}
          transition={{ duration: 0.2, ease: expoEase }}
          className={
            fullscreen
              ? `fixed inset-0 z-[100] flex items-center justify-center backdrop-blur-md select-none ${
                  isDark
                    ? 'bg-[#0a0d14]/95'
                    : 'bg-white/95'
                }`
              : 'flex items-center justify-center p-6 select-none'
          }
          role="status"
          aria-live="polite"
        >
          <div className="flex flex-col items-center justify-center">
            {/* Liquid Ocean Wave Orb */}
            <div
              className={`relative w-24 h-24 rounded-full overflow-hidden border-2 flex items-center justify-center shadow-lg ${
                isDark
                  ? 'border-blue-900/70 bg-gradient-to-b from-[#0d1b3e] via-[#0c1f4a] to-[#0a1535] shadow-blue-500/20'
                  : 'border-blue-200/90 bg-gradient-to-b from-sky-50 via-blue-50 to-blue-100 shadow-blue-500/15'
              }`}
            >
              {/* Back Wave (Deep Indigo Blue - Slow fluid flow) */}
              <motion.div
                className={`absolute -bottom-1 -left-[100%] w-[300%] h-16 ${
                  isDark ? 'opacity-40 text-[#1e3a8a]' : 'opacity-30 text-[#1e40af]'
                }`}
                animate={{ x: ['0%', '33.33%'] }}
                transition={{ repeat: Infinity, duration: 4.2, ease: 'linear' }}
              >
                <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full fill-current">
                  <path d="M0,0 C150,70 350,-30 500,35 C650,100 850,-20 1000,35 C1150,90 1200,10 1200,10 L1200,120 L0,120 Z" />
                </svg>
              </motion.div>

              {/* Middle Wave (Vibrant Brand Blue - Opposite fluid drift) */}
              <motion.div
                className={`absolute -bottom-1 -left-[100%] w-[300%] h-14 ${
                  isDark ? 'opacity-65 text-[#1d4ed8]' : 'opacity-55 text-[#2563eb]'
                }`}
                animate={{ x: ['0%', '-33.33%'] }}
                transition={{ repeat: Infinity, duration: 3.2, ease: 'linear' }}
              >
                <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full fill-current">
                  <path d="M0,20 C180,80 320,-10 500,40 C680,90 820,-10 1000,40 C1120,80 1200,10 1200,20 L1200,120 L0,120 Z" />
                </svg>
              </motion.div>

              {/* Front Wave (Bright Ocean Blue - Faster fluid crest) */}
              <motion.div
                className={`absolute -bottom-1 -left-[100%] w-[300%] h-12 ${
                  isDark ? 'opacity-90 text-[#3b82f6]' : 'opacity-85 text-[#3b82f6]'
                }`}
                animate={{ x: ['0%', '33.33%'] }}
                transition={{ repeat: Infinity, duration: 2.4, ease: 'linear' }}
              >
                <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full fill-current">
                  <path d="M0,10 C150,60 300,-10 450,30 C600,70 750,0 900,30 C1050,60 1200,10 1200,10 L1200,120 L0,120 Z" />
                </svg>
              </motion.div>

              {/* Shimmer / Water Highlight Overlay */}
              <div
                className={`absolute inset-0 rounded-full pointer-events-none ${
                  isDark
                    ? 'bg-gradient-to-tr from-transparent via-blue-400/10 to-blue-300/20'
                    : 'bg-gradient-to-tr from-transparent via-white/30 to-white/70'
                }`}
              />
            </div>

            {/* Ocean Space Logo */}
            <div className="mt-5 flex items-center justify-center">
              <img
                src={isDark ? '/images/logo-dark-new.png' : '/images/logo-color.png'}
                alt="Ocean Space"
                className={isDark ? 'h-14 w-auto object-contain' : 'h-7 w-auto object-contain'}
                style={isDark
                  ? { mixBlendMode: 'screen' }
                  : { mixBlendMode: 'multiply' }
                }
                loading="eager"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WaveLoader;
