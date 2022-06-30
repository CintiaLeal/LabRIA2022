import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NoticiasService } from 'src/app/servicios/noticias.service';
import { Noticia } from 'src/app/modelos/noticia';
@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit {

  nuevaNoticiaForm = new FormGroup({
    id: new FormControl('',Validators.required),
    titulo: new FormControl('',Validators.required),
    descripcion: new FormControl('',Validators.required),
    imagen: new FormControl('',Validators.required),
    fechaCaducidad: new FormControl('',Validators.required)
  });

  eliminarNoticiaForm = new FormGroup({
    idEliminar: new FormControl('',Validators.required)
  });

  verNoticiaForm = new FormGroup({
    idBuscar: new FormControl('',Validators.required)
  });
  constructor(private api: NoticiasService) { }

  ngOnInit(): void {
  }
  onNueva() {
    console.log("Llega a la funcion");
    
    let x: Noticia={
      id: this.nuevaNoticiaForm.controls["id"].value ? this.nuevaNoticiaForm.controls["id"].value : "",
      titulo: this.nuevaNoticiaForm.controls["titulo"].value  ? this.nuevaNoticiaForm.controls["titulo"].value : " ",
      descripcion: this.nuevaNoticiaForm.controls["descripcion"].value  ? this.nuevaNoticiaForm.controls["descripcion"].value : " ",
      imagen: this.nuevaNoticiaForm.controls["imagen"].value  ? this.nuevaNoticiaForm.controls["imagen"].value : " ",
      fechaCaducidad: this.nuevaNoticiaForm.controls["fechaCaducidad"].value  ? this.nuevaNoticiaForm.controls["fechaCaducidad"].value : "",
    }
    console.log(x);
   
    this.api.nuevaNoticia(x).subscribe(data => {
      console.log(data);
    });
  }

  onEliminar(){
  console.log(this.eliminarNoticiaForm.controls["idEliminar"].value);
  let x = this.eliminarNoticiaForm.controls["idEliminar"].value;
  this.api.eliminarNoticia(x);
  }

  onVer(){
    let x = this.verNoticiaForm.controls["idBuscar"].value;
    this.api.verNoticia(x);
    console.log(x);

  }
}

