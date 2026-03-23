import { ChangeDetectionStrategy, Component, computed, isSignal, signal } from '@angular/core';
import { CertificationInterface, GmailIcon } from '../../interfaces/GameIcon';
import { PrevNextSlideComponent } from "../../components/prev-next-slide/prev-next-slide.component";

@Component({
  selector: 'app-portfolio-certification-page',
  imports: [PrevNextSlideComponent],
  templateUrl: './portfolio-certification-page.component.html',
  styleUrl: './portfolio-certification-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PortfolioCertificationPageComponent {
  currentIndex = signal(0);

  label = signal<GmailIcon | null>(null);

  ngOnInit() {
    this.label.set({
      icon: 'icons/icons-lateral/codicon--verified.svg',
      label: 'Certificaciones',
      route: '/portafolio/certificaciones'
    });
  }

  certifications: CertificationInterface[] = [
    {
      image: 'img/certificaciones/html.png',
      title: 'HTML',
      description: 'Participación en la conferencia JSConf Chile Midu - 2024. Conectando con desarrolladores de toda América Latina'
    },
    {
      image: 'img/certificaciones/ccs.png',
      title: 'CSS',
      description: 'Descripción de esta certificación'
    },
    {
      image: 'img/certificaciones/javascript-2023-2024.png',
      title: 'JavaScript 2023-2024',
      description: 'Obtención de la certificación JavaScript 2023-2024 por parte de MiduDev, demostrando habilidades avanzadas en programación JavaScript y desarrollo web.'
    },
    {
      image: 'img/certificaciones/CSS_grid.png',
      title: 'CSS Grid',
      description: 'Obtención de la certificación CSS Grid por parte de MiduDev, demostrando habilidades avanzadas en diseño web y maquetación utilizando CSS Grid Layout.'
    },
    {
      image: 'img/certificaciones/tailwind-desde-cero.png',
      title: 'Tailwind desde Cero',
      description: 'Obtención de la certificación Tailwind desde Cero por parte de MiduDev, demostrando habilidades avanzadas en diseño web y maquetación utilizando Tailwind CSS.'
    },
    {
      image: 'img/certificaciones/scrum-profesional.png',
      title: 'Scrum Master',
      description: 'Descripción de esta certificación'
    },
    {
      image: 'img/certificaciones/Certificado_Expocyt_2023-1.png',
      title: 'Expocyt 2023',
      description: 'Descripción de esta certificación'
    }
  ];

  nextSlide() {
    this.currentIndex.set((this.currentIndex() + 1) % this.certifications.length);
  }

  prevSlide() {
    this.currentIndex.set((this.currentIndex() - 1 + this.certifications.length) % this.certifications.length);
  }

  goToSlide(index: number) {
    this.currentIndex.set(index);
  }
}

export default PortfolioCertificationPageComponent;
