import React from 'react';
import { ImageUnderMySectionStyled } from '../../assets/styles/Home.styled';
import { ParallaxBanner } from 'react-scroll-parallax';
import image3 from '../../assets/images/abstract/3.WEBP';

const ImageUnderMySection = () => {
  return (
    <ParallaxBanner layers={[
      {
        image: image3,
        speed: 10
      }
    ]}>
    <ImageUnderMySectionStyled />
    </ParallaxBanner>
  )
}

export default ImageUnderMySection;