import Logo from "../../img/fastfood.svg";
import "./style.css";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
const Home = () => {
  return (
    <main className="container-home  h-full md:h-screen lg:h-screen sm:h-full">
     
        <div className="card-title">
          <h1 >
            SOHL 
            <br />
            Arquitetura e Engenharia - Studio
          </h1>
          <p >
           Projetos Completos para sua obra.<br/>
           Arquitetônico | Interiores | Estruturas | Complementares | Obras Comerciais | Obras Industriais
          </p>
        </div>
      <div className="animation ">
        <Player
          autoplay
          loop
          src="https://assets4.lottiefiles.com/packages/lf20_GUQObWT5Mw.json"
          style={{ height: "400px", width: "400px" }}
        ></Player>
      </div>
      
    </main>
    
  );
};

export default Home;
