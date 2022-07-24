import { ActionTypes } from "./action"
import {produce} from 'immer'

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
        case ActionTypes.CREATE_NEW_CYCLE:{

            return produce(state, draft => {
                draft.cycleList.push(action.payload.newCycle),
                draft.currentId = action.payload.newCycle.id
            })
        }
        case  ActionTypes.INTERRUPT_CURRENT_CYCLE: {

            const currentCycleIndex = state.cycleList.findIndex(cycle =>{
                return cycle.id === state.currentId
            })
            if(currentCycleIndex < 0){
                return state
            }
            return produce(state, draft => {
                draft.cycleList[currentCycleIndex].InteruptedDate = new Date()
                draft.currentId = null
            })
         
        }
        case ActionTypes.MARK_FINISHED_CYCLE:{
            const currentCycleIndex = state.cycleList.findIndex(cycle =>{
                return cycle.id === state.currentId
            })
            if(currentCycleIndex < 0){
                return state
            }
            return produce(state, draft => {
                draft.cycleList[currentCycleIndex].FinishedDate = new Date()
                draft.currentId = null
            })
        }
        case ActionTypes.INCREMENT_SENCONDS_PASSED:
            return  produce(state, draft =>{
                draft.secondsAmountPassed = action.payload.secondsPassed
            })
        default: return state
    }
}