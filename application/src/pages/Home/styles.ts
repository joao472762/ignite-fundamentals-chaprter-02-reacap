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



export const FormContainer = styled.section`
    display: flex;
    column-gap: .5rem;
    font-size: 1.125rem;
`

const baseInput= styled.input`
    font-size: 1.125rem;
    background-color: transparent;
    font-weight: bold;
    text-align: center;
    box-shadow: none;
    padding-bottom: 0.187rem;
    border-bottom: 0.187rem solid ${props => props.theme["gray-500"]};

    &::placeholder{
        color: ${props => props.theme["gray-500"]};
    }

`

export const TaskInput = styled(baseInput)`
    flex: 1;
`
export const MinutesAmoutInput = styled(baseInput)`
    width: 4.5rem;
`

export const CountDown = styled.section`
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

export const CreateNewCycleButton  = styled.button`
    display: flex; 
    justify-content: center;
    align-items: center;
    column-gap:  .5rem;

    margin-top: -0.25rem;
    background-color: ${props => props.theme["green-500"]};
    padding: 1.062rem 0;
    border-radius: 8px;
    font-size: 1rem;
    cursor: pointer;
    transition: .2 background-color ;

    &:not(:disabled):hover{
        background-color: ${props => props.theme["green-700"]};
    }
    &:disabled{
        cursor: not-allowed;
        opacity: .7;
    }
    
    svg{
        font-size: 1.375rem;
    }
`

