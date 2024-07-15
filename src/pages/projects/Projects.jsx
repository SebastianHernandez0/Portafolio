import "./projects.css";
import { FaGithub } from "react-icons/fa";
export default function Projects() {
  const proyectos = [
    {
      titulo: "Ecommerce",
      descripcion:
        "Desarrollé un ecommerce como proyecto final de un bootcamp junto a 2 compañeros, yo fui el encargado de toda la parte del backend. En donde utilicé tecnologías como: Node.js, Express, PostgreSQL. Responsabilidades: Diseño y Arquitectura: Diseñé la arquitectura del backend para garantizar la escalabilidad y eficiencia. Desarrollo de APIs REST: Implementé APIs RESTful para manejar operaciones de usuarios, productos, órdenes y pagos. Gestión de Base de Datos: Configuré y administré una base de datos PostgreSQL para almacenar y gestionar datos de productos, usuarios y pedidos. Autenticación y Autorización: Integré mecanismos de autenticación y autorización usando JWT para la seguridad de los usuarios. Validación y Manejo de Errores: Implementé validación de datos y manejo robusto de errores para mejorar la fiabilidad del sistema. ",
      habilidadesDesarrolladas: "Gestión de bases de datos relacionales con PostgreSQL. Desarrollo de aplicaciones server-side con Node.js y Express. Implementación de mecanismos de seguridad en aplicaciones web. Mejora de eficiencia en consultas y manejo de datos. Integración de servicios externos y APIs.",
      imagen: "./img/EdiMarket.png",
      link: "https://github.com/Edisonven/EdiMarket",
    }
  ];
  return (
    <div className="projects">
      <div className="projects-div">
        <h1 className="projects-h1">Mis Proyectos</h1>
        {proyectos.map((proyecto, index) => (
          <div className="proyectos" key={index}>
            <div className="proyecto-div1">
              <h2 className="proyecto-h2">{proyecto.titulo}</h2>
              <br></br>
              <p className="proyecto-p">{proyecto.descripcion}</p>
              <br></br>
              <h3>Habilidades Desarrolladas:</h3>
              <br></br>
              <p>{proyecto.habilidadesDesarrolladas}</p>
            </div>
            <a href={proyecto.link} target="_blank" className="proyecto-link"><FaGithub size={40} /></a>
            <div className="proyecto-div2">
              <img className="proyecto-img" src={proyecto.imagen}></img>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
