import { Play } from "phosphor-react";
import { CountDown, CreateNewCycleButton, FormContainer, HomeContainer, MinutesAmoutInput, TaskInput } from "./styles";

export function Home(){
    return(
        <HomeContainer>
            <form action="">
                <FormContainer>
                    <label htmlFor="task"><span>Vou Trabahar</span></label>
                    <TaskInput 
                        maxLength={40}
                        type="text" 
                        id="task" 
                        placeholder ="Dê um nome para o seu projeto"
                    />

                    <label htmlFor="minutesAmount"><span>durante</span></label>
                    <MinutesAmoutInput 
                        type="number"
                        placeholder="00" 
                        step={5}
                        min = {5}
                        max = {60}
                    />
                    <span>minutos.</span>
                </FormContainer>

                <CountDown >
                    <div><span>0</span></div>
                    <div><span>0</span></div>
                    <div  className="separator"><span>:</span></div>
                    <div><span>0</span></div>
                    <div><span>0</span></div>
                </CountDown>
        
                <CreateNewCycleButton type='submit' disabled>
                    <Play/> Começar
                </CreateNewCycleButton>
            </form>
        </HomeContainer>
    )
}