function Skills() {
  const skillGroups = [
    {
      title: "Programming",
      skills: ["Python", "C", "JavaScript"],
    },
    {
      title: "AI & Machine Learning",
      skills: ["Machine Learning", "NLP", "Artificial Intelligence"],
    },
    {
      title: "Web Development",
      skills: ["React", "HTML", "CSS", "Vite"],
    },
    {
      title: "Tools & Automation",
      skills: ["Git", "GitHub", "n8n", "VS Code"],
    },
  ];

  return (
    <section className="skills-section" id="skills">
      <div className="section-container">

        <p className="section-label">MY EXPERTISE</p>

        <h2>Skills</h2>

        <p className="skills-intro">
          Technologies and tools I am learning and using to build
          software, AI applications, and automation workflows.
        </p>

        <div className="skills-grid">

          {skillGroups.map((group) => (
            <div className="skill-card" key={group.title}>

              <div className="skill-card-icon">
                {group.title === "Programming" && "⌨"}
                {group.title === "AI & Machine Learning" && "✦"}
                {group.title === "Web Development" && "◇"}
                {group.title === "Tools & Automation" && "⚙"}
              </div>

              <h3>{group.title}</h3>

              <div className="skill-list">
                {group.skills.map((skill) => (
                  <span key={skill}>
                    {skill}
                  </span>
                ))}
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;