import { useEffect,useContext,useState } from "react";
import {InscriptionContext as InscriptionChoice} from '../utilitaires/InscriptionContext'
import localLogo from '../images/toutpermisLogoVidepng.png'
import volant from '../images/volantLogo.png'
import close from '../images/iconsAwesome/xmark-solid (1).svg'
import superHero from '../images/CODEO_016_002-removebg-preview.png'
import ombreSuperGirl from '../images/Ombrejambe-removebg-preview.png'
import ombreGolgoth from '../images/OmbreIinvsible-removebg-preview.png'
import ombreAgée from '../images/Ombreagée-removebg-preview.png'
import '../css/popupInscription.css'
import SocketIo from 'socket.io-client'
import { Link, Navigate,useNavigate } from 'react-router-dom'

const InProgress=()=>{
    const[Path,setPath]=useState('')
    const[Close,setClose]=useState(false)
    const[FromProfile,setFromProfile]=useState(false)
    const regex=new RegExp('profil*')
    useEffect(()=>{
        setPath(window.location.pathname)
        console.log(Path,"le chemin")
        setFromProfile(regex.test(Path))
        console.log(FromProfile,"le chemin boolean")
    })

    const navigate=useNavigate()

    return(
        
        <div>
            <div className="containerPopup">
                <img src={close} className="closePopup" onClick={()=>{FromProfile===false?navigate("/"):navigate("/profil")}}></img>
                <div className='containerLogoImgFelicitation'>
                    <div className="pictoLogoEspaceProPopup">
                            <img src={localLogo} className='localLogoPictoEspaceProPopup'></img>
                            <img src={volant} className='volantLogoEspaceProPopup'></img>
                    </div>
                    <img src={superHero} className="superHeroPopup"></img>
                    <div className='pFelicitation'>
                        <p className='pColorCanard'>In Progress</p>
                        <p style={{textAlign:"center"}}>Cette fonctionnalité est en cours de développement </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default InProgress