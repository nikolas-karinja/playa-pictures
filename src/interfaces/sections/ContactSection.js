const ContactSection = () =>
{
    return <section class="contact-section" id="contact" aria-labelledby="contact-title">
      <p class="eyebrow light">04 / Start a project</p>
      <h2 id="contact-title">
        Let's make something<br />
        <em>worth watching.</em>
      </h2>
      <div class="contact-bottom">
        <a class="button button-light" href="mailto:info@playa-pictures.com?subject=Project%20inquiry%20for%20Playa%20Pictures">
          Start a conversation <span aria-hidden="true">↗</span>
        </a>
        <div class="contact-details">
          <a href="mailto:info@playa-pictures.com">info@playa-pictures.com</a>
          <a href="tel:+13108015045">310 801 5045</a>
          <span>Los Angeles, California</span>
        </div>
      </div>
    </section>
}

export default ContactSection