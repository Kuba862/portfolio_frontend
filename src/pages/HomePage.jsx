import React, { useContext } from 'react';
import {
  Home_style,
  Pre_about_section,
  My_section,
  My_section_text,
  My_section_image,
  Image_under_my_section,
  Career_steps_section
} from '../assets/styles/Home.styled';
import { MainContext } from '../context/MainContext';
import Hero from '../components/Home/Hero';
import myImage from '../assets/images/me_2.webp';

const HomePage = () => {
  const { posts } = useContext(MainContext);

  return (
    <>
      <Home_style>
        <Hero />
        <Pre_about_section>
          <My_section>
            <My_section_text>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                unde deleniti numquam corporis sunt aspernatur nesciunt iure
                reiciendis, perspiciatis consectetur cum ab, praesentium saepe
                doloribus quaerat suscipit. Exercitationem, doloremque vitae?
              </p>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit
                at iure quas animi. Quasi non ipsum mollitia molestiae!
                Possimus, sed ad? Impedit quisquam aut facilis aperiam
                cupiditate nisi iure consequuntur?
              </p>
            </My_section_text>
            <My_section_image>
              <img src={myImage} alt="Jakub Rejch" />
            </My_section_image>
          </My_section>
        </Pre_about_section>
        <Image_under_my_section />
        <Career_steps_section>
          <h3>My Career</h3>
        </Career_steps_section>
      </Home_style>
    </>
  );
};

export default HomePage;
