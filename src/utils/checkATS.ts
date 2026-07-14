import type { Resume } from "../types/resume";

export type ATSResult = {
  score: number;
  suggestions: string[];
};

export function checkATS(resume: Resume): ATSResult {
  let score = 0;
  const suggestions: string[] = [];

  // Personal Information
  if (resume.personalInfo.fullName.trim()) {
    score += 5;
  } else {
    suggestions.push("Add your full name.");
  }

  if (resume.personalInfo.email.trim()) {
    score += 5;
  } else {
    suggestions.push("Add your email address.");
  }

  if (resume.personalInfo.phone.trim()) {
    score += 5;
  } else {
    suggestions.push("Add your phone number.");
  }

  if (resume.personalInfo.location.trim()) {
    score += 5;
  } else {
    suggestions.push("Add your location.");
  }

  if (resume.personalInfo.linkedin.trim()) {
    score += 5;
  } else {
    suggestions.push("Add your LinkedIn profile.");
  }

  if (resume.personalInfo.github.trim()) {
    score += 5;
  } else {
    suggestions.push("Add your GitHub profile.");
  }

  // Summary
  if (resume.summary.trim().length >= 50) {
    score += 15;
  } else {
    suggestions.push("Write a professional summary (at least 50 characters).");
  }

  // Skills
  if (resume.skills.length >= 5) {
    score += 20;
  } else {
    suggestions.push("Add at least 5 skills.");
  }

  // Education
  if (resume.education.length > 0) {
    score += 10;
  } else {
    suggestions.push("Add your education.");
  }

  // Experience
  if (resume.experience.length > 0) {
    score += 20;
  } else {
    suggestions.push("Add your work experience.");
  }

  // Projects
  if (resume.projects.length > 0) {
    score += 10;
  } else {
    suggestions.push("Add at least one project.");
  }

  return {
    score,
    suggestions,
  };
}