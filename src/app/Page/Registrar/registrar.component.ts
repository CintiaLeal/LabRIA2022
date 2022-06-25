import { Component, OnInit } from '@angular/core';
import { UsuarioI } from '../../modelos/usuario.interface';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from 'src/app/servicios/login.service';
@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {
  registrarForm = new FormGroup({
    username: new FormControl('',Validators.required),
    email: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required)
  });
  constructor(private api: ApiService) { }
 
  ngOnInit(): void {
  }
  onRegistrar() {
    let x: UsuarioI={
      username: this.registrarForm.controls["username"].value  ? this.registrarForm.controls["username"].value : " ",
      email: this.registrarForm.controls["email"].value  ? this.registrarForm.controls["email"].value : " ",
      password: this.registrarForm.controls["password"].value  ? this.registrarForm.controls["password"].value : " "
    }
   
    this.api.registrar(x).subscribe(data => {
      console.log(data);
    });
  }
}
