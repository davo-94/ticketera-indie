import { render, screen, fireEvent } from '@testing-library/react';
import EventDirectory from '../components/movies/EventDirectory';

describe('Componente EventDirectory', () => {
  test('Renderiza lista de eventos', () => {
    render(<EventDirectory />);
    expect(screen.getByText(/Taylor Swift/i)).toBeInTheDocument();
  });

  test('Filtra eventos correctamente por categoría', () => {
    render(<EventDirectory />);
const selects = screen.getAllByRole('combobox');
const categorySelect = selects[0]; // El primero es el de categoría
fireEvent.change(categorySelect, { target: { value: 'Cine' } });    fireEvent.change(select, { target: { value: 'Cine' } });
    expect(screen.getByText(/Oppenheimer/i)).toBeInTheDocument();
  });
});
