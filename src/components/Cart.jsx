
import React from 'react';

// Función para formatear el precio (puedes moverla a un archivo de utilidades)
const formatPrice = (price) => {
    return new Intl.NumberFormat('es-CL', {
        style: 'currency',
        currency: 'CLP',
        maximumFractionDigits: 0
    }).format(price);
};

const Cart = ({ cartItems, onRemoveFromCart, onCheckout }) => {
    // Calcula el precio total
    const totalPrice = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);

    return (
        <div className="container py-5">
            <h2 className="mb-4">Carrito de Compras</h2>
            {cartItems.length === 0 ? (
                <div className="alert alert-info">
                    Tu carrito está vacío.
                </div>
            ) : (
                <div className="card">
                    <ul className="list-group list-group-flush">
                        {cartItems.map((item) => ( // No necesitamos el 'index' si el 'id' del item es único
                            <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                                <div>
                                    <h6 className="my-0">{item.title}</h6>
                                    {/*  Muestra la cantidad */}
                                    <small className="text-muted">Cantidad: {item.quantity}</small>
                                </div>
                                <div className="d-flex align-items-center">
                                    {/* Muestra el precio total por item (precio * cantidad) */}
                                    <span className="text-muted me-3">{formatPrice(item.price * item.quantity)}</span>
                                    {/*  BOTÓN PARA ELIMINAR */}
                                    <button
                                        className="btn btn-danger btn-sm"
                                        onClick={() => onRemoveFromCart(item.id)}
                                    >
                                        &times; {/* Este es el caracter de la 'X' */}
                                    </button>
                                </div>
                            </li>
                        ))}
                        <li className="list-group-item d-flex justify-content-between">
                            <strong>Total</strong>
                            <strong>{formatPrice(totalPrice)}</strong>
                        </li>
                    </ul>

                    <div className="card-footer text-end">
                        <button
                            className="btn btn-success btn-lg"
                            onClick={onCheckout} // Llama a la función onCheckout
                        >
                            Finalizar Compra
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart;