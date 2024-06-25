import styled from 'styled-components';
import { COLORS } from '../../utils/Vars';
import LogoImage from '../images/work.webp';

export const Header_style = styled.header`
position: relative;
top: 0;
left: 0;
padding: 1rem;
background-color: ${COLORS.black500};
color: white;
text-align: center;
box-shadow: 0 0 10px 5px ${COLORS.black500};
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
li {
    margin: 0 1rem;
    cursor: pointer;
    text-transform: uppercase;
    font-weight: 700;
    letter-spacing: 1px;
    &:hover {
        color: ${COLORS.yellow500};
    }
}
`

export const Language_selector_box = styled.select`
position: absolute;
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
&:hover {
    color: ${COLORS.yellow500};
}
&:focus {
    outline: none;
    border: 2px solid ${COLORS.yellow500};
}
`