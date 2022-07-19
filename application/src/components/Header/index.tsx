import { HeaderContainer } from "./styles";
import LogoIgnite from '../../assets/svgs/Logo.svg'
import {NavLink} from 'react-router-dom'
import { Timer , Scroll } from "phosphor-react";

export function Header(){
    return(
        <HeaderContainer>
            <img src={LogoIgnite}/>
            <nav>
                <NavLink to={'#'}> <Timer size={'1.43rem'}/> </NavLink>
                <NavLink to={'#'}> <Scroll size={'1.43rem'}/> </NavLink>
            </nav>
        </HeaderContainer>
    )
}