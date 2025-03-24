import { useNavigate } from "react-router-dom";
import Header from "../componentes/Header/Header";
import logo from "../assets/logo.webp";

const Login = () => {
    const navigate = useNavigate();

    return (
        <div>
            <Header className="header" logo={logo} /> {}
        </div>
    );
};

export default Login;
