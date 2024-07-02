import CartWidget from '../../../CardWidget/CardWidget';
import './Navbar.css'
import { Button } from "@mui/material"

const Navbar = () => {
    return <div className='bar'>
      <img className='logo'
       src="https://res.cloudinary.com/dvjzcl7ux/image/upload/c_thumb,w_200,g_face/v1719264897/beauty-salon-logo-makeup-tools-cosmetic-brushes-lipstick-blush_528132-433_oe49cx.avif" alt="" />
    <ul>
    <Button variant='contained' >Inicio </Button>
    <Button variant='contained' >Productos </Button>
    <Button variant='contained' >Promociones </Button>
    </ul>
   < CartWidget />
    </div>
    
    
    

}; 

export default Navbar;