
import Service from '../../components/service';
import Hotdog from '../../img/hotdog.svg';
import Lanches from '../../img/lanches2.svg';
import Coxinha from '../../img/COXINHA3.png';
import Drinks from '../../img/drink.svg';
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import './style.css';
const Cardapio = () =>{
    return(
      
        <div className='container-cardapio h-full md:h-screen lg:h-screen sm:h-full'>

            <div className='card'>
                <Service name='Arquitetônicos'/>
                <img className='drawn' src={Hotdog} alt='Hotdog'/>
            </div>

            <div className='card'>
                <Service name='Interior'/>
                <img className='drawn' src={Lanches} alt='Lanches'/>
            </div>

            <div className='card'>
              <Service className='drawn' name='Estruturais'/>
              <img className='drawn' src={Drinks} alt='Drinks'/>
            </div>
            
            <div className='card'>
                <Service name='Complementares'/>
                <img className='drawn'  src={Coxinha} alt='Salgados'/>
            </div>
            
            <div className='card'>
                <Service name='Industrais'/>
                <img className='drawn'  src={Coxinha} alt='Salgados'/>
            </div>

            <div className='card'>
                <Service name='Comerciais'/>
                <img className='drawn'  src={Coxinha} alt='Salgados'/>
            </div>        
         
        </div>
        
      
    )
}

export default Cardapio;
