import { differenceInSeconds } from "date-fns"
import { X } from "phosphor-react"
import { createContext, ReactNode, useEffect, useReducer, useState } from "react"
import { callSetSecondsAmountPassedAction, createNewCycleAction, markCycleAsFinishedAction, markCycleAsIntrruptedAction } from "../../reducers/action"
import { CycleProps, CycleReducer } from "../../reducers/cycle"



interface createNewCycleData {
    task: string,
    minutesAmount: number
}

interface CycleContextProviderProps {
    children: ReactNode
}

interface CycleContextType {
    cycleList: CycleProps[]
    secondsAmountPassed: number,
    activeCycle: CycleProps | undefined,
    markCycleAsFinished: () => void,
    markCycleAsIntrrupted:() => void,
    createNewCycle: (data:createNewCycleData) => void
    callSetSecondsAmountPassed: (secondsPassed: number) => void
}       
export const CycleContext = createContext({} as CycleContextType)


export function CycleContextProvider({children}:CycleContextProviderProps){

    const [cyclesState, dispatch] = useReducer(CycleReducer,{
        cycleList: [],
        currentId: null,
        secondsAmountPassed: 0
       
    },() => {
        const stateAsJson = localStorage.getItem('@ignite-timer-recap:cycles-state-1.0.0')
        if(stateAsJson){
            return JSON.parse(stateAsJson)
        }
        return {
            cycleList: [],
            currentId: null,
            secondsAmountPassed: 0
        }
    })
    
    useEffect(()=>{
        const stateJSON= JSON.stringify(cyclesState)
        localStorage.setItem('@ignite-timer-recap:cycles-state-1.0.0',stateJSON )
    },[cyclesState])
    
    const {cycleList,currentId} = cyclesState
    
    const activeCycle: CycleProps | undefined = cycleList.find( cycle => {
        return cycle.id === currentId
    })
    
    const [secondsAmountPassed, setsecondsAmountPassed] = useState(()=>{
        if(activeCycle){
            return differenceInSeconds(new Date(), new Date(activeCycle.CreationDate))
        }
        return 0
    })
    
    

    function markCycleAsIntrrupted(){
        dispatch(markCycleAsIntrruptedAction())

    } 
    function markCycleAsFinished(){
        dispatch(markCycleAsFinishedAction())
      
    }
    function createNewCycle(data: createNewCycleData){
        const newCycle: CycleProps= {
            id: String(new Date().getTime()),
            task: data.task,
            minutesAmount: data.minutesAmount,
            CreationDate: new Date()
        }
        dispatch(createNewCycleAction(newCycle))     
    }
    function callSetSecondsAmountPassed(secondsPassed: number){
        setsecondsAmountPassed(()=> secondsPassed)
    }

    return(
        <CycleContext.Provider
            value={{
                cycleList,
                activeCycle,
                secondsAmountPassed,
                callSetSecondsAmountPassed,
                markCycleAsFinished,
                createNewCycle,
                markCycleAsIntrrupted,
            }}
        >
            {children}
        </CycleContext.Provider>
    )
}