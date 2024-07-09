import CartWidget from '../../../CardWidget/CardWidget';
import './Navbar.css'
import {Link} from "react-router-dom";

const Navbar = () => {
    return ( 
    <div className=''>
      <>
    <div className='bar'>
      <Link to="/"><img className='logo' src="https://res.cloudinary.com/dvjzcl7ux/image/upload/c_thumb,w_200,g_face/v1719264897/beauty-salon-logo-makeup-tools-cosmetic-brushes-lipstick-blush_528132-433_oe49cx.avif" alt="" /></Link>
      <ul className='categorias'>
      <Link to="/category/productos" className='bar'>Productos</Link>
      <Link to="/category/promociones" className='bar'>Promociones</Link>
      </ul>
      < CartWidget/>
    </div>
      </>
    </div>
    );
    }; 

export default Navbar;