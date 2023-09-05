import React from "react";
import { useLocation } from "react-router-dom";

import "./WhyToro.css";
import WhyContent from "../VariableContent/WhyContent";
import TiendaContent from "../VariableContent/TiendaContent";
import ServiciosContent from "../VariableContent/ServiciosContent";
const WhyToro: React.FC<{}> = () => {
    const location = useLocation();
    const path: string = location.pathname;

    let title: string = "";

    if (path === "/") {
        title = "¿POR QUE ELEGIR TORO?";
    } else if (path === "/servicios") {
        title = "SERVICIO TÉCNICO ESPECIALIZADO";
    } else if (path === "/tienda") {
        title = "ACCESORIOS Y REPUESTOS";
    }

    return (
        <div className="container">
            <div className="WhyToroOuter">
                <h3>{title}</h3>
            </div>
            <div>
                {path == "/" ? (
                    <WhyContent />
                ) : path == "/tienda" ? (
                    <TiendaContent />
                ) : path == "/servicios" ? (
                    <ServiciosContent />
                ) : (
                    <br />
                )}
            </div>
        </div>
    );
};

export default WhyToro;
