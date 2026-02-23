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
      title: 'MiduDev',
      description: 'Participación en la conferencia JSConf Chile Midu - 2024. Conectando con desarrolladores de toda América Latina'
    },
    {
      image: 'img/certificaciones/ccs.png',
      title: 'MiduDev',
      description: 'Descripción de esta certificación'
    },
    {
      image: 'img/certificaciones/javascript-2023-2024.png',
      title: 'MiduDev',
      description: 'Descripción de esta certificación'
    },
    {
      image: 'img/certificaciones/scrum-profesional.png',
      title: 'Scrum Master',
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
