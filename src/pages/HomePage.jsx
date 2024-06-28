import React from 'react';
import {
  Home_style,
  Pre_about_section,
  My_section,
  My_section_image,
} from '../assets/styles/Home.styled';
import Hero from '../components/Home/Hero';
import myImage from '../assets/images/me_2.webp';
import About_me from '../components/Home/About_me';
import { FaRegSquare } from 'react-icons/fa';
import { IoTriangleOutline } from "react-icons/io5";
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import { COLORS } from '../utils/Vars';
import ImageUnderMySection from '../components/Home/Image_under_my_section';
import Skills from '../components/Home/Skills';

const HomePage = () => {

  return (
    <>
      <Home_style>
        <ParallaxProvider>
          <Hero />
          <Pre_about_section>
            <My_section>
              <About_me />
              <My_section_image>
                <img src={myImage} alt="Jakub Rejch" />
              </My_section_image>
            </My_section>
          </Pre_about_section>
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
      </Home_style>
    </>
  );
};

export default HomePage;
