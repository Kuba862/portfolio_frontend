import React from 'react';
import { Career_steps_section } from '../../assets/styles/Home.styled';
import { Skills_box } from '../../assets/styles/Skills.styled';
import Skill_element from './Skill_element';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';

const Skills = () => {
  return (
    <ParallaxProvider>
      <Career_steps_section>
        <Skills_box>
          {/* <Parallax  */}
          {/* translateX={[ '630px', '-100px' ]} */}
          {/* > */}
            <Skill_element />
          {/* </Parallax> */}
        </Skills_box>
      </Career_steps_section>
    </ParallaxProvider>
  );
};

export default Skills;
