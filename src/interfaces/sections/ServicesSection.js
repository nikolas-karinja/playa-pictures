import img_studio from "../../img/photos/studio.jpg"

const ServicesSection = () =>
{
    return <section class="services-section" id="services" aria-labelledby="services-title">
      <div class="services-heading">
        <p class="eyebrow light">03 / Capabilities</p>
        <h2 id="services-title">Built for the whole picture.</h2>
        <p>Flexible creative production from concept to delivery, scaled around the right collaborators for every assignment.</p>
      </div>

      <div class="services-list">
        <article class="service-row">
          <span>01</span>
          <h3>Film &amp; Video</h3>
          <p>Creative direction, producing, production support, and story-first video for brands, artists, agencies, and independent teams.</p>
        </article>
        <article class="service-row">
          <span>02</span>
          <h3>Photography</h3>
          <p>Commercial, editorial, portrait, and campaign imagery with a cinematic eye and a production-minded approach.</p>
        </article>
        <article class="service-row">
          <span>03</span>
          <h3>AI Creative</h3>
          <p>Concept art, image generation, visual exploration, pitch development, and experimental workflows powered by generative tools.</p>
        </article>
        <article class="service-row">
          <span>04</span>
          <h3>Post &amp; Finishing</h3>
          <p>Editing, color, finishing direction, and post-production coordination that keep every frame intentional and cohesive.</p>
        </article>
      </div>

      <div class="studio-strip">
        <div class="studio-image">
          <img src={img_studio} alt="A Playa Pictures production set" loading="lazy" />
        </div>
        <p>Stories</p><span>•</span><p>Cinema</p><span>•</span><p>AI</p><span>•</span><p>Impact</p>
      </div>
    </section>
}

export default ServicesSection