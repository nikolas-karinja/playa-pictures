import img_playLogoWhite from "../img/brand/playa-logo-white.png"

const Header = () =>
{
    return <header class="site-header">
      <a class="brand" href="#top" aria-label="Playa Pictures home">
        <img src={img_playLogoWhite} alt="" width="52" height="52" />
        <span>Playa Pictures</span>
      </a>

      <nav class="desktop-nav" aria-label="Main navigation">
        <a href="#work">Reel</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>
      </nav>

      <a class="header-cta" href="mailto:jose@playa-pictures.com?subject=Playa%20Pictures%20Reel%20Request">
        Request Reel <span aria-hidden="true">↗</span>
      </a>

      <details class="mobile-menu">
        <summary aria-label="Open menu">Menu</summary>
        <nav aria-label="Mobile navigation">
          <a href="#work">Reel</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
          <a href="mailto:jose@playa-pictures.com?subject=Playa%20Pictures%20Reel%20Request">Request Reel</a>
        </nav>
      </details>
    </header>
}

export default Header