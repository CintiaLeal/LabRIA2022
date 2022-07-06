import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {UnidadesCurricularesService} from 'src/app/servicios/unidades.service';
import { MateriaService } from 'src/app/servicios/materia.service';
import { Materia } from 'src/app/modelos/Materia';
import { PreviaUC } from 'src/app/modelos/Previa';
import { UnidadesCurriculares } from 'src/app/modelos/unidadesCurriculares';
import { PreviaAdd } from 'src/app/modelos/previaAdd';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, subscribeOn, Subscriber } from 'rxjs';
@Component({
  selector: 'app-unidadcurricularadmin',
  templateUrl: './unidadcurricularadmin.component.html',
  styleUrls: ['./unidadcurricularadmin.component.css']
})
export class UnidadcurricularadminComponent {
  public base64Image: any;
  panelOpenState = false;
  //Para listar Materias
  public materias: Materia[] = [];
  //
  public unidadesC: UnidadesCurriculares [] = [];
  //formulario
  nuevaUCForm = new FormGroup({
    id: new FormControl('', Validators.required),
    nombre: new FormControl('', Validators.required),
    descripcion: new FormControl('', Validators.required),
    creditos: new FormControl('', Validators.required),
    documento: new FormControl('', Validators.required),
    semestre: new FormControl('', Validators.required),
    materia: new FormControl('', Validators.required),
    unidadCpreviaCurso: new FormControl([], Validators.required),
    unidadCpreviaExamen: new FormControl([], Validators.required)
  });
  //Para editar la funcion 
  editarUCForm = new FormGroup({
    nombre: new FormControl(''),
    descripcion: new FormControl(''),
    creditos: new FormControl(''),
    documento: new FormControl(''),
    semestre: new FormControl(''),
    materia: new FormControl(''),
    unidadCpreviaCurso: new FormControl([]),
    unidadCpreviaExamen: new FormControl([])
  });
  public unidadesControl = new FormControl("");

  constructor(private alerta: MatSnackBar, private serviceM: MateriaService,private serviceU: UnidadesCurricularesService) {}

  ngOnInit(): void {
    this.serviceM.getMaterias().subscribe({
      next: value => this.materias = value,
      error: err => { alert('Error al cargar las noticias: ' + err) }
    });
    this.serviceU.getUnidades().subscribe({
      next: value =>this.unidadesC = value,    
      error: err => { alert('Error al cargar las noticias: ' + err) }
    });
  }
 
  //nueva funcion
  nuevaUC(){
    let previa: PreviaAdd[] = [];

    let auxPrevia = this.nuevaUCForm.value.unidadCpreviaCurso ? this.nuevaUCForm.value.unidadCpreviaCurso: [];

    for(let i=0;i< auxPrevia.length;i++){
     previa.push(new PreviaAdd(this.nuevaUCForm.value.id ? this.nuevaUCForm.value.id:"",auxPrevia[i],"CURSO"));
    }

    auxPrevia = this.nuevaUCForm.value.unidadCpreviaExamen ? this.nuevaUCForm.value.unidadCpreviaExamen: [];

    for(let i=0;i< auxPrevia.length;i++){
     previa.push(new PreviaAdd(this.nuevaUCForm.value.id ? this.nuevaUCForm.value.id:"",auxPrevia[i],"EXAMEN"));
    }

    console.log(this.nuevaUCForm.value);

    let form = this.nuevaUCForm;
    let mid =  form.controls["materia"].value;
    let materia: any;
    for(let i=0;i<this.materias.length; i++){
      if (this.materias[i].id == mid){
        materia = this.materias[i];
      }
    }
   
    console.log(previa);
    let x: UnidadesCurriculares={
      id: form.controls["id"].value ?  form.controls["id"].value: "",
      nombre: form.controls["nombre"].value ?  form.controls["nombre"].value: "",
      descripcion: form.controls["descripcion"].value ?  form.controls["descripcion"].value: "",
      creditos: form.controls["creditos"].value ?  form.controls["creditos"].value: "",
      documento: this.base64Image ? this.base64Image : " ",
      semestre: form.controls["semestre"].value ?  form.controls["semestre"].value: "",
      materia: materia,
      previas: []
    }
    console.log(x);
    this.serviceU.nuevaUC(x).subscribe(d => {
      previa.forEach(element => {
        this.serviceU.addPrevia(element).subscribe(e=>{
          console.log(e);
        });
      });
    });
    this.alerta.open("Creado con éxito", "OK!");

  }

  eliminarUC(x:any){
    this.ngOnInit();
    this.serviceU.eliminarUC(x).subscribe(data => {
      console.log(data);
    });
    this.alerta.open("Eliminado con éxito", "OK!");
    this.ngOnInit();
  }

  editarUC(UC: UnidadesCurriculares){
    let form = this.editarUCForm;  
    let previas: PreviaAdd[] = [];
    //Materia
    let mid =  form.controls["materia"].value;
    let materia: any;
    for(let i=0;i<this.materias.length; i++){
      if (this.materias[i].id == mid){
        materia = this.materias[i];
      }
    }

    let previa = [];
    console.log(UC.previas);

    UC.previas.forEach(x=>this.serviceU.eliminarPrevia(x.id).subscribe());
     
    
    
  
    let auxPrevia = this.editarUCForm.value.unidadCpreviaCurso ? this.editarUCForm.value.unidadCpreviaCurso: [];

    for(let i=0;i< auxPrevia.length;i++){
     previas.push(new PreviaAdd(UC.id, auxPrevia[i],"CURSO"));
    }

    for(let i=0;i< auxPrevia.length;i++){
     previas.push(new PreviaAdd(UC.id, auxPrevia[i],"EXAMEN"));
    }


    let x: UnidadesCurriculares = {
      id: UC.id,
      nombre: form.controls["nombre"].value ?  form.controls["nombre"].value: UC.nombre,
      descripcion: form.controls["descripcion"].value ?  form.controls["descripcion"].value: UC.descripcion,
      creditos: form.controls["creditos"].value ?  form.controls["creditos"].value: UC.creditos,
      documento: this.base64Image ? this.base64Image : " ",
      semestre: form.controls["semestre"].value ?  form.controls["semestre"].value: UC.semestre,
      materia: materia ? materia: UC.materia,
      previas: []
    }

    this.serviceU.editarUC(x).subscribe(d => {
      previas.forEach(element => {
        this.serviceU.addPrevia(element).subscribe(e=>{
          console.log(e);
        });
      });
    });
    this.alerta.open("Editado con éxito", "OK!");
    this.ngOnInit();
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
}


