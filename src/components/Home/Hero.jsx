import React from 'react';
import { Hero_style } from '../../assets/styles/Hero.styled';
import image_5 from '../../assets/images/abstract/5.WEBP';
import { ParallaxBanner } from 'react-scroll-parallax';

const Hero = () => {
  return (
    <>
      <ParallaxBanner
        layers={[
          {
            image: image_5,
            speed: -20,
          },
        ]}
      >
        <Hero_style>
          <img src={image_5} alt="background" />
        </Hero_style>
      </ParallaxBanner>
    </>
  );
};

export default Hero;
