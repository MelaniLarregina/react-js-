import React, { useState } from 'react'
import { Button } from '@mui/material';

const Checkout = () => {
    const [user, setUser] = useState({nombre: "", email: "", numero: ""});
 
    const EnvioDeFormu = (event) => {
        event.preventDefault()
    };
    const capturarDatos = (event) => {
        let {name, value} = event.target;
        setUser({...user, [name]: value});
    };
    
  return (
   <div>
    <h1>Completa el siguiente formulario para finalizar la compra</h1>
    <form onSubmit={EnvioDeFormu} >
    <input type='texto' placeholder='Ingresa tus datos personales' onChange={capturarDatos} name='nombre'/>
    <input type='email' placeholder='1234@' onChange={capturarDatos} name='email'/>
    <input type='texto' placeholder='Ingresa numero de contacto' onChange={capturarDatos} name='numero'/>

    <Button type='submit'>enviar datos</Button>
    </form>
   </div>
    
  )
}

export default Checkout;