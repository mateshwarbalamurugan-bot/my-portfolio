function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-container">

        {/* MB Developer Logo */}
        <div className="hero-avatar-wrapper">
          <div className="mb-logo">
            <div className="circuit circuit-1"></div>
            <div className="circuit circuit-2"></div>
            <div className="circuit circuit-3"></div>

            <div className="mb-logo-text">
              <span>M</span><span>B</span>
            </div>
          </div>
        </div>

        {/* Hero Content */}
        <div className="hero-content">

          <p className="hero-greeting">
            Hello, I'm
          </p>

          <h1>
            Mateshwar
            <br />
            Balamurugan
          </h1>

          <h2>
            Python Developer & AI/ML
            <br />
            Enthusiast
          </h2>

          <p className="hero-description">
            I am a Python developer interested in building AI-powered
            applications and solving real-world problems.
          </p>

          <div className="hero-buttons">

            <a href="#projects" className="hero-button primary">
              View My Projects
              <span>→</span>
            </a>

            <a href="#contact" className="hero-button secondary">
              Contact Me
            </a>

          </div>

          <div className="hero-socials">

            {/* GitHub */}
            <a
              href="https://github.com/mateshwarbalamurugan-bot"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                className="social-svg github-svg"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fill="currentColor"
                  d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55v-2.12c-3.2.7-3.87-1.54-3.87-1.54-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.25 3.34.96.1-.74.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.68 0-1.25.45-2.27 1.18-3.07-.12-.29-.51-1.45.11-3.02 0 0 .96-.31 3.15 1.17a10.9 10.9 0 0 1 5.74 0c2.19-1.48 3.15-1.17 3.15-1.17.62 1.57.23 2.73.11 3.02.73.8 1.18 1.82 1.18 3.07 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.07.78 2.16v3.2c0 .3.21.66.79.55A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z"
                />
              </svg>
              GitHub
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/mateshwar-balamurugan"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                className="social-svg"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fill="currentColor"
                  d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V8.99h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.61 0 4.27 2.38 4.27 5.48v6.27ZM5.32 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM3.54 20.45h3.56V8.99H3.54v11.46ZM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0Z"
                />
              </svg>
              LinkedIn
            </a>

            {/* Email */}
            <a href="mailto:mateshwarbalamurugan10@gmail.com">
              <svg
                className="social-svg"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 5h18v14H3z M3 6l9 7 9-7"
                />
              </svg>
              Email
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;