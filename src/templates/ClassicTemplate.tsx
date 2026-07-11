import type { Resume } from "../types/resume";

type Props = {
  resume: Resume;
};

export default function ClassicTemplate({
  resume,
}: Props) {
  return (
    <div className="resume-card">

      <div className="resume-name">
        {resume.personalInfo.fullName || "Your Name"}
      </div>

      <div className="contact-info">
        <span>{resume.personalInfo.email}</span>
        <span> | </span>

        <span>{resume.personalInfo.phone}</span>
        <span> | </span>

        <span>{resume.personalInfo.location}</span>
        <span> | </span>

        <span>{resume.personalInfo.linkedin}</span>
        <span> | </span>

        <span>{resume.personalInfo.github}</span>
      </div>

      <div className="section">
        <h2>Summary</h2>
        <p>{resume.summary}</p>
      </div>

      <div className="section">
        <h2>Skills</h2>

        <ul>
          {resume.skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>

      <div className="section">
        <h2>Education</h2>

        {resume.education.map((edu, index) => (
          <div
            key={index}
            className="resume-item"
          >
            <h4>{edu.degree}</h4>

            <p>{edu.school}</p>

            <p>{edu.fieldOfStudy}</p>

            <p>
              {edu.startDate} - {edu.endDate}
            </p>
          </div>
        ))}
      </div>

      <div className="section">
        <h2>Experience</h2>

        {resume.experience.map((exp, index) => (
          <div
            key={index}
            className="resume-item"
          >
            <h4>{exp.position}</h4>

            <p>{exp.company}</p>

            <p>
              {exp.startDate} - {exp.endDate}
            </p>

            <p>{exp.description}</p>
          </div>
        ))}
      </div>

      <div className="section">
        <h2>Projects</h2>

        {resume.projects.map((project, index) => (
          <div
            key={index}
            className="resume-item"
          >
            <h4>{project.title}</h4>

            <p>{project.description}</p>

            <p>{project.technologies}</p>

            <p>{project.github}</p>
          </div>
        ))}
      </div>

    </div>
  );
}