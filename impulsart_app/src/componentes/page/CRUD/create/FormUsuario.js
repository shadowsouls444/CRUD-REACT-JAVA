import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export const FormUsuario = () => {

    let navigate = useNavigate()

    const [usuario, setUsuario] = useState ({

        nombreUsuario: "",
        identificacion: "",
        nombre: "",
        apellido: "",
        fechaNacimiento: "",
        email: "",
        numCelular: "",
        direccion: "",
        contrasena: "",
        tipoUsuario: "usuario comun"

    })

    const{ nombre, apellido, fechaNacimiento, email, numCelular, direccion, contrasena, nombreUsuario} = usuario

    const onInputChange = (e) => {
       
        setUsuario({...usuario, [e.target.name]:e.target.value})

    };

    const onSubmit = async (e) => {

        e.preventDefault();
        axios.post("http://localhost:8086/api/usuario/create",usuario)
        navigate("/"); 

    };

  return (
   
    <div className="container">

    <div className="row">

      <div className="col-12">

        <div className="formulario-registro">

          <h1>Crear usuario</h1>
          <form onSubmit = {(e) => onSubmit(e)}>
            <div className="nombre">
              <input className="form-control" onChange = {(e) => onInputChange(e)} value = {nombre} type={"text"} name="nombre" placeholder="Ingrese su Nombre" required />
            </div>
            <br />
            <div className="apellido">
              <input className="form-control" onChange = {(e) => onInputChange(e)} value = {apellido} type={"text"} name="apellido" placeholder="Ingrese su Apellido" required />
            </div>
            <br />
            <div className="correo">
              <input className="form-control" onChange = {(e) => onInputChange(e)} value = {email} type={"email"} name="email" placeholder="Ingrese su Correo" required />
            </div>
            <br />
            <div className="contrasena">
              <input className="form-control" onChange = {(e) => onInputChange(e)} value = {contrasena} type={"password"} name="contrasena" placeholder="Ingrese su Contraseña" required />
            </div>
            <br />
            <div className="fecha_nacimiento">
              <input className="form-control" onChange = {(e) => onInputChange(e)} value = {fechaNacimiento} type={"date"} name="fechaNacimiento" placeholder="Ingrese su Fecha de Nacimiento" required />
            </div>
            <br />
            <div className="direccion">
              <input className="form-control" onChange = {(e) => onInputChange(e)} value = {direccion} type={"text"} name="direccion" placeholder="Ingrese su Dirección" required />
            </div>
            <br />
            <div className="Numero">
              <input className="form-control" onChange = {(e) => onInputChange(e)} value = {numCelular} type={"number"} name="numCelular" placeholder="Ingrese su Numero Telefonico" required />
            </div>
            <br />
            <div className="Numero">
              <input className="form-control" onChange = {(e) => onInputChange(e)} value = {nombreUsuario} type={"text"} name="nombreUsuario" placeholder="Ingrese su nombre de usuario o nickname" required />
            </div>
            <br />
            <div className="form-check mb-3">
              <input type="checkbox" className="form-check-input" id="acepto_terminos" required />
              <label className="form-check-label" htmlFor="acepto_terminos">Acepto los Términos y Condiciones</label>
              <br />
              <br/>
              <button type="submit" className='btn btn-outline-success'>Registrarse</button>
            </div>
          </form>
          <div id="mensajeError" className="mensaje-error"></div>

        </div>

      </div>

    </div>

  </div>

  )
}

export default FormUsuario;