import type { Resume } from "../../types/resume";

interface PersonalInfoFormProps {
    resume: Resume;
    setResume: React.Dispatch<React.SetStateAction<Resume>>
}

export default function PersonalInfoForm ({
    resume,
    setResume,
}: PersonalInfoFormProps) {

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement>
     ) => {

        const {name, value} = e.target;

        setResume((prev) => ({
            ...prev,

            personalInfo: {
                ...prev.personalInfo,
                [name]: value,
            },
        }));
        };
    
    return(
        <form>

        <h2>Personal Information</h2>
         
            <div className="form-group">
            <label>Full Name</label>
            <input 
            type="text"
            name="fullName" 
            placeholder="Enter your Full Name"
            value={resume.personalInfo.fullName}
            onChange={handleChange}
            />
            </div>

            <div className="form-group">
            <label>Email</label>
            <input 
            type="email" 
            name="email"
            placeholder="Enter your Email"
            value={resume.personalInfo.email}
            onChange={handleChange}
            />
            </div>

            <div className="form-group">
            <label>Phone</label>
            <input 
            type="text"
            name="phone" 
            placeholder="Enter your Phone Number"
            value={resume.personalInfo.phone}
            onChange={handleChange}
            />
            </div>

            <div className="form-group">
            <label>Location</label>
            <input type="text"
            name="location"
            placeholder="Enter your location"
            value={resume.personalInfo.location}
            onChange={handleChange}
            />
            </div>

            <div className="form-group">
            <label>Linkedin</label>
            <input 
            type="text" 
            name="linkedin"
            placeholder="Enter your Linkedin URL"
            value={resume.personalInfo.linkedin}
            onChange={handleChange}
            />
            </div>

            <div className="form-group">
            <label>Github</label>
            <input 
            type="text"
            name="github" 
            placeholder="Enter your Github URL"
            value={resume.personalInfo.github}
            onChange={handleChange}
            />
           </div>
        </form>
    );
}