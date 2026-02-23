import { ChangeDetectionStrategy, Component } from '@angular/core';
import { GmailIcon } from '../../interfaces/GameIcon';
import { RouterLink, RouterLinkActive } from "@angular/router";
import { ButtonLateralComponent } from "../button-lateral/button-lateral.component";

@Component({
  selector: 'menu-lateral',
  standalone: true,
  imports: [ButtonLateralComponent],
  templateUrl: './menu-lateral.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuLateralComponent{}
