import ItemList from "./itemList";
import {productos} from "../products";
import { useState, useEffect } from "react";

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const [error, setError] = useState ({});

    useEffect(() => {
        const getProducts = new Promise((resolve, reject) => {
            let x = true; 
            if (x){
                resolve(productos);
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
    }, []);

return <ItemList items={items} />;
};

export default ItemListContainer;