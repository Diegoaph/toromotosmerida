import { Routes, Route, useLocation } from "react-router-dom";
import axios from "axios";
import NavBar from "./components/NavBar/Navbar";
import Landing from "./views/Landing/Landing";
import Login from "./views/login/Admin";
import Footer from "./components/Footer/Footer";
import Tienda from "./views/Tienda/Tienda";
import Servicios from "./views/Servicios/Servicios";

import Panel from "./views/Panel/Panel";

axios.defaults.baseURL = "http://localhost:3001";

function App() {
    const location = useLocation();
    const path: string = location.pathname;
    console.log(path);
    return (
        <main>
            <NavBar />
            <Routes>
                <Route
                    path="/"
                    element={<Landing />}
                />
                <Route
                    path="/tienda"
                    element={<Tienda />}
                />
                <Route
                    path="/servicios"
                    element={<Servicios />}
                />
                <Route
                    path="/admin"
                    element={<Login />}
                />
                <Route
                    path="/admin/panel"
                    element={<Panel />}
                />
            </Routes>
            <Footer />
        </main>
    );
}
export default App;

// export default function Main() {
//     return (
//         <Router>
//             <App />
//         </Router>
//     );
// }
