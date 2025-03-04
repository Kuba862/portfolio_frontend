import styled from 'styled-components';
import { COLORS } from '../../utils/Vars';

export const FooterStyle = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: ${COLORS.black500};
  border-top: 1px solid ${COLORS.yellow500};
  .social {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 100px;
    width: 100%;
    .line {
      position: relative;
      width: 20%;
      height: 1px;
      background-color: ${COLORS.yellow500};
      margin: 0 25px;
    }
    .icons {
      a {
        svg {
          font-size: 30px;
          margin: 0 10px;
          cursor: pointer;
          color: ${COLORS.black500};
          path {
            fill: ${COLORS.white};
            transition: 0.3s ease-in-out;
          }
          &:hover path {
            fill: ${COLORS.yellow500};
          }
        }
      }
    }
  }
  .logo {
    margin-top: 50px;
    img {
      width: 150px;
      height: 150px;
      margin: 25px 0;
      border: 1px solid #fff;
      border-radius: 50%;
      cursor: pointer;
    }
  }
  .copy {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 25px 0;
    font-size: 0.7rem;
    color: ${COLORS.white};
    p {
      margin: 0 10px;
    }
  }
`;

export const ContactButton = styled.button`
  padding: 0.8rem 1.5rem;
  margin-top: 50px;
  font-size: 1rem;
  text-transform: uppercase;
  font-weight: 700;
  color: ${COLORS.white};
  background-color: ${COLORS.yellow500};
  border: 1px solid transparent;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  &:hover {
    background-color: ${COLORS.black500};
    color: ${COLORS.yellow500};
    border: 1px solid ${COLORS.yellow500};
  }
`;
