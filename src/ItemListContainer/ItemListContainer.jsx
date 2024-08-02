import ItemList from "./itemList";
import {productos} from "../productos";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FadeLoader } from 'react-spinners';
import { db } from "../firebaseconfig";
import { collection, getDocs, query, where } from "firebase/firestore";


const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const [error, setError] = useState ({});
    const { name } = useParams();

    useEffect(() => {
        let ProductosCollection = collection(db, "productos");
        let consulta = ProductosCollection;
        if(name){
            consulta = query(ProductosCollection, where("category", "==", name));
        }
        let getProductos = getDocs(consulta);
        getProductos.then((res) => {
            let arrayValido = res.docs.map((product) => {
                return {...product.data(), id: product.id};

            });
            setItems(arrayValido);
        })
      
    }, [ name ]);

if( items.length === 0){
    return <FadeLoader/>
}

return <ItemList items={items} />;
};

export default ItemListContainer;