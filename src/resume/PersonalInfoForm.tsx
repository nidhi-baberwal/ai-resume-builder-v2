import type { Resume } from "../types/resume";

export default function PersonalInfoForm (){
    return(
        <form>

        <h2>Personal Information</h2>
         
            <div className="form-group">
            <label>Full Name</label>
            <input 
            type="text" 
            placeholder="Enter your Full Name"
            />
            </div>

            <div className="form-group">
            <label>Email</label>
            <input 
            type="email" 
            placeholder="Enter your Email"
            />
            </div>

            <div className="form-group">
            <label>Phone</label>
            <input 
            type="text" 
            placeholder="Enter your Phone Number"
            />
            </div>

            <div className="form-group">
            <label>Location</label>
            <input type="text"
            placeholder="Enter your location"
            />
            </div>

            <div className="form-group">
            <label>Linkedin</label>
            <input 
            type="text" 
            placeholder="Enter your Linkedin URL"
            />
            </div>

            <div className="form-group">
            <label>Github</label>
            <input type="text" 
            placeholder="Enter your Github URL"
            />
           </div>
        </form>
    );
}