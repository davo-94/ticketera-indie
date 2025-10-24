import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationBar from './components/common/NavigationBar';
import MovieList from './components/movies/MovieList';
import MovieDetail from './components/movies/MovieDetail';
import 'bootstrap/dist/css/bootstrap.min.css'; //Bootstrap global

function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path ="/" element={<MovieList />} />
        <Route path ="/pelicula/:id" elements ={<MovieDetail />} />
      </Routes>
    </Router>
  );
}

export default App;