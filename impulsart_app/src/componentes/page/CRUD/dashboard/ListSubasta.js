import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export const ListSubasta = () => {

    const [listSubasta, setListSubasta] = useState([]);

    useEffect(() => {
        getSubasta();
    }, []);

    //GET ALL USERS
    const getSubasta = () => {
        axios.get("http://localhost:8086/api/subasta/all")
            .then((response) => {
                setListSubasta(response.data.data);
            })
            .catch((e) => {
                console.log(e);
            });
    };
    //GET ALL USERS


    //DELETE USERS
    const deleteSubasta = async (pkCodSubasta) => {
        await axios.delete(`http://localhost:8086/api/subasta/delete/${pkCodSubasta}`)
        getSubasta()
    }
    //DELETE USERS

  return (
    
    <>
    <div>UsuarioAxios</div>

    <Link to="/CreateSubasta" className='btn btn-primary'>Crear subasta</Link>

    <div className="container">
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">Estado</th>
                    <th scope="col">Oferta minima</th>
                    <th scope="col">Fecha inicio</th>
                    <th scope="col">Fecha Finalizacion</th>
                    <th scope="col">Acciones</th>
                </tr>
            </thead>
            <tbody>
                {listSubasta.map((subasta, index) => (
                    <tr key={index}>
                        <td>{subasta.estadoSubasta}</td>
                        <td>{subasta.precioInicial}</td>
                        <td>{subasta.fechaInicio}</td>
                        <td>{subasta.fechaFinalizacion}</td>
                        <td>
                            <Link to = {`/EditSubasta/${subasta.pkCodSubasta}`} ClassName = "btn btn-outline-primary mx-2">Edit</Link>
                            <button onClick={() => deleteSubasta (subasta.pkCodSubasta)} ClassName = "btn btn-danger mx-2">Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
</>

  )
}

export default ListSubasta;