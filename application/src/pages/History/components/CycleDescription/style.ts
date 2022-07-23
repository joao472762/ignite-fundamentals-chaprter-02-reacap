import styled from "styled-components";
import { defaultTheme } from "../../../../styles/themes/default";


interface statusColorType {
    variant: 'Em andamento' | 'Concluído' | 'Interrompido'
}

const statusColor  = {
    'Concluído': defaultTheme["green-500"],
    'Interrompido': defaultTheme["red-500"],
    'Em andamento': defaultTheme["yellow-500"]

}

export const TableRow = styled.tr<statusColorType>`
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
    td:nth-of-type(4){
        display: flex;
        align-items: center;
        column-gap: .5rem;

        &::before{
            content: '';
            display: block;
            border-radius: .25rem;
            width: .5rem;
            height: .5rem;
            background-color: ${props => statusColor[props.variant]}
        }
    }

`