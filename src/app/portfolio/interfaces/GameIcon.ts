export interface GmailIcon {
  icon: string;
  label: string;
  route: string;
}

export interface FrontedIconInterface {
  icon : string;
  label : string;
}

export interface CategoriesInteface {
  title : string;
  icons : FrontedIconInterface[];
}

export interface CertificationInterface {
  image: string;
  title: string;
  description: string;
}


export interface FormacionInterface {
  titleCarreer: string;
  titleUniversity: string;
  fechaInicio: number;
  fechaFin: number;
  Description: string;
}

export interface ProjectImageInterface {
  src: string;
  alt: string;
}

export interface ProyectoInterface {
  image: ProjectImageInterface[];
  title: string;
  description: string;
  link: GitHubLinkInterface[];
  technologies: FrontedIconInterface[];
}


export interface GitHubLinkInterface {
  icon: string;
  fronted: string;
  backend: string;
}

export interface ExperienciaInterface {
  tipo: 'academica' | 'proyecto' | 'certificacion';
  titulo: string;
  subtitulo: string;
  fechaInicio: string;
  fechaFin: string;
  descripcion: string;
  tecnologias?: string[];
  link?: string;
}
