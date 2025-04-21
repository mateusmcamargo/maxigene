import { Route, Routes } from 'react-router-dom';
import { Login }         from './Pages/Login';
import { Signup }        from './Pages/Signup';
import { Farms }         from './Pages/Farms';
import { NewAnimal }     from './Pages/NewAnimal';
import { Navbar }        from './Components/Navbar/Navbar'
import { Data } from './Pages/Data';
import { Settings } from './Pages/Settings';
import { Animals } from './Pages/Animals';

function App() {
    return (
        <>
            <Navbar/>
            <Routes>
                <Route path='/maxigene/signup'            element={<Signup/>}/>
                <Route path='/maxigene/farms'             element={<Farms/>}/>
                <Route path='/maxigene/animals'           element={<Animals/>}/>
                <Route path='/maxigene/animals/newanimal' element={<NewAnimal/>}/>
                <Route path='/maxigene/data'              element={<Data/>}/>
                <Route path='/maxigene/settings'          element={<Settings/>}/>
            </Routes>
        </>
    );
}

export { App };