
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/servicios/login.service';
import { LoginI } from '../../modelos/login.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})

export class LoginComponent implements OnInit {

  // loginForm = new FormGroup({
  //   username: new FormControl('',Validators.required),
  //   password: new FormControl('',Validators.required)
  // });npm fund
loginForm = new FormGroup({
  username: new FormControl('',Validators.required),
  password: new FormControl('',Validators.required)
});
 
  constructor(private api: ApiService,private router:Router) { }

  ngOnInit(): void {
  }

  onLogin() {
    let x: LoginI={
      password: this.loginForm.controls["password"].value  ? this.loginForm.controls["password"].value : " ",
      username: this.loginForm.controls["username"].value  ? this.loginForm.controls["username"].value : " "
    }
    console.log("llega");
    console.log();
    console.log(this.loginForm.value.username);
    this.api.loginByEmail(x).subscribe(data => {
      localStorage.setItem("token",data.token)
      console.log(data);
      this.router.navigate(['/']);
    });
  }

}
