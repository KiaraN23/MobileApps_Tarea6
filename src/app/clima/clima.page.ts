import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonButtons, IonMenuButton, IonTitle, IonToolbar, IonCard, IonCardContent, IonButton, IonItem, IonLabel, IonInput } from '@ionic/angular/standalone';

@Component({
  selector: 'app-clima',
  templateUrl: './clima.page.html',
  styleUrls: ['./clima.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonMenuButton, CommonModule, FormsModule, IonCard, IonCardContent, IonButton, IonItem, IonLabel, IonInput]
})
export class ClimaPage {

  clima: string = '';
  provincia: string = '';

  constructor(private http: HttpClient) {}

  obtenerClima() {
    if (!this.provincia.trim()) return;

    const provinciaEncoded = encodeURIComponent(this.provincia.trim());
    const url = `https://wttr.in/${provinciaEncoded}?format=%C+%t+%w`;

    this.http.get(url, { responseType: 'text' }).subscribe({
      next: (data) => {
        this.clima = `Clima en ${this.provincia}: ${data}`;
      },
      error: (err) => {
        console.error('Error obteniendo el clima', err);
        this.clima = 'No se pudo obtener el clima';
      }
    });
  }

}
