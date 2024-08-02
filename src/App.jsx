import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from './ItemListContainer/ItemListContainer';
import Footer from "./components/Footer/Footer"; 
import Cuerpo from "./components/cuerpo/cuerpo";
import Carrito from "./components/carrito/carrito"; 
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./ItemListContainer/ItemDetailConteiner";
import Layout from "./components/layout/layout";
import Checkout from "./components/checkout/checkout";
import CartContextProvide from "./context/CartContext";
import Counter from "./components/carrito/carritoConteiner";
import Cart from "./components/Cart/Cart"
function App() {
  return (
    <BrowserRouter>
      <CartContextProvide>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:name" element={<ItemListContainer />} />
            <Route path="/Carrito" element={<Carrito />} />
            <Route path="/ItemDetail/:id" element={<ItemDetailContainer />} />
            <Route path="/Checkout" element={<checkoutFormit />} />
            <Route path="/carritoConteiner" element={<Counter />} />
            <Route path="/Cart" element={<Cart />} />
          </Route>
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </CartContextProvide>
    </BrowserRouter>
  );
}

export default App;