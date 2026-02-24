import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ExperienciaInterface, GmailIcon } from '../../interfaces/GameIcon';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-portfolio-experience-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio-experience-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PortfolioExperiencePageComponent {

  label = signal<GmailIcon | null>(null);

  ngOnInit() {
    this.label.set({
      icon: 'icons/icons-lateral/fluent--briefcase-person-24-regular.svg',
      label: 'Experiencia',
      route: '/portafolio/experiencia'
    });
  }

  experiencias: ExperienciaInterface[] = [
    {
      tipo: 'proyecto',
      titulo: 'Sistema POS – Pico Dorado',
      subtitulo: 'Proyecto Académico Full Stack',
      fechaInicio: '2024',
      fechaFin: '2025',
      descripcion: 'Desarrollo de un sistema de punto de venta completo para una pollería local. Implementé el frontend con React y el backend con Node.js y Express, utilizando MongoDB Atlas como base de datos. Apliqué arquitectura N-Tier (3 capas) y diseño arquitectónico basado en el modelo 4+1.',
      tecnologias: ['React', 'Node.js', 'TypeScript', 'MongoDB', 'Express', 'Tailwind CSS'],
      link: 'https://github.com/LIPALM/pico-dorado'
    },
    {
      tipo: 'proyecto',
      titulo: 'Portafolio Personal',
      subtitulo: 'Proyecto Personal',
      fechaInicio: '2025',
      fechaFin: 'Presente',
      descripcion: 'Diseño y desarrollo de portafolio personal con Angular 18, Tailwind CSS v4 y DaisyUI. Implementé animaciones CSS, dark mode, carrusel de imágenes y navegación lateral con Angular Router.',
      tecnologias: ['Angular 18', 'Tailwind CSS', 'DaisyUI', 'TypeScript'],
      link: 'https://github.com/LIPALM/my-portfolio'
    },
    {
      tipo: 'academica',
      titulo: 'Prácticas Empresariales – Depto. TI',
      subtitulo: 'Universidad Adventista de Bolivia',
      fechaInicio: '2025',
      fechaFin: 'Presente',
      descripcion: 'Postulación a prácticas profesionales en el Departamento de Desarrollo TI de la Universidad Adventista de Bolivia. Orientado a contribuir en la mejora y optimización de sistemas institucionales aplicando metodologías ágiles (SMPC) y conocimientos en desarrollo web full stack.',
      tecnologias: ['Scrum', 'Full Stack', 'Gestión de proyectos'],
    },
    {
      tipo: 'certificacion',
      titulo: 'Scrum Master Professional Certificate',
      subtitulo: 'CertiProf',
      fechaInicio: '2023',
      fechaFin: '2023',
      descripcion: 'Certificación profesional en metodologías ágiles Scrum. Adquirí competencias para gestionar sprints, facilitar ceremonias ágiles y liderar equipos de desarrollo en entornos colaborativos.',
      tecnologias: ['Scrum', 'Agile', 'Sprint Planning'],
    },
    {
      tipo: 'certificacion',
      titulo: 'HTML & CSS desde Cero',
      subtitulo: 'Midudev',
      fechaInicio: '2025',
      fechaFin: '2025',
      descripcion: 'Curso completo de HTML5 y CSS3 con evaluaciones y examen final. Profundicé en fundamentos de maquetación web, flexbox, grid y animaciones CSS.',
      tecnologias: ['HTML5', 'CSS3', 'Flexbox', 'Grid'],
    },
  ];

  getBadgeColor(tipo: string): string {
    switch (tipo) {
      case 'proyecto': return 'bg-blue-50 text-blue-600 ring-1 ring-blue-200';
      case 'academica': return 'bg-emerald-50 text-emerald-600 ring-1 ring-emerald-200';
      case 'certificacion': return 'bg-amber-50 text-amber-600 ring-1 ring-amber-200';
      default: return 'bg-gray-50 text-gray-600 ring-1 ring-gray-200';
    }
  }

  getBadgeLabel(tipo: string): string {
    switch (tipo) {
      case 'proyecto': return 'Proyecto';
      case 'academica': return 'Académico';
      case 'certificacion': return 'Certificación';
      default: return tipo;
    }
  }

  getDotColor(tipo: string): string {
    switch (tipo) {
      case 'proyecto': return 'bg-blue-500';
      case 'academica': return 'bg-emerald-500';
      case 'certificacion': return 'bg-amber-500';
      default: return 'bg-gray-400';
    }
  }
}
