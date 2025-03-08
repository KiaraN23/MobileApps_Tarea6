import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonButtons, IonMenuButton, IonTitle, IonToolbar, IonCard, IonCardContent, IonButton, IonItem, IonLabel, IonInput } from '@ionic/angular/standalone';

@Component({
  selector: 'app-universidades',
  templateUrl: './universidades.page.html',
  styleUrls: ['./universidades.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonMenuButton, CommonModule, FormsModule, IonCard, IonCardContent, IonButton, IonItem, IonLabel, IonInput]
})
export class UniversidadesPage {

  pais: string = '';
  universidades: any[] = [];

  constructor(private http: HttpClient) {}

  buscarUniversidades() {
    if (!this.pais.trim()) return;

    const url = `http://universities.hipolabs.com/search?country=${encodeURIComponent(this.pais)}`;
    this.http.get<any[]>(url).subscribe({
      next: (data) => {
        this.universidades = data;
      },
      error: (err) => {
        console.error('Error en la consulta:', err);
        this.universidades = [];
      }
    });
  }
}
