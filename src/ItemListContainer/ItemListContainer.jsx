import ItemList from "./itemList";
import productos from "../productos";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const [error, setError] = useState ({});
    const { name } = useParams();

    useEffect(() => {
        const getProducts = new Promise((resolve, reject) => {
            let x = true; 
            let FiltroArray = productos.filter(product => product.category === name)
            if (x){
                resolve( name ? FiltroArray : productos);
            }
            else{
                reject({message: "error", codigo: "404"});
            }
        });

        getProducts
        .then((res) => {
            setItems(res);
        })
        .catch((error) => {
            setError(error);
        });
    }, [ name ]);

return <ItemList items={items} />;
};

export default ItemListContainer;