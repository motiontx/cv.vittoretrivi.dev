import { heading } from "./heading";
import { skills } from "./skills";
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
    display: "Descargar CV",
    url: "resumes/es_resume.pdf",
    filename: "vittorio_retrivi_es_cv.pdf",
  },
  skills: {
    title: "Conocimientos",
    skills: skills,
  },
  languages: {
    title: "Idiomas",
    languages: languages,
  },
  jobs: {
    title: "Experiencia",
    jobs: jobs,
  },
  studies: {
    title: "Educación",
    courses: studies,
  },
  courses: {
    title: "Cursos",
    courses: courses,
  },
  contact,
  links,
};

export default data;
