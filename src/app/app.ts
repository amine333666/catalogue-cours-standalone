import { Component, signal } from '@angular/core';
import { EnTete as EnTeteComponent } from './composants/en-tete/en-tete';
import { ListeCoursComponent } from './composants/liste-cours/liste-cours';
import { PiedPage as PiedPageComponent } from './composants/pied-page/pied-page';

@Component({
  imports: [EnTeteComponent, ListeCoursComponent, PiedPageComponent],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('catalogue-cours-standalone');
}
