import img_joseDelgado from "../../img/photos/jose-delgado.jpg"

const AboutSection = () =>
{
    return <section class="about-section" id="about" aria-labelledby="about-title">
      <div class="about-image">
        <img src={img_joseDelgado} alt="Jose Delgado, founder of Playa Pictures" loading="lazy" />
        <div class="about-image-label">
          <span>Founder / Creative</span>
          <span>Jose Delgado</span>
        </div>
      </div>

      <div class="about-copy">
        <p class="eyebrow">02 / About</p>
        <h2 id="about-title">A human eye behind every frame.</h2>
        <div class="about-rule"></div>
        <p class="about-lead">
          Playa Pictures is the creative home of Jose Delgado, a Los Angeles producer, director, editor, and visual storyteller.
        </p>
        <p>
          Across film, photography, music videos, branded content, and commercial storytelling, Jose brings a cinematic point of view and more than 25 years of production experience to every collaboration.
        </p>
        <p>
          Today, that foundation expands through AI-assisted concepting, image-making, visual development, and smarter pre-production—new tools, always guided by human taste.
        </p>
        <a class="text-link" href="https://www.linkedin.com/in/joseplaya/" target="_blank" rel="noreferrer">
          Meet Jose on LinkedIn <span aria-hidden="true">↗</span>
        </a>
      </div>
    </section>
}

export default AboutSection