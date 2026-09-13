import img_heroFashion from "../../img/photos/hero-fashion.jpg"
import img_playLogoWhite from "../../img/brand/playa-logo-white.png"

const HeroSection = () =>
{
    return <section class="hero" id="top" aria-labelledby="hero-title">
      <div class="hero-image" aria-hidden="true">
        <img src={img_heroFashion} alt="" />
      </div>
      <div class="hero-grain" aria-hidden="true"></div>
      <div class="hero-mark" aria-hidden="true">
        <img src={img_playLogoWhite} alt="" width="420" height="416" />
      </div>

      <div class="hero-kicker">
        <span>Los Angeles</span>
        <span>Production · Direction · Editorial</span>
      </div>

      <div class="hero-copy">
        <p class="eyebrow light">Playa Pictures presents</p>
        <h1 id="hero-title">
          Human vision.<br />
          <em>AI precision.</em>
        </h1>
        <div class="hero-bottom">
          <p>Cinematic storytelling for brands, artists, and ideas built to move.</p>
          <a class="text-link light" href="mailto:jose@playa-pictures.com?subject=Playa%20Pictures%20Reel%20Request">
            Request Reel <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
}

export default HeroSection