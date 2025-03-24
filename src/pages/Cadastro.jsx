import { useNavigate } from "react-router-dom";
import Header from "../componentes/Header/Header";
import logo from "../assets/logo.webp";

const Cadastro = () => {
    const navigate = useNavigate();

    return (
        <div>
            <Header className="header" logo={logo} /> {}
        </div>
    );
};

export default Cadastro;
