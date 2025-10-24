import { Container, Row, Col } from 'react-bootstrap'; 
import MovieCard from './MovieCard'; 
import { movies } from '../../data/movies'; 

const MovieList = () => (
    <Container className="mt-4">
        <h2 className="text-center mb-4">Cartelera Indie|</h2>
        <Row>
            {movies.map(movie => (
                <Col key={movie.id} sm={12} md={6} lg={4} className="mb-4">
                    <MovieCard movie={movie} />
                </Col>
            ))}
        </Row>
    </Container>
);

export default MovieList;