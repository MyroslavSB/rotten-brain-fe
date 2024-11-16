import { Component } from '@angular/core';
import {Button} from "primeng/button";

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

}
