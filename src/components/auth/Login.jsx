
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Login = ({ onLogin }) => {
    const [formData, setFormData] = useState({ rut: '', password: '' });
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: null }));
        }
    };

    const validateForm = () => {
        let newErrors = {};
        const rutRegex = /^\d{1,2}\.\d{3}\.\d{3}[-][0-9kK]{1}$/;

        if (!formData.rut.trim()) {
            newErrors.rut = 'El RUT es obligatorio.';
        } else if (!rutRegex.test(formData.rut.trim())) {
            newErrors.rut = 'Formato de RUT inválido (ej: 12.345.678-9).';
        }

        if (!formData.password.trim()) {
            newErrors.password = 'La contraseña es obligatoria.';

        } else if (formData.password.length < 6) {
            newErrors.password = 'La contraseña debe tener al menos 6 caracteres.';
        }


        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            console.log('Login simulado exitoso con:', formData);
            onLogin(); // Llama a la función de App.jsx para cambiar el estado global
            Swal.fire({
                icon: 'success',
                title: '¡Ingreso Exitoso!',
                timer: 1500,
                showConfirmButton: false
            }).then(() => {
                navigate('/');
            });
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Error de Validación',
                text: 'Por favor, revisa los campos.'
            });
        }
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card shadow-sm p-4">
                        <h2 className="text-center mb-4">Iniciar Sesión</h2>
                        <form onSubmit={handleSubmit} noValidate>
                            <div className="mb-3">
                                <label htmlFor="rut" className="form-label">RUT</label>
                                <input
                                    type="text"
                                    className={`form-control ${errors.rut ? 'is-invalid' : ''}`}
                                    id="rut"
                                    name="rut"
                                    placeholder="12.345.678-9"
                                    value={formData.rut}
                                    onChange={handleChange}
                                />
                                {errors.rut && <div className="invalid-feedback">{errors.rut}</div>}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">Contraseña</label>
                                <input
                                    type="password"
                                    className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                                    id="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                />
                                {errors.password && <div className="invalid-feedback">{errors.password}</div>}
                            </div>
                            <div className="d-grid gap-2">
                                <button type="submit" className="btn btn-primary">Ingresar</button>
                                <Link to="/registro" className="btn btn-outline-secondary">
                                    ¿No tienes cuenta? Regístrate
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Login;