import { Routes } from "@angular/router";
import { PortfolioLateralComponent } from "./layout/portfolio-lateral/portfolio-lateral.component";
import { PortfolioHablidadesPageComponent } from "./pages/portfolio-hablidades-page/portfolio-hablidades-page.component";
import { PortfolioFormationPageComponent } from "./pages/portfolio-formation-page/portfolio-formation-page.component";
import { PortfolioExperiencePageComponent } from "./pages/portfolio-experience-page/portfolio-experience-page.component";
import { PortfolioProyectsPageComponent } from "./pages/portfolio-proyects-page/portfolio-proyects-page.component";

export const PortfolioRoutes: Routes = [

  {
    path: '',
    component: PortfolioLateralComponent,
    children: [
      {
        path: 'habilidades',
        component: PortfolioHablidadesPageComponent,
      },
      {
        path: 'formacion',
        component: PortfolioFormationPageComponent,
      },
      {
        path: 'experiencia',
        component: PortfolioExperiencePageComponent,
      },
      {
        path: 'proyectos',
        component: PortfolioProyectsPageComponent,
      },
      {
        path: '**',
        redirectTo: 'habilidades',
      }
    ]
  },
  {
    path: '**',
    redirectTo: '',
  }

];


export default PortfolioRoutes;
