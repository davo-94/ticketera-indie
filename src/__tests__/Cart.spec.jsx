// Importaciones
import React from 'react';
import { act } from 'react';
import { createRoot } from 'react-dom/client';
import Cart from '../components/common/Cart';

describe('Cart Component', () => {
  let container;
  let root;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
    root = createRoot(container);
  });

  afterEach(() => {
    act(() => {
      root.unmount();
    });
    document.body.removeChild(container);
    container = null;
  });

  // ... (las pruebas de renderizado y cálculo de total no cambian) ...

  it('debe mostrar un mensaje cuando el carrito está vacío', () => {
    act(() => {
      root.render(<Cart cartItems={[]} />);
    });
    const emptyCartMessage = container.querySelector('.alert.alert-info');
    expect(emptyCartMessage).not.toBeNull();
    expect(emptyCartMessage.textContent).toContain('Tu carrito está vacío.');
  });

  it('debe llamar a la función onRemoveFromCart con el ID correcto', () => {
    // ¡CORRECCIÓN: Volvemos a usar jasmine.createSpy()!
    const mockRemoveFunction = jasmine.createSpy('onRemoveFromCart');
    const mockItems = [
      { id: 123, title: 'Item a Eliminar', price: 100, quantity: 1, image: 'item.jpg' }
    ];
    act(() => {
      root.render(<Cart cartItems={mockItems} onRemoveFromCart={mockRemoveFunction} />);
    });
    const removeButton = container.querySelector('.btn-danger');
    act(() => {
      removeButton.click();
    });
    expect(mockRemoveFunction).toHaveBeenCalledWith(123);
  });

  it('debe llamar a la función onCheckout al hacer clic en "Finalizar Compra"', () => {
    const mockCheckoutFunction = jasmine.createSpy('onCheckout');
    const mockItems = [{ id: 1, title: 'Test', price: 100, quantity: 1, image: 'test.jpg' }];
    act(() => {
      root.render(<Cart cartItems={mockItems} onCheckout={mockCheckoutFunction} />);
    });
    const checkoutButton = container.querySelector('.btn-success');
    act(() => {
      checkoutButton.click();
    });
    expect(mockCheckoutFunction).toHaveBeenCalled();
  });
});