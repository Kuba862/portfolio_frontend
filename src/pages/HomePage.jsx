import React from 'react';
import {
  HomeStyle,
  PreAboutSection,
  MySection,
  MySectionImage,
} from '../assets/styles/Home.styled';
import Hero from '../components/Home/Hero';
import myImage from '../assets/images/me_2.webp';
import AboutMe from '../components/Home/About_me';
import { FaRegSquare } from 'react-icons/fa';
import { IoTriangleOutline } from "react-icons/io5";
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import { COLORS } from '../utils/Vars';
import ImageUnderMySection from '../components/Home/Image_under_my_section';
import Skills from '../components/Home/Skills';
import Libs from '../components/Home/Libs';

const HomePage = () => {

  return (
    <>
      <HomeStyle>
        <ParallaxProvider>
          <Hero />
          <PreAboutSection>
            <MySection>
              <AboutMe />
              <MySectionImage>
                <img src={myImage} alt="Jakub Rejch" />
              </MySectionImage>
            </MySection>
          </PreAboutSection>
          <ImageUnderMySection />
          <Parallax
            translateX={['-100px', '600px']}
            scale={[0.75, 1]}
            rotate={[-180, 0]}
            easing="easeInQuad"
          >
            <FaRegSquare
              style={{
                fill: COLORS.yellow500,
                position: 'absolute',
                width: '30px',
              }}
            />
          </Parallax>
          <Parallax
            translateX={['100px', '-600px']}
            scale={[0.75, 1]}
            rotate={[180, 0]}
            easing="easeInQuad"
          >
            <FaRegSquare
              style={{
                fill: COLORS.yellow500,
                position: 'absolute',
                width: '20px'
              }}
            />
          </Parallax>
          <Parallax
            translateX={['200px', '-200px']}
            translateY={['-100px', '100px']}
            scale={[0.75, 1]}
            rotate={[180, 0]}
            easing="easeInQuad"
          >
            <IoTriangleOutline
              style={{
                fill: COLORS.yellow200,
                position: 'absolute',
                width: '20px'
              }}
            />
          </Parallax>
          <Parallax
            translateX={['200px', '200px']}
            translateY={['0px', '-50px']}
            scale={[0.75, 1]}
            rotate={[180, 0]}
            easing="easeInQuad"
          >
            <IoTriangleOutline
              style={{
                fill: COLORS.violet400,
                position: 'absolute',
                width: '20px'
              }}
            />
          </Parallax>
            <Skills />
        </ParallaxProvider>
        <Libs />
      </HomeStyle>
    </>
  );
};

export default HomePage;
