import React from 'react';
import { Image_under_my_section } from '../../assets/styles/Home.styled';
import { ParallaxBanner } from 'react-scroll-parallax';
import image_3 from '../../assets/images/abstract/3.WEBP';

const ImageUnderMySection = () => {
  return (
    <ParallaxBanner layers={[
      {
        image: image_3,
        speed: 10
      }
    ]}>
    <Image_under_my_section />
    </ParallaxBanner>
  )
}

export default ImageUnderMySection;