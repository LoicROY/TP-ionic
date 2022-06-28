import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'liste-cours',
    pathMatch: 'full'
  },
  {
    path: 'saisie-cours',
    loadChildren: () => import('./saisie-cours/saisie-cours.module').then( m => m.SaisieCoursPageModule)
  },
  {
    path: 'rechercher-cours',
    loadChildren: () => import('./rechercher-cours/rechercher-cours.module').then( m => m.RechercherCoursPageModule)
  },
  {
    path: 'liste-cours',
    loadChildren: () => import('./liste-cours/liste-cours.module').then( m => m.ListeCoursPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
