import {Button} from "@mui/material";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";



export const Counter = ({ restar, contador, sumar, onAdd}) => {
  const {cart, clearCart} = useContext (CartContext);
  return(
     <div>
  <Button variant="contained" onClick={sumar}>
    Sumar
    </Button>
  <h2>{contador}</h2>
  <Button variant="contained" onClick={restar}>
    Restar
    </Button>
  <Link to="/Cart">
  <Button variant="outlined" onClick={onAdd}>
    Agregar al carrito
  </Button>
  </Link>

  
</div>
)
};

export default Counter; 

