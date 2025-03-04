import styled from "styled-components";
import { COLORS } from "../../utils/Vars";

export const LibsStyle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: nowrap;
    color: white;
    font-size: 3rem;
    text-align: center;
    text-shadow: 2px 2px 4px rgba(255, 255, 255, 0.3);
    width: 100vw;
    background-color: ${COLORS.black500};
    .libs_container {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        width: 70%;
        margin-bottom: 100px;
    div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 2rem;
        width: 200px;
        background-color: ${COLORS.black500};
        border-radius: 5px;
        border: 1px solid #fff;
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 5px;
        }
        p {
            margin: 1rem;
            text-align: justify;
            font-size: 1.2rem;
        }
    }
}
    `;