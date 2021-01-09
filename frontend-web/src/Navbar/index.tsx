import './styles.css';
import { ReactComponent as Motoca} from '../Images/motoca.svg'
import { Link } from 'react-router-dom';

function Navbar(){
    return(
        <nav className="main-navbar">
            <Motoca />
            <Link to="/" className="logo-text">Fast Delivery</Link>
        </nav>
    )
}

export default Navbar;