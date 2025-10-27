import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import EventDirectory from './components/EventDirectory';
import Home from './components/Home';
import Navigation from './components/Navigation';
import RegistrationForm from './components/RegistrationForm.jsx';

function App() {
  return (
    <Router>
      <div className="Ticketera">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/eventos" element={<EventDirectory />} />
          <Route path="/registro" element={<RegistrationForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;