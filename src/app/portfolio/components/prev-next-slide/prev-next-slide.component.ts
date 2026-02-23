import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'prev-next-slide',
  standalone: true,
  templateUrl: './prev-next-slide.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrevNextSlideComponent {
  @Output() prev = new EventEmitter<void>();
  @Output() next = new EventEmitter<void>();
}
