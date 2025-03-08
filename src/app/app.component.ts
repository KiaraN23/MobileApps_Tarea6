//Kiara Nicole Custodio Cruz (2023-0276)
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IonApp, IonSplitPane, IonMenu, IonContent, IonList, IonListHeader, IonNote, IonMenuToggle, IonItem, IonLabel, IonRouterOutlet, IonRouterLink } from '@ionic/angular/standalone';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  imports: [RouterLink, RouterLinkActive, IonApp, IonSplitPane, IonMenu, IonContent, IonList, IonListHeader, IonNote, IonMenuToggle, IonItem, IonLabel, IonRouterLink, IonRouterOutlet],
})


export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: '/inicio', icon: '/assets/home.png' },
    { title: 'Genero', url: '/genero', icon: '/assets/genero.png' },
    { title: 'Edad', url: '/edad', icon: '/assets/edad.png' },
    { title: 'Universidades', url: '/universidades', icon: '/assets/universidad.png' },
    { title: 'Clima', url: '/clima', icon: '/assets/clima.png' },
    { title: 'Pokemon', url: '/pokemon', icon: '/assets/pokemon.png' },
    { title: 'WordPress', url: '/word-press', icon: '/assets/wordpress.png' },
    { title: 'AcercaDe', url: '/acerca-de', icon: '/assets/contratame.png' },
  ];
  
  constructor() {  }
}
