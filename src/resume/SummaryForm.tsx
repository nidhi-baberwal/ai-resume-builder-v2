import type { Resume } from "../types/resume";

interface SummaryFormProps{
 resume: Resume;
 setResume: React.Dispatch<React.SetStateAction<Resume>>;
}

export default function SummaryForm({
    resume,
    setResume,
} : SummaryFormProps ){

    const handleChange = 
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
       setResume ({
         ...resume,
         summary: e.target.value,
       })
    }
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

        </div>

    );
}