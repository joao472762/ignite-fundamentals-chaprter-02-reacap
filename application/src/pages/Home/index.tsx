import * as zod from 'zod'
import { createContext, useState } from "react";
import { Play, Hand } from "phosphor-react";
import { zodResolver } from '@hookform/resolvers/zod';
import { FormProvider, useForm } from "react-hook-form";

import { CountDown } from "./components/countDown";
import { NewCycleForm } from "./components/newCycleForm";
import { CreateNewCycleButton, HomeContainer, IntrruptButton,} from "./styles";

interface CycleProps  {
    id: string,
    task: string,
    minutesAmount: number,
    CreationDate: Date,
    FinishedDate?: Date,
    InteruptedDate?: Date,
}

const newCycleFormValidationSchema = zod.object({
    task: zod.string().min(1),
    minutesAmount: zod.number().min(5).max(60)
})

type newCycleFormData = zod.infer<typeof newCycleFormValidationSchema>

interface CycleContextType {
    activeCycle: CycleProps | undefined,
    secondsAmountPassed: number,
    markCycleAsFinished: () => void,
    callSetSecondsAmountPassed: (secondsPassed: number) => void
}
export const CycleContext = createContext({} as CycleContextType)

export function Home(){
    const [cycles, setCycles] = useState<CycleProps[]>([])
    const [currentId, setCurrentId] = useState<string | null>('')
    const [secondsAmountPassed, setSecondsAmountPassed] = useState(0)


    const newCycleForm = useForm<newCycleFormData>({
        resolver: zodResolver(newCycleFormValidationSchema),
        defaultValues:{
            task: '',
            minutesAmount: 0
        }
    })
    const {handleSubmit,watch, reset} = newCycleForm

    const activeCycle = cycles.find(cycle => {
        return cycle.id === currentId
    })

    function handleMarkCycleAsIntrrupted(){
        const cyclesWithMoreOneCylceMarkAsIntrrupted = cycles.map(cycle =>{
            if(cycle.id === activeCycle?.id){
                return {...cycle,FinishedDate: new Date() }
            }
            return cycle
        })
        setCycles(state => cyclesWithMoreOneCylceMarkAsIntrrupted)
        setCurrentId(null)
        setSecondsAmountPassed(() => 0)
    }
    function markCycleAsFinished(){
        const cyclesWithMoreOneCylceMarkAsFinished = cycles.map(cycle =>{
            if(cycle.id === activeCycle?.id){
                return {...cycle,InteruptedDate: new Date() }
            }
            return cycle
        })
        setCycles(state => cyclesWithMoreOneCylceMarkAsFinished)
        setCurrentId(null)
    }
    function handleCreateNewCycle(data: newCycleFormData){
        const newCycle: CycleProps= {
            id: String(new Date().getTime()),
            task: data.task,
            minutesAmount: data.minutesAmount,
            CreationDate: new Date()
        }
        setCurrentId(newCycle.id)
        setCycles(state => [...state, newCycle])
        reset()
        console.log(cycles)
        setSecondsAmountPassed(0)
    }
    function callSetSecondsAmountPassed(secondsPassed: number){
        setSecondsAmountPassed(()=>secondsPassed)
    }
    const task = watch('task')
    const minutesAmout = watch('minutesAmount')
    const isDisableButton = !task || !minutesAmout

    return(
        <HomeContainer>
            <form onSubmit={handleSubmit(handleCreateNewCycle)}>
                <CycleContext.Provider 
                    value={{
                        activeCycle,
                        secondsAmountPassed,
                        markCycleAsFinished,
                        callSetSecondsAmountPassed
                    }}
                >
                    <FormProvider {...newCycleForm}>
                        <NewCycleForm/>
                    </FormProvider>
                    <CountDown/>
                </CycleContext.Provider>
                {
                    activeCycle
                    ?(
                        <IntrruptButton onClick={handleMarkCycleAsIntrrupted}> 
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