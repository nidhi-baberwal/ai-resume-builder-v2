export interface PersonalInfo {
    fullName: string;
    email: string;
    phone: string;
    location: string;
    linkedin: string;
    github: string;
}

export interface Education {
  school: string;
  degree: string;
  fieldOfStudy: string;
  startDate: string;
  endDate: string;
}

export interface Experience {
    company: string;
    position: string;
    startDate: string;
    endDate: string;
    description: string;
}

export interface Project {
  title: string;
  description: string;
  technologies: string;
  github: string;
}

export interface Resume {
    id: string;
    personalInfo: PersonalInfo;

    summary: string;

    skills: string[];

    experience: Experience[];

    education: Education[];

    projects: Project[];
}