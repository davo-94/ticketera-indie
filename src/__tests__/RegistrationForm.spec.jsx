import React from 'react';
import { createRoot } from 'react-dom/client';
import { act } from 'react';
import { MemoryRouter } from 'react-router-dom';
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
    root.unmount();
    document.body.removeChild(container);
    container = null;
  });

  it('renderiza los campos y el botón', () => {
    act(() => {
      root.render(
        <MemoryRouter>
          <RegistrationForm />
        </MemoryRouter>
      );
    });

    const inputs = container.querySelectorAll('input');
    const boton = container.querySelector('button');

    expect(inputs.length).toBeGreaterThan(0);
    expect(boton).not.toBeNull();
  });

  it('ejecuta handleSubmit al hacer submit', () => {
    act(() => {
      root.render(
        <MemoryRouter>
          <RegistrationForm />
        </MemoryRouter>
      );
    });

    const form = container.querySelector('form');
    expect(form).not.toBeNull();

    act(() => {
      form.dispatchEvent(new Event('submit', { bubbles: true }));
    });
  });
});
