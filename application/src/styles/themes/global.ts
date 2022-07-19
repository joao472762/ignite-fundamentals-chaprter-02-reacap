import styled, { createGlobalStyle } from "styled-components";

export const GlobalSyles = createGlobalStyle`
    *{
        margin:  0;
        border: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
    }
    body{
        background-color: ${props => props.theme["gray-900"]}
    }
    body,input,textarea,button{
        font-size: 1rem;
        font-family: 'Roboto' Arial, Helvetica, sans-serif;
    }
    *:focus{
        outline:  none;
        box-shadow: 0px 0px 0px 1px ${props => props.theme["green-500"]};
    }
`