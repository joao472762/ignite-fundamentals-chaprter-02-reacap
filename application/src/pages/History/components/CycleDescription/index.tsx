import { formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/esm/locale/pt-BR/index.js";
import { CycleProps } from "../../../../reducers/cycle";
import { TableRow } from "./style";

interface CycleDescriptionProps {
    props:  CycleProps
}

export function CycleDescription({props}:CycleDescriptionProps){
    const {
        task,
        FinishedDate,
        CreationDate,
        minutesAmount,
        InteruptedDate
    } = props

    const timePassedCycleCreation =  formatDistanceToNow(new Date(CreationDate),{
        addSuffix: true,
        locale: ptBR
    })

    function selectStatusActive(){
        if(FinishedDate){
            return 'Concluído'
        }
        else if(InteruptedDate){
            return 'Interrompido'
        }
        else{
            return 'Em andamento'
        }
    }
    const status = selectStatusActive()
    
    return(
        <TableRow variant={status}>
                <td>{task}</td>
                <td>{minutesAmount} minutos</td>
                <td>{timePassedCycleCreation}</td>
                <td>{status}</td>
        </TableRow>
    )
}