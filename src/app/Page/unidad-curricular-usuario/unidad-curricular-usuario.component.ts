import { Component, OnInit } from '@angular/core';
import { UnidadesCurriculares } from 'src/app/modelos/unidadesCurriculates';
import { UnidadesCurricularesService } from 'src/app/servicios/unidades.service';

@Component({
  selector: 'app-unidad-curricular-usuario',
  templateUrl: './unidad-curricular-usuario.component.html',
  styleUrls: ['./unidad-curricular-usuario.component.css']
})
export class UnidadCurricularUsuarioComponent implements OnInit {
  public unidadesCurriculares: UnidadesCurriculares[] = [];
  constructor(private api: UnidadesCurricularesService) { }

  ngOnInit(): void {
    this.getUnidades()
  }

  getUnidades() {
    this.api.getUnidades().subscribe(data => {
      console.log(data)
      this.unidadesCurriculares = data;
    })
  }
}
