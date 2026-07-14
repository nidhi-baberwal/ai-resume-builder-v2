import { useState } from "react";
import type { Resume } from "../../types/resume";

interface SkillsFormProps{
    resume: Resume;
    setResume: React.Dispatch<React.SetStateAction<Resume>>;
}

export default function SkillsForm({
    resume,
    setResume,
}: SkillsFormProps) {

    const[newSkill, setNewSkill] = useState("");

    const addSkill = () => {
        if(!newSkill.trim()) return;
        setResume({
            ...resume,
            skills: [...resume.skills, newSkill],
        });

        setNewSkill("");
    };

    const deleteSkill = (index: number) => {
        setResume({
            ...resume,
            skills: resume.skills.filter(
                (_, i) => i!== index)
        })
    }

    return(
        <>
        <h2>Skills</h2>

        <div>
            <label>Skills</label>
            <input
            type="text"
            placeholder="Skills"
            name="skills"
            value={newSkill}
            onChange={(e) => setNewSkill(e.target.value)}
            />

            <button onClick = {addSkill}>
                Add Skills
            </button>

           <ul>
                {resume.skills.map((skill, index) => (
                    <li key={index}>
                        {skill}
                        
                <button onClick={() => deleteSkill(index)}>
                    Delete
                </button>
                </li>
                ))}
                </ul>
        </div>
        </>
    );
}