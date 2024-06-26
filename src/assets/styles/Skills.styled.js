import styled from 'styled-components';
import { COLORS } from '../../utils/Vars';

export const SkillsBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  padding-top: 5rem;
  padding-bottom: 5rem;
  background-color: ${COLORS.black500};
`;

export const SkillEl = styled.div`
display: flex;
gap: 25px;
`;

export const RenderedSkillBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid #fff;
    border-radius: 5px;
    padding: .7rem;
    .flip-container {
        perspective: 1000px;
        .card {
            width: 300px;
            height: 300px;
            position: relative;
            transition: transform .5s;
            transform-style: preserve-3d;
            cursor: pointer;
            .card-front {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                backface-visibility: hidden;
                display: flex;
                justify-content: center;
                align-items: center;
                background-color: ${COLORS.black500};
                color: ${COLORS.white};
                border-radius: 5px;
                &::after {
                    content: "Click me!";
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background-color: rgba(0, 0, 0, .5);
                    border-radius: 5px;
                    visibility: hidden;
                }
                h3 {
                    font-size: 1.5rem;
                    margin-bottom: 1rem;
                }
                p {
                    font-size: 1rem;
                    line-height: 1.5;
                }
                &:hover::after {
                    visibility: visible;
                }
            }
            .card-back {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                backface-visibility: hidden;
                display: flex;
                justify-content: center;
                align-items: center;
                transform: rotateY(180deg);
                background-color: ${COLORS.yellow500};
                color: ${COLORS.white};
                border-radius: 5px;
            }
            &.flipped {
                transform: rotateY(180deg);
            }
        }
    }
`;

export const RenderedSkill = styled.div`
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 300px;
  height: 300px;
  display: flex;
  flex-direction: column;
`;

export const CardBack = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 100%;
    overflow: auto;
    h3 {
        font-size: 1.5rem;
        margin-bottom: 1rem;
    }
    p {
        font-size: 1rem;
        line-height: 1.5;
    }
`;