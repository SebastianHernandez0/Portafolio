import "./about-me.css";
export default function AboutMe() {
  return (
    <div className="about-me">
      <h1 className="about-me-h1">Desarrollador Full Stack</h1>
      <div className="about-me-div">
      <div className="about-me-img">
          <img className="img-img" src="./img/Foto.jpg"></img>
        </div>
        <div className="about-me-text">
          <h1 className="about-metext-h1">
            Hey! Soy <span className="text-span2">Sebastián Hernández</span> {" "}
            <a
              className="text-span"
              target="_blank"
              href="https://www.linkedin.com/in/sebasti%C3%A1n-hern%C3%A1ndez-b48115280/"
            >
              disponible para trabajar
            </a>
          </h1>
          
          <br></br>
          <p className="about-me-p">
            Autodidacta, Apasionado por la tecnologia, con muchas ganas de
            trabajar y seguir aprendiendo
          </p>
          <br></br>
          <p className="about-me-p">
            Me gradué del bootcamp de Desafío Latam, donde adquirí un conjunto
            sólido de habilidades en desarrollo Full Stack. Durante el programa,
            aprendí y trabajé con tecnologías clave como:
          </p>
          <ul>
            <li>Frontend: HTML, CSS, JavaScript, React</li>
            <li>Backend: Node.js, Express, PostgreSQL</li>
            <li>Control de Versiones: Git, GitHub</li>
          </ul>
          
          <p className="about-me-p">
            Mi objetivo a corto plazo es consolidar mi experiencia profesional
            en desarrollo Full Stack, comenzando en una posición junior donde
            pueda aprender y crecer junto a un equipo talentoso. A largo plazo,
            aspiro a convertirme en un desarrollador senior y liderar proyectos
            innovadores que tengan un impacto positivo en la comunidad.
          </p>
          <br></br>
          <p className="about-me-p">
            ¡Estoy en busca de nuevos desafíos y oportunidades emocionantes! No
            dudes en ponerte en contacto conmigo.
          </p>
        </div>
        
      </div>
    </div>
  );
}
