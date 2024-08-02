import { createContext, useState } from 'react';

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    let existe = isInCart(product.id);
    if (existe) {
      let newArray = cart.map((elemento) => {
        if (elemento.id === product.id) {
          return {
            ...elemento,
            quantity: product.quantity,
          };
        } else {
          return elemento;
        }
      });
      setCart(newArray);
    } else {
      setCart([...cart, product]);
    }
  };

  const clearCart = () => {
    setCart([]);
  };

  const isInCart = (id) => {
    return cart.some((product) => product.id === id);
  };

  const deleteProduct = (id) => {
  let Array = cart.filter((elemento) => elemento.id !== id);
  setCart(Array);
  };

  const getQuantityById = (id)=>{
    let productoEncontrado = cart.find(product => product.id === id)
   return productoEncontrado?.quantity;
  };

const getTotalPrice = ()=>{
  let total = cart.reduce((acc, elemento) => {
    return acc + elemento.price * elemento.quantity;
}, 0);
return total;
};


  const data = { cart, addToCart, clearCart, getQuantityById, getTotalPrice };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartContextProvider;