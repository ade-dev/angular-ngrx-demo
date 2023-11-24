import { Routes } from '@angular/router';
import { CountriesContainerComponent } from './countries-container/countries-container.component';

export const routes: Routes = [
  {
    path: '', redirectTo: 'ade', pathMatch: 'full'
  },
  {
    path: '**', component: CountriesContainerComponent
  }
];