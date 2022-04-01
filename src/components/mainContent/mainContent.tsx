import React from "react";
import picture from "./../../assets/images/david_picture.jpg"

const MainContent = () => {
    return     <div className="content">
         <div className="section">
             <div className="container">
                 <div className="columns is-centered">
                     <div className="column">
                         <div className="introduction">
                             <p>Oi, eu sou</p>
                             <h1 className="name">David Nunes</h1>
                             <h3>Um criativo Full Stack Developer</h3>
                             <div className=" social-media" >
                                 <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt=""/></a>
                                 <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/1077/1077042.png" alt=""/></a>
                                 <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/61/61109.png" alt=""/></a>
                             </div>
                         </div>
                     </div>
                     <div className="column is-half">
                         <div className="box code-box">
                                        <pre>
                                            1&nbsp;&nbsp;class <b className= "primary-color">Person</b> &#123; <br/>
                                            2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; constructor() &#123; <br/>
                                        3&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; this.name = "<b className= "primary-color">David Oliveira Nunes</b>";
                                        <br/>
                                        4&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; this.traits = ["<b className= "primary-color">COMMUNICATIVE</b>", "<b className= "primary-color">DEV</b>"];
                                        <br/>5&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; this.age = <b className= "primary-color">19</b>;
                                        <br/>5&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; this.location = "<b className= "primary-color">Ipatinga - MG - BR</b>";
                                        <br/>6&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &#125;<br/>7&nbsp;&nbsp; &#125;</pre>
                         </div>
                     </div>
                 </div>
             </div>
         </div>
         <div className="section  is-primary is-long aboutme-section ">
             <div className="container">
                 <h2 className="has-text-white has-text-centered"> Sobre mim</h2>
                 <div className="columns is-centered">
                     <div className="column is-3">
                         <div className="picture-container is-centered has-text-centered ">
                             <img className="is-centered" src={picture} alt=""/>
                         </div>
                     </div>
                     <div className="column is-9 is-full-mobile is-full-tablet">
                         <p className="subtitle has-text-white about-me-text has-text-centered-mobile">Comecei a programar aos 15 anos e desenvolvi grande paixão pela área. Aos 16 percebi que não me adequava ao método
                             de ensino da Escola tradicional Brasileira, e de fato ela estava me atrasando em relação aos meus estudos
                             no ramo da tecnologia. Sendo assim decidi deixar de frequentar a escola tradicional para dedicar 100% de meus esforços em
                             expandir meu conhecimento como desenvolvedor. Desde então tem sido uma jornada incrível de muito trabalho e aprendizado.
                         </p>
                     </div>
                 </div>
             </div>
         </div>
         <div className="section">
             <div className="container is-narrow">
                 <div className="gadgets" ><img className="is-top" src="https://mattfarley.ca/img/hero.svg" alt=""/></div>
                 <div className="box competence-box">
                     <div className="content">
                         <h2 className="has-text-centered">Competências</h2>
                         <div className="columns has-text-centered">
                             <div className="column competence-column">
                                 <h5>FrontEnd</h5>
                                 <p>Acho fascinante ver o projeto tomando forma e beleza.</p>
                                 <h6 className="primary-color">Tecnologias dominadas:</h6>
                                 <ul>
                                     <li>HTML5</li>
                                     <li>CSS, CSS3</li>
                                     <li>JavaScript</li>
                                     <li>React JS</li>
                                     <li>Bootstrap</li>
                                 </ul>
                             </div>
                             <div className="column competence-column">
                                 <h5>BackEnd</h5>
                                 <p>Construo o BackEnd sempre priorizando eficiência e manutenibilidade.</p>
                                 <h6 className="primary-color">Tecnologias dominadas:</h6>
                                 <ul>
                                     <li>PHP</li>
                                     <li>Jquery</li>
                                     <li>SQL</li>
                                     <li>Laravel</li>
                                     <li>GraphQL</li>
                                     <li>API Restful</li>
                                     <li>GIT</li>
                                     <li>Xdebug</li>
                                 </ul>
                             </div>
                             <div className="column competence-column others-competence">
                                 <h5>Outros</h5>
                                 <p>Estou sempre buscando aprender coisas novas.</p>
                                 <h6 className="primary-color">Habilidades extra:</h6>
                                 <ul>
                                     <li>Inglês fluente</li>
                                     <li>Facilidade para aprender</li>
                                     <li>Exelente comunicação</li>
                                     <li>Criatividade</li>
                                     <li>Espirito de liderança</li>
                                 </ul>
                             </div>
                         </div>
                     </div>
                 </div>
             </div>
         </div>
         <div className="section">
             <div className="container is-narrow">
                 <h2 className="has-text-centered">Tenho orgulho de ter trabalhado com empresas incríveis</h2>
                 <div className="columns is-centered">
                     <div className="column is-one-third">
                         <div className="box">
                             <a href="https://www.supporthealth.com.br/"><img src="https://www.supporthealth.com.br/wp-content/themes/supporthealth/assets/img/logo-horizontal.png" alt=""/></a>
                             <p className="light-text has-text-centered">Desenvolvedor PHP Laravel</p>
                         </div>
                     </div>
                 </div>
             </div>
         </div>
         <div className="section is-primary has-text-centered call-to-action-section">
             <div className="container is-narrow">
                 <div className="box">
                     <div className="columns level">
                         <div className="column level-item"><h2 className="color-white" >Começar um Projeto</h2></div>
                         <div className="column level-item"><p className="color-white light-text">Interessado em trabalharmos juntos? Deveriamos marcar uma conversa. O café é por minha conta.</p></div>
                         <div className="column level-item">
                             <a href="" className="button is-rounded is-outlined">Vamos la!</a>
                         </div>
                     </div>
                 </div>
             </div>
         </div>
     </div>
}

export default MainContent;