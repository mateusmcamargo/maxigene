import { Route, Routes } from 'react-router-dom';
import { NewAnimal }     from './Pages/NewAnimal';
import { Farms }         from './Pages/Farms';
import { Navbar }        from './Components/Navbar/Navbar'

function App() {
    return (
        <>
            <Navbar/>
            <Routes>
                <Route path='/maxigene/farms'     element={<Farms/>}/>
                <Route path='/maxigene/newanimal' element={<NewAnimal/>}/>
            </Routes>
        </>
    );
}

export { App };