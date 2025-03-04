import styled from 'styled-components';
import { COLORS } from '../../utils/Vars';
import LogoImage from '../images/work.webp';

export const HeaderStyle = styled.header`
position: relative;
top: 0;
left: 0;
padding: 1rem;
background-color: ${COLORS.black500};
color: white;
text-align: center;
`

export const Logo = styled.div`
background-image: url(${LogoImage});
background-size: contain;
background-position: center;
background-repeat: no-repeat;
width: 100px;
height: 100px;
margin: 0 auto;
border-radius: 50%;
`

export const Navigation = styled.ul`
display: flex;
justify-content: center;
align-items: center;
list-style: none;
padding: 1rem;
a {
    margin: 0 1rem;
    cursor: pointer;
    text-transform: uppercase;
    text-decoration: none;
    font-weight: 700;
    letter-spacing: 1px;
    color: #dcdcdc;
    &:hover {
        color: ${COLORS.yellow500};
    }
}
`

export const LanguageSelectorBox = styled.select`
position: fixed;
top: 1rem;
right: 1rem;
background-color: ${COLORS.black500};
color: white;
border: 2px solid white;
padding: .5rem 1rem;
cursor: pointer;
border-radius: 10px;
text-transform: uppercase;
font-weight: 700;
z-index: 3;
&:hover {
    color: ${COLORS.yellow500};
}
&:focus {
    outline: none;
    border: 2px solid ${COLORS.yellow500};
}
`;

export const Login_icon = styled.span`
    position: absolute;
    top: 1.5rem;
    right: 10rem;
    color: white;
    transition: .2s ease-in-out;
    &:hover {
        color: ${COLORS.yellow500};
    }
`;