import './styles.css'
import img_banner1 from '../../Assets/thumb1.jpg';

export default function Banner(){
    return(
        <div className="banner">
            <div className="carousel">
                <img className="foto" src={img_banner1} alt="Capa do Flash"/>x
            </div>
            <div className="head-line">
                <h1>AQUI VOCÊ ENCONTRA TUDO SOBRE SEUS HERÓIS E VILÕES FAVORITOS!</h1>
            </div>
        </div>
    )
}