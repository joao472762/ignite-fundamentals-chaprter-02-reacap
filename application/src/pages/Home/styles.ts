import styled from "styled-components";

export const HomeContainer = styled.main`
    flex:  1;
    display:  flex;
    justify-content: center;
    margin-top: 4.875rem;

    form{
        flex: 1;
        width: 100%;
        display:  flex;
        justify-content: center;
        flex-direction: column;
       

        max-width: 41rem;
        row-gap: 3.75rem;
        font-weight: bold; 
    }
`

export const BaseActionButton = styled.button`
    display: flex; 
    justify-content: center;
    align-items: center;
    column-gap:  .5rem;

    margin-top: -0.25rem;
    padding: 1.062rem 0;
    border-radius: 8px;
    font-size: 1rem;
    cursor: pointer;
    transition: .2 background-color ;

    &:focus{
        box-shadow: none;
    }

    svg{
        font-size: 1.375rem;
    }
`

export const CreateNewCycleButton = styled(BaseActionButton)`
   
    background-color: ${props => props.theme["green-500"]};

    &:not(:disabled):hover{
        background-color: ${props => props.theme["green-700"]};
    }
    &:disabled{
        cursor: not-allowed;
        opacity: .7;
    }
    
  
`
export const IntrruptButton = styled(BaseActionButton)`
    background-color: ${props => props.theme["red-500"]};
    transition: .3s background-color;

    &:hover{
        background-color: ${props => props.theme["red-700"]};
    }
   
`

