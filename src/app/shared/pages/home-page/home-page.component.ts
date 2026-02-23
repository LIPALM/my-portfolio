import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { GmailIcon } from '../../../portfolio/interfaces/GameIcon';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent {

  // icons : GmailIcon[] = [
  //   {
  //     icon: 'fa-regular fa-envelope',
  //     label: 'Gmail'
  //   }
  // ]

}
