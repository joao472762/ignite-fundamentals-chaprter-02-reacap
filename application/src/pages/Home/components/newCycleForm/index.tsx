import { useContext } from "react";
import { useFormContext } from "react-hook-form";
import { CycleContext } from "../../../../context/Cycle";
import { FormContainer, MinutesAmoutInput, TaskInput } from "./styles";

export function NewCycleForm(){
    const {register} = useFormContext()
    const {activeCycle} = useContext(CycleContext)
    const isDisableForm = !!activeCycle

    return(
        <FormContainer>
            <label htmlFor="task"><span>Vou Trabahar</span></label>
            <TaskInput
                id="task" 
                type="text"
                maxLength={40}
                disabled={isDisableForm}
                {...register('task')}
                placeholder ="Dê um nome para o seu projeto"
            />

            <label htmlFor="minutesAmount"><span>durante</span></label>
            <MinutesAmoutInput 
                step={5}
                min = {5}
                max = {60}
                type="number"
                placeholder="00"
                disabled={isDisableForm}
                {...register('minutesAmount',{valueAsNumber:true})}
            />
            <span>minutos.</span>
        </FormContainer>
    )
}