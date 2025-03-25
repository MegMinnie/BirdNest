import { useState } from "react";
import PropTypes from "prop-types";
import "./Cards.css";

function Cards({
    livro,
    tituloPrincipal,
    assunto,
    idadeBotao,
    tags,
    autor,
    nomeUsuario,
}) {
    const [curtido, setCurtido] = useState(false);
    const [compartilhado, setCompartilhado] = useState(false);
    const [imgCapa] = useState(livro);

    const toggleCurtida = () => {
        setCurtido(!curtido);
    };

    const toggleCompartilhamento = () => {
        setCompartilhado(!compartilhado);
    };

    return (
        <div className="Cards">
            <div className="fanfic">
                <img className="livro" src={imgCapa} alt={tituloPrincipal} />
                <div className="quadro">
                    <h3 className="tituloPrincipal">{tituloPrincipal}</h3>
                    <p className="assunto">{assunto}</p>
                    <div className="generos">
                        <button className="idadeBotao">{idadeBotao}</button>
                        <ul>
                            {tags.map((tag) => (
                                <li key={tag}>{tag}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="icones">
                        <div className="sobre-usuario">
                            <img
                                className="autor"
                                src={autor}
                                alt="Foto do autor"
                            />
                            <span className="nomeUsuario">{nomeUsuario}</span>
                        </div>
                        <div className="botoes-interacao">
                            <i
                                className={`bi bi-heart${
                                    curtido ? "-fill" : ""
                                }`}
                                onClick={toggleCurtida}
                                style={{
                                    color: curtido ? "red" : "black",
                                    cursor: "pointer",
                                }}
                                aria-label="Curtir"
                            ></i>
                            <i
                                className={`bi bi-share${
                                    compartilhado ? "-fill" : ""
                                }`}
                                onClick={toggleCompartilhamento}
                                style={{
                                    color: compartilhado ? "blue" : "black",
                                    cursor: "pointer",
                                }}
                                aria-label="Compartilhar"
                            ></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

Cards.propTypes = {
    livro: PropTypes.string.isRequired,
    tituloPrincipal: PropTypes.string.isRequired,
    assunto: PropTypes.string.isRequired,
    idadeBotao: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    autor: PropTypes.string.isRequired,
    nomeUsuario: PropTypes.string.isRequired,
};

export default Cards;
