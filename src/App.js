import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EventDirectory from './components/EventDirectory';
import Home from './components/Home';
import Navigation from './components/Navigation';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/eventos" element={<EventDirectory />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
