import React from 'react';
import { HeroStyle } from '../../assets/styles/Hero.styled';
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
        <HeroStyle>
          <img src={image_5} alt="background" />
        </HeroStyle>
      </ParallaxBanner>
    </>
  );
};

export default Hero;
