import { useState } from "react";
import type { Resume } from "../types/resume";

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
        setResume({
            ...resume,
            skills: [...resume.skills, newSkill],
        });

        setNewSkill("");
    };

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
        </div>
        </>
    )
}