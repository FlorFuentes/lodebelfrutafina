import { Component } from '@angular/core';
//import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { HeroComponent } from './componentes/hero/hero.component';

@Component({
  selector: 'app-root',
  imports: [ NavbarComponent, HeroComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'lodebelfrutafina';
}
