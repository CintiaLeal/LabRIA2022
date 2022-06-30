import { Component, OnInit } from '@angular/core';
import { MateriaService } from 'src/app/servicios/materia.service';
import { Materia } from '../../modelos/materia';

@Component({
  selector: 'app-materiasuser',
  templateUrl: './materiasuser.component.html',
  styleUrls: ['./materiasuser.component.css']
})
export class MateriasuserComponent {
  panelOpenState = false;
  public materias:Materia[] =[];
  constructor(private service:MateriaService ) { }

  ngOnInit(): void {
    this.service.getMaterias().subscribe({
      next: value => this.materias = value,
      error: err => { alert('Error al cargar las noticias: ' + err) }
    });
  }

}
