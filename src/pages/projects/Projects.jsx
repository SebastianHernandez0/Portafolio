import "./projects.css";
import { FaGithub } from "react-icons/fa";
import { CiLink } from "react-icons/ci";
export default function Projects() {
  const proyectos = [
    {
      titulo: "Ecommerce",
      descripcion:
        "Desarrollé un ecommerce como proyecto final de un bootcamp junto a dos compañeros, donde fui el encargado de toda la parte del backend, utilizando tecnologías como Node.js, Express y PostgreSQL. Diseñé la arquitectura del backend para garantizar la escalabilidad y eficiencia, implementé APIs RESTful para manejar operaciones de usuarios, productos, órdenes y pagos, y configuré y administré una base de datos PostgreSQL para gestionar datos de productos, usuarios y pedidos. Además, integré mecanismos de autenticación y autorización usando JWT para la seguridad de los usuarios, y realicé la validación de datos y manejo robusto de errores para mejorar la fiabilidad del sistema. ",
      habilidadesDesarrolladas:
        "Gestión de bases de datos relacionales con PostgreSQL. Desarrollo de aplicaciones server-side con Node.js y Express. Implementación de mecanismos de seguridad en aplicaciones web. Mejora de eficiencia en consultas y manejo de datos. Integración de servicios externos y APIs.",
      imagen: "./img/EdiMarket.png",
      github: "https://github.com/Edisonven/EdiMarket",
      link:"https://edimarket-2.vercel.app/"
    },
    {
      titulo: "Acortador Url",
      descripcion:
        "Este proyecto es un acortador de URLs que permite a los usuarios acortar enlaces largos y almacenarlos en una base de datos (PostgreSQL). Además de las funcionalidades básicas de un acortador de URLs, como generar y redirigir enlaces cortos, este sistema también incluye un sistema de autenticación mediante Google para que los usuarios puedan registrarse e iniciar sesión utilizando sus cuentas de Google y puedan gestionar sus URLs acortados.",
      habilidadesDesarrolladas: "Desarrollé habilidades en backend utilizando Node.js y Express, donde configuré rutas seguras y optimicé la base de datos en PostgreSQL. Implementé la autenticación con Gmail usando OAuth 2.0 y gestioné la seguridad mediante variables de entorno. En el frontend, creé una interfaz con React.js, desarrollando componentes reutilizables y manejando el estado de la aplicación, lo que permitió a los usuarios acortar, modificar y eliminar sus links. Configuré políticas de CORS para la protección de la aplicación, desplegué la aplicación en Vercel y utilicé Git para el control de versiones, asegurando un desarrollo organizado y escalable.",
      imagen: "./img/urlshort.png",
      github: "https://github.com/SebastianHernandez0/urlshorter",
      link:"https://surl-one.vercel.app/"
      },
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
            <div className="enlaces"><a href={proyecto.github} target="_blank" className="proyecto-link">
              <FaGithub size={40} />
            </a>
            <a href={proyecto.link} target="_blank" className="proyecto-link">
            <CiLink size={40} />
            </a></div>
            
            <div className="proyecto-div2">
              <img className="proyecto-img" src={proyecto.imagen}></img>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
