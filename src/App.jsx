import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from './ItemListContainer/ItemListContainer'
import Footer from "./components/Footer/Footer"; 
import Cuerpo from "./components/cuerpo/cuerpo";
import Carrito from "./components/carrito/carrito"; 
import { BrowserRouter, Routes, Route} from "react-router-dom";
import ItemDetailContainer from "./ItemListContainer/ItemDetailConteiner";
import Layout from "./components/layout/layout"

function App() {
  return (
  <BrowserRouter>
     <Routes>

    <Route element={<Layout />}>
       <Route path="/" element={<ItemListContainer/>} />
       <Route path="/category/:name" element ={<ItemListContainer/>} />
       <Route path="/Carrito" element={<Carrito />}/>
       <Route path="/ItemDetail/:id" element ={<ItemDetailContainer/>} />
    </Route>

      <Route path="*" element ={<h1>404 Not Found</h1>}/>
     </Routes>
  </BrowserRouter>
);
 };

export default App;


