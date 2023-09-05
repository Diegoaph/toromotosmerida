import React from "react";

const WhyContent: React.FC<{}> = () => {
    return (
        <div className="WhyToro">
            <div className="WhyItem">
                <h2 className="num">1.</h2>
                <div className="content">
                    <h4>VARIEDAD DE PRODUCTOS</h4>
                    <span className="text">Garantizados y de alta calidad</span>
                </div>
            </div>
            <div className="WhyItem">
                <h2 className="num">2.</h2>
                <div className="content">
                    <h4>FACILIDADES DE PAGO</h4>
                    <span className="text">
                        Pregunta por nuestras promociones
                    </span>
                </div>
            </div>
            <div className="WhyItem">
                <h2 className="num">3.</h2>
                <div className="content">
                    <h4>SERVICIOS POSTVENTA</h4>
                    <span className="text">
                        Servicio tecnico y repuestos originales
                    </span>
                </div>
            </div>
        </div>
    );
};

export default WhyContent;
