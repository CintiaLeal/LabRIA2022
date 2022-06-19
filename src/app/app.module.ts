import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoticiasComponent } from './Page/Noticias/noticias.component';
import { LoginComponent } from './Page/Login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { RegistrarComponent } from './Page/Registrar/registrar.component';
import { MaterialExampleModule } from 'src/material.module';
import { MatToolbarModule } from '@angular/material/toolbar';
@NgModule({
    declarations: [
        AppComponent,
        NoticiasComponent,
        LoginComponent,
        RegistrarComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        MaterialExampleModule,
        MatCardModule,
        MatInputModule,
        MatButtonModule,
        MatToolbarModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
