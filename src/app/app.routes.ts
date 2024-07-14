import { Routes } from '@angular/router';
import { ExperienceComponent } from './experience/experience.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'experience', component: ExperienceComponent
  }
];
