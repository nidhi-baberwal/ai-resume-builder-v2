import "../styles/ResumeEditor.css";
import "../App.css";
import { useState, useEffect, useRef } from "react";
import type { Resume } from "../types/resume";
import PersonalInfoForm from "../components/resume/PersonalInfoForm";
import SummaryForm from "../components/resume/SummaryForm";
import EducationForm from "../components/resume/EducationForm";
import ExperienceForm from "../components/resume/ExperienceForm";
import SkillsForm from "../components/resume/SkillsForm";
import ProjectsForm from "../components/resume/ProjectsForm";
import "../styles/ClassicTemplate.css";
import "../styles/ModernTemplate.css";
import "../styles/ATSTemplate.css";
import "../styles/ATSScore.css";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import ResumePreview from "../components/templates/ResumePreview";
import TemplateToolbar from "../components/resume/TemplateToolbar";
import ATSScore from "../components/ats/ATSScore";
import { checkATS } from "../utils/checkATS";
import CoverLetter from "../components/coverLetter/CoverLetter";

export default function ResumeEditor(){

    const resumeRef = useRef<HTMLDivElement>(null);

    const [suggestions, setSuggestions] = useState<string[]>([]);

    const [loadingAI, setLoadingAI] = useState(false);

    const [darkMode, setDarkMode] = useState(()=> {
      return localStorage.getItem("theme") === "dark";
    });

    const [template, setTemplate] = useState<
    "classic" | "modern" | "ATS" >("classic");

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

    useEffect(() => {
      localStorage.setItem("theme", darkMode ? "dark" : "light");
    }, [darkMode]);

    const atsResult = checkATS(resume);

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

const handleImproveResume = async () => {

    try {

      setLoadingAI(true);

      const response = await fetch(
        "http://localhost:5000/api/improve-resume",
        {
          method: "POST",
          headers:{
            "Content-Type":"application/json",
          },
          body: JSON.stringify(resume),
        }
      );


      const data = await response.json();

      setSuggestions(data.suggestions);


    } catch(error){

      console.log(error);

    } finally {

      setLoadingAI(false);

    }

};

    return (
        <div className= {`container ${darkMode ? "dark" : ""}`}>

    <div className="top-toolbar">

      <div className="toolbar-left">
        <h2>Resume Builder</h2>
      </div>

      <div className="toolbar-center">
      <TemplateToolbar
      template = {template}
      setTemplate = {setTemplate}
      />
      </div>

  <div className="toolbar-right">
  <button 
  onClick={() => setDarkMode(!darkMode)}
  >
    {darkMode ? "Light Mode" : "Dark Mode"}
  </button>

    <button onClick={downloadPDF}>
    Download PDF
  </button>

  <button 
  onClick={handleImproveResume}
  disabled={loadingAI}
  >
    {loadingAI ? "Improving..." : "Improve Resume with AI"}
  </button>

</div>
</div>

<div className="main-content">

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

<div className="preview-column">
  <ATSScore 
  result={atsResult}
  />

  {suggestions.length > 0 && (

<div className="ai-suggestions">

<h3>AI Suggestions</h3>

<ul>

{suggestions.map((item, index) => (

<li key={index}>
  {item}
</li>

))}

</ul>

</div>
  )}

  <ResumePreview
  template = {template}
  resume = {resume}
  resumeRef = {resumeRef}
  />

  <CoverLetter
  resume={resume}
  />
  </div>
</div>
</div>
);
}
