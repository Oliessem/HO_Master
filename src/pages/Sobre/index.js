import "./style.css";
import photo from "../../img/photo.jpg"
const Sobre = () => {
  return (
    <div className="container-sobre h-screen md:h-screen lg:h-screen sm:h-full">
      <p>
       A SOHL Arquitetura e Engenharia possui mais de 10 anos de experiência em projetos e serviços para a construção civil.
       Entre suas atividades estão:
       - Obras comerciais, residenciais e multifamiliares na região de Joinville.
       - Obras Industriais em Santa Catarina e Paraná.

         Atualmente tem se especializado em atendimento on-line.
       
      <hr/>
     
      </p>
      <img src={photo}/>
    </div>
  );
};

export default Sobre;
