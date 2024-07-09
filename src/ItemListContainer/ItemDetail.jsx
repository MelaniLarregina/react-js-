import Navbar from "../components/Navbar/Navbar";
import Carrito from "../components/carrito/carrito";

const ItemDetail = ({ item }) => {
    return (
        <>
        <div>
            <h2>{item.title}</h2>
        </div>
        <Carrito />
        </>
    );
};

export default ItemDetail;
