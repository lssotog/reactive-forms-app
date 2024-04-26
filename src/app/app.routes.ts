import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    title: 'home',
    loadComponent: () => import('./pages/home/home.component').then(comp => comp.HomeComponent)
  },
  {
    path: 'basic',
    title: 'Basic form',
    loadComponent: () => import('./pages/basic-form/basic-form.component').then(comp => comp.BasicFormComponent)
  },
  {
    path: 'material',
    title: 'material form',
    loadComponent: () => import('./pages/material-first/material-first.component').then(comp => comp.MaterialFirstComponent)
  },
];
