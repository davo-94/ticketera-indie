import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import NavigationBar from '../components/common/NavigationBar';

describe('Componente NavigationBar', () => {
  test('Contiene los enlaces principales', () => {
    render(<MemoryRouter><NavigationBar /></MemoryRouter>);
    expect(screen.getByText(/Inicio/i)).toBeInTheDocument();
    expect(screen.getByText(/Eventos/i)).toBeInTheDocument();
    expect(screen.getByText(/Registro/i)).toBeInTheDocument();
  });
});
