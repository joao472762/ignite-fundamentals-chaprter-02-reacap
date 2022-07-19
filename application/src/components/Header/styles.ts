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

            height: 3rem;
            width: 3rem;

            color: ${props => props.theme["gray-100"]};
        }
    }
    
`