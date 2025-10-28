import './styles/theme.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap global

// Componentes comunes
import NavigationBar from './components/common/NavigationBar';
import Home from './components/common/Home';

// Catálogo de eventos / películas
import EventDirectory from './components/movies/EventDirectory';
import MovieList from './components/movies/MovieList';
import MovieDetail from './components/movies/MovieDetail';

// Formulario de registro
import RegistrationForm from './components/auth/RegistrationForm';

function App() {
  return (
    <Router>
      <div className="Ticketera">
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/eventos" element={<EventDirectory />} />
          <Route path="/pelicula/:id" element={<MovieDetail />} />
          <Route path="/registro" element={<RegistrationForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
