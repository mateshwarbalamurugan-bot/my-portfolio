function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="section-container">

        <p className="section-label">GET IN TOUCH</p>

        <h2>Contact Me</h2>

        <div className="contact-content">

          <div className="contact-text">
            <h3>Let's Connect</h3>

            <p>
              I'm always interested in learning, building new projects,
              exploring AI and machine learning, and connecting with
              people who share similar interests.
            </p>

            <p>
              Feel free to reach out to me through email or connect
              with me on GitHub and LinkedIn.
            </p>
          </div>

          <div className="contact-info">

            <a
              href="mailto:mateshwarbalamurugan10@gmail.com"
              className="contact-card"
            >
              <div className="contact-icon">
                ✉
              </div>

              <div>
                <h3>Email</h3>
                <p>
                  mateshwarbalamurugan10@gmail.com
                </p>
              </div>
            </a>

            <a
              href="https://github.com/mateshwarbalamurugan-bot"
              target="_blank"
              rel="noreferrer"
              className="contact-card"
            >
              <div className="contact-icon">
                ◉
              </div>

              <div>
                <h3>GitHub</h3>
                <p>
                  mateshwarbalamurugan-bot
                </p>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/mateshwar-balamurugan"
              target="_blank"
              rel="noreferrer"
              className="contact-card"
            >
              <div className="contact-icon">
                in
              </div>

              <div>
                <h3>LinkedIn</h3>
                <p>
                  Mateshwar Balamurugan
                </p>
              </div>
            </a>

          </div>

        </div>

        <div className="contact-button-container">
          <a
            href="mailto:mateshwarbalamurugan10@gmail.com"
            className="contact-button"
          >
            Send Me an Email →
          </a>
        </div>

      </div>
    </section>
  );
}

export default Contact;