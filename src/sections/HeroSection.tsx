import { motion } from 'framer-motion';

import { JungleLeaf } from '../components/custom/JungleLeaf';
import { heroConfig } from '../config';

export function HeroSection() {
  // Null check for empty config
  if (!heroConfig.heroImage || !heroConfig.titleLine1 || !heroConfig.titleLine2) {
    return null;
  }
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  const chocolateVariants = {
    hidden: { opacity: 0, y: 80, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 1.2,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-[#0D2818] via-[#0a1f12] to-[#05140A]">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20% 30%, rgba(201, 162, 39, 0.15) 0%, transparent 40%),
                           radial-gradient(circle at 80% 70%, rgba(45, 106, 79, 0.2) 0%, transparent 40%)`,
        }} />
      </div>

      {/* Decorative Leaves */}
      {heroConfig.leafImages[0] && (
        <>
          <JungleLeaf
            src={heroConfig.leafImages[0]}
            position={{ x: '-5%', y: '10%' }}
            size={350}
            rotation={-15}
            followMouse
            sway
            zIndex={5}
          />
          <JungleLeaf
            src={heroConfig.leafImages[0]}
            position={{ x: '85%', y: '50%' }}
            size={250}
            rotation={45}
            followMouse
            zIndex={3}
          />
        </>
      )}
      {heroConfig.leafImages[1] && (
        <>
          <JungleLeaf
            src={heroConfig.leafImages[1]}
            position={{ x: '75%', y: '5%' }}
            size={400}
            rotation={25}
            followMouse
            sway
            zIndex={5}
          />
          <JungleLeaf
            src={heroConfig.leafImages[1]}
            position={{ x: '-8%', y: '55%' }}
            size={300}
            rotation={-30}
            followMouse
            zIndex={3}
          />
        </>
      )}

      {/* Main Content */}
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Brand Name */}
        {heroConfig.subtitle && (
          <motion.div variants={itemVariants} className="text-center mb-4">
            <span className="text-[#C9A227] text-sm tracking-[0.4em] uppercase font-medium">
              {heroConfig.subtitle}
            </span>
          </motion.div>
        )}

        <motion.h1
          variants={itemVariants}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-center mb-2 tracking-wide"
        >
          <span className="gold-gradient-text">{heroConfig.titleLine1}</span>
        </motion.h1>
        <motion.h1
          variants={itemVariants}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-center mb-8 tracking-wide"
        >
          <span className="text-[#F5F5DC]">{heroConfig.titleLine2}</span>
        </motion.h1>

        {heroConfig.tagline && (
          <motion.p
            variants={itemVariants}
            className="text-[#8FBC8F] text-lg md:text-xl text-center mb-12 tracking-widest"
          >
            {heroConfig.tagline}
          </motion.p>
        )}

        {/* Chocolate Image */}
        <motion.div
          variants={chocolateVariants}
          className="relative mb-12"
        >
          <motion.div
            className="relative w-72 h-96 md:w-80 md:h-[28rem] lg:w-96 lg:h-[32rem]"
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-[#C9A227]/20 blur-3xl rounded-full scale-75" />

            <img
              src={heroConfig.heroImage}
              alt="Chocolate Product"
              className="relative w-full h-full object-cover rounded-lg shadow-2xl"
            />

            {/* Product Badge */}
            {heroConfig.chocolateText && (
              <motion.div
                className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-[#0D2818]/90 border border-[#C9A227]/50 px-6 py-3 rounded-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 0.6 }}
              >
                <span className="text-[#C9A227] text-sm tracking-wider">{heroConfig.chocolateText}</span>
              </motion.div>
            )}
          </motion.div>
        </motion.div>

        {/* CTA Button */}
        {heroConfig.ctaText && (
          <motion.button
            variants={itemVariants}
            className="group relative px-10 py-4 border border-[#C9A227] text-[#C9A227] font-semibold tracking-[0.2em] uppercase overflow-hidden transition-all duration-300 hover:text-[#0D2818]"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="relative z-10">{heroConfig.ctaText}</span>
            <motion.div
              className="absolute inset-0 bg-[#C9A227]"
              initial={{ x: '-100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
        )}

      </motion.div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#05140A] to-transparent z-20" />
    </section>
  );
}
