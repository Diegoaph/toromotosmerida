import React from "react";

import "../WhyToro/WhyToro.css";
const ServiciosContent: React.FC<{}> = () => {
    return (
        <div className="WhyToro">
            <div className="content">
                <p>
                    -SERVICIO GENERAL
                    <br />
                    <br />
                    -CHEQUEO POR GARANTÍA
                    <br />
                    <br />
                    -CAMBIO DE ACEITE Y FILTRO
                    <br />
                    <br />
                    -TENSIÓN Y LUBRICADO DE CADENA
                    <br />
                    <br />
                    -ELECTRICISTA ESPECIALIZADO <br />
                    <br />
                </p>
            </div>

            <img
                src="leon180.png"
                alt="leon"
                className="image"
            />
        </div>
    );
};

export default ServiciosContent;
