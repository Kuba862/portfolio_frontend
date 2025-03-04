import styled from 'styled-components';
import { COLORS } from '../../utils/Vars';

export const ContactStyle = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    font-size: 3rem;
    text-align: center;
    width: 100vw;
    height: 100vh;
    background-color: ${COLORS.black500};
    z-index: 2;
    div {
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        width: 80vw;
        height: 80vh;
        background-color: ${COLORS.white};
        border-radius: 10px;
        margin-top: 5rem;
        h1 {
            color: ${COLORS.black500};
            margin-top: 5rem;
            font-size: 2.5rem;
        }
        form {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin: 1rem;
            width: 25%;
            input {
                width: 100%;
                padding: .5rem;
                margin: .5rem;
                border: 1px solid ${COLORS.black500};
                border-radius: 5px;
                &:focus {
                    outline: none;
                    border: 1px solid ${COLORS.yellow500};
                }
            }
            textarea {
                width: 100%;
                padding: .5rem;
                margin: .5rem;
                border: 1px solid ${COLORS.black500};
                border-radius: 5px;
                &:focus {
                    outline: none;
                    border: 1px solid ${COLORS.yellow500};
                }
            }
        }
    }
`;

export const ExitButton = styled.button`
    position: absolute;
    top: 1rem;
    right: 1rem;
    width: 30px;
    height: 30px;
    background-color: ${COLORS.black500};
    border: 1px solid ${COLORS.black500};
    border-radius: 50%;
    cursor: pointer;
    &:hover {
        background-color: ${COLORS.yellow500};
        border: 1px solid ${COLORS.yellow500};
    }
    &:focus {
        outline: none;
    }
    &::before {
        position: absolute;
        content: '';
        width: 15px;
        height: 2px;
        background-color: ${COLORS.white};
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) rotate(315deg);
    }
    &::after {
        position: absolute;
        content: '';
        width: 2px;
        height: 15px;
        background-color: ${COLORS.white};
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) rotate(-45deg);
    }
`;