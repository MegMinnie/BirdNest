import { useState } from "react";
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
  const [imgCapa, setImgCapa] = useState(livro); // Usando estado para controlar a imagem da capa

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
              {tags.map((tag, index) => (
                <li key={index}>{tag}</li>
              ))}
            </ul>
          </div>
          <div className="icones">
            <div className="sobre-usuario">
              <img className="autor" src={autor} alt="Foto do autor" />
              <span className="nomeUsuario">{nomeUsuario}</span>
            </div>
            <div className="botoes-interacao">
              <i
                className={`bi bi-heart${curtido ? "-fill" : ""}`}
                onClick={toggleCurtida}
                style={{ color: curtido ? "red" : "black", cursor: "pointer" }}
              ></i>
              <i
                className={`bi bi-share${compartilhado ? "-fill" : ""}`}
                onClick={toggleCompartilhamento}
                style={{
                  color: compartilhado ? "blue" : "black",
                  cursor: "pointer",
                }}
              ></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
