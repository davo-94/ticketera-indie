import React, { useState } from 'react';

const EventDirectory = ({ onAddToCart }) => {
    // Datos de ejemplo para eventos
    const eventsData = [
        {
            id: 1,
            title: "Taylor Swift - The Eras Tour",
            price: 75000,
            description: "La gira más exitosa de todos los tiempos llega a Argentina. Un viaje musical a través de todas las eras de Taylor Swift.",
            interested: "45.2K",
            image: "https://via.placeholder.com/300x180?text=Taylor+Swift",
            category: "Concierto"
        },
        {
            id: 2,
            title: "Boca vs River - Superclásico",
            price: 45000,
            description: "El partido más importante del fútbol argentino. La Bombonera vibra con el superclásico del fútbol sudamericano.",
            interested: "32.1K",
            image: "https://via.placeholder.com/300x180?text=Boca+vs+River",
            category: "Deporte"
        },
        {
            id: 3,
            title: "Hamlet - Teatro Colón",
            price: 28000,
            description: "La obra maestra de Shakespeare cobra vida en el prestigioso Teatro Colón con un elenco de primer nivel.",
            interested: "3.8K",
            image: "https://via.placeholder.com/300x180?text=Hamlet",
            category: "Teatro"
        },
        {
            id: 4,
            title: "Oppenheimer - IMAX",
            price: 4500,
            description: "La película más aclamada del año en formato IMAX. La historia del padre de la bomba atómica.",
            interested: "12.4K",
            image: "https://via.placeholder.com/300x180?text=Oppenheimer",
            category: "Cine"
        },
        {
            id: 5,
            title: "Luis Miguel - Tour 2025",
            price: 65000,
            description: "El Sol de México regresa con un espectacular show que recorre sus mayores éxitos.",
            interested: "28.9K",
            image: "https://via.placeholder.com/300x180?text=Luis+Miguel",
            category: "Concierto"
        },
        {
            id: 6,
            title: "Festival Lollapalooza 2025",
            price: 85000,
            description: "Tres días de música non-stop con los mejores artistas internacionales y nacionales.",
            interested: "89.3K",
            image: "https://via.placeholder.com/300x180?text=Lollapalooza",
            category: "Festival"
        },
        {
            id: 7,
            title: "Copa Davis - Argentina vs España",
            price: 35000,
            description: "Cuartos de final de la Copa Davis. Argentina busca su segundo título en casa.",
            interested: "15.7K",
            image: "https://via.placeholder.com/300x180?text=Copa+Davis",
            category: "Deporte"
        },
        {
            id: 8,
            title: "Cirque du Soleil - Nuevo Show",
            price: 42000,
            description: "El espectáculo más mágico del mundo presenta su nueva producción llena de acrobacias imposibles.",
            interested: "21.6K",
            image: "https://via.placeholder.com/300x180?text=Cirque+du+Soleil",
            category: "Circo"
        }
    ];

    // Estados para los filtros
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('Todos');
    const [maxPrice, setMaxPrice] = useState('');
    const [sortOrder, setSortOrder] = useState('none');

    // Obtener categorías únicas
    const categories = ['Todos', ...new Set(eventsData.map(event => event.category))];

    // Filtrar eventos basado en todos los criterios
    const filteredEvents = eventsData
        .filter(event =>
            event.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
            (selectedCategory === 'Todos' || event.category === selectedCategory) &&
            (maxPrice === '' || event.price <= parseInt(maxPrice))
        )
        .sort((a, b) => {
            if (sortOrder === 'asc') {
                return a.price - b.price;
            } else if (sortOrder === 'desc') {
                return b.price - a.price;
            }
            return 0;
        });

    // Función para formatear precio
    const formatPrice = (price) => {
        return new Intl.NumberFormat('es-CL', {
            style: 'currency',
            currency: 'CLP',
            maximumFractionDigits: 0
        }).format(price);
    };

    return (
        <div className="container py-4">
            {/* Filtros */}
            <div className="row mb-4">
                {/* Primera fila de filtros */}
                <div className="col-12 col-md-6 mb-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Buscar eventos..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <div className="col-12 col-md-6 mb-3">
                    <select
                        className="form-select"
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                    >
                        {categories.map(category => (
                            <option key={category} value={category}>
                                {category === 'Todos' ? 'Todas las categorías' : category}
                            </option>
                        ))}
                    </select>
                </div>
                {/* Segunda fila de filtros */}
                <div className="col-12 col-md-6 mb-3">
                    <div className="input-group">
                        <span className="input-group-text">Precio máximo $</span>
                        <input
                            type="number"
                            className="form-control"
                            placeholder="Ej: 50000"
                            value={maxPrice}
                            onChange={(e) => setMaxPrice(e.target.value)}
                            min="0"
                            step="1000"
                        />
                    </div>
                </div>
                <div className="col-12 col-md-6 mb-3">
                    <select
                        className="form-select"
                        value={sortOrder}
                        onChange={(e) => setSortOrder(e.target.value)}
                    >
                        <option value="none">Ordenar por precio</option>
                        <option value="asc">Menor a mayor precio</option>
                        <option value="desc">Mayor a menor precio</option>
                    </select>
                </div>
            </div>

            {/* Lista de eventos */}
            <div className="row">
                <div className="col-12">
                    {filteredEvents.length === 0 ? (
                        <div className="alert alert-info text-center">
                            No se encontraron eventos.
                        </div>
                    ) : (
                        <div className="list-group">
                            {filteredEvents.map(event => (
                                <div key={event.id} className="list-group-item">
                                    <div className="row align-items-center">
                                        {/* Imagen del evento */}
                                        <div className="col-12 col-md-3 mb-3 mb-md-0">
                                            <img
                                                src={event.image}
                                                alt={event.title}
                                                className="img-fluid rounded"
                                            />
                                        </div>
                                        {/* Detalles del evento */}
                                        <div className="col-12 col-md-7">
                                            <div className="d-flex justify-content-between align-items-start">
                                                <h5 className="mb-1">{event.title}</h5>
                                                <span className="badge bg-primary rounded-pill">
                                                    {event.category}
                                                </span>
                                            </div>
                                            <p className="mb-1">
                                                <span className="h5 text-success">
                                                    {formatPrice(event.price)}
                                                </span>
                                            </p>
                                            <p className="mb-1 text-muted">
                                                {event.description}
                                            </p>
                                            <small className="text-muted">
                                                <i className="bi bi-people-fill"></i> {event.interested} interesados
                                            </small>
                                        </div>
                                        {/* Botón de compra */}
                                        <div className="col-12 col-md-2 text-end">
                                            {/* Llama a la función onAddToCart con el evento actual al hacer clic */}
                                            <button className="btn btn-primary" onClick={() => onAddToCart(event)}>
                                                Comprar Ticket
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default EventDirectory;