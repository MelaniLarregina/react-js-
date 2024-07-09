import './Tarjetas.css'
import {Card, CardActions, CardContent, CardMedia, Button, Typography} from "@mui/material"
import { Link } from 'react-router-dom';


 const Tarjetas = ( {title, description, price, id, img} ) => {
    return (
        <Card sx={{ Width: 200 }}>
        <CardMedia
          sx={{ height: 140 }}
          image={img}
          title={title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {price}
          </Typography>
        </CardContent>
        <CardActions>
            <Link to={`/ItemDetail/${id}`}>
            <Button size="small" variant='contained'>ver mas</Button>
            </Link>
        </CardActions>
      </Card>
   )
}; 

export default Tarjetas;
