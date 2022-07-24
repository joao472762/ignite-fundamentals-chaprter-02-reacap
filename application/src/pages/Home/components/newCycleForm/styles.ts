import styled from "styled-components"


export const FormContainer = styled.section`
    display: flex;
    column-gap: .5rem;
    font-size: 1.125rem;
    box-shadow: none;
`

const baseInput= styled.input`
    font-size: 1.125rem;
    background-color: transparent;
    font-weight: bold;
    text-align: center;
    padding-bottom: 0.187rem;
    border-bottom: 0.187rem solid ${props => props.theme["gray-500"]};

    &::placeholder{
        color: ${props => props.theme["gray-500"]};
    }
    &:focus{
        box-shadow: none;
        border-bottom-color: ${props => props.theme["green-500"]};
    }

`

export const TaskInput = styled(baseInput)`
    flex: 1;
`

export const MinutesAmoutInput = styled(baseInput)`
    width: 4.5rem;
`