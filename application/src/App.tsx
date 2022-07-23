import { defaultTheme } from "./styles/themes/default";
import { GlobalSyles} from "./styles/themes/global";
import {ThemeProvider} from 'styled-components'

import { Router } from "./routes/router";
import { CycleContextProvider } from "./context/Cycle";


export function App(){
  return(
    <ThemeProvider theme={defaultTheme}>
      <CycleContextProvider>
        <Router/>   
      </CycleContextProvider>
      <GlobalSyles/>
    </ThemeProvider>
  )
}
