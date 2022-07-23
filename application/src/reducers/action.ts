import { CycleProps } from "./cycle";

export enum ActionTypes {
    CREATE_NEW_CYCLE = "CREATE_NEW_CYCLE",
    INTERRUPT_CURRENT_CYCLE = "INTERRUPT_CURRENT_CYCLE",
    MARK_FINISHED_CYCLE = "MARK_FINISHED_CYCLE",
    INCREMENT_SENCONDS_PASSED = 'INCREMENT_SENCONDS_PASSED'
}

export function createNewCycleAction(newCycle: CycleProps){
    return {
        type: ActionTypes.CREATE_NEW_CYCLE,
        payload:{
            newCycle
        }
    }
}
export function markCycleAsFinishedAction(){
    return{
        type: ActionTypes.MARK_FINISHED_CYCLE,
    }
}

export function markCycleAsIntrruptedAction(){
    return{
        type: ActionTypes.INTERRUPT_CURRENT_CYCLE,
    }
}

export function callSetSecondsAmountPassedAction(secondsPassed: number){
    return {
        type: ActionTypes.INCREMENT_SENCONDS_PASSED,
        payload: {
            secondsPassed
        }
    }
}