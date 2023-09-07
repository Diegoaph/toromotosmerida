import React from "react";
import "./Footer.css";
import { NavLink } from "react-router-dom";
const Footer: React.FC<{}> = () => {
    return (
        <footer>
            <div>
                Avenida ejemplo con calle cualquiera, Mérida
                <br />
                <br /> Avenida ejemplo con calle cualquiera, Egido
            </div>
            <div>
                Escríbenos <br />
                <br /> Merida@Toromotos.com
            </div>

            <div>
                Teléfono <br />
                <br /> 0424-789-456
            </div>
            <div>
                Trabaja en
                <br />
                <br />
                TORO
            </div>
            <NavLink
                className="button"
                to="/admin">
                admin
            </NavLink>
        </footer>
    );
};

export default Footer;
