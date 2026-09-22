import { Component } from '@angular/core';
//import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { HeroComponent } from './componentes/hero/hero.component';
import { ProductosComponent } from './componentes/productos/productos.component';
import { NosotrosComponent } from './componentes/nosotros/nosotros.component';
import { ZocalonosotrosComponent } from './componentes/zocalonosotros/zocalonosotros.component';

@Component({
  selector: 'app-root',
  imports: [ NavbarComponent, HeroComponent, ProductosComponent, NosotrosComponent, ZocalonosotrosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'lodebelfrutafina';
}
