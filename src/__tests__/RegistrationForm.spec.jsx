
import React from 'react';
import { createRoot } from 'react-dom/client';
import { act } from 'react-dom/test-utils'; // act es crucial para pruebas que actualizan el estado de React
import { MemoryRouter } from 'react-router-dom'; // Necesario porque el componente usa 'useNavigate'
import RegistrationForm from '../components/auth/RegistrationForm'; // Ajusta la ruta al componente

// --- INICIO DEL CONJUNTO DE PRUEBAS PARA RegistrationForm ---
describe('RegistrationForm Component', () => {
  let container;
  let root;

  // Se ejecuta ANTES de cada prueba ('it')
  beforeEach(() => {
    // Crea un div en el DOM para renderizar el componente
    container = document.createElement('div');
    document.body.appendChild(container);
    root = createRoot(container);
  });

  // Se ejecuta DESPUÉS de cada prueba ('it')
  afterEach(() => {
    // Limpia el DOM para que las pruebas no se afecten entre sí
    act(() => {
      root.unmount();
    });
    document.body.removeChild(container);
    container = null;
  });

  // --- PRUEBA 1: Renderizado Inicial (Verifica que el componente se monta correctamente) ---
  it('debe renderizar el formulario con sus campos y el botón de registro', () => {
    act(() => {
      // MemoryRouter es necesario para evitar errores con el hook useNavigate
      root.render(
        <MemoryRouter>
          <RegistrationForm />
        </MemoryRouter>
      );
    });

    // Buscamos elementos clave en el componente renderizado
    const nombresInput = container.querySelector('#nombres');
    const emailInput = container.querySelector('#email');
    const submitButton = container.querySelector('button[type="submit"]');

    // Afirmaciones: verificamos que los elementos existan
    expect(nombresInput).not.toBeNull();
    expect(emailInput).not.toBeNull();
    expect(submitButton).not.toBeNull();
    expect(submitButton.textContent).toBe('Registrar');
  });

  // --- PRUEBA 2: Validación de Campo Requerido (REQUISITO OBLIGATORIO) ---
  it('debe mostrar un mensaje de error si el campo "nombres" está vacío al enviar', () => {
    act(() => {
      root.render(
        <MemoryRouter>
          <RegistrationForm />
        </MemoryRouter>
      );
    });

    const form = container.querySelector('form');

    // Simulamos el envío del formulario SIN llenar ningún campo
    act(() => {
      form.dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }));
    });

    // Buscamos el input de "nombres" y su mensaje de error asociado
    const nombresInput = container.querySelector('#nombres');
    // El mensaje de error se muestra en un div con la clase 'invalid-feedback'
    const errorFeedback = nombresInput.parentElement.querySelector('.invalid-feedback');

    // Afirmaciones:
    // 1. El mensaje de error debe existir en el DOM.
    expect(errorFeedback).not.toBeNull();
    // 2. El texto del mensaje debe ser el correcto.
    expect(errorFeedback.textContent).toBe('Los nombres son obligatorios.');
    // 3. El input debe tener la clase 'is-invalid' de Bootstrap para mostrarse en rojo.
    expect(nombresInput.classList.contains('is-invalid')).toBe(true);
  });

  // --- PRUEBA 3: Validación de Formato de Email (REQUISITO OBLIGATORIO) ---
  it('debe mostrar un mensaje de error si el formato del email es inválido', () => {
    act(() => {
      root.render(
        <MemoryRouter>
          <RegistrationForm />
        </MemoryRouter>
      );
    });

    const form = container.querySelector('form');
    const emailInput = container.querySelector('#email');

    // Simulamos que el usuario escribe un email con formato incorrecto
    act(() => {
      // Cambiamos el valor del input directamente
      emailInput.value = 'correo-invalido';
      // Disparamos un evento 'change' para que React lo detecte si fuera necesario
      emailInput.dispatchEvent(new Event('change', { bubbles: true }));
    });

    // Simulamos el envío del formulario
    act(() => {
      form.dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }));
    });

    // Buscamos el mensaje de error del campo email
    const errorFeedback = emailInput.parentElement.querySelector('.invalid-feedback');

    // Afirmaciones:
    expect(errorFeedback).not.toBeNull();
    expect(errorFeedback.textContent).toBe('El formato del email es inválido.');
    expect(emailInput.classList.contains('is-invalid')).toBe(true);
  });

  // --- PRUEBA 4: Envío Exitoso (Prueba opcional pero recomendada) ---
  it('no debe mostrar mensajes de error cuando el formulario se llena correctamente', () => {
    act(() => {
      root.render(
        <MemoryRouter>
          <RegistrationForm />
        </MemoryRouter>
      );
    });

    // Llenamos TODOS los campos con datos válidos
    act(() => {
      container.querySelector('#rut').value = '11.111.111-1';
      container.querySelector('#nombres').value = 'Juan';
      container.querySelector('#apellidos').value = 'Perez';
      container.querySelector('#fechaNacimiento').value = '1990-01-01';
      container.querySelector('#genero').value = 'masculino';
      container.querySelector('#ciudad').value = 'Santiago';
      container.querySelector('#celular').value = '987654321';
      container.querySelector('#email').value = 'juan.perez@correo.com';
      container.querySelector('#password').value = 'password123';
    });

    // Simulamos el envío del formulario
    const form = container.querySelector('form');
    act(() => {
      form.dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }));
    });

    // Buscamos si existe CUALQUIER mensaje de error en el formulario
    const errorFeedback = container.querySelector('.invalid-feedback');

    //  No debería existir ningún mensaje de error
    expect(errorFeedback).toBeNull();
  });
});