import React from 'react';
import { createRoot } from 'react-dom/client';
import { act } from 'react-dom/test-utils';
import { MemoryRouter } from 'react-router-dom';
import Home from '../components/common/Home';

describe('Home Component', () => {
  it('renderiza el título y texto descriptivo', () => {
    const container = document.createElement('div');
    document.body.appendChild(container);

    act(() => {
      const root = createRoot(container);
      root.render(
        <MemoryRouter>
          <Home />
        </MemoryRouter>
      );
    });

    const h1 = container.querySelector('h1');
    const p = container.querySelector('p');

    expect(h1).not.toBeNull();
    expect(p).not.toBeNull();
    expect(h1.textContent).toContain('Ticketera');
    expect(p.textContent).toContain('eventos independientes');
  });
});
