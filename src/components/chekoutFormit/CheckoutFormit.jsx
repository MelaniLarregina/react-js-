import { TextField } from '@mui/material';
import { useFormik } from 'formik';
import React from 'react';
import * as Yup from "yup";


const checkoutFormit = () => {

const {handleSubmit, handleChange, values, errors} = useFormik({
    initialValues: {nombre: "", email: "", contraseña: "", edad: ""},
    onSubmit: (x) => {
     },
    validationSchema: Yup.object({
        nombre: yup.string("").required("este campo es obligatorio").min(10, "minimo deben usarse 10 caracteres") ,
        email: yup.string().email("debe contener @").required("este campo es obligatorio"),
        contraseña: yup.string().required("este campo es obligatorio").min(10, "minimo deben usarse 10 caracteres").max(15, "maximo 15 caracteres").matches(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])/, "debe contener minimo una mayuscula, una miniscula, un numero y un caracter especial"),
        edad: yup.number().min(18, "recuerda ser mayor de edad +18")
    }),
    validateOnChange: false,
});

  return (
   <form className='form'
   onSubmit={handleSubmit}
   >
    <TextField variant='outlined'
    type='text'
    name='nombre'
    label="nombre"
    onChange={handleChange} 
    error={errors.nombre ? true : false}
    helperText={errors.nombre}
    />
    <TextField variant='outlined'
    type='text' 
    name='edad'
    label="edad" 
    onChange={handleChange} 
    error={errors.edad ? true : false}
    helperText={errors.edad}
    />
    <TextField variant='outlined' 
    type='text' 
    name='email'
    label="email" 
    onChange={handleChange} 
    error={errors.email ? true : false} 
    helperText={errors.email}
    />
    <TextField variant='outlined' 
    type='text'
    name='contraseña' 
    label="contraseña"
    onChange={handleChange}
    error={errors.contraseña ? true : false} 
    helperText={errors.contraseña}
    />
    <button variant="contained">Registrar datos</button>
   </form>
  )
}

export default checkoutFormit;