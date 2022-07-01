import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Materia } from "../modelos/Materia";

@Injectable({
  providedIn: 'root'
})

export class MateriaService {

  url: string = "https://gr1-ria2022.test.softtero.com/api";
  constructor(private http: HttpClient) { }

  getMaterias() {
    return this.http.get<Materia[]>(this.url + "/Materias");
    
  }

  nuevaMateria(form:Materia){
    let direccion = this.url + "/Materias";
    return this.http.post(direccion, form);
  }
  eliminarMateria(x: any){
    console.log("llega a el servicio");
    console.log(x);
    let direccion = this.url + "/Materias/" + x
    return this.http.delete(direccion);
  }
  
}
