import { useFormContext } from "react-hook-form";
import { FormContainer, MinutesAmoutInput, TaskInput } from "./styles";

export function NewCycleForm(){
    const {register} = useFormContext()

    return(
        <FormContainer>
            <label htmlFor="task"><span>Vou Trabahar</span></label>
            <TaskInput 
                maxLength={40}
                type="text"
                {...register('task')}
                id="task" 
                placeholder ="Dê um nome para o seu projeto"
            />

            <label htmlFor="minutesAmount"><span>durante</span></label>
            <MinutesAmoutInput 
                type="number"
                placeholder="00"
                {...register('minutesAmount',{valueAsNumber:true})}
                step={5}
                min = {5}
                max = {60}
            />
            <span>minutos.</span>
        </FormContainer>
    )
}