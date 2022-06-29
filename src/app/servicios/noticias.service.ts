import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Noticia } from '../modelos/noticia';
import { NoticiaI } from '../modelos/noticia.interface';
import { ResponseI } from '../modelos/response.interface';
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

  //nuevaNoticia
  //https://ria2022.test.softtero.com/api/Noticias
  nuevaNoticia(form:Noticia): Observable<ResponseI>{
    let noticiaData: Noticia ={
      id: form.id,
      titulo: form.titulo,
      descripcion: form.descripcion,
      imagen: form.imagen,
      fechaCaducidad: form.fechaCaducidad
    }
   
    let direccion = this.url + "/Noticias";
    return this.http.post<ResponseI>(direccion, form);
  }
  eliminarNoticia(x: any){
    console.log("llega a el servicio");
    console.log(x);
    let direccion = this.url + "/Noticias/" + x.value;
    return this.http.delete(direccion);
   
  }
  verNoticia(x: any): Observable<Noticia>{
    let a = this.url + "/Noticias/" + x;
    return this.http.get<Noticia>(a);
    
  }
}
