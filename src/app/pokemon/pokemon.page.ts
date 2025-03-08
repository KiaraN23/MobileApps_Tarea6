import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonButtons, IonMenuButton, IonLabel, IonInput, IonCard, IonCardContent, IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.page.html',
  styleUrls: ['./pokemon.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButtons, IonMenuButton, IonItem, IonLabel, IonInput, IonCard, IonButton, IonCardContent]
})
export class PokemonPage {

  nombre: string = '';
  nombreActual: string = '';
  pokemon: any = null;
  imagen: string = '';
  experiencia: number = 0;
  habilidades: string[] = [];

  constructor(private http: HttpClient) { }

  obtenerInfoPokemon() {
    if (!this.nombre.trim()) return;
    this.nombreActual = this.nombre;

    const url = `https://pokeapi.co/api/v2/pokemon/${this.nombre.toLowerCase()}`;
    this.http.get<any>(url).subscribe({
      next: (data) => {
        this.pokemon = data;
        this.imagen = data.sprites.front_default;  
        this.experiencia = data.base_experience;  
        this.habilidades = data.abilities.map((habilidad: any) => habilidad.ability.name); 
      },
      error: (err) => {
        console.error('Error al obtener la información del Pokémon', err);
      }
    });
  }

}
