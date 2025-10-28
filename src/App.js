import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Swal from 'sweetalert2';
import EventDirectory from './components/EventDirectory';
import Home from './components/Home';
import Navigation from './components/Navigation';
import RegistrationForm from './components/RegistrationForm.jsx';
import Cart from './components/Cart';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const handleAddToCart = (eventToAdd) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === eventToAdd.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === eventToAdd.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevItems, { ...eventToAdd, quantity: 1 }];
      }
    });
    console.log("Evento añadido/actualizado en el carrito:", eventToAdd.title);
  };

  // FUNCIÓN PARA ELIMINAR ITEMS CON CONFIRMACIÓN DE SWEETALERT2
  const handleRemoveFromCart = (eventIdToRemove) => {
    Swal.fire({
      title: '¿Estás seguro?',
      text: "El evento se eliminará de tu carrito.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Sí, ¡eliminar!',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      // Si el usuario confirma la acción
      if (result.isConfirmed) {
        setCartItems(prevItems =>
          prevItems.filter(item => item.id !== eventIdToRemove)
        );
        // Pequeña notificación de éxito
        Swal.fire(
          '¡Eliminado!',
          'El evento ha sido eliminado.',
          'success'
        )
        console.log("Evento eliminado del carrito, ID:", eventIdToRemove);
      }
    });
  };

  // FINALIZAR COMPRA
  const handleCheckout = () => {
    Swal.fire({
      title: '¿Confirmar compra?',
      text: `Estás a punto de finalizar la compra de ${cartItems.reduce((total, item) => total + item.quantity, 0)} tickets por un total de ${new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP', maximumFractionDigits: 0 }).format(cartItems.reduce((total, item) => total + (item.price * item.quantity), 0))}.`,
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#28a745',
      cancelButtonColor: '#dc3545',
      confirmButtonText: 'Sí, ¡finalizar compra!',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        // ✅ Vaciar el carrito
        setCartItems([]);
        // ✅ Mostrar mensaje de éxito
        Swal.fire(
          '¡Compra Exitosa!',
          'Tus tickets han sido comprados. ¡Disfruta el evento!',
          'success'
        );
        console.log("Compra finalizada con éxito.");
      }
    });
  };
  return (
    <Router>
      <div className="Ticketera">
        <Navigation cartItemCount={cartItems.length} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/eventos" element={<EventDirectory onAddToCart={handleAddToCart} />} />
          <Route path="/registro" element={<RegistrationForm />} />
          <Route path="/carrito" element={<Cart cartItems={cartItems}
            onRemoveFromCart={handleRemoveFromCart} onCheckout={handleCheckout} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;