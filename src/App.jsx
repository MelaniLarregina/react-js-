import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from './ItemListContainer/ItemListContainer'
import Footer from "./components/Footer/Footer"; 
import Cuerpo from "./components/cuerpo/cuerpo";
import Carrito from "./components/carrito/carrito"; 
import { BrowserRouter, Routes, Route} from "react-router-dom";
import ItemDetailContainer from "./ItemListContainer/ItemDetailConteiner";
function App() {
  return (
  <BrowserRouter>
     <Routes>
      <Route element={<Navbar />}>

       <Route path="/" element={<ItemListContainer/>}/>
       <Route path="/category/:name" element ={<ItemListContainer/>}/>
       <Route path="/Carrito" element={<Carrito />}/>
       <Route path="/ItemDetail/:id" element ={<ItemDetailContainer/>}/>

      </Route>
    </Routes>
  </BrowserRouter>
);
 };

export default App;


