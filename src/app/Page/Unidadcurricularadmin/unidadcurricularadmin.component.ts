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
@Component({
  selector: 'app-unidadcurricularadmin',
  templateUrl: './unidadcurricularadmin.component.html',
  styleUrls: ['./unidadcurricularadmin.component.css']
})
export class UnidadcurricularadminComponent {
  
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
  public unidadesControl = new FormControl("");

  constructor(public dialog: MatDialog, private serviceM: MateriaService,private serviceU: UnidadesCurricularesService) {}

  ngOnInit(): void {
    this.serviceM.getMaterias().subscribe({
      next: value => this.materias = value,
      error: err => { alert('Error al cargar las noticias: ' + err) }
    });
    this.serviceU.getUnidades().subscribe({
      next: value => this.unidadesC = value,
      error: err => { alert('Error al cargar las noticias: ' + err) }
    });
  }
  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(DialogAnimationsExampleDialog, {
      width: '250px',
     
      exitAnimationDuration,
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
      documento: form.controls["documento"].value ?  form.controls["documento"].value: "",
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
    

  }

}

@Component({
  selector: 'dialog-animations-example-dialog',
  templateUrl: 'dialog-animations-example-dialog.html',
})


export class DialogAnimationsExampleDialog {
  constructor(public dialogRef: MatDialogRef<DialogAnimationsExampleDialog>) {}
}
