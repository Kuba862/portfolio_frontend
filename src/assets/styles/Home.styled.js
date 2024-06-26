import styled from 'styled-components';
import HomePageImage from '../images/header-image.webp';
import Image_3 from '../images/abstract/3.WEBP';
import { COLORS } from '../../utils/Vars';

export const Home_style = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 3rem;
  text-align: center;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

export const Pre_about_section = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  background-color: ${COLORS.black500};
  box-shadow: 0 0 10px 5px ${COLORS.black500};
`;

export const My_section = styled.div`
  display: flex;
  justify-content: center;
  margin: 150px 0;
`;

export const My_section_text = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.5rem;
  padding: 1rem;
  width: 25%;
  margin-left: 15%;
  p {
    margin: 1rem;
    text-align: justify;
    font-size: 1.2rem;
  }
`;

export const My_section_image = styled.div`
  display: flex;
  justify-content: center;
  width: 50%;
  margin-top: 25px;
  img {
    position: sticky;
    top: 50px;
    width: 40%;
    height: 50%;
    object-fit: cover;
    border-radius: 15px;
  }
`;

export const Image_under_my_section = styled.div`
position: relative;
  width: 100%;
  height: 20vh;
`;

export const Career_steps_section = styled.div`
  display: flex;
  justify-content: center;
`;