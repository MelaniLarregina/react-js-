import './Tarjetas.css'

const Tarjeta = ( {title, description, price} ) => {
    return (
    <div className='ficha'>
    <h1>{title}</h1>
    <h2>{description}</h2>
    <h3>{price}</h3>
    </div>
   )
}; 

export default Tarjeta;