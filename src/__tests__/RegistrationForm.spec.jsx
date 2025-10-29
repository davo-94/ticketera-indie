import React from 'react';
import { createRoot } from 'react-dom/client';
import { act } from 'react-dom/test-utils';
import RegistrationForm from '../components/auth/RegistrationForm';

describe('RegistrationForm Component', () => {
  let container;
  let root;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
    root = createRoot(container);
  });

  afterEach(() => {
    document.body.removeChild(container);
    container = null;
  });

  it('renderiza los campos y el botón', () => {
    act(() => {
      root.render(<RegistrationForm />);
    });

    const inputs = container.querySelectorAll('input');
    const button = container.querySelector('button');

    expect(inputs.length).toBeGreaterThan(0);
    expect(button).not.toBeNull();
    expect(button.textContent.toLowerCase()).toContain('registr');
  });

  it('ejecuta la función de envío (handleSubmit) al hacer submit', () => {
    act(() => {
      root.render(<RegistrationForm />);
    });

    const form = container.querySelector('form');
    expect(form).not.toBeNull();

    // Creamos un espía sobre addEventListener para verificar que el evento se dispara
    const submitEvent = new Event('submit', { bubbles: true, cancelable: true });
    const preventDefaultSpy = spyOn(submitEvent, 'preventDefault').and.callThrough();

    form.dispatchEvent(submitEvent);

    expect(preventDefaultSpy).toHaveBeenCalled(); // el submit fue interceptado
  });
});
