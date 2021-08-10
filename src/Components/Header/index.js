import './styles.css'
import { Link } from 'react-router-dom'
import search_icon from '../../Assets/search-icon.svg'
import user_icon from '../../Assets/user-icon.svg'

export default function Header (){
    return(
        <header className="header"> 
            <div className="header_upper">
              <Link to="/"><h1>geeklouco.com</h1></Link>
              <form>
                <input type="text" placeholder="Herói? Vilão? O que você imaginar aqui..."/>
                <button><img src={search_icon} alt="botão de pesquisar"/></button>
              </form>
              <Link className="login" to="/login">
                <button>
                  <h3>Login</h3>
                  <img src={user_icon} alt="user"/>
                </button>
              </Link>
            </div>
            <nav>
              <ul>
                <li><button>Universo Marvel</button></li>
                
                <li><button>Universo DC</button></li>
                
                <li><button>Star Wars</button></li>
                
                <li><button>Vilões</button></li>
              </ul>
            </nav>
          </header>
    )
}