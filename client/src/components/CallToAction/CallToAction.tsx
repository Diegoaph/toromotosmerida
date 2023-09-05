import React from "react";
import { useLocation } from "react-router-dom";

import "./CallToAction.css";

const CallToAction: React.FC<{}> = () => {
    const location = useLocation();
    const path: string = location.pathname;

    let message: string = "";
    let buttonText: string = "";
    let atentionMessage: string = "";

    if (path === "/") {
        atentionMessage = "ADQUIERE TU TORO";
        message = "Pregúntanos por disponibilidad y precios";
        buttonText = "CONTÁCTANOS";
    } else if (path === "/servicios") {
        atentionMessage = "¿TIENES PREGUNTAS?";
        message = "Cotiza tu servicio HOY!";
        buttonText = "ESCRÍBENOS";
    } else if (path === "/tienda") {
        atentionMessage = "¿TIENES PREGUNTAS?";
        message = "Consulta por lo que buscas";
        buttonText = "ESCRÍBENOS";
    }

    return (
        <div className="cta">
            <div className="atention">
                <h3>{atentionMessage}</h3>
            </div>
            <div className="text">
                <span className="textMessage">{message}</span>
            </div>
            <div>
                <a
                    href="https://wa.me/573023449160"
                    className="ctaButton">
                    {buttonText}
                </a>
            </div>
        </div>
    );
};

export default CallToAction;
