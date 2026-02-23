import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { GmailIcon, ProyectoInterface,  } from '../../interfaces/GameIcon';
import { PrevNextSlideComponent } from "../../components/prev-next-slide/prev-next-slide.component";

@Component({
  selector: 'app-portfolio-proyects-page',
  standalone: true,
  imports: [PrevNextSlideComponent],
  templateUrl: './portfolio-proyects-page.component.html',
  styleUrl: './portfolio-proyects-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PortfolioProyectsPageComponent {
  currentIndexMap = signal<Map<string, number>>(new Map());

  label = signal<GmailIcon | null>(null);
  ngOnInit() {
    this.label.set({
        icon: 'icons/icons-lateral/material-symbols-light--folder-code-outline.svg',
        label: 'Proyectos',
        route: '/portafolio/proyectos'
    });
  }

  proyecto : ProyectoInterface[] = [
    {
      image: [
        {
          src: 'img/proyectos/image.png',
          alt: 'Portafolio Personal'
        },
        {
          src: 'img/proyectos/Captura.png',
          alt: 'Portafolio Personal'
        },
        {
          src: 'img/proyectos/image2.png',
          alt: 'Portafolio Personal'
        },
        {
          src: 'img/proyectos/image3.png',
          alt: 'Portafolio Personal'
        },
        {
          src: 'img/proyectos/image4.png',
          alt: 'Portafolio Personal'
        },
        {
          src: 'img/proyectos/image5.png',
          alt: 'Portafolio Personal'
        },
        {
          src: 'img/proyectos/image6.png',
          alt: 'Portafolio Personal'
        },
        {
          src: 'img/proyectos/image7.png',
          alt: 'Portafolio Personal'
        }
      ],
      title: 'Sistema POS, Pico Dorado',
      description: 'Estudiante de Ingeniería de Sistemas con formación en desarrollo web full stack utilizando React, Node.js, TypeScript y bases de datos relacionales y NoSQL. Con conocimientos en diseño arquitectónico basado en el modelo 4+1 y arquitectura N Tier (3 capas).',
      link: [
        {
          icon: 'icons/icons-herramientas/skill-icons--github-dark.svg',
          fronted: 'https://github.com/LIPALM/pico-dorado',
          backend: 'https://github.com/LIPALM/pico-dorado-backend'
        }
      ],
      technologies: [
        {
          icon: 'icons/icons-fronted/skill-icons--html.svg', label: 'Angular'
        },
        {
          icon: 'icons/icons-backend/skill-icons--typescript.svg', label: 'TypeScript'
        },
        {
          icon: 'icons/icons-fronted/skill-icons--tailwindcss-dark.svg', label: 'Tailwind CSS'
        },
        {
          icon: 'icons/icons-fronted/skill-icons--react-dark.svg',
          label: 'React'
        },
        {
          icon: 'icons/icons-fronted/skill-icons--vuejs-dark.svg',
          label: 'Vue.js'
        },
        {
          icon: 'icons/icons-backend/skill-icons--nodejs-dark.svg',
          label: 'Node.js'
        },
        {
          icon: 'icons/icons-base-de-datos/vscode-icons--file-type-mongo.svg',
          label: 'MongoDB Atlas'
        },
        {
          icon: 'icons/icons-herramientas/skill-icons--vscode-dark.svg',
          label: 'Visual Studio Code'
        },
        {
          icon: 'icons/icons-herramientas/skill-icons--github-dark.svg',
          label: 'GitHub'
        },
        {
          icon: 'icons/icons-herramientas/skill-icons--git.svg',
          label: 'Git'
        }
      ]
    }
  ];

  nextSlide(projectTitle: string, imageLength: number) {
    const map = new Map(this.currentIndexMap());
    const current = map.get(projectTitle) || 0;
    map.set(projectTitle, (current + 1) % imageLength);
    this.currentIndexMap.set(map);
  }

  prevSlide(projectTitle: string, imageLength: number) {
    const map = new Map(this.currentIndexMap());
    const current = map.get(projectTitle) || 0;
    map.set(projectTitle, (current - 1 + imageLength) % imageLength);
    this.currentIndexMap.set(map);
  }

  goToSlide(projectTitle: string, index: number) {
    const map = new Map(this.currentIndexMap());
    map.set(projectTitle, index);
    this.currentIndexMap.set(map);
  }

  getCurrentIndex(projectTitle: string): number {
    return this.currentIndexMap().get(projectTitle) || 0;
  }
}
