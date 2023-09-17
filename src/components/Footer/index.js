import './style.css';
import {AiOutlineGithub} from 'react-icons/ai'
import {MdLocationOn} from 'react-icons/md'
import {BsFillTelephoneFill} from 'react-icons/bs'
const Footer = () =>{
    return(
        <footer >
             
             <span className='adress'>
                
                <MdLocationOn/> Brasil
                <BsFillTelephoneFill/> (47)99112-7739 e (47)99112-7742
             </span>
             <a href='https://hoengenharia.com.br'> <p> by Suellen e Orlando <br/> <AiOutlineGithub/> </p></a>
            
        </footer>
    )
}

export default Footer;
