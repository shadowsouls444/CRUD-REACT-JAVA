import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './componentes/Header';
import { EditUsuario } from './componentes/page/CRUD/edit/EditUsuario';
import { ListUsuario } from './componentes/page/CRUD/dashboard/ListUsuario';
import { FormUsuario } from './componentes/page/CRUD/create/FormUsuario';
import { ListObra } from './componentes/page/CRUD/dashboard/ListObra';
import FormObra from './componentes/page/CRUD/create/FormObra';
import EditObra from './componentes/page/CRUD/edit/EditObra';
import ListSubasta from './componentes/page/CRUD/dashboard/ListSubasta';
import FormSubasta from './componentes/page/CRUD/create/FormSubasta';
import EditSubasta from './componentes/page/CRUD/edit/EditSubasta';
import Formulario from './componentes/Formulario';

function App() {

  return (

    <>

<Header />

    <div className="App">

         <Routes>

{/*CRUD USUARIO*/}
          <Route path="/CreateUser" element = {<FormUsuario />}/>
          <Route path="/ListUser" element = {<ListUsuario />}/>
          <Route path="/EditUser/:identificacion" element = {<EditUsuario />}/>
{/*CRUD USUARIO*/}

{/*CRUD VENTAS*/}
<Route path="/ListObra" element = {<ListObra />}/>
<Route path="/CreateObra" element = {<FormObra />}/>
<Route path="/EditObra/:pkCod_Producto" element = {<EditObra />}/>
{/*CRUD VENTAS*/}

{/*CRUD SUBASTA*/}
<Route path="/ListSubasta" element = {<ListSubasta />}/>
<Route path="/CreateSubasta" element = {<FormSubasta />}/>
<Route path="/EditSubasta/:pkCodSubasta" element = {<EditSubasta />}/>
{/*CRUD SUBASTA*/}

<Route path="/paypal" element = {<Formulario />}/>

          </Routes>   
 
    </div>    

    </>

  );
}

export default App;
