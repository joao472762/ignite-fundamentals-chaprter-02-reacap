import { differenceInSeconds } from "date-fns";
import { useContext, useEffect } from "react";
import { CycleContext } from "../..";
import { CountDownContainer } from "./styles";

export function CountDown() {

    const {
        activeCycle,
        secondsAmountPassed,
        markCycleAsFinished,
        callSetSecondsAmountPassed
    } = useContext(CycleContext)

    const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0
    

    useEffect(() => {
        let interval: number
        if(activeCycle){
            interval = setInterval( () => {
               const timePassedInSeconds = differenceInSeconds
               (new Date(), activeCycle.CreationDate)

               if(timePassedInSeconds >=  totalSeconds){
                    markCycleAsFinished()
                    callSetSecondsAmountPassed(0)
               }
               else(
                    callSetSecondsAmountPassed(timePassedInSeconds)
               )

            },1000)
        }
        return () => clearInterval(interval)
    },[activeCycle])



    const currentSeconsds = totalSeconds - secondsAmountPassed
    const minutesAmount = Math.floor(currentSeconsds / 60)
    const secondsAmount = currentSeconsds % 60

    const minutes = String(minutesAmount).padStart(2,'0')
    const seconds = String(secondsAmount).padStart(2,'0')

    
    return(
        <CountDownContainer >
            <div><span>{minutes[0]}</span></div>
            <div><span>{minutes[1]}</span></div>
            <div  className="separator"><span>:</span></div>
            <div><span>{seconds[0]}</span></div>
            <div><span>{seconds[1]}</span></div>
        </CountDownContainer>
    )
}