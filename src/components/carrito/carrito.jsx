import './carrito.css'
import { useState } from "react";

export const Carrito = () => {

     const [contador, setContador] = useState(1)

    const restar = () => {
        if(contador > 1){
            setContador(contador -1);
        }
        else{
            alert ("Tienes que tener minimo 1 producto, para poder restar del carrito");
        }
       
    };

    const sumar = () => {
        setContador(contador +1);

    };

return (
<div>
  <button onClick={sumar}>Sumar</button>
  <h2>{contador}</h2>
  <button onClick={restar}>Restar</button>
</div>
);
}

export default Carrito; 