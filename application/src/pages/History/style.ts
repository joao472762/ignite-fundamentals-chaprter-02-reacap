import styled from "styled-components";

export const HistoryContent = styled.main`
    max-width: 58.1875rem;
    flex: 1;
    margin: 3.125rem auto 0 auto;
`
export const TableContainer = styled.div`
    overflow: auto;
    font-size:  0.875rem;
    margin-top: 1rem;
    display: flex;
    font-size: 1;
    max-height: 20.5rem;
    


    table{
        flex: 1;
        display: flex;
        flex-direction: column;
        border-collapse: collapse;
       

        thead{ 
            tr{
                width: 100%;
                border-radius:  8px 8px 0px 0px;
                flex: 1;
                column-gap: 3.5rem;
                padding: 1rem 1.5rem;
                text-align: left;
                display: grid;
                grid-template-columns: 1fr 8.187rem 8.187rem 8.187rem;
                background-color: ${props => props.theme["gray-600"]};

                th{
                    color: aliceblue;
                }

            }
        }
        tbody{
            display: flex;
            flex-direction: column;
            row-gap: .25rem
        }
    }
`
export const TbodyWithoutCycles = styled.tbody`
    border-radius: 0px 0px 8px 8px;
    height: 100%;
    background-color: ${props => props.theme["gray-700"]};
    height: 25.5rem;
`
