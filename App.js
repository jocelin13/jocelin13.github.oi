
import './App.css';
import Navbar from './componente/Navbar';
import Home from './componente/Paginas/Home';
import Contacto from './componente/Paginas/Contacto';
import Servicios from './componente/Paginas/Servicios';
import Registro from './componente/Paginas/Registro';
import Productos from './componente/Paginas/Productos';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import OLCI from './componente/Paginas/OLCI';

function App() {
  return (
    <>
     <Navbar/>
     <Router>
     <Routes>
     <Route path="/" exact element={<Home/>}/>
     <Route path='/servicios' element={<Servicios/>}/>
     <Route path='/contacto' element={<Contacto/>}/>
     <Route path='/registro' element={<Registro/>}/>
     <Route path='/productos' element={<Productos/>}/>
     <Route path='/olci' element={<OLCI/>}/>
     </Routes>
     </Router>
    </>
  );
}

export default App;
