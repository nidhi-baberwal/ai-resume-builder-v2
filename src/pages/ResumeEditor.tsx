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
import ClassicTemplate from "../templates/ClassicTemplate";
import ModernTemplate from "../templates/ModernTemplate";
import "../styles/ClassicTemplate.css";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export default function ResumeEditor(){

    const resumeRef = useRef<HTMLDivElement>(null);

    const [template, setTemplate] = useState<
    "classic" | "modern" >("classic");

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

  <button
    onClick={() => setTemplate("classic")}
  >
    Classic
  </button>

  <button
    onClick={() => setTemplate("modern")}
  >
    Modern
  </button>

  <button onClick={downloadPDF}>
    Download PDF
  </button>

</div>

 <div className="preview-panel">
  <div ref={resumeRef}>

    {template === "classic" && (
      <ClassicTemplate resume={resume} />
    )}

    {template === "modern" && (
      <ModernTemplate resume={resume} />
    )}

  </div>
</div>
</div>
);
}

