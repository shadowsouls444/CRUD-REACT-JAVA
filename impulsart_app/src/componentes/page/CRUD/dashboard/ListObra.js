import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export const ListObra = () => {

    const [listObra, setListObra] = useState([]);

    useEffect(() => {
        getObra();
    }, []);

    //GET ALL USERS
    const getObra = () => {
        axios.get("http://localhost:8086/api/obra/all")
            .then((response) => {
                setListObra(response.data.data);
            })
            .catch((e) => {
                console.log(e);
            });
    };
    //GET ALL USERS


    //DELETE USERS
    const deleteObra = async (pkCod_Producto) => {
        await axios.delete(`http://localhost:8086/api/usuario/delete/${pkCod_Producto}`)
        getObra()
    }
    //DELETE USERS

  return (
    
    <>
    <div>UsuarioAxios</div>

    <Link to="/CreateObra" className='btn btn-primary'>Crear obra</Link>

    <div className="container">
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">Nombre</th>
                    <th scope="col">Categoria</th>
                    <th scope="col">Cantidad</th>
                    <th scope="col">Peso</th>
                    <th scope="col">Tamano</th>
                    <th scope="col">Acciones</th>
                </tr>
            </thead>
            <tbody>
                {listObra.map((obra, index) => (
                    <tr key={index}>
                        <td>{obra.nombreProducto}</td>
                        <td>{obra.categoria}</td>
                        <td>{obra.cantidad}</td>
                        <td>{obra.peso}</td>
                        <td>{obra.tamano}</td>
                        <td>
                            <Link to = {`/EditObra/${obra.pkCod_Producto}`} ClassName = "btn btn-outline-primary mx-2">Edit</Link>
                            <button onClick={() => deleteObra (obra.pkCod_Producto)} ClassName = "btn btn-danger mx-2">Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
</>

  )
}

export default ListObra;