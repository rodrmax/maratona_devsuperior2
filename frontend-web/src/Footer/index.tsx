import './styles.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

function Footer(){
    return(
        <footer className="main-footer">
            <span>CopyRight - App desenvolvido durante a 2ª ed. do evento Semana DevSuperior - Fast Delivery</span>
            <div className="footer-icons">
                <a href='#foo' target="_new">
                    <FontAwesomeIcon icon={faInstagram} color="white" size="2x" />
                </a>
                <a href='#foo' target="_new">
                    <FontAwesomeIcon icon={faYoutube} color="white" size="2x" />
                </a>
                <a href='#foo' target="_new">
                    <FontAwesomeIcon icon={faLinkedinIn} color="white" size="2x" />
                </a>
            </div>
        </footer>
    )
}

export default Footer;