import axios from 'axios';
import React, { useState } from 'react'
import { Routes, useNavigate } from 'react-router-dom';

export const Formulario = () => {

    let navigate = useNavigate()

    const [venta, setVenta] = useState ({

        fechaVenta: new Date().toISOString().slice(0, 10),
        totalPago:"",
        reciboVenta:"",
        cantidad:"",
        metodoPago:"",
        FkCod_Producto: 1

    })

    const{ totalPago, reciboVenta, cantidad, metodoPago } = venta


    const onInputChange = (e) => {
       
        setVenta({...venta, [e.target.name]:e.target.value})


    };


    const onSubmit = async (e) => {


        e.preventDefault();
        axios.post("http://localhost:8086/api/venta/create",venta)
        navigate("./paypal.js")

    };


  return (
   
    <div className="container">

    <div className="row">

      <div className="col-12">

        <div className="formulario-registro">

          <h1>Crear usuario</h1>
          <form onSubmit = {(e) => onSubmit(e)}>
            <div className="identificacion">
              <input className="form-control" onChange = {(e) => onInputChange(e)} value = {totalPago} type={"number"} name="totalPago" placeholder="Ingrese el total" required />
            </div>
            <br />
            <div className="nombre">
              <input className="form-control" onChange = {(e) => onInputChange(e)} value = {reciboVenta} type={"text"} name="reciboVenta" placeholder="Ingrese su Recibo" required />
            </div>
            <br />
            <div className="apellido">
              <input className="form-control" onChange = {(e) => onInputChange(e)} value = {cantidad} type={"number"} name="cantidad" placeholder="Ingrese su cantidad" required />
            </div>
            <br />
            <div className="correo">
              <input className="form-control" onChange = {(e) => onInputChange(e)} value = {metodoPago} type={"text"} name="metodoPago" placeholder="Ingrese su Metodo de pago" required />
            </div>
            <br />
            <div className="form-check mb-3">
              <button type="submit">Crear obra</button>
            </div>
           
          </form>
          <div id="mensajeError" className="mensaje-error"></div>

        </div>

      </div>

    </div>

  </div>

  )
}

export default Formulario;