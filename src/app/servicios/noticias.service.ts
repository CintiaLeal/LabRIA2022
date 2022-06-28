import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Noticia } from '../modelos/noticia';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor(private http: HttpClient) { }

  getNoticias() {
    return this.http.get<Noticia[]>('https://ria2022.test.softtero.com/api/Noticias/Activas');
  }
}
