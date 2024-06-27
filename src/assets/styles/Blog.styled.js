import styled from "styled-components";
import { COLORS } from "../../utils/Vars";

export const Blog_container = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 50px;
    a {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        text-decoration: none;
        color: #fff;
        background-color: ${COLORS.black500};
        margin: 0 10px;
        border: 1px solid ${COLORS.black500};
        border-radius: 5px;
        padding: 10px;
        transition: .2s linear;
        width: 300px;
        &:hover {
            color: ${COLORS.yellow500};
            border: 1px solid ${COLORS.yellow500};
        }
        h1 {
            font-size: 2rem;
            margin: 10px;
            cursor: pointer;
            transition: .2s linear;
            &:hover {
                color: ${COLORS.yellow500};
            }
        }
        img {
            width: 100%;
            height: 200px;
            object-fit: cover;
            border-radius: 5px;
        }
    }
`;

export const Single_blog_post = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 50px auto;
    max-width: 800px;
    h1 {
        font-size: 2rem;
        margin: 10px;
    }
    p {
        line-height: 1.5;
    }
`;