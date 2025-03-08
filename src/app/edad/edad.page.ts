import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonButtons, IonMenuButton, IonToolbar, IonCard, IonCardContent, IonItem, IonLabel, IonInput, IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-edad',
  templateUrl: './edad.page.html',
  styleUrls: ['./edad.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonButtons, IonMenuButton, IonToolbar, CommonModule, FormsModule, IonCard, IonCardContent, IonItem, IonLabel, IonInput, IonButton]
})

export class EdadPage {

  nombre: string = '';
  nombreActual: string = '';
  edad: number | null = null;
  etapa: string = '';
  imagenEdad: string = ''; 

  constructor(private http: HttpClient) { }

  predecirEdad() {
    if (!this.nombre.trim()) return;
    this.nombreActual = this.nombre;

    const url = `https://api.agify.io/?name=${this.nombre}`;
    this.http.get<{ age: number }>(url).subscribe({
      next: (data) => {
        this.edad = data.age;
        if (this.edad > 0 && this.edad < 18) {
          this.etapa = 'jóven'; 
          this.imagenEdad = 'assets/joven.jpg'; 
        } else if (this.edad >= 18 && this.edad < 60) {
          this.etapa = 'adulto'; 
          this.imagenEdad = 'assets/adulto.jpg'; 
        }else if (this.edad >= 60) {
          this.etapa = 'anciano'; 
          this.imagenEdad = 'assets/anciano.jpg'; 
        }
      }
    });
  }

}

