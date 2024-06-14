import './Tarjetas.css'

const Tarjeta = (props) => {
    return (
    <div className='ficha'>
    <h1>{props.title}</h1>
    <h2>{props.description}</h2>
    <h3>{props.price}</h3>
    </div>
   )
}; 

export default Tarjeta;