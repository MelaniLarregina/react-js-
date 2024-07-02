import Tarjeta from "../components/tarjetas/Tarjetas";

const ItemList = ( {items} ) => {
    console.log(items);
    return (
        <div style={{ display: "flex", gap: "10px"}}>
           {items.map((elemento) => {
            return (
                <Tarjeta 
                key={elemento.id}
                title={elemento.title}
                description={elemento.description}
                price= {elemento.price}
                />
            );
           })};
        </div>
    );
};

export default ItemList;
[]
{}