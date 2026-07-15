import type { Resume } from "../../types/resume";
import { useState } from "react";

interface SummaryFormProps{
 resume: Resume;
 setResume: React.Dispatch<React.SetStateAction<Resume>>;
}

export default function SummaryForm({
    resume,
    setResume,
} : SummaryFormProps ){

     const [loading, setLoading] = useState(false);

     const [ error, setError] = useState("");

    const handleChange = 
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
       setResume ({
         ...resume,
         summary: e.target.value,
       });
    };

    const generateSummary = async() => {
                try{
                    setLoading(true);
                    setError("");

                    const response = await fetch("http://localhost:5000/api/summary", {
                        method:"POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                            skills: resume.skills,
                            projects: resume.projects,
                        }),
                    });

                    const data = await response.json();

                    console.log("AI Response:", data);

                    setResume((prevResume) =>({
                        ...prevResume,
                        summary: data.summary,
                    }));

                } catch(error){
                    console.error("Error generating summary:", error);
                    setError("Unable to generate AI summary");
                } finally{
                    setLoading(false);
                }
            };

    return(
        <div>
            <h2>Personal Summary</h2>

            <div className="summary-form">
            <label>Summary</label>
            <textarea
            name="summary"
            placeholder="Enter your Summary"
            value={resume.summary}
            onChange={handleChange}
            />
            </div>

            <button onClick = {generateSummary}>
                {loading ? "Generating..." : "Generate AI summary"}
            </button>
</div>

    );
}