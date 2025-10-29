import React from 'react';
import { createRoot } from 'react-dom/client';
import { act } from 'react';
import Cart from '../components/Cart'; 

describe('Cart Component', () => {
  let container;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    document.body.removeChild(container);
    container = null;
  });

  const renderCart = (items = []) => {
    act(() => {
      createRoot(container).render(<Cart items={items} />);
    });
  };

  // PRUEBA 1: Renderizado sin productos
  it('muestra mensaje cuando el carrito está vacío', () => {
    renderCart([]);
    const mensaje = container.querySelector('p')?.textContent || '';
    expect(mensaje.toLowerCase()).toContain('carrito vacío');
  });

  // PRUEBA 2: Renderizado con productos
  it('muestra los productos cuando existen items', () => {
    const mockItems = [
      { id: 1, nombre: 'Entrada Festival Indie', precio: 10000 },
      { id: 2, nombre: 'Concierto de Jazz', precio: 8000 }
    ];
    renderCart(mockItems);

    const filas = container.querySelectorAll('tr');
    expect(filas.length).toBeGreaterThan(1); // 1 de header + productos
    const textoTabla = container.textContent;
    expect(textoTabla).toContain('Entrada Festival Indie');
    expect(textoTabla).toContain('Concierto de Jazz');
  });

  // PRUEBA 3: Cálculo del total
  it('calcula correctamente el total de precios', () => {
    const mockItems = [
      { id: 1, nombre: 'Entrada Festival Indie', precio: 10000 },
      { id: 2, nombre: 'Concierto de Jazz', precio: 8000 }
    ];
    renderCart(mockItems);

    const totalEl = container.querySelector('.cart-total');
    expect(totalEl).not.toBeNull();
    expect(totalEl.textContent).toMatch(/18000/);
  });

  // PRUEBA 4: Botón para vaciar el carrito
  it('llama a la función de limpiar cuando se hace click en el botón "Vaciar"', () => {
    const mockVaciar = jasmine.createSpy('vaciarCarrito');
    const mockItems = [{ id: 1, nombre: 'Test', precio: 1000 }];
    
    act(() => {
      createRoot(container).render(
        <Cart items={mockItems} vaciarCarrito={mockVaciar} />
      );
    });

    const boton = container.querySelector('button');
    boton && boton.click();
    expect(mockVaciar).toHaveBeenCalled();
  });
});
