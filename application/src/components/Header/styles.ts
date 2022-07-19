import styled from "styled-components";

export  const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;

    nav{
        display: flex;
        column-gap: .5rem;

        a{
            display: flex;
            align-items: center;
            justify-content: center;

            border-top: 0.187rem solid transparent;
            border-bottom: 0.187rem solid transparent;
            height: 3rem;
            width: 3rem;
            box-shadow: none;
            color: ${props => props.theme["gray-100"]};


            &.active{
                border-bottom-color: ${props => props.theme["green-500"]};
                color: ${props => props.theme["green-500"]};
            }
            &:not(.class):hover{
                border-bottom-color: ${props => props.theme["green-500"]};
            }

        }
    
    }
    
`