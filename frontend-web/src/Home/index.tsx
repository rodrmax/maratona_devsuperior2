import './styles.css';
import { ReactComponent as Image } from '../Images/main.svg'
import Footer from '../Footer';


function Home(){
    return(
        <>
        <div className="home-container">
           <div className="home-content">
                <div className="home-actions">
                    <h1 className="home-title">
                        Faça seu pedido <br/> 
                        que entregamos <br/> 
                        para você !!!
                    </h1>
                    <h3 className="home-subtitle">
                        Escolha o seu pedido e em poucos <br />
                        minutos levaremoss na sua porta
                    </h3>
                    <a href="#" className="home-btn-order">
                        Fazer pedido
                    </a>
                </div>
                <div className="home-image">
                    <Image />
                </div>
           </div>
        </div>
        <Footer />
        </>
    )
}

export default Home;