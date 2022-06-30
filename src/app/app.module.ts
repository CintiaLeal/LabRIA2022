import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoticiasComponent } from './Page/Noticias/noticias.component';
import { LoginComponent } from './Page/Login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { RegistrarComponent } from './Page/Registrar/registrar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon'
import { MatMenuModule } from '@angular/material/menu'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ContactoComponent } from './Page/Contacto/contacto.component';
import { MateriaComponent } from './Page/Materia/materia.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTabsModule } from '@angular/material/tabs';
import { VernoticiasComponent } from './Page/Vernoticias/vernoticias.component';
import { HomeComponent } from './Page/Home/home.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatChipsModule } from '@angular/material/chips';
import { UnidadcurricularadminComponent } from './Page/Unidadcurricularadmin/unidadcurricularadmin.component';
import { MateriasuserComponent } from './Page/Materiasuser/materiasuser.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { UnidadCurricularUsuarioComponent } from './Page/unidad-curricular-usuario/unidad-curricular-usuario.component';
import { DocumentoadminComponent } from './Page/Documentoadmin/documentoadmin.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatTableModule} from '@angular/material/table';
import { InterceptorService } from './interceptores/interceptor.service';
//import {IvyCarouselModule} from 'angular-responsive-carousel';
@NgModule({
  declarations: [
    HomeComponent,
    AppComponent,
    NoticiasComponent,
    LoginComponent,
    RegistrarComponent,
    ContactoComponent,
    MateriaComponent,
    VernoticiasComponent,
    UnidadcurricularadminComponent,
    MateriasuserComponent,
    UnidadCurricularUsuarioComponent,
    DocumentoadminComponent
  ],
  imports: [
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatMenuModule,
    MatExpansionModule,
    MatStepperModule,
    MatTabsModule,
    MatDialogModule,
    MatChipsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatCheckboxModule,
    MatTableModule
    //IvyCarouselModule
  ],
  providers: [ {
    provide: HTTP_INTERCEPTORS,
    useClass: InterceptorService,
    multi: true
  } ],
  bootstrap: [AppComponent]
})
export class AppModule { }
