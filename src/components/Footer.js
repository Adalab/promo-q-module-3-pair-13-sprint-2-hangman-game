import "../styles/Footer.scss"
import {Link} from "react-router-dom"

function Footer () {
    return(
<footer class="footer">
  <nav>
    <ul>
      <li class="footer__menu-item">
        <a class="footer__menu-link" href="#/">A jugar</a>
      </li>
      <li class="footer__menu-item">
        <Link to="/instructions" class="footer__menu-link active"
          >¿Cómo se juega?</Link>
      </li>
      <li class="footer__menu-item">
        <a class="footer__menu-link" href="#/options">Más opciones</a>
      </li>
    </ul>
  </nav>
  <small class="footer__copy">© Adalab</small>
</footer>
    )
}

export default Footer
