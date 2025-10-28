import { render, screen, fireEvent } from '@testing-library/react';
import RegistrationForm from '../components/auth/RegistrationForm';

describe('Componente RegistrationForm', () => {
  test('Renderiza los campos principales', () => {
    render(<RegistrationForm />);
    expect(screen.getByLabelText(/Nombres/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Apellidos/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
  });

  test('Muestra error al enviar el formulario vacío', () => {
    render(<RegistrationForm />);
    const button = screen.getByRole('button', { name: /Registrar/i });
    fireEvent.click(button);
    expect(screen.getByText(/Los nombres son obligatorios/i)).toBeInTheDocument();
  });
});
