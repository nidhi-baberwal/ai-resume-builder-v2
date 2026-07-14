import type { Resume } from "../../types/resume";

interface ProjectsFormProps {
  resume: Resume;
  setResume: React.Dispatch<React.SetStateAction<Resume>>;
}

export default function ProjectsForm({
  resume,
  setResume,
}: ProjectsFormProps) {

  const addProject = () => {
    setResume({
      ...resume,
      projects: [
        ...resume.projects,
        {
          title: "",
          description: "",
          technologies: "",
          github: "",
        },
      ],
    });
  };

  const deleteProject = (index: number) => {
    setResume({
        ...resume,
        projects: resume.projects.filter(
            (_, i) => i !== index 
        )
    });
  }

  const handleChange = (
    index: number,
    field: string,
    value: string
  ) => {
    const updatedProjects = [...resume.projects];

    updatedProjects[index] = {
      ...updatedProjects[index],
      [field]: value,
    };

    setResume({
      ...resume,
      projects: updatedProjects,
    });
  };

  return (
    <>
      <h2>Projects</h2>

      {resume.projects.map((project, index) => (
        <div key={index}>
          <input
            type="text"
            placeholder="Project Title"
            value={project.title}
            onChange={(e) =>
              handleChange(index, "title", e.target.value)
            }
          />

          <input
            type="text"
            placeholder="Description"
            value={project.description}
            onChange={(e) =>
              handleChange(index, "description", e.target.value)
            }
          />

          <input
            type="text"
            placeholder="Technologies"
            value={project.technologies}
            onChange={(e) =>
              handleChange(index, "technologies", e.target.value)
            }
          />

          <input
            type="text"
            placeholder="Github URL"
            value={project.github}
            onChange={(e) =>
              handleChange(index, "github", e.target.value)
            }
          />

          <button onClick={() => deleteProject(index)}>
            Delete Project
          </button>
        </div>
      ))}

      <button onClick={addProject}>
        Add Project
      </button>
    </>
  );
}