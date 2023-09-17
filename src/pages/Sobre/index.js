import "./style.css";
import photo from "../../img/photo.jpg"
const Sobre = () => {
  return (
    <div className="container-sobre h-screen md:h-screen lg:h-screen sm:h-full">
      <p>
       A SOHL Arquitetura e Engenharia possui mais de 10 anos de experiência em projetos e serviços para a construção civil. <br/>
       Entre suas atividades estão: <br/>
       - Obras comerciais, residenciais e multifamiliares na região de Joinville. <br/>
       - Obras Industriais em Santa Catarina e Paraná. <br/>

        Atualmente tem se especializado em atendimento on-line. <br/>

        A Arquiteta  <br/>

        A Arquiteta Suellen Bona L., conhecida por seus Clientes como Sula Bona, é Graduada em Arquitetura e Urbanismo pela Unisociesc, Pós-Graduada em Interiores e Biodiversidade, fez Intercâmbio em Madrid- Espanha, e hoje está a frente do Escritório da SOHL Arquitetura & Engenharia, com uma equipe capacitada para atender, desenvolver e realizar os Sonhos de todos os clientes que confiam em nosso trabalho, e juntos transformamos esses Sonhos em Realidade.
       
      <hr/>
     
      </p>
      <img src={photo}/>
    </div>
  );
};

export default Sobre;
