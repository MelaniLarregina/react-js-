import { RiShoppingCartLine } from "react-icons/ri";
const CartWidget = () => {
    return(
        <div>
            <RiShoppingCartLine color='black' size={40}/>
            <span className='span'>0</span>
        </div>
    );
};
export default CartWidget;