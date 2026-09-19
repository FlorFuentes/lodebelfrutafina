import { Routes } from '@angular/router';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { HeroComponent } from './componentes/hero/hero.component';


export const routes: Routes = [
    {path: 'navbar', component: NavbarComponent},
    {path: 'hero', component: HeroComponent}
];
