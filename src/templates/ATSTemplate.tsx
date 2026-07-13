import type { Resume } from "../types/resume";

interface Props {
  resume: Resume;
}

export default function ATSTemplate({ resume }: Props) {
  return (
    <div className="ats-resume">
      {/* Header */}
      <header className="ats-header">
        <h1>{resume.personalInfo.fullName || "Your Name"}</h1>

        <div className="ats-contact">
          {resume.personalInfo.email && (
            <span>{resume.personalInfo.email}</span>
          )}

          {resume.personalInfo.phone && (
            <>
              <span> | </span>
              <span>{resume.personalInfo.phone}</span>
            </>
          )}

          {resume.personalInfo.location && (
            <>
              <span> | </span>
              <span>{resume.personalInfo.location}</span>
            </>
          )}

           {resume.personalInfo.linkedin && (
            <p>
            <strong>LinkedIn:</strong> {resume.personalInfo.linkedin}
           </p>
          )}

           {resume.personalInfo.github && (
           <p>
            <strong>GitHub:</strong> {resume.personalInfo.github}
          </p>
          )}
        </div>
      </header>

      {/* Summary */}
      {resume.summary && (
        <section className="ats-section">
          <h2>Professional Summary</h2>
          <p>{resume.summary}</p>
        </section>
      )}

      {/* Skills */}
      {resume.skills.length > 0 && (
        <section className="ats-section">
          <h2>Skills</h2>

          <ul>
            {resume.skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </section>
      )}

      {/* Experience */}
      {resume.experience.length > 0 && (
        <section className="ats-section">
          <h2>Professional Experience</h2>

          {resume.experience.map((exp, index) => (
            <div key={index} className="ats-item">
              <h3>{exp.position}</h3>

              <strong>{exp.company}</strong>

              <p>
                {exp.startDate} - {exp.endDate}
              </p>

              {exp.description && <p>{exp.description}</p>}
            </div>
          ))}
        </section>
      )}

      {/* Education */}
      {resume.education.length > 0 && (
        <section className="ats-section">
          <h2>Education</h2>

          {resume.education.map((edu, index) => (
            <div key={index} className="ats-item">
              <h3>{edu.degree}</h3>

              <strong>{edu.school}</strong>

              <p>{edu.fieldOfStudy}</p>

              <p>
                {edu.startDate} - {edu.endDate}
              </p>
            </div>
          ))}
        </section>
      )}

      {/* Projects */}
      {resume.projects.length > 0 && (
        <section className="ats-section">
          <h2>Projects</h2>

          {resume.projects.map((project, index) => (
            <div key={index} className="ats-item">
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