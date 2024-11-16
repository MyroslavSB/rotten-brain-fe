import { Routes } from '@angular/router';
import {LandingPageComponent} from "./pages/landing-page/landing-page.component";
import {BattlePageComponent} from "./pages/battle-page/battle-page.component";

export const routes: Routes = [
  {
    path: "",
    loadComponent: () => LandingPageComponent,

  },
  {
    path: "battle",
    loadComponent: () => BattlePageComponent,
  }
];
