import { useParams, Link } from 'react-router-dom'; 
import { movies } from '../../data/movies'; 
import { Container, Card, Button } from 'react-bootstrap'; 

const MovieDetail = () => {
    const { id } = useParams(); 
    const movie = movie.find(m => m.id === parseInt(id)); 

    if(!movie) {
        return <p className = "text-center mt-5">Película no encontrada.</p>
    }

    return (
        <Container className="mt-4">
            <Card>
                <Card.Img variant="top" src={movie.image} alt={movie.title} />
                <Card.Body>
                    <Card.Title>{movie.title}</Card.Title>
                    <Card.Text>{movie.synopsis}</Card.Text>
                    <Card.Text><strong>${movie.price}</strong></Card.Text>
                    <Button as={Link} to="/checkout" variant="success">Reservar</Button>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default MovieDetail;