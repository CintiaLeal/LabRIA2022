import { Injectable } from "@angular/core";
import { LoginI } from '../modelos/login.interface';
import { LoginComponent } from '../Page/Login/login.component';
import { ResponseI } from '../modelos/response.interface';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { from, Observable } from 'rxjs'
import { formatCurrency } from "@angular/common";
import { UsuarioI } from "../modelos/usuario.interface";
import { UnidadesCurriculares } from "../modelos/unidadesCurriculares";

@Injectable({
  providedIn: 'root'
})
export class UnidadesCurricularesService {
  url: string = "https://ria2022.test.softtero.com/api/UnidadesCurriculares";
  constructor(private http: HttpClient) { }

  //login 
  getUnidades(): Observable<UnidadesCurriculares[]> {
    return this.http.get<UnidadesCurriculares[]>(this.url);
  }

}