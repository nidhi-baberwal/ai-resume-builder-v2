import type { Resume } from "../../types/resume";

interface ExperienceFormProps{
 resume: Resume;
 setResume: React.Dispatch<React.SetStateAction<Resume>>
}

export default function ExperienceForm({
   resume,
   setResume,
}: ExperienceFormProps) {

    const addExperience = () => {
        setResume({
            ...resume,
            experience: [
                ...resume.experience,
            {
                company: "",
                position: "",
                startDate: "",
                endDate: "",
                description: ""
            },
            ],
        });
    }

    const deleteExperience = (index: number) => {
        const updatedExperience = resume.experience.filter(
            (_, i) => i!== index
        );

        setResume({
            ...resume,
            experience: updatedExperience,
        });
    };

    const handleChange = (
        index: number,
        field: string,
        value: string,
    ) => {

        const updatedExperience = [...resume.experience];

        updatedExperience[index] = {
            ...updatedExperience[index],
            [field]: value,
        };

        setResume({
            ...resume,
            experience: updatedExperience,
        });
    }
    return(
        <>
         <h2>Experience</h2>

         {resume.experience.map((exp, index) => (
            <div key = {index}>
                <input
                type="text"
                placeholder="Company"
                value={exp.company}
                onChange={(e) =>
                    handleChange(index, "company", e.target.value)}
                />

                <input
                type="text"
                placeholder="Position"
                value={exp.position}
                onChange={(e) =>
                    handleChange(index, "position", e.target.value)}
                />

                <input
                type="text"
                placeholder="Start Date"
                value={exp.startDate}
                onChange={(e) =>
                    handleChange(index, "startDate", e.target.value)}
                />

                <input
                type="text"
                placeholder="End Date"
                value={exp.endDate}
                onChange={(e) =>
                    handleChange(index, "endDate", e.target.value)}
                />

                <input
                type="text"
                placeholder="Description"
                value={exp.description}
                onChange={(e) =>
                    handleChange(index, "description", e.target.value)}
                />

                <button onClick={() => deleteExperience(index)}>
                 Delete Experience
               </button>

            </div>
         ))}

         <button onClick = {addExperience}>
            Add Experience
         </button>
        </>

    );
}