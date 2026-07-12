import type { Resume } from "../types/resume";

type Props = {
  resume: Resume;
};

export default function ModernTemplate({ resume }: Props) {
  return (
    <div className="resume-card">
      <header className="modern-header">
        <h1>{resume.personalInfo.fullName}</h1>

        <p>
          {resume.personalInfo.email} | {resume.personalInfo.phone}
        </p>

        <p>{resume.personalInfo.location}</p>
      </header>

      {resume.summary && (
        <section>
          <h2>Profile</h2>
          <p>{resume.summary}</p>
        </section>
      )}

      {resume.skills.length > 0 && (
        <section>
          <h2>Skills</h2>
          <div className="skills">
            {resume.skills.map((skill, index) => (
              <span key={index} className="skill">
                {skill}
              </span>
            ))}
          </div>
        </section>
      )}

      {resume.experience.length > 0 && (
        <section>
          <h2>Experience</h2>

          {resume.experience.map((exp, index) => (
            <div key={index}>
              <h3>{exp.position}</h3>
              <strong>{exp.company}</strong>

              <p>
                {exp.startDate} - {exp.endDate}
              </p>

              <p>{exp.description}</p>
            </div>
          ))}
        </section>
      )}

      {resume.education.length > 0 && (
        <section>
          <h2>Education</h2>

          {resume.education.map((edu, index) => (
            <div key={index}>
              <h3>{edu.degree}</h3>
              <p>{edu.school}</p>
              <p>{edu.fieldOfStudy}</p>
            </div>
          ))}
        </section>
      )}

      {resume.projects.length > 0 && (
        <section>
          <h2>Projects</h2>

          {resume.projects.map((project, index) => (
            <div key={index}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <p>{project.technologies}</p>
              <p>{project.github}</p>
            </div>
          ))}
        </section>
      )}
    </div>
  );
}