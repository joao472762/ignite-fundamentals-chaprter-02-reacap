import { useContext } from "react";
import { CycleContext } from "../../context/Cycle";
import { CycleDescription } from "./components/CycleDescription";
import { HistoryContent, TableContainer, TbodyWithoutCycles } from "./style";

export function History(){
    const {cycleList} = useContext(CycleContext)
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
                    {cycleList
                        ?   <tbody>
                                {cycleList.map(cycle =><CycleDescription key={cycle.id} props={cycle}/>)}
                            </tbody>

                        : <TbodyWithoutCycles/>
                    }
                </table>
            </TableContainer>
        </HistoryContent>
    )
}