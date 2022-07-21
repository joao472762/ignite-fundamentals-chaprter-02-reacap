import { Play, Hand } from "phosphor-react";
import { useForm } from "react-hook-form";
import * as zod from 'zod'
import {zodResolver} from '@hookform/resolvers/zod'
import {differenceInSeconds} from 'date-fns'
import { CountDown, CreateNewCycleButton, FormContainer, HomeContainer, IntrruptButton, MinutesAmoutInput, TaskInput } from "./styles";
import { useEffect, useState } from "react";


const newCycleFormValidationSchema = zod.object({
    task: zod.string().min(1),
    minutesAmount: zod.number().min(5).max(60)
})

interface CycleProps  {
    id: string,
    task: string,
    minutesAmount: number,
    CreationDate: Date,
    FinishedDate?: Date,
    InteruptedDate?: Date,
}

type newCycleFormData = zod.infer<typeof newCycleFormValidationSchema>

export function Home(){
    const [cycles, setCycles] = useState<CycleProps[]>([])
    const [currentId, setCurrentId] = useState<string | null>('')
    const [secondsAmountPassed, setSecondsAmountPassed] = useState(0)


    const {register,handleSubmit,watch, reset} = useForm<newCycleFormData>({
        resolver: zodResolver(newCycleFormValidationSchema),
        defaultValues:{
            task: '',
            minutesAmount: 0
        }
    })

    const activeCycle = cycles.find(cycle => {
        return cycle.id === currentId
    })
    const totalSeconds = !!activeCycle ? activeCycle.minutesAmount * 60 : 0

    useEffect(() => {
        let interval: number
        if(activeCycle){
            interval = setInterval( () => {
               const timePassedInSeconds = differenceInSeconds
               (new Date(), activeCycle.CreationDate)

               if(timePassedInSeconds >=  totalSeconds){
                    markCycleAsFinished()
                    setSecondsAmountPassed(state => 0)
               }
               else(
                   setSecondsAmountPassed(timePassedInSeconds)
               )

            },1000)
        }
        return () => clearInterval(interval)
    },[activeCycle])

    function handleMarkCycleAsIntrrupted(){
        const cyclesWithMoreOneCylceMarkAsIntrrupted = cycles.map(cycle =>{
            if(cycle.id === activeCycle?.id){
                return {...cycle,InteruptedDate: new Date() }
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

    
    const currentSeconsds = totalSeconds - secondsAmountPassed
    const minutesAmount = Math.floor(currentSeconsds / 60)
    const secondsAmount = currentSeconsds % 60

    const minutes = String(minutesAmount).padStart(2,'0')
    const seconds = String(secondsAmount).padStart(2,'0')

    const task = watch('task')
    const minutesAmout = watch('minutesAmount')
    const isDisableButton = !task || !minutesAmout

    return(
        <HomeContainer>
            <form onSubmit={handleSubmit(handleCreateNewCycle)}>
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

                <CountDown >
                    <div><span>{minutes[0]}</span></div>
                    <div><span>{minutes[1]}</span></div>
                    <div  className="separator"><span>:</span></div>
                    <div><span>{seconds[0]}</span></div>
                    <div><span>{seconds[1]}</span></div>
                </CountDown>
        
                {
                    activeCycle
                    ?(
                        <IntrruptButton onClick={handleMarkCycleAsIntrrupted}> 
                            <Hand/> Interromper
                        </IntrruptButton>
                    )
                    :
                        <CreateNewCycleButton type='submit' disabled={isDisableButton}>
                            <Play/> Começar
                        </CreateNewCycleButton>
                }
            </form>
        </HomeContainer>
    )
}