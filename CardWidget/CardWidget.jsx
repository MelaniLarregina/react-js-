import { Badge } from "@mui/material"
import {Link} from "react-router-dom";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
const CartWidget = () => {
    return(
        <div>
            <Link to="/Carrito">
            <Badge badgeContent={1} color="black"><ShoppingCartIcon color="action" /></Badge>
            </Link>
        </div>
    );
};
export default CartWidget;