import styled from "styled-components";

export const TableRow = styled.tr`
    flex: 1;
    padding: 1rem 1.5rem;
    text-align: left;
    display: grid;
    column-gap: 3.5rem;
    color: ${props => props.theme["gray-300"]};
    grid-template-columns: 1fr 8.187rem 8.187rem 8.187rem;
    background-color: ${props => props.theme["gray-700"]};

    &:nth-of-type(1){
        margin-top: .25rem;
    }
`