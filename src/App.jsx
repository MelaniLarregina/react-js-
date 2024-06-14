import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer"; 
import Cuerpo from "./components/cuerpo/cuerpo";
import Tarjeta from "./components/tarjetas/Tarjetas";


function App() {
  return (
  <div>
  <Navbar/>
  <div> 
  <Cuerpo/>
  <div>
  <div>
  <Tarjeta
  title= "Combo numero 1"
  description="limpiador facial, tonico y serum"
  price="$20000"
  />  
  <Tarjeta
  title= "Combo numero 2"
  description="crema de dia, crema de noche"
  price="$10000"
  />  
  <Tarjeta
  title= "Combo numero 3"
  description="corrector de ojeras, base liquida, rimmel"
  price="$50000"
  />  
  </div>
  <Footer/> 
  </div>
  </div>
  </div> 

  );
 };

export default App;

