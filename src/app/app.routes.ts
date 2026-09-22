import { Routes } from '@angular/router';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { HeroComponent } from './componentes/hero/hero.component';
import { ProductosComponent} from './componentes/productos/productos.component';
import { NosotrosComponent } from './componentes/nosotros/nosotros.component';
import { ZocalonosotrosComponent } from './componentes/zocalonosotros/zocalonosotros.component';


export const routes: Routes = [
    {path: 'navbar', component: NavbarComponent},
    {path: 'hero', component: HeroComponent},
    {path:'productos', component:ProductosComponent},
    {path:'nosotros', component:NosotrosComponent},
    {path: 'zocalonosotros', component:ZocalonosotrosComponent},
];
