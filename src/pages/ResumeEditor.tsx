import "../styles/ResumeEditor.css";
import { useState } from "react";
import type { Resume } from "../types/resume";
import PersonalInfoForm from "../resume/PersonalInfoForm";

export default function ResumeEditor(){
    const[resume, setResume] = useState<Resume>({
        id: crypto.randomUUID(),
        personalInfo: {
            fullName: "",
            email: "",
            phone: "",
            location: "",
            linkedin: "",
            github: "",
        },
        summary: "",
        skills: [],
        education: [],
        experience: [],
        projects:[],
    });

    return (
        <div className="container">

    <div className="form-panel">
        <h2>Resume Form</h2>
        <PersonalInfoForm />

    </div>

    <div className="toolbar">

    <button>Download PDF</button>

    </div>

    <div className="preview-panel">
        <h2>Resume Preview</h2>

        <h1>John Smith</h1>
        <p>Frontend Developer</p>
        <p>john@gmail.com</p>
        <p>Switzerland</p>

        <hr />

        <h3>Professional Summary</h3>
        <p>
            passionate frontend developer with experience in React, Typescript, Javascript.
        </p>

        <hr />

        <h3>Skills</h3>
        <ul>
            <li>React</li>
            <li>Typescript</li>
            <li>Javascript</li>
        </ul>
    </div>
</div>

    );
}

