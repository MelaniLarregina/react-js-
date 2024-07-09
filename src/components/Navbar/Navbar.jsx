import CartWidget from '../../../CardWidget/CardWidget';
import './Navbar.css'
import {Link, Outlet} from "react-router-dom";

const Navbar = () => {
    return ( 
    <div className='bar'>
      <>
    <div>
      <Link to="/"><img className='logo' src="https://res.cloudinary.com/dvjzcl7ux/image/upload/c_thumb,w_200,g_face/v1719264897/beauty-salon-logo-makeup-tools-cosmetic-brushes-lipstick-blush_528132-433_oe49cx.avif" alt="" /></Link>
      <ul className='categorias'>
      <Link to="/category/productos">Productos</Link>
      <Link to="/category/promociones">Promociones</Link>
      </ul>
    < CartWidget />
    </div>
      </>
    < Outlet />
    </div>
    );
    }; 

export default Navbar;