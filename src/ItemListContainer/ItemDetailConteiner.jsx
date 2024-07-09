import {useEffect, useState} from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import productos from "../productos"

const ItemDetailContainer = () => {
    const { id } = useParams();
    const [item, setItem] = useState ({});

    useEffect(() => {
        let product = productos.find((product) => product.id === +id);
        if (product) {
            setItem (product);
        }
    }, [id]);
    return <ItemDetail item={item} />;
};

export default ItemDetailContainer;