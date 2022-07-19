import {Outlet} from 'react-router-dom'

import { Header } from "../../components/Header";
import { DefalutLayoutContainer } from "./style";



export function DefaultLayout(){
    return(
        <DefalutLayoutContainer>
            <Header/>
            <Outlet/>
        </DefalutLayoutContainer>
    )
}