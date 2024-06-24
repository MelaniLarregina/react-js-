import CartWidget from '../../../CardWidget/CardWidget';
import './Navbar.css'


const Navbar = () => {
    return <div className='bar'>
      <img className='logo'
       src="https://res.cloudinary.com/dvjzcl7ux/image/upload/c_thumb,w_200,g_face/v1719264897/beauty-salon-logo-makeup-tools-cosmetic-brushes-lipstick-blush_528132-433_oe49cx.avif" alt="" />
    <ul>
      <li>Inicio</li>
      <li>Productos</li>
      <li>Informacion</li>
    </ul>
   < CartWidget />
    </div>
    
    
    

}; 

export default Navbar;