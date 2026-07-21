import { useState } from "react";
import type { Resume } from "../../types/resume";
import "../../styles/CoverLetter.css";

interface CoverLetterProps {
  resume: Resume;
}

export default function CoverLetter({
  resume,
}: CoverLetterProps) {
  const [company, setCompany] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [coverLetter, setCoverLetter] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGenerateCoverLetter = async () => {
    console.log(resume);
    console.log(company);
    console.log(jobTitle);

    setLoading(true);

    setTimeout(() => {
      setCoverLetter(
        "Your AI-generated cover letter will appear here."
      );
      setLoading(false);
    }, 1000);
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(coverLetter);
      alert("Cover letter copied!");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="cover-letter-container">
      <h2>AI Cover Letter Generator</h2>

      <div className="cover-letter-form">
        <label>Company Name</label>
        <input
          type="text"
          placeholder="Enter company name"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />

        <label>Job Title</label>
        <input
          type="text"
          placeholder="Enter job title"
          value={jobTitle}
          onChange={(e) => setJobTitle(e.target.value)}
        />

        <button
          onClick={handleGenerateCoverLetter}
          disabled={loading}
        >
          {loading
            ? "Generating..."
            : "Generate Cover Letter"}
        </button>
      </div>

      {coverLetter && (
        <div className="cover-letter-output">
          <h3>Generated Cover Letter</h3>

          <textarea
            value={coverLetter}
            readOnly
            rows={15}
          />

          <button onClick={handleCopy}>
            Copy Cover Letter
          </button>
        </div>
      )}
    </div>
  );
}