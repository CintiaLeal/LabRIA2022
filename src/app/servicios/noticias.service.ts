import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Noticia } from '../modelos/noticia';
import { NoticiaI } from '../modelos/noticia.interface';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {
  url: string = "https://ria2022.test.softtero.com/api";
  constructor(private http: HttpClient) { }

  getNoticias() {
    return this.http.get<Noticia[]>(this.url + '/Noticias/Activas');
  }


  //traer noticias
  getNoticiasPag(offset: number, limit: number): Observable<NoticiaI> {
    let a = this.url + "/Noticias/Paged/" + offset + "/" + limit;
    return this.http.get<NoticiaI>(a)
  }
}
