import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { GmailIcon } from '../../interfaces/GameIcon';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'button-lateral',
  standalone: true,
  imports: [RouterLinkActive, RouterLink],
  templateUrl: './button-lateral.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonLateralComponent {
  iconsLateral : GmailIcon[] = [
      {
        icon: 'icons/icons-lateral/codicon--json.svg',
        label: 'Habilidades',
        route: '/portafolio/habilidades'
      },
      {
        icon: 'icons/icons-lateral/fluent--briefcase-person-24-regular.svg',
        label: 'Experiencia',
        route: '/portafolio/experiencia'
      },
      {
        icon: 'icons/icons-lateral/material-symbols-light--folder-code-outline.svg',
        label: 'Proyectos',
        route: '/portafolio/proyectos'
      },
      {
        icon: 'icons/icons-lateral/simple-line-icons--graduation.svg',
        label: 'Formación',
        route: '/portafolio/formacion'
      },
    ]

}
