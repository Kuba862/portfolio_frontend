import styled from 'styled-components';
import HomePageImage from '../images/header-image.webp';
import Image_3 from '../images/abstract/3.WEBP';
import { COLORS } from '../../utils/Vars';

export const HomeStyle = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 3rem;
  text-align: center;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

export const PreAboutSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  background-color: ${COLORS.black500};
  box-shadow: 0 0 10px 5px ${COLORS.black500};
`;

export const MySection = styled.div`
  display: flex;
  justify-content: center;
  margin: 150px 0;
`;

export const MySectionText = styled.div`
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

export const MySectionImage = styled.div`
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

export const ImageUnderMySectionStyled = styled.div`
position: relative;
  width: 100%;
  height: 20vh;
`;

export const CareerStepsSection = styled.div`
  display: flex;
  justify-content: center;
`;