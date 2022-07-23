import { ActionTypes } from "./action"

export interface CycleProps  {
    id: string 
    task: string,
    minutesAmount: number,
    CreationDate: Date,
    FinishedDate?: Date,
    InteruptedDate?: Date,
}


interface CycleState {
    cycleList: CycleProps[]
    currentId: string | null,
    secondsAmountPassed: number
}

export function CycleReducer(state: CycleState, action:any){
    
    switch(action.type){
        case ActionTypes.CREATE_NEW_CYCLE:
            return {
                ...state,
                cycleList: [...state.cycleList, action.payload.newCycle],
                currentId: action.payload.newCycle.id,
            }
        case  ActionTypes.INTERRUPT_CURRENT_CYCLE: {
            const cycleListWithMoreOneCycleInterrupted = state.cycleList.map(cycle =>{
                if(cycle.id === state.currentId){
                    return {...cycle,InteruptedDate: new Date()}
                }
                return cycle
            })
            return {
                ...state,
                currentId: null,
                cycleList: cycleListWithMoreOneCycleInterrupted
            }
        }
        case ActionTypes.MARK_FINISHED_CYCLE:{
            const cycleListWithMoreOneCycleFinished = state.cycleList.map(cycle =>{
                if(cycle.id === state.currentId){
                    return {...cycle,InteruptedDate: new Date()}
                }
            })
            return {
                ...state,
                cycleList: cycleListWithMoreOneCycleFinished,
                currentId: null
            }
        }
        case ActionTypes.INCREMENT_SENCONDS_PASSED:
            return {
                ...state,
                secondsAmountPassed: action.payload.secondsPassed
            }
        default: return state
    }
}