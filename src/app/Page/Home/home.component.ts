
import { Component, OnInit } from '@angular/core';
import { Noticia } from 'src/app/modelos/noticia';
import { ApiService } from 'src/app/servicios/login.service';
import { NoticiasService } from 'src/app/servicios/noticias.service';

@Component({
  selector: 'app-login',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],

})

export class HomeComponent implements OnInit {

  private offset: number;
  private limit: number;
  public page: number;
  public noticias: Noticia[];
  public cantidadPag: number = 1;

  constructor(private api: NoticiasService) {
    this.limit = 0;
    this.page = 0;
    this.offset = 0;
    this.noticias = [];
  }

  ngOnInit(): void {
    window.screen.width > 500 ? this.offset = 3 : this.offset = 2;
    this.getNoticias(this.limit, this.offset);
    this.page = 1;
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
      this.cantidadPag = Math.trunc(data.size / this.offset) > 0 ? Math.trunc(data.size / this.offset) : 1;
    });
  }

}
