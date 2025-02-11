import "./Footer.css";

function Footer({ imgRodape }) {
  return (
    <footer className="rodape">
      <img className="imgRodape" src={imgRodape} alt="Logo do rodape" />
      <p className="texto-rodape">&copy; Copyright BirdNest - 2023 </p>
    </footer>
  );
}

export default Footer;
