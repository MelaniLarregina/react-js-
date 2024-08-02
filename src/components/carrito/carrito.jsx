import './carrito.css'
import { useState } from "react";
import { Counter } from './carritoConteiner';


export const Carrito = ({onAdd, stock, inicial=1}) => {

     const [contador, setContador] = useState(inicial);

    const restar = () => {
        if(contador > 1){
            setContador(contador -1);
        }
        else{
            alert ("Tienes que tener minimo 1 producto, para poder restar del carrito");
        }
       
    };

    const sumar = () => {
        if(contador < stock){
            setContador(contador +1);
        } else {
            alert("esta cantidad supera el stock disponible")
        }
    };

return <Counter contador={contador} sumar= {sumar} restar={restar} onAdd={onAdd} />;
}

export default Carrito; 