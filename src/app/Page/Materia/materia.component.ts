import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MateriaService } from 'src/app/servicios/materia.service';
import { Materia } from '../../modelos/Materia';

@Component({
  selector: 'app-materia',
  templateUrl: './materia.component.html',
  styleUrls: ['./materia.component.css']
})
export class MateriaComponent implements OnInit {
  panelOpenState = false;
value = "" ; value2 = ""; value3 = "";
//Para hacer la funcion onNueva
nuevaMateriaForm = new FormGroup({
  nombre: new FormControl(''),
  descripcion: new FormControl(''),
  creditosMinimos: new FormControl(''),
});

//Para editar la funcion 
editarMateriaForm = new FormGroup({
  nombre: new FormControl(''),
  descripcion: new FormControl(''),
  creditosMinimos: new FormControl('')
});

  public materias:Materia[] =[];

  constructor(private service:MateriaService,private alerta: MatSnackBar) {
    this.ngOnInit();
  }
  
  ngOnInit(): void {
    this.value = "" ; this.value2 = ""; this.value3 = "";
    this.service.getMaterias().subscribe({
      next: value => this.materias = value,
      error: err => { alert('Error al cargar las noticias: ' + err) }
    });
    this.panelOpenState = false;
  }

  //*funcion nueva*
  onNueva() {
    let x: Materia={
      id: "0",
      nombre: this.nuevaMateriaForm.controls["nombre"].value  ? this.nuevaMateriaForm.controls["nombre"].value : " ",
      descripcion: this.nuevaMateriaForm.controls["descripcion"].value  ? this.nuevaMateriaForm.controls["descripcion"].value : " ",
      creditosMinimos: this.nuevaMateriaForm.controls["creditosMinimos"].value  ? this.nuevaMateriaForm.controls["creditosMinimos"].value : " "
    }
   console.log(x);
    this.service.nuevaMateria(x).subscribe(data => {
      console.log(data);
    });
    this.alerta.open("Creada con éxito","OK!");
    
    this.ngOnInit();
  } 

    //*funcion eliminar*
    eliminarMateria(x:any){
      this.ngOnInit();
      this.service.eliminarMateria(x).subscribe(data => {
        console.log(data);
      });
      this.alerta.open("Eliminado con éxito","OK!");
     
      this.ngOnInit();
    }

    //*funcion editar*
    editarMateria(Materia: any) {
      let x: Materia = {
        id: Materia.id,
        nombre: this.editarMateriaForm.controls["nombre"].value ?  this.editarMateriaForm.controls["nombre"].value : Materia.nombre,
        descripcion: this.editarMateriaForm.controls["descripcion"].value  ? this.editarMateriaForm.controls["descripcion"].value : Materia.descripcion,
        creditosMinimos: this.editarMateriaForm.controls["creditosMinimos"].value  ? this.editarMateriaForm.controls["creditosMinimos"].value : Materia.creditosMinimos
      }
      this.service.editarMateria(x).subscribe(data => {
        console.log(data);
      });
      this.alerta.open("Editado con éxito", "OK!");
      this.ngOnInit();
    }
  
}
