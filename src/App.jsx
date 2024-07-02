import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from './ItemListContainer/ItemListContainer'
import Footer from "./components/Footer/Footer"; 
import Cuerpo from "./components/cuerpo/cuerpo";
import Carrito from "./components/carrito/carrito"; 



function App() {
  return (
    <>
<Navbar />
<Cuerpo />
<ItemListContainer/>
<Carrito />
<Footer /> 
    </>
);
 };

export default App;

