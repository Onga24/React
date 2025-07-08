import './Skills.css';

function Skills({ skills }) {
  return (
     <section id="skills" className="skills-section">
      <div className="skills-container">
        <h2 className="skills-title">My Skills</h2>
        <div className="skills-list">
          {skills.map((skill) => (
            <span  className="skill-item">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills