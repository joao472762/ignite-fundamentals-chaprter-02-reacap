import styled from "styled-components";


export const CountDownContainer = styled.section`
    width: 100%;
    display: flex;
    column-gap: 1rem;

    div{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 8rem;

        font-size: 10rem;
        font-family: 'Roboto Mono', monospace, sans-serif;
        height: 12.187rem;
        border-radius: 8px;
        background: ${props => props.theme["gray-600"]};

        &.separator{
            background-color: transparent;
            width: 5.06rem;
            color: ${props => props.theme["green-500"]};
        }
    }

`