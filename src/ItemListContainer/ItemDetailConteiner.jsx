import {useContext, useEffect, useState} from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import productos from "../productos"
import { CartContext } from "../context/CartContext";
import {Swal} from "sweetalert2"
import {collection, doc, getDoc} from "firebase/firestore"

const ItemDetailContainer = () => {

    const { addToCart, getQuantityById } = useContext(CartContext);
    const { id } = useParams();
    const [item, setItem] = useState ({});

    let inicial = getQuantityById(+id)

    useEffect(() => {
        let ProductosCollection = collection(db, "productos");
        let refDoc = doc(ProductosCollection, id);
        let getProductos = getDoc(refDoc);
        getProductos.then((res) => setItem({...res.data(), id: res.id}));
        }, [id]);

const onAdd = (quantity) => {
    let objetoFinal = {...item, quantity: quantity};
    addToCart(objetoFinal);
    Swal.fire("Producto agregado con exito!");
};
return <ItemDetail item={item} onAdd={onAdd} inicial={inicial} />;
};

export default ItemDetailContainer;