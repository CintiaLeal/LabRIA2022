import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NoticiasService } from 'src/app/servicios/noticias.service';
import { Noticia } from 'src/app/modelos/noticia';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, subscribeOn, Subscriber } from 'rxjs';
@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})

export class NoticiasComponent implements OnInit {

  //Desplegable
  panelOpenState = false;

  //Para el paginado
  private offset: number;
  private limit: number;
  public page: number;
  public noticias: Noticia[];
  public cantidadPag: number = 1;
  public base64Image: any;
  
  editarNoticiaForm = new FormGroup({
    titulo: new FormControl('', Validators.required),
    descripcion: new FormControl('', Validators.required)
  });

  nuevaNoticiaForm = new FormGroup({
    id: new FormControl('', Validators.required),
    titulo: new FormControl('', Validators.required),
    descripcion: new FormControl('', Validators.required),
    imagen: new FormControl('', Validators.required),
    fechaCaducidad: new FormControl('', Validators.required)
  });

  constructor(private api: NoticiasService, private alerta: MatSnackBar) {
    this.limit = 0;
    this.page = 0;
    this.offset = 0;
    this.noticias = [];
    this.ngOnInit();
  }

  ngOnInit(): void {
    window.screen.width > 500 ? this.offset = 3 : this.offset = 2;
    this.getNoticias(this.limit, this.offset);
    this.page = 1;
    this.panelOpenState = false;
  }
  siguientePag() {
    if (this.page < this.cantidadPag) {
      this.limit = this.page * this.offset;
      this.getNoticias(this.limit, this.offset);
      this.page += 1;
    }
  }

  anteriorPag() {
    if (this.page > 1) {
      this.limit = this.limit - this.offset;
      this.getNoticias(this.limit, this.offset);
      this.page -= 1;
    }
  }

  getNoticias(offset: number, limit: number) {
    this.api.getNoticiasPag(offset, limit).subscribe(data => {
      this.noticias = data.list;
      this.cantidadPag = Math.trunc(data.size / this.offset);
    });
  }

  selectedFile: any = null;

  //type file
  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0] ?? null;
  }
  exampleFlag = false; // set it to false initially so box is not disabled

  readonly = null;

  //*funcion eliminar*
  eliminarNoticia(x: any) {
    this.ngOnInit();
    this.api.eliminarNoticia(x).subscribe(data => {
      console.log(data);
    });
    this.alerta.open("Eliminado con éxito", "OK!");

    this.ngOnInit();
  }

  //*funcion editar* 
  editarNoticia(Noticia: any) {
    let x: Noticia = {
      id: Noticia.id,
      titulo: this.editarNoticiaForm.controls["titulo"].value ? this.editarNoticiaForm.controls["titulo"].value : " ",
      descripcion: this.editarNoticiaForm.controls["descripcion"].value ? this.editarNoticiaForm.controls["descripcion"].value : " ",
      imagen: "Noticia.img",
      fechaCaducidad: Noticia.fechaCaducidad,
    }
    console.log(x);


    this.api.editarNoticia(x).subscribe(data => {
      console.log(data);
    });
    this.alerta.open("Editado con éxito", "OK!");

  }

  //*funcion nueva*
  onNueva() {
    this.convertToBase64(this.selectedFile)
    console.log(this.base64Image)
    let x: Noticia = {
      id: "0",
      titulo: this.nuevaNoticiaForm.controls["titulo"].value ? this.nuevaNoticiaForm.controls["titulo"].value : " ",
      descripcion: this.nuevaNoticiaForm.controls["descripcion"].value ? this.nuevaNoticiaForm.controls["descripcion"].value : " ",
      imagen: this.base64Image ? this.base64Image : " ",
      fechaCaducidad: this.nuevaNoticiaForm.controls["fechaCaducidad"].value ? this.nuevaNoticiaForm.controls["fechaCaducidad"].value : "",
    }
    console.log(x);

    this.api.nuevaNoticia(x).subscribe(data => {
      console.log(data);
    });
    this.alerta.open("Creada con éxito", "OK!");
    this.ngOnInit();
  }

  convertToBase64(file: File) {
    const observable = new Observable((subscriber: Subscriber<any>) => {
      this.readFile(file, subscriber);
    })

    observable.subscribe((d) => {
      this.base64Image = d;
    })
  }

  readFile(file: File, subscriber: Subscriber<any>) {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file)

    fileReader.onload = () => {
      subscriber.next(fileReader.result)
      subscriber.complete()
    }
    fileReader.onerror = () => {
      subscriber.error()
    }
  }
}

