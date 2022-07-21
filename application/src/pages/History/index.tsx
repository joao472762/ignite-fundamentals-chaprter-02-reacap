import { CycleDescription } from "./components/CycleDescription";
import { HistoryContent, TableContainer, TbodyWithoutCycles } from "./style";

export function History(){
    const cycles = [] as []
    return(
        <HistoryContent>
            <h1>Meu histórico</h1>
            <TableContainer>
                <table>
                    <thead>
                        <tr>
                            <th>Tarefa</th>
                            <th>Duração</th>
                            <th>Início</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    {cycles.length != 0
                        ?(
                            <tbody>
                                {cycles.map(cycle => {
                                    return(
                                        <CycleDescription/>
                                    )
                                })}
                            </tbody>
                        )
                        :(
                            <TbodyWithoutCycles/>
                        )
                    }
                </table>
            </TableContainer>
        </HistoryContent>
    )
}