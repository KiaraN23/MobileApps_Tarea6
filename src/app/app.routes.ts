import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/inicio',
    pathMatch: 'full',
  },
  {
    path: 'folder/:id',
    loadComponent: () =>
      import('./folder/folder.page').then((m) => m.FolderPage),
  },
  {
    path: 'acerca-de',
    loadComponent: () => import('./acerca-de/acerca-de.page').then( m => m.AcercaDePage)
  },
  {
    path: 'word-press',
    loadComponent: () => import('./word-press/word-press.page').then( m => m.WordPressPage)
  },
  {
    path: 'pokemon',
    loadComponent: () => import('./pokemon/pokemon.page').then( m => m.PokemonPage)
  },
  {
    path: 'clima',
    loadComponent: () => import('./clima/clima.page').then( m => m.ClimaPage)
  },
  {
    path: 'universidades',
    loadComponent: () => import('./universidades/universidades.page').then( m => m.UniversidadesPage)
  },
  {
    path: 'edad',
    loadComponent: () => import('./edad/edad.page').then( m => m.EdadPage)
  },
  {
    path: 'genero',
    loadComponent: () => import('./genero/genero.page').then( m => m.GeneroPage)
  },
  {
    path: 'inicio',
    loadComponent: () => import('./inicio/inicio.page').then( m => m.InicioPage)
  },
];
