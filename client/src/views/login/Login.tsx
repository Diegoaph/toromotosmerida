import React from "react";
import "./login.css";

const Login: React.FC<{}> = () => {
    return (
        <form action="login">
            <div className="loginBox">
                <h1 className="title">Panel de administración</h1>
                <input
                    className="input"
                    type="email"
                    placeholder="e-Mail"
                />
                <input
                    className="input"
                    type="password"
                    placeholder="Contraseña"
                />
                <button className="ctaButton">Ingresar</button>
            </div>
        </form>
    );
};

export default Login;
