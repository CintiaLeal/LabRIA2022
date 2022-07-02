import { Component, OnInit } from '@angular/core';
import * as e from 'express';
import { UnidadesCurriculares } from 'src/app/modelos/unidadesCurriculares';
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
      let aux: any = [];
      let auxA: any[] = JSON.parse(JSON.stringify(data))

      auxA.forEach((element, index) => {
        aux[index] = element
        // let val: string[] = Object.values(aux[index].materia);
        let keys: string[] = Object.keys(aux[index].materia);
        let conj: string[] = [];

        for (let i = 0; i < keys.length; i++) {
          conj.push(keys[i])
          conj.push(aux[index].materia[keys[i]])
        };
        aux[index].materia = conj
        if (aux[index].previas) {
          aux[index].previas.forEach((e: any) => {
            e.previa = e.previa.nombre
          })
          // console.log(aux[index].previas.unidadCurricular)
          // aux[index].previas.unidadCurricular = aux[index].previas.unidadCurricular.nombre
        }
      });

      console.log(aux)
      this.unidadesCurriculares = aux;
    })
  }
}
