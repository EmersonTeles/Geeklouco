import './styles.css'
import img_banner1 from '../../Assets/thumb1.jpg';
import img_banner2 from '../../Assets/thumb2.jpg';
import img_banner3 from '../../Assets/thumb3.jpg';

export default function Banner(){
    return(
        <div className="banner">
            <div className="foto"/>
            <div className="head-line">
                <h1>AQUI VOCÊ ENCONTRA TUDO SOBRE SEUS HERÓIS E VILÕES FAVORITOS!</h1>
            </div>
        </div>
    )
}