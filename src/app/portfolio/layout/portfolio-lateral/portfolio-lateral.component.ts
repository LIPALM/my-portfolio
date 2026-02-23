import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MenuLateralComponent } from "../../components/menu-lateral/menu-lateral.component";
import { RouterOutlet } from "@angular/router";
import { GmailIcon } from '../../interfaces/GameIcon';

@Component({
  selector: 'app-portfolio-lateral',
  standalone: true,
  imports: [RouterOutlet, MenuLateralComponent],
  templateUrl: './portfolio-lateral.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PortfolioLateralComponent {



}
