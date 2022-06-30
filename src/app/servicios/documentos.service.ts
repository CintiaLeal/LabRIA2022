import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Documento } from "../modelos/documentos";
@Injectable({
  providedIn: 'root'
})

export class DocumentosService {

  url: string = "https://ria2022.test.softtero.com/api";
  constructor(private http: HttpClient) { }

  getDocumentoIC() {
    let x = "INFORMACION_CARRERA";
    return this.http.get<Documento[]>(this.url + '/Documentos/Activos?tipo='+ x);
  }

  getDocumentoOL() {
    let x = "OPORTUNIDADES_LABORALES";
    return this.http.get<Documento[]>(this.url + '/Documentos/Activos?tipo='+ x);
  }

  getDocumentoDI() {
    let x = "DATOS_DE_INTERES";
    return this.http.get<Documento[]>(this.url + '/Documentos/Activos?tipo='+ x);
  }

}
