import img_playLogoWhite from "../img/brand/playa-logo-white.png"

const Footer = () =>
{
    return <footer>
      <div class="footer-brand">
        <img src={img_playLogoWhite} alt="Playa Pictures" width="64" height="63" />
        <span>Playa Pictures</span>
      </div>
      <p>Human vision. AI precision.</p>
      <div class="footer-links">
        <a href="https://www.linkedin.com/in/joseplaya/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
        <a href="#top">Back to top ↑</a>
      </div>
      <p class="copyright">© 2026 Playa Pictures. All rights reserved.</p>
    </footer>
}

export default Footer