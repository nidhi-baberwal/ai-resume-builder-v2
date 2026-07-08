import { useState } from "react";
import type { Resume } from "../types/resume";

interface EducationFormProps {
  resume: Resume;
  setResume: React.Dispatch<React.SetStateAction<Resume>>;
}

export default function EducationForm({
  resume,
  setResume,
}: EducationFormProps) {
  const [newEducation, setNewEducation] = useState({
    school: "",
    degree: "",
    fieldOfStudy: "",
    startDate: "",
    endDate: "",
  });

  const addEducation = () => {
    if (
      !newEducation.school.trim() ||
      !newEducation.degree.trim()
    ) {
      return;
    }

    setResume({
      ...resume,
      education: [...resume.education, newEducation],
    });

    setNewEducation({
      school: "",
      degree: "",
      fieldOfStudy: "",
      startDate: "",
      endDate: "",
    });
  };

  return (
    <>
      <h2>Education</h2>

      <div>
        <input
          type="text"
          placeholder="School"
          value={newEducation.school}
          onChange={(e) =>
            setNewEducation({
              ...newEducation,
              school: e.target.value,
            })
          }
        />

        <input
          type="text"
          placeholder="Degree"
          value={newEducation.degree}
          onChange={(e) =>
            setNewEducation({
              ...newEducation,
              degree: e.target.value,
            })
          }
        />

        <input
          type="text"
          placeholder="Field of Study"
          value={newEducation.fieldOfStudy}
          onChange={(e) =>
            setNewEducation({
              ...newEducation,
              fieldOfStudy: e.target.value,
            })
          }
        />

        <input
          type="text"
          placeholder="Start Date"
          value={newEducation.startDate}
          onChange={(e) =>
            setNewEducation({
              ...newEducation,
              startDate: e.target.value,
            })
          }
        />

        <input
          type="text"
          placeholder="End Date"
          value={newEducation.endDate}
          onChange={(e) =>
            setNewEducation({
              ...newEducation,
              endDate: e.target.value,
            })
          }
        />

        <button onClick={addEducation}>
          Add Education
        </button>

        <ul>
          {resume.education.map((edu, index) => (
            <li key={index}>
              <strong>{edu.degree}</strong> - {edu.school}
              <br />
              {edu.fieldOfStudy}
              <br />
              {edu.startDate} - {edu.endDate}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}