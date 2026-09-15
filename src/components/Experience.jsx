function Experience() {
  const journey = [
    {
      year: "2026",
      title: "B.Tech Computer Science & Engineering",
      organization: "SRM Institute of Science and Technology",
      description:
        "Started my undergraduate journey in Computer Science and Engineering with a focus on developing strong programming and problem-solving fundamentals.",
    },
    {
      year: "2026",
      title: "Python & Software Development",
      organization: "Learning & Development",
      description:
        "Building my programming skills with Python and exploring software development through practical projects and hands-on learning.",
    },
    {
      year: "2026",
      title: "AI/ML & Automation Projects",
      organization: "Personal Projects",
      description:
        "Exploring Artificial Intelligence, Machine Learning, NLP, and automation by developing project ideas such as FeedbackIQ and AI-powered workflows.",
    },
  ];

  return (
    <section className="experience-section" id="experience">
      <div className="section-container">

        <p className="section-label">MY JOURNEY</p>

        <h2>Learning & Development</h2>

        <p className="experience-intro">
          My journey so far, from starting my degree to building projects
          and developing my skills in software development and AI/ML.
        </p>

        <div className="timeline">

          {journey.map((item, index) => (
            <div className="timeline-item" key={index}>

              <div className="timeline-dot"></div>

              <div className="timeline-year">
                {item.year}
              </div>

              <div className="timeline-card">

                <h3>{item.title}</h3>

                <h4>{item.organization}</h4>

                <p>{item.description}</p>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Experience;