import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Home from '../components/common/Home';

describe('Componente Home', () => {
  test('Renderiza el título principal', () => {
    render(<MemoryRouter><Home /></MemoryRouter>);
    expect(screen.getByText(/Bienvenido a Ticketera/i)).toBeInTheDocument();
  });

  test('Renderiza el botón de registro', () => {
    render(<MemoryRouter><Home /></MemoryRouter>);
    expect(screen.getByText(/Crea tu cuenta gratis/i)).toBeInTheDocument();
  });
});
