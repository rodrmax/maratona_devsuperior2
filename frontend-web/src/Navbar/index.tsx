import './styles.css';
import { ReactComponent as Motoca} from '../Images/motoca.svg'

function Navbar(){
    return(
        <nav className="main-navbar">
            <Motoca />
            <a href="#" className="logo-text">Fast Delivery</a>
        </nav>
    )
}

export default Navbar;