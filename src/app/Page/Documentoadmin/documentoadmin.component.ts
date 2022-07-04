import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { DocumentosService } from 'src/app/servicios/documentos.service';
import { Documento } from 'src/app/modelos/documentos';
import { Observable, subscribeOn, Subscriber } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';


interface Tipo {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-documentoadmin',
  templateUrl: './documentoadmin.component.html',
  styleUrls: ['./documentoadmin.component.css']
})
export class DocumentoadminComponent  {
  public base64Image: any;

  panelOpenState = false;
  public documentosIF:Documento[] =[];
  public documentosOL:Documento[] =[];
  public documentosDI:Documento[] =[];
  isLinear = false;
  checked = false;

  tipos: Tipo[] = [
    {value: 'INFORMACION_CARRERA', viewValue: 'INFORMACION_CARRERA'},
    {value: 'OPORTUNIDADES_LABORALES', viewValue: 'OPORTUNIDADES_LABORALES'},
    {value: 'DATOS_DE_INTERES', viewValue: 'DATOS_DE_INTERES'},
  ];
  toppings = this._formBuilder.group({
    pepperoni: false,
    extracheese: false,
    mushroom: false,
  });
  activa: Tipo[] = [
    {value: 'true', viewValue: 'ACTIVA'},
    {value: 'false', viewValue: 'NO ACTIVA'}
    
  ];
//Para hacer la funcion onNueva
nuevaForm = new FormGroup({
  titulo: new FormControl(''),
  tipo: new FormControl(''),
  documentoPDF: new FormControl(''),
 
  imagen: new FormControl(''),
});

//Edita
editarForm = new FormGroup({
  titulo: new FormControl(''),
  tipo: new FormControl(''),
  documentoPDF: new FormControl(''),
  activo: new FormControl(''),
  a: new FormControl(false),
  imagen: new FormControl('')
});

  constructor(private _formBuilder: FormBuilder,private service:DocumentosService,private alerta: MatSnackBar) { }

  ngOnInit(): void {
    this.service.getDocumentoIC().subscribe({
      next: value => this.documentosIF = value,
      error: err => { alert('Error al cargar los documentos: ' + err) }
    });
    this.service.getDocumentoOL().subscribe({
      next: value => this.documentosOL = value,
      error: err => { alert('Error al cargar los documentos: ' + err) }
    });
    this.service.getDocumentoDI().subscribe({
      next: value => this.documentosDI = value,
      error: err => { alert('Error al cargar los documentos: ' + err) }
    });
  }
  
  convertToBase64(file: File) {
    console.log(file);
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
  
  onFileSelected(event: any): void {
     this.convertToBase64(event.target.files[0]);
   }
  
  
   onNueva() {
    let x: Documento = {
      id:"0",
      titulo: this.nuevaForm.controls["titulo"].value ? this.nuevaForm.controls["titulo"].value : " ",
      tipo: this.nuevaForm.controls["tipo"].value ? this.nuevaForm.controls["tipo"].value : " ",
      documentoPDF: this.base64Image ? this.base64Image : " ",
      activo: true,
    }
    console.log(x);
    console.log(x.documentoPDF);
    this.service.nueva(x).subscribe(data => {
      console.log(data);
    });
    this.alerta.open("Creada con éxito", "OK!");
    this.ngOnInit();
  }

  

  onEditar(x : Documento){
    console.log("aca");
    console.log(this.editarForm.controls["a"].value);
    let m: Documento = {
      id:x.id,
      titulo: this.editarForm.controls["titulo"].value ? this.editarForm.controls["titulo"].value :x.titulo,
      tipo: this.editarForm.controls["tipo"].value ? this.editarForm.controls["tipo"].value : x.tipo,
      documentoPDF: this.base64Image ? this.base64Image : x.documentoPDF,
      activo: true,
    }
    console.log(m);
    this.service.editar(m).subscribe(data => {
      console.log(data);
    });
    this.alerta.open("Editado con éxito", "OK!");
    this.ngOnInit();
  }
 
  
}
