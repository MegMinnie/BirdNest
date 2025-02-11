import "./App.css";
import Header from "./componentes/Header/Header";
import Cards from "./componentes/Cards/Cards";
import Footer from "./componentes/Footer/Footer";
import logo from "./assets/logo.webp";
import corvo from "./assets/corvo.jpg";
import tela from "./assets/tela.jpg";
import olhosOcean from "./assets/olhosOcean.jpg";
import oliver from "./assets/oliver.jpeg";
import mari from "./assets/mari.png";
import verdadesOcultas from "./assets/verdadesOcultas.jpg";

function App() {
  return (
    <>
      <div className="cabecalho" style={{ backgroundImage: `url(${corvo})` }}>
        <Header className="header" logo={logo} />
        <section className="apresentacao">
          <h1>BirdNest</h1>
          <p>
            O BirdNest é um espaço para escrever seu livro, seja no formato de
            Histórias Originais ou de Fanfics, além de permitir acessar outras
            narrativas.
          </p>
          <button className="botao-cadastrar">CADASTRE-SE JÁ GRÁTIS!</button>
        </section>
      </div>
      <main className="principal">
        <section className="categorias">
          <a className="links" href="">
            Animes / Mangás
          </a>
          <a className="links" href="">
            Bandas / Músicos
          </a>
          <a className="links" href="">
            Celebridades
          </a>
          <a className="links" href="">
            Cartoons
          </a>
          <a className="links" href="">
            Filmes
          </a>
          <a className="links" href="">
            Histórias Originais
          </a>
          <a className="links" href="">
            Jogos
          </a>
          <a className="links" href="">
            Livros
          </a>
          <a className="links" href="">
            Mitologias/ Lendas
          </a>
          <a className="links" href="">
            Poesia
          </a>
          <a className="links" href="">
            Quadrinhos
          </a>
          <a className="links" href="">
            Seriados / Novelas / Doramas
          </a>
        </section>
        <section className="capa" style={{ backgroundImage: `url(${tela})` }}>
          <h1>Dê asas a sua imaginação</h1>
          <p>
            Encontre histórias de diversos gêneros, troque ideias, faça
            amigos,personalize seu perfil e compartilhe com o mundo sua
            criatividade!
          </p>
        </section>

        <Cards
          livro={verdadesOcultas}
          tituloPrincipal="Verdades Ocultas"
          assunto="Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has survived not only five centuries, but also the leap into electronic typesetting, remaining e unchanged.At vero eos et accusamus um deleniti atque."
          idadeBotao="+16"
          autor={mari}
          nomeUsuario="Mari Guerra"
        />

        <Cards
          livro={olhosOcean}
          tituloPrincipal="Olhos de Oceano (Levi Ackerman"
          assunto="Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has survived not only five centuries, but also the leap into electronic typesetting, remaining e unchanged.At vero eos et accusamus um deleniti atque."
          idadeBotao="+16"
          autor={oliver}
          nomeUsuario="Mr. Oliver"
        />
      </main>
      <Footer />
    </>
  );
}

export default App;
