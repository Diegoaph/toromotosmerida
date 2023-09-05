import React from "react";
import { useLocation, NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar: React.FC<{}> = () => {
    const location = useLocation();
    const path: string = location.pathname;
    return (
        <nav>
            <div className="logoCont">
                <img
                    src="IMAGOTIPO-HORIZONTAL-TORO-MOTORCYCLES-TRANSPARENTE.png"
                    alt="Toro Motos Mérida"
                />
                <span className="merida">MÉRIDA</span>
            </div>
            <div>
                <button className={path == "/" ? "selected" : "button"}>
                    <NavLink
                        to="/"
                        className={path == "/modelos" ? "selected" : "button"}>
                        INICIO
                    </NavLink>
                </button>
                <button className={path == "/modelos" ? "selected" : "button"}>
                    <NavLink
                        to="/modelos"
                        className={path == "/modelos" ? "selected" : "button"}>
                        MODELOS
                    </NavLink>
                </button>
                <button
                    className={path == "/servicios" ? "selected" : "button"}>
                    <NavLink
                        to="/servicios"
                        className={path == "/modelos" ? "selected" : "button"}>
                        SERVICIOS
                    </NavLink>
                </button>
                <button className={path == "/tienda" ? "selected" : "button"}>
                    <NavLink
                        to="/tienda"
                        className={path == "/modelos" ? "selected" : "button"}>
                        TIENDA
                    </NavLink>
                </button>
            </div>

            <button className="social">X</button>
        </nav>
    );
};

export default Navbar;
