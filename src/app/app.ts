import { Component, signal } from '@angular/core';
import { EnTete as EnTeteComponent } from './composants/en-tete/en-tete';
import { ListeCoursComponent } from './composants/liste-cours/liste-cours';
import { PiedPage as PiedPageComponent } from './composants/pied-page/pied-page';
import { Cours } from './composants/liste-cours/liste-cours'; 
import { DetailCoursComponent } from './composants/detail-cours/detail-cours'; 
@Component({
  imports: [EnTeteComponent, ListeCoursComponent,DetailCoursComponent , PiedPageComponent],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('catalogue-cours-standalone');
  coursSelectionne: Cours | null = null; 
  
  onSelectionCours(c: Cours) { 
    this.coursSelectionne = c; 
  } 
}
