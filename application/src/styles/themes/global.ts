import styled, { createGlobalStyle } from "styled-components";

export const GlobalSyles = createGlobalStyle`
    *{
        margin:  0;
        border: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body{
        background-color: ${props => props.theme["gray-600"]}
    }
    body,input,textarea,button{
        font-size: 1rem;
        font-family: 'Roboto' Arial, Helvetica, sans-serif;
    }
    *:focus{
        outline:  none;
    }
`