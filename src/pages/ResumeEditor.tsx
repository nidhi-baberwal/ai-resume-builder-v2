import "../styles/ResumeEditor.css";
import { useState } from "react";
import type { Resume } from "../types/resume";
import PersonalInfoForm from "../resume/PersonalInfoForm";
import SummaryForm from "../resume/SummaryForm";
import EducationForm from "../resume/EducationForm";

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
        <PersonalInfoForm 
        resume = {resume}
        setResume = {setResume}
        />

        <SummaryForm
        resume = {resume}
        setResume = {setResume}
        />

        <EducationForm
        resume = {resume}
        setResume = {setResume}
        />

    </div>

    <div className="toolbar">

    <button>Download PDF</button>

    </div>

    <div className="preview-panel">
        <h2>Resume Preview</h2>

        <h1>{resume.personalInfo.fullName}</h1>

        <p>{resume.personalInfo.email}</p>

        <p>{resume.personalInfo.phone}</p>

        <p>{resume.personalInfo.location}</p>

        <p>{resume.personalInfo.linkedin}</p>

        <p>{resume.personalInfo.github}</p>

        <hr />

        <h3>{resume.summary}</h3>
       
        <hr />

        <h2>Education</h2>

        <h2>Education</h2>

        {resume.education.map((edu, index) => (
        <div key={index}>
        <h4>{edu.degree}</h4>
        <p>{edu.school}</p>
        <p>{edu.fieldOfStudy}</p>
        <p>
        {edu.startDate} - {edu.endDate}
        </p>
        <br />
       </div>
        ))}

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

