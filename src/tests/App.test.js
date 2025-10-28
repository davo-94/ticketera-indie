import { render, screen } from '@testing-library/react';
import App from '../App';
import { BrowserRouter as Router } from 'react-router-dom';

test('La aplicación se renderiza correctamente', () => {
  render(
    <Router>
      <App />
    </Router>
  );
  expect(screen.getByText(/Ticketera General/i)).toBeInTheDocument();
});
