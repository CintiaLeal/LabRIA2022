import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoticiasComponent } from './Page/Noticias/noticias.component';
import { LoginComponent } from './Page/Login/login.component';
import { RegistrarComponent } from './Page/Registrar/registrar.component';
import { ContactoComponent } from './Page/Contacto/contacto.component';
import { MateriaComponent } from './Page/Materia/materia.component';
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'noticias', component: NoticiasComponent },
  { path: 'registrar', component: RegistrarComponent },
  { path: 'materia', component: MateriaComponent }

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
