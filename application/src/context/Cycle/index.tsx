import { createContext, ReactNode, useReducer } from "react"
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
       
    })

    const {cycleList,currentId,secondsAmountPassed} = cyclesState
    
    const activeCycle: CycleProps | undefined = cycleList.find( cycle => {
        return cycle.id === currentId
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
        dispatch(callSetSecondsAmountPassedAction(secondsPassed))
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