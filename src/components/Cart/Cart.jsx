import { useContext, useState } from 'react'
import {CartContext} from "../../context/CartContext"
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Cart = () => {
    const {cart, clearCart, deleteProduct, getTotalPrice} = useContext(CartContext);
    let total = getTotalPrice();
    return(
        <div>
            {cart.map((elemento) => {
                return (
                    <div key={elemento.id}>
                    <h2> {elemento.title} </h2>
                    <h2> {elemento.quantity} </h2>
                    <h2> {elemento.price} </h2>
                    <Button variant='contained' onClick={() => deleteProduct()}>Eliminar</Button>
        </div>
                );
            })}

            <h2>El total a pagar es: {total} </h2>
            {cart.lenght > 0 && <Button onClick={clearCart}> Limpiar carrito</Button> }
            <Link to="/checkout">
            <Button variant='contained'> Finalizar compra</Button>
            </Link>
        </div>
    );
}

export default Cart;

