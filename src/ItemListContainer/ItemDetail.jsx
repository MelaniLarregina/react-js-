import Navbar from "../components/Navbar/Navbar";
import Carrito from "../components/carrito/carrito";

const ItemDetail = ({ item, onAdd, inicial }) => {
    return (
     <>
     <div>
        <div className={"containerItemDetail"}>
            <div className={"containerImage"}>
            <img src={item.img} alt="" />
        </div>
        <div className={"containerDetail"}>
        <h2 style={{fontFamily: "monospace"}}>
        <span style={{fontSize: "23px"}} >Nombre:</span>{item.title}
        </h2>
        <h2 style={{fontFamily: "monospace"}}>
        <span style={{fontSize: "23px"}}>Descripcion:</span>{" "}{item.description}
        </h2>
        <h2 style={{fontFamily: "monospace"}}>
        <span style={{fontSize: "23px"}}>Precio:</span> ${item.price}.-
        </h2>
    </div>
    </div>
    </div>
    <div>
        <Carrito  onAdd={onAdd} stock={item.stock} inicial= {inicial} />
    </div>

     </>
    );
    };

export default ItemDetail;
