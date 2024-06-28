import React from 'react';
import { CareerStepsSection } from '../../assets/styles/Home.styled';
import { SkillsBox } from '../../assets/styles/Skills.styled';
import SkillElement from './Skill_element';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';

const Skills = () => {
  return (
    <ParallaxProvider>
      <CareerStepsSection>
        <SkillsBox>
          {/* <Parallax  */}
          {/* translateX={[ '630px', '-100px' ]} */}
          {/* > */}
            <SkillElement />
          {/* </Parallax> */}
        </SkillsBox>
      </CareerStepsSection>
    </ParallaxProvider>
  );
};

export default Skills;
