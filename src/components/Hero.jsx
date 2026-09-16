function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-container">

        {/* LEFT SIDE */}
        <div className="hero-content">

          <div className="hero-greeting">
            Hello, I'm
          </div>

          <h1>
            Mateshwar Balamurugan
          </h1>

          <h2>
            Python Developer & AI/ML Enthusiast
          </h2>

          <p>
            I am a Python developer interested in building AI-powered
            applications and solving real-world problems.
          </p>

          <div className="hero-buttons">
            <a href="#projects">
              View My Projects →
            </a>

            <a href="#contact">
              Contact Me
            </a>
          </div>

          {/* SOCIAL ICONS */}
          <div className="hero-socials">

            {/* GitHub */}
            <a
              href="https://github.com/mateshwarbalamurugan-bot"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <svg viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55v-2.13c-3.2.7-3.87-1.54-3.87-1.54-.52-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.79 0c2.21-1.49 3.18-1.18 3.18-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.69 5.41-5.25 5.69.41.36.78 1.08.78 2.18v3.24c0 .3.2.65.79.54A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z"
                />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/mateshwarbalamurugan/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <svg viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.95v5.66H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.38 4.28 5.48v6.26ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM3.56 20.45h3.56V9H3.56v11.45ZM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0Z"
                />
              </svg>
            </a>

            {/* Email */}
            <a
              href="mailto:mateshwarbalamurugan10@gmail.com"
              aria-label="Email"
            >
              <svg viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4-8 5-8-5V6l8 5 8-5v2Z"
                />
              </svg>
            </a>

          </div>
        </div>


        {/* RIGHT SIDE ANIMATION */}
        <div className="hero-visual">

          <div className="orbit orbit-one"></div>
          <div className="orbit orbit-two"></div>
          <div className="orbit orbit-three"></div>

          <div className="code-card">

            <div className="code-top">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <div className="code-content">
              <div>
                <span className="purple">const</span>{" "}
                developer = {"{"}
              </div>

              <div>
                &nbsp;&nbsp;name:{" "}
                <span className="blue">
                  "Mateshwar"
                </span>,
              </div>

              <div>
                &nbsp;&nbsp;role:{" "}
                <span className="blue">
                  "Python Developer"
                </span>,
              </div>

              <div>
                &nbsp;&nbsp;focus:{" "}
                <span className="blue">
                  "AI / ML"
                </span>,
              </div>

              <div>
                &nbsp;&nbsp;passion:{" "}
                <span className="blue">
                  "Building"
                </span>
              </div>

              <div>
                {"}"}
              </div>
            </div>

          </div>

          <div className="floating-tag tag-python">
            Python
          </div>

          <div className="floating-tag tag-ai">
            AI / ML
          </div>

          <div className="floating-tag tag-code">
            &lt;/&gt;
          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;