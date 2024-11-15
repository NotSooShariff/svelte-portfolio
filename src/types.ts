export interface Tool {
  name: string;
  skills: string[];
}

export interface Project {
  title: string;
  description: string;
  link: string;
  technologies: string[];
}

export interface Education {
  degree: string;
  school: string;
  year: string;
}

export interface Research {
  title: string;
  publication: string;
  year: string;
  link: string;
}