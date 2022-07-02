import { Injectable } from "@angular/core";
import { LoginI } from '../modelos/login.interface';
import { LoginComponent } from '../Page/Login/login.component';
import { ResponseI } from '../modelos/response.interface';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { from, map, Observable, switchMap } from 'rxjs'
import { formatCurrency } from "@angular/common";
import { UnidadesCurriculares } from "../modelos/unidadesCurriculares";
import { PreviaAdd } from "../modelos/previaAdd";

@Injectable({
  providedIn: 'root'
})
export class UnidadesCurricularesService {
  url: string = "https://gr1-ria2022.test.softtero.com/api/UnidadesCurriculares";
  constructor(private http: HttpClient) { }

  //login 
  getUnidades(): Observable<UnidadesCurriculares[]> {
    return this.http.get<UnidadesCurriculares[]>(this.url);
  }

  nuevaUC(x: any){
    let direccion = this.url ;
    return this.http.post<UnidadesCurriculares>(direccion, x);

  }

  addPrevia(x: PreviaAdd){
    let direccion = "https://gr1-ria2022.test.softtero.com/api/Previas";
    return this.http.post<UnidadesCurriculares>(direccion, x);

    
  }

  /*return this.httpClient.get(URL, {}).pipe(
    switchMap((response: any) => {
      const personas_id = response.personas; //me devuelve el id
      const URL2 = `${this.urlBase}/api/datos/` + personas_id;
      return this.httpClient
        .get(URL2, {})
        .pipe(map((response: any) => response.datos));
    })
  );*/
  
}