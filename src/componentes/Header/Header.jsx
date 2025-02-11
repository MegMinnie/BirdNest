import "./Header.css";
import { useState } from "react";

function Header({ logo }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="header">
        <img className="logo" src={logo} alt="Logo" />
        <button onClick={() => setOpen(true)} className="botao-abrir-menu">
          <i class="bi bi-list"></i>
        </button>

        {open && (
          <div className="menu">
            <div className="container">
              <nav className="teste">
                <a href="#" className="">
                  Home
                </a>
                <a href="#" className="">
                  Sobre
                </a>

                <a href="#" className="">
                  Contato
                </a>

                <a href="#" className="">
                  Faça seu Login
                </a>

                <a href="#" className="">
                  Cadastre-se
                </a>
              </nav>
              <button
                onClick={() => setOpen(false)}
                className="botao-fechar-menu"
              >
                <i class="bi bi-x"></i>
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}

export default Header;
