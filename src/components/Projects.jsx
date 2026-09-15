function Projects() {
  const projects = [
    {
      number: "01",
      title: "FeedbackIQ",
      description:
        "An AI-powered platform concept designed to analyze user feedback, identify sentiment and topics, and help prioritize actionable insights.",
      technologies: ["Python", "AI/ML", "NLP"],
      status: "In Development",
    },
    {
      number: "02",
      title: "AI Automation Workflow",
      description:
        "An automation workflow concept that connects AI-generated content with Telegram and LinkedIn for review and publishing.",
      technologies: ["Python", "n8n", "AI"],
      status: "In Development",
    },
    {
      number: "03",
      title: "Developer Portfolio",
      description:
        "A responsive personal portfolio built to showcase my skills, projects, learning journey, and interest in AI and software development.",
      technologies: ["React", "Vite", "CSS"],
      status: "Completed",
    },
  ];

  return (
    <section className="projects-section" id="projects">
      <div className="section-container">

        <p className="section-label">MY WORK</p>

        <h2>Projects</h2>

        <p className="projects-intro">
          A collection of projects and ideas I am building while developing
          my skills in Python, AI/ML, automation, and web development.
        </p>

        <div className="projects-grid">

          {projects.map((project) => (
            <div className="project-card" key={project.number}>

              <div className="project-top">
                <span className="project-number">
                  {project.number}
                </span>

                <span className="project-status">
                  {project.status}
                </span>
              </div>

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="project-technologies">
                {project.technologies.map((technology) => (
                  <span key={technology}>
                    {technology}
                  </span>
                ))}
              </div>

              <div className="project-arrow">
                View Project <span>→</span>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;