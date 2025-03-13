import "./App.css";
import Header from "./componentes/Header/Header";
import Cards from "./componentes/Cards/Cards";
import Footer from "./componentes/Footer/Footer";
import logo from "./assets/logo.webp";
import corvo from "./assets/corvo.jpg";
import tela from "./assets/tela.jpg";
import livro2 from "./assets/olhosOcean.jpg";
import usuario2 from "./assets/oliver.jpeg";
import usuario1 from "./assets/mari.png";
import livro1 from "./assets/verdadesOcultas.jpg";
import livro3 from "./assets/homemPerfeito.jpg";
import usuario3 from "./assets/fada.jpeg";
import livro4 from "./assets/ateFim.jpg";
import usuario4 from "./assets/duende.jpeg";
import livro5 from "./assets/mundoKira.jpg";
import usuario5 from "./assets/andreyGrau.jpeg";
import livro6 from "./assets/VerdadeMissipi.jpg";
import usuario6 from "./assets/corvoNegro.jpeg";
import imgRodape from "./assets/imgRodape .png";

function App() {
  return (
    <>
      <div className="cabecalho" style={{ backgroundImage: `url(${corvo})` }}>
        <Header className="header" logo={logo} />
        <section className="apresentacao">
          <h1 className="tituloPrincipal">BirdNest</h1>
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
        <section className="meusCards">
          <Cards
            livro={livro1}
            tituloPrincipal="Verdades Ocultas"
            assunto="Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has survived not only five centuries, but also the leap into electronic typesetting, remaining unchanged. At vero eos et accusamus."
            idadeBotao="16+"
            tags={["SUSPENSE", "HISTÓRIAS ORIGINAIS", "MISTÉRIO", "TERROR"]}
            autor={usuario1}
            nomeUsuario="Mari Guerra"
          />

          <Cards
            livro={livro2}
            tituloPrincipal="Olhos de Oceano (Levi Ackerman)"
            assunto="Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has survived not only five centuries, but also the leap into electronic typesetting, remaining unchanged. At vero eos et accusamus."
            idadeBotao="12+"
            tags={["ROMANCE", "FANTASIA", "ATTACK ON TITAN", "ANIME"]}
            autor={usuario2}
            nomeUsuario="Mr. Oliver"
          />

          <Cards
            livro={livro3}
            tituloPrincipal="A procura do Homem Perfeito"
            assunto="Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has survived not only five centuries, but also the leap into electronic typesetting, remaining unchanged. At vero eos et accusamus."
            idadeBotao="18+"
            tags={[
              "SUSPENSE",
              "FICÇÃO POLICIAL",
              "MISTÉRIO",
              "HISTÓRIAS ORIGINAIS",
            ]}
            autor={usuario3}
            nomeUsuario="Fada Gótica"
          />

          <Cards
            livro={livro4}
            tituloPrincipal="Até o fim"
            assunto="Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has survived not only five centuries, but also the leap into electronic typesetting, remaining unchanged. At vero eos et accusamus."
            idadeBotao="10+"
            tags={[
              "FANTASIA",
              "ROMANCE",
              "HISTÓRIAS ORIGINAIS",
              "FOLCLORE JAPONÊS",
            ]}
            autor={usuario4}
            nomeUsuario="Duende Verde"
          />

          <Cards
            livro={livro5}
            tituloPrincipal="O mundo de Kira (Death note)"
            assunto="Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has survived not only five centuries, but also the leap into electronic typesetting, remaining unchanged. At vero eos et accusamus."
            idadeBotao="12+"
            tags={["ANIME", "FICÇÃO", "DEATH NOTE", "SUSPENSE"]}
            autor={usuario5}
            nomeUsuario="Andrey do grau"
          />

          <Cards
            livro={livro6}
            tituloPrincipal="A verdade Sobre Missisipi"
            assunto="Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has survived not only five centuries, but also the leap into electronic typesetting, remaining unchanged. At vero eos et accusamus."
            idadeBotao="16+"
            tags={["SUSPENSE", "TERROR", "MISTÉRIO", "HISTÓRIAS ORIGINAIS"]}
            autor={usuario6}
            nomeUsuario="Corvo Negro"
          />
        </section>
      </main>
      <Footer className="rodape" imgRodape={imgRodape} />
    </>
  );
}

export default App;
