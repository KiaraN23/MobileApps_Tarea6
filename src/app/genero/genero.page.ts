import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonButtons, IonMenuButton, IonTitle, IonToolbar, IonCard, IonCardContent, IonButton, IonItem, IonLabel, IonInput } from '@ionic/angular/standalone';


@Component({
  selector: 'app-genero',
  templateUrl: './genero.page.html',
  styleUrls: ['./genero.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonMenuButton, CommonModule, FormsModule, IonCard, IonCardContent, IonButton, IonItem, IonLabel, IonInput]
})



export class GeneroPage {

  nombre: string = '';
  nombreActual: string = '';
  genero: string | null = null;
  colorGenero: string = '#ccc';
  imagenGenero: string = 'assets/image.png'; 

  constructor(private http: HttpClient) { }

  predecirGenero() {
    if (!this.nombre.trim()) return;
    this.nombreActual = this.nombre;

    const url = `https://api.genderize.io/?name=${this.nombre}`;
    this.http.get<{ gender: string }>(url).subscribe({
      next: (data) => {
        this.genero = data.gender;
        if (this.genero === 'male') {
          this.colorGenero = '#2196F3'; 
          this.imagenGenero = 'assets/male.png'; 
        } else if (this.genero === 'female') {
          this.colorGenero = '#EB457CFF'; 
          this.imagenGenero = 'assets/female.png'; 
        }
      }
    });
  }

}
