import { BrowserRouter,Routes, Route } from 'react-router-dom'
import { DefaultLayout } from '../layouts/defaultLayout'
import { Home } from '../pages/Home'
import { History } from '../pages/History'

export function Router(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element = {<DefaultLayout/>}>
                    <Route path='/' element = {<Home/>}/>
                    <Route path='/history' element = {<History/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}