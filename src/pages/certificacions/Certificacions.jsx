import "./certificacions.css";

export default function Certifications() {
  const certificados = [
    {
      titulo: "Desarrollador Full Stack",
      imagen: "./img/proyectofinal.png",
      link: "https://desafiosdev.s3.amazonaws.com/uploads/certification/image/33460/certificacion-aprobacion-de-carrera-nuevo-proyecto-final-g50-15535(3).png",

    },
    
    {
      titulo: "Backend con Node y Express",
      imagen: "./img/Backend.png",
      link: "https://desafiosdev.s3.amazonaws.com/uploads/certification/image/32119/aprobacion-modulos-cursos-b-learning-backend-con-node-y-express-g50-15535(3).png",

    },
    {
      titulo: "SQL",
      imagen: "./img/sql.png",
      link: "https://desafiosdev.s3.amazonaws.com/uploads/certification/image/30189/aprobacion-modulos-cursos-b-learning-sql-g50-15535(2).png",

    },
    {
      titulo: "Desarrollador Front End React",
      imagen: "./img/react.png",
      link: "https://desafiosdev.s3.amazonaws.com/uploads/certification/image/30407/certificacion-aprobacion-de-carrera-nuevo-react-ii-g50-15535(2).png",

    },
    {
      titulo: "Inglés Nivel C1",
      imagen: "./img/testingles.png",
      link: "https://cert.efset.org/KXntkL",
    },
    {
      titulo: "React II",
      imagen: "./img/react2.png",
      link: "https://desafiosdev.s3.amazonaws.com/uploads/certification/image/29321/aprobacion-modulos-cursos-b-learning-react-ii-g50-15535(3).png",

    },
    {
      titulo: "React I",
      imagen: "./img/react1.png",
      link: "https://desafiosdev.s3.amazonaws.com/uploads/certification/image/28602/aprobacion-modulos-cursos-b-learning-react-i-g50-15535(3).png",

    },
    {
      titulo: "Javascript para la Web",
      imagen: "./img/javascript.png",
      link: "https://desafiosdev.s3.amazonaws.com/uploads/certification/image/27402/aprobacion-modulos-cursos-b-learning-javascript-para-la-web-g50-15535.png",

    },
    {
      titulo: "CSS Avanzado",
      imagen: "./img/css.png",
      link: "https://desafiosdev.s3.amazonaws.com/uploads/certification/image/26076/aprobacion-modulos-cursos-b-learning-css-avanzado-g50-15535.png",

    },
    {
      titulo: "Introduccion al Desarrollo Web",
      imagen: "./img/intro.png",
      link: "https://desafiosdev.s3.amazonaws.com/uploads/certification/image/25225/aprobacion-modulos-cursos-b-learning-introduccion-al-desarrollo-web-g50-15535.png",

    },
    
  ];
  return (
    <div className="certifications">
      <h1 className="certifications-h1">Mis Certificados</h1>
      <div className="certificados-certificado">
        {certificados.map((certificado, index) => (
          <a
            href={certificado.link}
            target="_blank"
            className="certificado"
            key={index}
          >
              <h2 className="certificado-h2">{certificado.titulo}</h2>
            <img src={certificado.imagen}></img>
          </a>
        ))}
        
      </div>
    </div>
  );
}
