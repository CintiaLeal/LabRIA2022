import { Component, OnInit } from '@angular/core';
import { NoticiasService } from 'src/app/servicios/noticias.service';
import { Noticia } from '../../modelos/noticia';


@Component({
  selector: 'app-vernoticias',
  templateUrl: './vernoticias.component.html',
  styleUrls: ['./vernoticias.component.css']
})
export class VernoticiasComponent implements OnInit {

  public noticias:Noticia[] =[];
  constructor(private service:NoticiasService) { }

  ngOnInit(): void {
    this.service.getNoticias().subscribe({
      next: value => this.noticias = value,
      error: err => { alert('Error al cargar las noticias: ' + err) }
    });
  }

}
