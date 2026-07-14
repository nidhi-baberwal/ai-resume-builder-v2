import type { Resume } from "../../types/resume";
import ClassicTemplate from "./ClassicTemplate";
import ModernTemplate from "./ModernTemplate";
import ATSTemplate from "./ATSTemplate";

interface ResumePreviewProps{
    template: "classic" | "modern" | "ATS";
    resume: Resume;
    resumeRef:React.RefObject<HTMLDivElement | null>;
}

export default function ResumePreview({
template,
resume,
resumeRef,
} : ResumePreviewProps) {
    return(
     <div className="preview-panel">
  <div ref={resumeRef}>

    {template === "classic" && (
      <ClassicTemplate resume={resume} />
    )}

    {template === "modern" && (
      <ModernTemplate resume={resume} />
    )}

    {template === "ATS" && (
      <ATSTemplate resume={resume} />
    )}

  </div>
  </div>
    );
}