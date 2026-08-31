import React from 'react';
import { motion } from 'motion/react';

// High-end Motion Curves & Springs (Stripe/Linear/Apple-grade)
const expoEase = [0.16, 1, 0.3, 1]; // Ease-Out-Expo: crisp, decisive
const springSnappy = { type: 'spring', stiffness: 400, damping: 25, mass: 0.8 };
const springButton = { type: 'spring', stiffness: 480, damping: 22 };
const springPop = { type: 'spring', stiffness: 320, damping: 20 };

// Static styles for GPU acceleration
const willChangeFull = { willChange: 'transform, opacity, filter' };
const willChangeTransform = { willChange: 'transform' };
const buttonStyle = { willChange: 'transform', display: 'inline-block' };

/**
 * High-End Atmospheric Reveal (Fade + Y-Shift + Scale + Soft Blur)
 */
export function MotionReveal({
  children,
  className = '',
  delay = 0,
  duration = 0.65,
  yOffset = 30,
  blur = 6,
  scaleOffset = 0.98,
  once = true,
  ...props
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: yOffset,
        scale: scaleOffset,
        filter: `blur(${blur}px)`,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
        filter: 'blur(0px)',
      }}
      viewport={{ once, margin: '-40px' }}
      transition={{
        duration,
        delay,
        ease: expoEase,
      }}
      style={willChangeFull}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

/**
 * Parent container for staggered children reveals
 */
export function MotionStagger({
  children,
  className = '',
  staggerDelay = 0.1,
  delayChildren = 0.05,
  once = true,
  ...props
}) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: '-40px' }}
      variants={containerVariants}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

/**
 * Item child inside a MotionStagger container with Blur & Scale pop
 */
export function MotionStaggerItem({
  children,
  className = '',
  yOffset = 24,
  ...props
}) {
  const itemVariants = {
    hidden: {
      opacity: 0,
      y: yOffset,
      scale: 0.96,
      filter: 'blur(4px)',
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: 'blur(0px)',
      transition: { duration: 0.55, ease: expoEase },
    },
  };

  return (
    <motion.div
      variants={itemVariants}
      style={willChangeFull}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

/**
 * Premium Interactive Card with Spring Elevation, Soft Glow & Border Accent
 */
export function MotionCard({
  children,
  className = '',
  hoverY = -6,
  hoverScale = 1.015,
  tapScale = 0.97,
  ...props
}) {
  return (
    <motion.div
      whileHover={{
        y: hoverY,
        scale: hoverScale,
      }}
      whileTap={{ scale: tapScale, y: -2 }}
      transition={springSnappy}
      style={willChangeTransform}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

/**
 * Premium Interactive CTA Button with Tactile Feedback
 */
export function MotionButton({
  children,
  className = '',
  hoverY = -3,
  hoverScale = 1.03,
  tapScale = 0.94,
  ...props
}) {
  return (
    <motion.div
      whileHover={{ y: hoverY, scale: hoverScale }}
      whileTap={{ scale: tapScale }}
      transition={springButton}
      style={buttonStyle}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

/**
 * Continuous Smooth Floating Effect (for badges, graphics, hero icons)
 */
export function MotionFloat({
  children,
  className = '',
  duration = 4,
  floatY = -8,
  ...props
}) {
  return (
    <motion.div
      animate={{ y: [0, floatY, 0] }}
      transition={{
        duration,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
      style={willChangeTransform}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
