import styled from "styled-components";
import HomePageImage from '../images/header-image.webp';

export const Home_style = styled.section`
    background-image: url(${HomePageImage});
    background-size: cover;
    background-position: center;
    height: 50vh;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 3rem;
    text-align: center;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    font-weight: bold;
    text-transform: uppercase;
    opacity: .8;
    `