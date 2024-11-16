import { Component } from '@angular/core';
import {Button} from "primeng/button";
import {Router} from "@angular/router";

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [
    Button
  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {

  constructor(
    private router: Router,
  ) {
  }

  public goTo(route: string): void {
    this.router.navigateByUrl(route);
  }
}
