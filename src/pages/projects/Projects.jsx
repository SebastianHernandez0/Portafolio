import "./projects.css";
import { FaGithub } from "react-icons/fa";
import { CiLink } from "react-icons/ci";
export default function Projects() {
  const proyectos = [
    {
      titulo: "Ecommerce",
      descripcion:
        "Desarrollé un ecommerce como proyecto final de un bootcamp junto a 2 compañeros, yo fui el encargado de toda la parte del backend. En donde utilicé tecnologías como: Node.js, Express, PostgreSQL. Responsabilidades: Diseño y Arquitectura: Diseñé la arquitectura del backend para garantizar la escalabilidad y eficiencia. Desarrollo de APIs REST: Implementé APIs RESTful para manejar operaciones de usuarios, productos, órdenes y pagos. Gestión de Base de Datos: Configuré y administré una base de datos PostgreSQL para almacenar y gestionar datos de productos, usuarios y pedidos. Autenticación y Autorización: Integré mecanismos de autenticación y autorización usando JWT para la seguridad de los usuarios. Validación y Manejo de Errores: Implementé validación de datos y manejo robusto de errores para mejorar la fiabilidad del sistema. ",
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
      habilidadesDesarrolladas: "Desarrollo de Backend con Node.js: Construcción y configuración de un servidor Express, manejo de rutas y controladores. Autenticación y Autorización: Implementación de OAuth 2.0 para el inicio de sesión con Google mediante Passport.js. Manejo de Sesiones: Configuración y gestión de sesiones de usuario con express-session. Interacción con Bases de Datos: Conexión y operaciones CRUD con una base de datos para almacenar y recuperar URLs (Especificar el motor utilizado, por ejemplo, MongoDB, PostgreSQL). Protección de Información Sensible: Uso de variables de entorno para proteger información sensible como claves de API y secretos de sesión. Desarrollo de Frontend con React: Creación de componentes reutilizables, manejo del estado de la aplicación y enrutamiento con react-router-dom. Consumo de APIs REST: Interacción con el backend desde el frontend para realizar operaciones como el acortamiento y la recuperacion de URLs, y gestión de sesiones. Manejo de CORS: Configuración de políticas de CORS en el servidor para permitir el acceso desde el frontend. Despliegue y Servidores: Despliegue de la aplicación en plataformas de alojamiento, configuración de dominios y manejo de certificados SSL. Control de Versiones con Git: Gestión del código fuente, resolución de conflictos con Git. Trabajo con Middleware en Express: Uso y creación de middleware para funcionalidades específicas como manejar JSON, sesiones, y autenticación. Diseño y UX: Creación de interfaces de usuario amigables y accesibles, diseño responsivo y uso de estilos CSS.",
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
