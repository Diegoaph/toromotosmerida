import React, { useState, ChangeEvent, FormEvent } from "react";
import "./Admin.css";
import { auth } from "../../firebase/Firebase.config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { validation } from "./Validation";
import { useNavigate } from "react-router-dom";

const Admin: React.FC<{}> = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        emailAddress: "",
        password: "",
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();
        const { emailAddress, password } = formData;
        const validationErrors = validation(formData);

        if (Object.keys(validationErrors).length === 0) {
            try {
                await signInWithEmailAndPassword(auth, emailAddress, password);

                setFormData({
                    emailAddress: "",
                    password: "",
                });

                setTimeout(() => {
                    navigate("/admin/panel");
                }, 1000);
            } catch (error) {
                console.error("Sign in Failed:", error);
            }
        }
    };

    return (
        <form
            action="login"
            onSubmit={handleSubmit}>
            <div className="loginBox">
                <h1 className="title">Panel de administración</h1>
                <input
                    className="input"
                    type="email"
                    placeholder="e-Mail"
                    name="emailAddress"
                    value={formData.emailAddress}
                    onChange={handleChange}
                />
                <input
                    className="input"
                    type="password"
                    placeholder="Contraseña"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                />
                <button className="ctaButton">Ingresar</button>
            </div>
        </form>
    );
};

export default Admin;
