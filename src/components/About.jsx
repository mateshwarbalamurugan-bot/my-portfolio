function About() {
  return (
    <section className="about-section" id="about">
      <div className="section-container">

        <div className="about-heading">
          <p className="section-label">ABOUT ME</p>

          <h2>
            Building my skills,
            <br />
            one project at a time.
          </h2>
        </div>

        <div className="about-content">

          <div className="about-text">
            <p>
              I am Mateshwar Balamurugan, a Computer Science student
              passionate about Python development, Artificial Intelligence,
              Machine Learning, and building practical software solutions.
            </p>

            <p>
              I enjoy learning by building projects and exploring how
              technology can be used to solve real-world problems. My
              current focus is strengthening my programming fundamentals
              while developing skills in AI/ML, automation, and web
              development.
            </p>

            <p>
              I am continuously working on new ideas and projects to
              improve my technical knowledge and become a stronger
              software developer.
            </p>
          </div>

          <div className="education-card">

            <div className="education-icon">
              🎓
            </div>

            <div>
              <p className="education-label">
                EDUCATION
              </p>

              <h3>
                SRM Institute of Science and Technology
              </h3>

              <p className="education-degree">
                B.Tech in Computer Science and Engineering
              </p>

              <div className="education-details">
                <span>Undergraduate</span>
                <span>Expected Graduation: 2030</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;