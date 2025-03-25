import "./Header.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
function Header({ logo }) {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();

    const toSobre = () => {
        navigate("/sobre");
    };

    const toLogin = () => {
        navigate("/login");
    };

    const toCadastro = () => {
        navigate("/cadastre-se");
    };
    return (
        <>
            <header className="header">
                <img className="logo" src={logo} alt="Logo" />
                <button
                    onClick={() => setOpen(true)}
                    className="botao-abrir-menu"
                >
                    <i className="bi bi-list"></i>
                </button>

                {open && (
                    <div className="menu">
                        <div className="container">
                            <nav className="teste">
                                <a href="#" className="">
                                    Home
                                </a>
                                <a onClick={toSobre} className="">
                                    {" "}
                                    {}
                                    Sobre
                                </a>

                                <a onClick={toLogin} className="">
                                    Faça seu Login
                                </a>

                                <a onClick={toCadastro} className="">
                                    Cadastre-se
                                </a>
                            </nav>
                            <button
                                onClick={() => setOpen(false)}
                                className="botao-fechar-menu"
                            >
                                <i className="bi bi-x"></i> {}
                            </button>
                        </div>
                    </div>
                )}
            </header>
        </>
    );
}

Header.propTypes = {
    logo: PropTypes.string.isRequired,
};
export default Header;
