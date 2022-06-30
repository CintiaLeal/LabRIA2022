import { Injectable } from "@angular/core";
import { LoginI } from '../modelos/login.interface';
import { LoginComponent } from '../Page/Login/login.component';
import { ResponseI } from '../modelos/response.interface';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { from, Observable } from 'rxjs'
import { formatCurrency } from "@angular/common";
import { UsuarioI } from "../modelos/usuario.interface";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url: string = "https://ria2022.test.softtero.com/api";
  constructor(private http: HttpClient) { }

  //login 
  loginByEmail(form: LoginI) {
    console.log(form)
    let userdata: LoginI = {
      username: form.username,
      password: form.password
    }
    console.log(userdata);
    let direccion = this.url + "/Authenticate/login";
    return this.http.post<any>(direccion, form);
  }
  //registrar
  registrar(form: UsuarioI): Observable<ResponseI> {
    let userdata: UsuarioI = {
      username: form.username,
      email: form.email,
      password: form.password
    }
    console.log(userdata);
    let direccion = this.url + "/Authenticate/register-admin";
    return this.http.post<any>(direccion, form); //aca arregle mal registari en lugar de any
  }

}