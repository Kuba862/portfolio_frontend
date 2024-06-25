import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Hero_style } from '../../assets/styles/Hero.styled';
import image_5 from '../../assets/images/abstract/5.WEBP';

const Hero = () => {
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
        const currentScrollY = window.scrollY;
      if (currentScrollY < 10) {
        controls.start({
          opacity: [0, 1],
          scale: [1, 1.5],
          transition: { duration: 2 },
        });
      } else {
        controls.start({
          opacity: [0, 1],
          scale: [1, 1.5],
          transition: { duration: 2 },
        });
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [controls]);
  return (
    <>
      <Hero_style>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          <img src={image_5} alt="background" />
        </motion.div>
      </Hero_style>
    </>
  );
};

export default Hero;
