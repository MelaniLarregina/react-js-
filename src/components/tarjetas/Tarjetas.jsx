import './Tarjetas.css'
import { Link } from 'react-router-dom';

const Tarjeta = ( {title, description, price, id} ) => {
    return (
    <Link to={'/itemDetail/${id}'} >
     <div className='ficha'>
    <h1>{title}</h1>
    <h2>{description}</h2>
    <h3>{price}</h3>
    </div>
    </Link>
   
   )
}; 

export default Tarjeta;