import styled from 'styled-components';
import { COLORS } from '../../utils/Vars';
import LogoImage from '../images/work.webp';

export const Header_style = styled.header`
position: relative;
top: 0;
left: 0;
padding: 1rem;
background-color: ${COLORS.DARK_COLORS.black500};
color: white;
text-align: center;
`

export const Logo = styled.div`
background-image: url(${LogoImage});
background-size: contain;
background-position: center;
background-repeat: no-repeat;
width: 50px;
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
li {
    margin: 0 1rem;
    cursor: pointer;
    text-transform: uppercase;
    font-weight: 700;
    letter-spacing: 1px;
    &:hover {
        color: ${COLORS.yellowColor};
    }
}
`