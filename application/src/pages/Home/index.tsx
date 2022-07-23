import * as zod from 'zod'
import { createContext, useContext, useState } from "react";
import { Play, Hand } from "phosphor-react";
import { zodResolver } from '@hookform/resolvers/zod';
import { FormProvider, useForm } from "react-hook-form";

import { CountDown } from "./components/countDown";
import { NewCycleForm } from "./components/newCycleForm";
import { CreateNewCycleButton, HomeContainer, IntrruptButton,} from "./styles";
import { CycleContext } from '../../context/Cycle';

const newCycleFormValidationSchema = zod.object({
    task: zod.string().min(1),
    minutesAmount: zod.number().min(5).max(60)
})

type newCycleFormData = zod.infer<typeof newCycleFormValidationSchema>



export function Home(){
    
    
    const {activeCycle,markCycleAsIntrrupted, createNewCycle} = useContext(CycleContext)

    const newCycleForm = useForm<newCycleFormData>({
        resolver: zodResolver(newCycleFormValidationSchema),
        defaultValues:{
            task: '',
            minutesAmount: 0
        }
    })
    const {handleSubmit,watch, reset} = newCycleForm

    const task = watch('task')
    const minutesAmout = watch('minutesAmount')
    const isDisableButton = !task || !minutesAmout

    function handleCreateNewCycle(data:newCycleFormData){
        createNewCycle(data)
        reset()   
    }

    return(
        <HomeContainer>
            <form onSubmit={handleSubmit(handleCreateNewCycle)}>
             
                <FormProvider {...newCycleForm}>
                    <NewCycleForm/>
                </FormProvider>
                <CountDown/>
                {
                    activeCycle
                    ?(
                        <IntrruptButton onClick={markCycleAsIntrrupted}> 
                            <Hand/> Interromper
                        </IntrruptButton>
                    )
                    :(
                        <CreateNewCycleButton type='submit' disabled={isDisableButton}>
                            <Play/> Começar
                        </CreateNewCycleButton>
                    )
                }
            </form>
        </HomeContainer>
    )
}