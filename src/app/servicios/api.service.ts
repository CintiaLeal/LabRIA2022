import { Injectable } from "@angular/core";
import {LoginI} from '../modelos/login.interface';
import {LoginComponent} from '../Page/Login/login.component';
import {ResponseI} from '../modelos/response.interface';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import {Observable} from 'rxjs'
import { formatCurrency } from "@angular/common";

@Injectable({
    providedIn:'root'
})
export class ApiService {
    url:string = "https://ria2022.test.softtero.com/api/Authenticate/login";
    constructor(private http:HttpClient){}
    
    loginByEmail(form:LoginI):Observable<ResponseI>{
       console.log(form)
        let userdata: LoginI={
            username: form.username,
            password: form.password
          }
          console.log(userdata);
        let direccion = this.url ;
        return this.http.post<ResponseI>(direccion,form);
    }
}