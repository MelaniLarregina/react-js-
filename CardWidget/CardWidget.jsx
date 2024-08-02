import { Badge } from "@mui/material"
import {Link} from "react-router-dom";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useContext } from "react";
import { CartContext, getTotalItems } from "../src/context/CartContext";


const CartWidget = () => {
    const { getTotalItems } = useContext(CartContext);
    let total = getTotalItems()

    return(
        <div>
            <Link to="/Carrito">
            <Badge badgeContent={total} color="black"><ShoppingCartIcon color="action" /></Badge>
            </Link>
        </div>
    );
};
export default CartWidget;