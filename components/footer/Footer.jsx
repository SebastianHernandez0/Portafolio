import "../footer/footer.css"

const currentYear = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="footer">
  <div
    class="footer-div"
  >
    <span class="footer-span">
      © {currentYear}{" "}
      <a target="_blank" href="https://www.linkedin.com/in/sebasti%C3%A1n-hern%C3%A1ndez-b48115280/" class="hover:underline">Sebastián Hernández</a>. Casi
      todos los derechos reservados
    </span>
    
      <p>
        <a id="contacto" href="mailto:sebastian.her0548@gmail.com" class="footer-a"
          >Contacto</a
        >
      </p>
    
  </div>
</footer>
  )
}   

