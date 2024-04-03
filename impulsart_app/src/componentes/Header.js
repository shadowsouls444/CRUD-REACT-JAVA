import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    
    <>
        <Link to="/ListUser">CRUD persona</Link>
<br></br>
        <Link to="/ListObra">CRUD obra</Link>
  <br></br>
        <Link to="/ListSubasta">CRUD subasta</Link>
        <br></br>
        <Link to="/paypal">paypal</Link>
    </>
 

  )
}
