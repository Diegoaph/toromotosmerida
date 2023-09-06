import React from "react";

import "../WhyToro/WhyToro.css";
const TiendaContent: React.FC<{}> = () => {
    return (
        <div className="WhyToro">
            <div className="content">
                <p>
                    -CASCOS
                    <br />
                    <br />
                    -MALETAS Y ALFORJAS
                    <br />
                    <br />
                    -VESTIMENTA CON PROTECCIÓN
                    <br />
                    <br />
                    -ACCESORIOS
                    <br />
                    <br />
                    -CANDADOS Y ALARMAS
                    <br />
                    <br />
                    -PIEZAS ORIGINALES <br />
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

export default TiendaContent;
