import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import ListaNotas from "./pages/ListaNotas.jsx";
import RegistroNotas from "./pages/RegistroNotas.jsx";
import MasInfo from "./pages/MasInfo.jsx";

function App() {
    const [estudiantes, setEstudiantes] = useState([]);

    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/nota" element={<RegistroNotas estudiantes={estudiantes} setEstudiantes={setEstudiantes} />} />
                <Route path="/lista" element={<ListaNotas estudiantes={estudiantes} setEstudiantes={setEstudiantes} />} />
                <Route path="/masinfo"element={<MasInfo/>}/>
            </Routes>
        </BrowserRouter>
    )
}
export default App
