import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Materia } from "../modelos/Materia";
@Injectable({
  providedIn: 'root'
})

export class MateriaService {

  url: string = "https://ria2022.test.softtero.com/api";
  constructor(private http: HttpClient) { }

  getMaterias() {
    return this.http.get<Materia[]>(this.url + '/Materias');
  }
}
