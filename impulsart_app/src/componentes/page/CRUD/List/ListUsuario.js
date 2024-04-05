import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export const ListUsuario = () => {

    const [listUsuarios, setListUsuarios] = useState([]);

    useEffect(() => {
        getUsuarios();
    }, []);

    //GET ALL USERS
    const getUsuarios = () => {
        axios.get("http://localhost:8086/api/usuario/all")
            .then((response) => {
                setListUsuarios(response.data.data);
            })
            .catch((e) => {
                console.log(e);
            });
    };
    //GET ALL USERS


    //DELETE USERS
    const deleteUsuario = async (identificacion) => {
        await axios.delete(`http://localhost:8086/api/usuario/delete/${identificacion}`)
        getUsuarios()
    }
    //DELETE USERS

    return (
        <>
            <div>UsuarioAxios</div>

            <Link to="/CreateUser" className='btn btn-primary'>Agregar usuario</Link>

            <div className="container">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Identificacion</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Apellido</th>
                            <th scope="col">Nickname</th>
                            <th scope="col">Email</th>
                            <th scope="col">Dirección</th>
                            <th scope="col">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listUsuarios.map((usuario, index) => (
                            <tr key={index}>
                                <td>{usuario.identificacion}</td>
                                <td>{usuario.nombre}</td>
                                <td>{usuario.apellido}</td>
                                <td>{usuario.nombreUsuario}</td>
                                <td>{usuario.email}</td>
                                <td>{usuario.direccion}</td>
                                <td>
                                    <Link to = {`/EditUser/${usuario.identificacion}`} className="btn btn-outline-primary mx-2">Edit</Link>
                                    <button onClick={() => deleteUsuario (usuario.identificacion)} className="btn btn-danger mx-2">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default ListUsuario;