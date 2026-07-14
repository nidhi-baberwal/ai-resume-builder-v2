import type { ATSResult } from "../../utils/checkATS";

type Props= {
    result: ATSResult;
};

export default function ATSScore({result} : Props) {
    return(
        <div className="ats-score-card">
            <h2>ATS Score</h2>

            <div className="ats-score">
                {result.score}/100;
            </div>

            <h3>Suggestions</h3>

            {result.suggestions.length === 0 ? (
                <p className="success-message">
                    Great! your resume looks ATS-friendly.
                </p>) : (
                    <ul className="suggestions-list">
                        {result.suggestions.map((suggestion, index) => (
                            <li key={index}>{suggestion}</li>
                        ))}
                    </ul>
                )}
            </div>
    );
}