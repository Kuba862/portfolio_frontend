import React from 'react';
import { HeroStyle } from '../../assets/styles/Hero.styled';
import image5 from '../../assets/images/abstract/5.WEBP';
import { ParallaxBanner } from 'react-scroll-parallax';

const Hero = () => {
  return (
    <>
      <ParallaxBanner
        layers={[
          {
            image: image5,
            speed: -20,
          },
        ]}
      >
        <HeroStyle>
          <img src={image5} alt="background" />
        </HeroStyle>
      </ParallaxBanner>
    </>
  );
};

export default Hero;
