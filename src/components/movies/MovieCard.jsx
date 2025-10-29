import { Card, Button } from 'react-bootstrap'; 
import {Link } from 'react-router-dom'; 

const MovieCard = ({ movie }) => (
    <Card className="shadow-sm h-100">
        <Card.Img variant="top" src={movie.image} alt={movie.title}/>
        <Card.Body>
            <Card.Title>{movie.titulo}</Card.Title>
            <Card.Text>{movie.genero} • {movie.duracion} min</Card.Text>
            <Card.Text><strong>${movie.precio}</strong></Card.Text>
            <Button as ={Link} to={`/pelicula/${movie.id}`} variant="primary">
                Ver detalles
            </Button>
        </Card.Body>
    </Card>
);

export default MovieCard; 