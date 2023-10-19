import React, { useState } from "react";
import * as API from './servicios/servicios';
import { Form, Button } from 'react-bootstrap';
import './LoginForm.css';

export function Login() {
    const [email, setEmail] = useState('');
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [sesion, setSesion] = useState('');
    const [MensajeError, setMensajeError] = useState('');
    const [loginSuccessMessage, setLoginSuccessMessage] = useState('');

    const send_form = async (event) => {
        event.preventDefault();
        const data = await API.Login({ email, user, password });

        if (data.usuario) {
            setLoginSuccessMessage('¡Inicio de sesión exitoso!');
            window.localStorage.setItem('saveUsuario', JSON.stringify(data.usuario));
            window.localStorage.setItem('token', JSON.stringify(data.token));
            setSesion(sesion);
            setEmail('');
            setUser('');
            setPassword('');
            window.location.reload(true);
        } else {
            setMensajeError(data.mensaje);
            setTimeout(() => {
                setMensajeError('');
            }, 4000);
        }
    }

    return (
        <>
            {MensajeError ? (
                <div className="alert alert-warning" role="alert">
                    {MensajeError}
                </div>
            ) : ('')}
            {loginSuccessMessage ? (
                <div className="alert alert-success" role="alert">
                    {loginSuccessMessage}
                </div>
            ) : ('')}
            <div className="login-page">
                <div className="login-form-container">
                    <h1 className="titulito">¡Bienvenido!</h1>
                    <Form onSubmit={send_form}>
                        <Form.Group controlId="formBasicEmail" className="form-group-small">
                            <Form.Label className="my-label">Email</Form.Label>
                            <Form.Control type="text" placeholder="" value={email} onChange={(event) => setEmail(event.target.value)} />
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail" className="form-group-small">
                            <Form.Label className="my-label">Nombre de Usuario</Form.Label>
                            <Form.Control type="text" placeholder="" value={user} onChange={(event) => setUser(event.target.value)} />
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword" className="form-group-small">
                            <Form.Label className="my-label">Contraseña</Form.Label>
                            <Form.Control type="password" placeholder="" value={password} onChange={(event) => setPassword(event.target.value)} />
                        </Form.Group>
                        <Form.Group className="form-group-center">
                            <Button variant="primary" type="submit">
                                Iniciar Sesión
                            </Button>
                        </Form.Group>
                    </Form>
                </div>
            </div>
        </>
    )
}
