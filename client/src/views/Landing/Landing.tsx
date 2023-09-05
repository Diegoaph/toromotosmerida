import React from "react";
import "./Landing.css";
import Slider from "../../components/Slider/Slider";
import CallToAction from "../../components/CallToAction/CallToAction";
import WhyToro from "../../components/WhyToro/WhyToro";

const Landing: React.FC<{}> = () => {
    return (
        <main>
            <Slider />
            <CallToAction />
            <WhyToro />
        </main>
    );
};

export default Landing;
