import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonButtons, IonMenuButton, IonTitle, IonToolbar, IonCard, IonCardContent, IonCardHeader, IonButton, IonCardTitle } from '@ionic/angular/standalone';

@Component({
  selector: 'app-word-press',
  templateUrl: './word-press.page.html',
  styleUrls: ['./word-press.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonButtons, IonTitle, IonMenuButton, IonToolbar, CommonModule, FormsModule, IonCard, IonCardContent, IonCardHeader, IonButton, IonCardTitle]
})
export class WordPressPage implements OnInit {

  latestPosts: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.obtenerUltimasNoticias();
  }

  obtenerUltimasNoticias() {
    const url = 'https://www.boingo.com/wp-json/wp/v2/posts';
    this.http.get<any[]>(url).subscribe({
      next: (data) => {
        this.latestPosts = data.slice(0, 3);
      },
      error: (err) => {
        console.error('Error al obtener las noticias', err);
      },
    });
  }

}
