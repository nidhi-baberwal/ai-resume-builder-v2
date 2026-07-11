import "../styles/ResumeEditor.css";
import "../App.css";
import { useState, useEffect, useRef } from "react";
import type { Resume } from "../types/resume";
import PersonalInfoForm from "../resume/PersonalInfoForm";
import SummaryForm from "../resume/SummaryForm";
import EducationForm from "../resume/EducationForm";
import ExperienceForm from "../resume/ExperienceForm";
import SkillsForm from "../resume/SkillsForm";
import ProjectsForm from "../resume/ProjectsForm";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export default function ResumeEditor(){

    const resumeRef = useRef<HTMLDivElement>(null);

    const[resume, setResume] = useState<Resume>(() => {
        const savedResume = localStorage.getItem("resume");

        if(savedResume){
            return JSON.parse(savedResume);
        }

        return {
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
     };
    });

    useEffect(() => {
     localStorage.setItem("resume", JSON.stringify(resume));
    }, [resume]);

     const downloadPDF = async () => {
  if (!resumeRef.current) return;

  const canvas = await html2canvas(
    resumeRef.current
  );

  const imgData = canvas.toDataURL("image/png");

  const pdf = new jsPDF(
    "p",
    "mm",
    "a4"
  );

  const pdfWidth = pdf.internal.pageSize.getWidth();

  const pdfHeight =
    (canvas.height * pdfWidth) /
    canvas.width;

  pdf.addImage(
    imgData,
    "PNG",
    0,
    0,
    pdfWidth,
    pdfHeight
  );

  pdf.save("resume.pdf");
};

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

        <ExperienceForm
        resume = {resume}
        setResume = {setResume}
        />

        <SkillsForm
        resume = {resume}
        setResume = {setResume}
        />

        <ProjectsForm
        resume = {resume}
        setResume = {setResume}
        />

    </div>

    <div className="toolbar">

    <button onClick = {downloadPDF}>
        Download PDF
        </button>

    </div>

    <div className="preview-panel">
        <h2>Resume Preview</h2>

        <div ref = {resumeRef}>

        <div className="resume-header">

        <h1>{resume.personalInfo.fullName}</h1>

        <p>{resume.personalInfo.email}</p>

        <p>{resume.personalInfo.phone}</p>

        <p>{resume.personalInfo.location}</p>

        <p>{resume.personalInfo.linkedin}</p>

        <p>{resume.personalInfo.github}</p>

        </div>

        <div className="resume-content">

        <h3>{resume.summary}</h3>

         <div className="resume-section"> 
        <h2>Education</h2>

        {resume.education.map((edu, index) => (
        <div className="education-card" key={index}>
        <h4>{edu.degree}</h4>
        <p>{edu.school}</p>
        <p>{edu.fieldOfStudy}</p>
        <p>
        {edu.startDate} - {edu.endDate}
        </p>
       </div>
        ))}
       </div>

       <div className="resume-section">
       <h2>Experience</h2>

       {resume.experience.map((exp, index) => (
        <div  className="experience-card" key={index}>
          <h4>{exp.company}</h4>
          <p>{exp.position}</p>
          <p>
            {exp.startDate} - {exp.endDate}
            </p>
            <p>{exp.description}</p>
        </div>
       ))}
       </div>


       <div className="resume-section">
       <h2>Skills</h2>

        <ul>
       {resume.skills.map((skill, index) => (
        <span className="skill-tag" key={index}>
            {skill}
            </span>
            ))}
       </ul>
       </div>

    <div className="resume-section">
       <h2>Projects</h2>

       
        {resume.projects.map((project, index) => (
            <div className="project-card" key={index}>
                <h4>{project.title}</h4>
                <p>{project.description}</p>
                <p>{project.technologies}</p>
                <p>{project.github}</p>
            </div>
        ))}
       
       </div>

       </div>

    </div>
    </div>
</div>

    );
}

