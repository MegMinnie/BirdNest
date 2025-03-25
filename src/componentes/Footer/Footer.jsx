import "./Footer.css";
import PropTypes from "prop-types";

function Footer({ imgRodape }) {
    return (
        <footer className="rodape">
            <img className="imgRodape" src={imgRodape} alt="Logo do rodape" />
            <p className="texto-rodape">&copy; Copyright BirdNest - 2023 </p>
        </footer>
    );
}

Footer.propTypes = {
    imgRodape: PropTypes.string.isRequired,
};

export default Footer;
