import { heading } from "./heading";
import { skills } from "./skills";
import { qualities } from "./qualities";
import { languages } from "./languages";
import { jobs } from "./jobs";
import { studies } from "./studies";
import { courses } from "./courses";
import { contact } from "./contact";
import { links } from "./links";
import { meta } from "./meta";

const data = {
  meta,
  heading,
  cv: {
    display: "Download CV",
    url: "resumes/en_resume.pdf",
    filename: "vittorio_retrivi_en_cv.pdf",
  },
  skills: {
    title: "Skills",
    skills: skills,
  },
  qualities: {
    title: "Soft Skills",
    qualities: qualities,
  },
  languages: {
    title: "Languages",
    languages: languages,
  },
  jobs: {
    title: "Experience",
    jobs: jobs,
  },
  studies: {
    title: "Education",
    courses: studies,
  },
  courses: {
    title: "Courses",
    courses: courses,
  },
  contact,
  links,
};

export default data;
