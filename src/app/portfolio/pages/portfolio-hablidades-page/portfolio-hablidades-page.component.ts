import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { CategoriesInteface, FrontedIconInterface, GmailIcon } from '../../interfaces/GameIcon';

@Component({
  selector: 'app-portfolio-hablidades-page',
  standalone: true,
  imports: [],
  templateUrl: './portfolio-hablidades-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PortfolioHablidadesPageComponent {

  label = signal<GmailIcon | null>(null);

  frontedInterface : FrontedIconInterface[] = [
    {
      icon: 'icons/icons-fronted/skill-icons--html.svg',
      label: 'HTML'
    },
    {
      icon: 'icons/icons-fronted/skill-icons--css.svg',
      label: 'CSS'
    },
    {
      icon: 'icons/icons-fronted/skill-icons--javascript.svg',
      label: 'JavaScript'
    },
    {
      icon: 'icons/icons-fronted/skill-icons--angular-dark.svg',
      label: 'Angular'
    },
    {
      icon: 'icons/icons-fronted/skill-icons--react-dark.svg',
      label: 'React'
    },
    {
      icon: 'icons/icons-fronted/skill-icons--vuejs-dark.svg',
      label: 'Vue.js'
    }
  ];


  backendInterface : FrontedIconInterface[] = [
    {
      icon: 'icons/icons-backend/skill-icons--python-dark.svg',
      label: 'Python'
    },
    {
      icon: 'icons/icons-backend/skill-icons--typescript.svg',
      label: 'Typescript'
    },
    {
      icon: 'icons/icons-backend/skill-icons--nodejs-dark.svg',
      label: 'Node.js'
    },
    {
      icon: 'icons/icons-backend/skill-icons--expressjs-dark.svg',
      label: 'Express'
    },
    {
      icon: 'icons/icons-backend/skill-icons--cs.svg',
      label: 'C#'
    },
    {
      icon: 'icons/icons-backend/skill-icons--dotnet.svg',
      label: '.Net'
    }
  ];


  BaseDeDatoInterface : FrontedIconInterface[] = [
    {
      icon: 'icons/icons-base-de-datos/skill-icons--mysql-dark.svg',
      label: 'MySQL'
    },
    {
      icon: 'icons/icons-base-de-datos/vscode-icons--file-type-mongo.svg',
      label: 'MongoDB'
    },
    {
      icon: 'icons/icons-base-de-datos/skill-icons--postgresql-dark.svg',
      label: 'PostgreSQL'
    }
  ]

  herramientasInterface : FrontedIconInterface[] = [
    {
      icon: 'icons/icons-herramientas/skill-icons--git.svg',
      label: 'Git'
    },
    {
      icon: 'icons/icons-herramientas/skill-icons--github-dark.svg',
      label: 'GitHub'
    },
    {
      icon: 'icons/icons-herramientas/skill-icons--docker.svg',
      label: 'Docker'
    },
    {
      icon: 'icons/icons-herramientas/skill-icons--figma-dark.svg',
      label: 'Figma'
    },
    {
      icon: 'icons/icons-herramientas/skill-icons--vscode-dark.svg',
      label: 'VSCode'
    },
    {
      icon: 'icons/icons-herramientas/skill-icons--rider-dark.svg',
      label: 'Rider'
    },
    {
      icon: 'icons/icons-herramientas/skill-icons--postman.svg',
      label: 'Postman'
    }
  ];

  categoriesInterface : CategoriesInteface[] = [
    {
      title: 'Fronted',
      icons: this.frontedInterface
    },
    {
      title: 'Backend',
      icons: this.backendInterface
    },
    {
      title: 'Base de datos',
      icons: this.BaseDeDatoInterface
    },
    {
      title: 'Herramientas',
      icons: this.herramientasInterface
    }

  ];


  ngOnInit() {
    this.label.set({
      icon: 'icons/icons-lateral/codicon--json.svg',
      label: 'Habilidades',
      route: '/portafolio/habilidades'
    });
  }
}
