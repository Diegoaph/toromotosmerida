import React from "react";

import "../WhyToro/WhyToro.css";
const TiendaContent: React.FC<{}> = () => {
    return (
        <div className="WhyToro">
            <div className="WhyItem">
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

            <div className="WhyItem">
                <img
                    src="leon180.png"
                    alt="leon"
                    className="image"
                />
            </div>
        </div>
    );
};

export default TiendaContent;
