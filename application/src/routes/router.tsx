import { BrowserRouter,Routes, Route } from 'react-router-dom'
import { DefaultLayout } from '../layouts/defaultLayout'

export function Router(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element= {<DefaultLayout/>}/>
            </Routes>
        </BrowserRouter>
    )
}