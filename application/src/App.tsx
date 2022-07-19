import { GlobalSyles} from "./styles/themes/global";
import {ThemeProvider} from 'styled-components'
import { defaultTheme } from "./styles/themes/default";
import { Router } from "./routes/router";


export function App(){
  return(
    <ThemeProvider theme={defaultTheme}>
      <Router/>
      <GlobalSyles/>
    </ThemeProvider>
  )
}
