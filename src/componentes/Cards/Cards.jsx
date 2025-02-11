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
  return (
    <>
      <div className="Cards">
        <div className="fanfic">
          <img className="livro" src={livro} alt="História: Olhos de oceano" />
          <div className="quadro">
            <h3 className="tituloPrincipal">{tituloPrincipal}</h3>

            <p className="assunto">{assunto}</p>

            <div className="generos">
              <button className="idadeBotao">{idadeBotao}</button>
              {}
              <ul>
                {["ANIME", "ROMANCE", "FANTASIA"].map((tag, index) => (
                  <li key={index}>{tag}</li>
                ))}
              </ul>
            </div>

            <div className="icones">
              <div className="sobre-usuario">
                <img className="autor" src={autor} alt="Foto do usuário" />
                <span className="nomeUsuario">{nomeUsuario}</span>
              </div>
              <div className="botoes-interacao">
                <i className="bi bi-heart"></i>
                <i className="bi bi-share-fill"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
