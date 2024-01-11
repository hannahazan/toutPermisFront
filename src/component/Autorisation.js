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
import '../css/Fiche.css'
import SocketIo from 'socket.io-client'
import { Link, Navigate,useNavigate } from 'react-router-dom'

const Autorisation=()=>{
    const[Path,setPath]=useState('')
    const[Close,setClose]=useState(false)
    const[FromProfile,setFromProfile]=useState(false)
    const[accès,setAccès]=useState("")
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
           { accès!="Bhgejbfeziob26985"?
           <div className="containerPopup">
                <div className='containerLogoImgFelicitation'>
                    <div className="pictoLogoEspaceProPopup">
                            <img src={localLogo} className='localLogoPictoEspaceProPopup'></img>
                            <img src={volant} className='volantLogoEspaceProPopup'></img>
                    </div>
                    <img src={superHero} className="superHeroPopup"></img>
                    <div className='pFelicitation'>
                        <p className='pColorCanard'>In Progress</p>
                        <p style={{textAlign:"center"}}>Cette Application est en cours de développement et nécessite un code d'accès<br></br>
                        dont vous pouvez faire la demande par mail </p>
                    </div>
                </div>
                <a href="mailto:Macedo.stephaniie@gmail.com" className='aMailContact' style={{"position":"relative","top":"117px","width":"fit-content"}}><button type="submit" className='buttonValidBoxcase' style={{"width":"237px"}}>M'envoyer un mail</button></a>
                <div className='containerNomDescription2' style={{"position":"relative","top":"110px"}}>
                    <input type='text' placeholder="code d'accès" className='inputNom' id='resetDescriptif' onChange={(e)=>{setAccès(e.target.value)}}></input>
                </div>
            </div>:<div className="containerPopup2"></div>}
        </div>
    )
}
export default Autorisation