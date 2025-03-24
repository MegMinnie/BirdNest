import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicial from "./pages/Inicial";
import Sobre from "./pages/Sobre";
import "./App.css";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Inicial />} />
                    <Route path="/Sobre" element={<Sobre />} />
                    <Route path="/Login" element={<Login />} />
                    <Route path="/Cadastro" element={<Cadastro />} />
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default App;
