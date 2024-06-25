import React, { useContext } from 'react';
import {
  Home_style,
  Pre_about_section,
  My_section,
  My_section_image,
  Image_under_my_section,
  Career_steps_section
} from '../assets/styles/Home.styled';
import { MainContext } from '../context/MainContext';
import Hero from '../components/Home/Hero';
import myImage from '../assets/images/me_2.webp';
import About_me from '../components/Home/About_me';

const HomePage = () => {
  const { posts, t } = useContext(MainContext);

  return (
    <>
      <Home_style>
        <Hero />
        <Pre_about_section>
          <My_section>
            <About_me />
            <My_section_image>
              <img src={myImage} alt="Jakub Rejch" />
            </My_section_image>
          </My_section>
        </Pre_about_section>
        <Image_under_my_section />
        <Career_steps_section>
        <h3>My Skills</h3>
          <div></div>
        </Career_steps_section>
      </Home_style>
    </>
  );
};

export default HomePage;
