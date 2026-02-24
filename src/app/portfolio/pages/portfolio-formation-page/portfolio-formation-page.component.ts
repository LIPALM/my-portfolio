import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormacionInterface, GmailIcon } from '../../interfaces/GameIcon';

@Component({
  selector: 'app-portfolio-formation-page',
  standalone: true,
  imports: [],
  templateUrl: './portfolio-formation-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PortfolioFormationPageComponent {

  label = signal<GmailIcon | null>(null);

  ngOnInit() {
    this.label.set({
      icon: 'icons/icons-lateral/simple-line-icons--graduation.svg',
      label: 'Formación',
      route: '/portafolio/formacion'
    })
  }

  formacion : FormacionInterface[] = [
    {
      titleCarreer: 'Ingeniería en Sistemas',
      titleUniversity: 'Universidad Adventista de Bolivia',
      fechaInicio: 2021,
      fechaFin: 2026,
      Description: ' Durante mi formación académica, he desarrollado competencias en desarrollo de software, gestión de bases de datos y gestión de proyectos. Además, cuento con la certificación Scrum Master Professional Certificate (SMPC), lo que me permite comprender y aplicar principios de metodologías ágiles en entornos colaborativos. Asimismo, he fortalecido habilidades como la comunicación efectiva, el trabajo en equipo y la resolución de problemas, fundamentales en el desarrollo de soluciones tecnológicas eficientes.'
    }
  ]

}
